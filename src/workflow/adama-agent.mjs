import {
  createContentItem,
  transition,
} from "../domain/content.mjs";
import { ADAMA_BRAND_PROFILE } from "../brand/adama-profile.mjs";

export class AdamaContentAgent {
  constructor({ store, analyzer, planner, researcher, generator, critic, publisher }) {
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
    return this.planner.plan({ cadence, startDate });
  }

  createIdea(input) {
    const item = createContentItem(input);
    return this.store.save(item);
  }

  async runToApproval(id) {
    let item = this.#require(id);
    if (item.state !== "idea") {
      throw new Error("Autonomous run must start from an idea");
    }

    item.research = await this.researcher.research(item.topic);
    item = transition(item, "researched");

    for (let attempt = 0; attempt < 2; attempt += 1) {
      item.draft = await this.generator.draft(
        item,
        ADAMA_BRAND_PROFILE,
        item.research,
      );
      item.channelDrafts = await this.generator.adapt(item.draft, item);
      item = transition(item, "drafted");
      item.critique = await this.critic.critique(item, ADAMA_BRAND_PROFILE);
      item = transition(item, "critiqued");

      if (item.critique.verdict === "approve_for_human_review") {
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
    item.approval = { decision: "revision_requested", note, actor };
    item = transition(item, "revision_needed", actor);
    return this.store.save(item);
  }

  approve(id, note, actor = "human") {
    let item = this.#require(id);
    item.approval = {
      decision: "approved",
      note,
      actor,
      decidedAt: new Date().toISOString(),
    };
    item = transition(item, "approved", actor);
    return this.store.save(item);
  }

  async schedule(id, date) {
    let item = this.#require(id);
    const schedule = await this.publisher.schedule(item, date, item.channels);
    item.schedule = schedule;
    item = transition(item, "scheduled");
    return this.store.save(item);
  }

  approvalInbox() {
    return this.store.list().filter((item) => item.state === "approval_pending");
  }

  #require(id) {
    const item = this.store.get(id);
    if (!item) throw new Error(`Unknown content item: ${id}`);
    return item;
  }
}
