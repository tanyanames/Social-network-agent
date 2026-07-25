import {
  createContentItem,
  transition,
} from "../domain/content.mjs";
import { getSocialAccount } from "../brand/accounts.mjs";

export class SocialContentAgent {
  constructor({
    account,
    store,
    analyzer,
    planner,
    researcher,
    generator,
    critic,
    publisher,
  }) {
    this.account = account;
    this.brandProfile = account.brand;
    this.store = store;
    this.analyzer = analyzer;
    this.planner = planner;
    this.researcher = researcher;
    this.generator = generator;
    this.critic = critic;
    this.publisher = publisher;
  }

  async analyzeAccount(posts) {
    return this.analyzer.analyze(posts);
  }

  async createContentPlan({ cadence, startDate }) {
    if (!["weekly", "monthly"].includes(cadence)) {
      throw new Error("Cadence must be weekly or monthly");
    }
    const plan = await this.planner.plan({ cadence, startDate });
    return plan.map((item) => ({
      ...item,
      accountId: this.account.id,
      brandId: this.brandProfile.id,
    }));
  }

  createIdea(input) {
    if (input.accountId && input.accountId !== this.account.id) {
      throw new Error(`Agent for ${this.account.id} cannot create content for ${input.accountId}`);
    }
    const item = createContentItem({
      ...input,
      accountId: this.account.id,
      brandId: this.brandProfile.id,
    });
    return this.store.save(item);
  }

  async runToApproval(id) {
    let item = this.#require(id);
    if (!["idea", "revision_needed"].includes(item.state)) {
      throw new Error("Autonomous run must start from an idea or requested revision");
    }

    if (item.state === "idea") {
      item.research = await this.researcher.research(item.topic);
      item = transition(item, "researched");
    }

    for (let attempt = 0; attempt < 2; attempt += 1) {
      item.draft = await this.generator.draft(
        item,
        this.brandProfile,
        item.research,
      );
      item.channelDrafts = await this.generator.adapt(item.draft, item);
      item = transition(item, "drafted");
      item.critique = await this.critic.critique(item, this.brandProfile);
      item = transition(item, "critiqued");

      if (item.critique.verdict === "approve_for_human_review") {
        item.approval = {
          decision: "pending",
          channels: Object.fromEntries(item.channels.map((channel) => [
            channel,
            { decision: "pending", note: "", actor: null, decidedAt: null },
          ])),
        };
        item = transition(item, "approval_pending");
        return this.store.save(item);
      }

      item = transition(item, "revision_needed");
      item.revisionCount += 1;
    }

    throw new Error("Draft did not meet review criteria after two attempts");
  }

  requestRevision(id, note, actor = "human") {
    let item = this.#require(id);
    if (item.state !== "approval_pending") {
      throw new Error("Only approval-pending content can be returned");
    }
    item.approval = {
      ...item.approval,
      decision: "revision_requested",
      note,
      actor,
    };
    item.revisionCount += 1;
    item = transition(item, "revision_needed", actor);
    return this.store.save(item);
  }

  approve(id, note, actor = "human") {
    let item = this.#require(id);
    if (item.state !== "approval_pending") {
      throw new Error("Only approval-pending content can be approved");
    }
    const decidedAt = new Date().toISOString();
    item.approval = {
      decision: "approved",
      note,
      actor,
      decidedAt,
      channels: Object.fromEntries(item.channels.map((channel) => [
        channel,
        { decision: "approved", note, actor, decidedAt },
      ])),
    };
    item = transition(item, "approved", actor);
    return this.store.save(item);
  }

  updateChannelDraft(id, channel, changes, actor = "human") {
    const item = this.#require(id);
    if (item.state !== "approval_pending") {
      throw new Error("Only approval-pending drafts can be edited");
    }
    if (!item.channels.includes(channel)) {
      throw new Error(`Channel is not selected for this item: ${channel}`);
    }
    const allowed = ["caption", "cta", "designBrief"];
    const update = Object.fromEntries(
      allowed
        .filter((key) => typeof changes[key] === "string")
        .map((key) => [key, changes[key].trim()]),
    );
    item.channelDrafts[channel] = { ...item.channelDrafts[channel], ...update };
    item.approval.decision = "pending";
    item.approval.channels[channel] = {
      decision: "pending",
      note: "Draft changed after review",
      actor,
      decidedAt: null,
    };
    item.updatedAt = new Date().toISOString();
    item.audit.push({
      type: "channel_draft_edited",
      channel,
      actor,
      at: item.updatedAt,
    });
    return this.store.save(item);
  }

  reviewChannel(id, channel, decision, note = "", actor = "human") {
    let item = this.#require(id);
    if (item.state !== "approval_pending") {
      throw new Error("Only approval-pending content can be reviewed");
    }
    if (actor !== "human") {
      throw new Error("Only a human can review a channel");
    }
    if (!item.channels.includes(channel)) {
      throw new Error(`Channel is not selected for this item: ${channel}`);
    }
    if (!["approved", "revision_requested"].includes(decision)) {
      throw new Error(`Unsupported review decision: ${decision}`);
    }

    const decidedAt = new Date().toISOString();
    item.approval.channels[channel] = { decision, note, actor, decidedAt };
    item.audit.push({
      type: "channel_reviewed",
      channel,
      decision,
      actor,
      at: decidedAt,
    });

    if (decision === "revision_requested") {
      item.approval.decision = "revision_requested";
      item.revisionCount += 1;
      item = transition(item, "revision_needed", actor);
      return this.store.save(item);
    }

    const allApproved = item.channels.every(
      (name) => item.approval.channels[name].decision === "approved",
    );
    if (allApproved) {
      item.approval.decision = "approved";
      item.approval.decidedAt = decidedAt;
      item = transition(item, "approved", actor);
    }
    return this.store.save(item);
  }

  async schedule(id, date) {
    let item = this.#require(id);
    const schedule = await this.publisher.schedule(
      item,
      date,
      item.channels,
      this.account,
    );
    item.schedule = schedule;
    item = transition(item, "scheduled");
    return this.store.save(item);
  }

  approvalInbox() {
    return this.store.list().filter(
      (item) => (item.accountId ?? "adama") === this.account.id
        && item.state === "approval_pending",
    );
  }

  #require(id) {
    const item = this.store.get(id);
    if (!item) throw new Error(`Unknown content item: ${id}`);
    const storedAccountId = item.accountId ?? "adama";
    if (storedAccountId !== this.account.id) {
      throw new Error(`Content item belongs to another account: ${storedAccountId}`);
    }
    return item;
  }
}

export class AdamaContentAgent extends SocialContentAgent {
  constructor(options) {
    super({ ...options, account: getSocialAccount("adama") });
  }
}

export class CbaYoungContentAgent extends SocialContentAgent {
  constructor(options) {
    super({ ...options, account: getSocialAccount("cba-young") });
  }
}
