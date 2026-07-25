import assert from "node:assert/strict";
import test from "node:test";
import { createApp, createMultiAccountApp } from "../src/app.mjs";
import { transition, createContentItem } from "../src/domain/content.mjs";

test("creates weekly and monthly fixture plans", async () => {
  const { agent } = createApp();
  const weekly = await agent.createContentPlan({
    cadence: "weekly",
    startDate: "2026-07-26",
  });
  const monthly = await agent.createContentPlan({
    cadence: "monthly",
    startDate: "2026-08-01",
  });

  assert.equal(weekly.length, 4);
  assert.equal(monthly.length, 12);
  assert.deepEqual(
    new Set(weekly.map((item) => item.status)),
    new Set(["planned"]),
  );
});

test("autonomous pipeline stops at mandatory human approval", async () => {
  const { agent } = createApp();
  agent.createIdea({
    id: "reel-1",
    format: "reel",
    topic: "Hebrew and Israeli slang",
    objective: "Teach a useful phrase",
  });

  const result = await agent.runToApproval("reel-1");

  assert.equal(result.state, "approval_pending");
  assert.equal(result.schedule, null);
  assert.deepEqual(Object.keys(result.channelDrafts), [
    "instagram",
    "facebook",
    "telegram",
  ]);
  assert.equal(result.audit.at(-1).to, "approval_pending");
});

test("agent cannot approve its own content", () => {
  let item = createContentItem({
    id: "reel-2",
    format: "reel",
    topic: "new immigrant memes",
    objective: "Build belonging",
  });
  item.state = "approval_pending";

  assert.throws(
    () => transition(item, "approved", "agent"),
    /Only a human can approve/,
  );
});

test("human approval unlocks the mock publishing queue", async () => {
  const { agent } = createApp();
  agent.createIdea({
    id: "carousel-1",
    format: "carousel",
    topic: "new immigrant memes",
    objective: "Create a shareable community moment",
  });
  await agent.runToApproval("carousel-1");
  const approved = agent.approve("carousel-1", "Brand and facts checked");
  const scheduled = await agent.schedule(
    approved.id,
    "2026-07-27T17:00:00+03:00",
  );

  assert.equal(scheduled.state, "scheduled");
  assert.equal(scheduled.schedule.provider, "mock");
  assert.equal(scheduled.schedule.externalCallMade, false);
  assert.deepEqual(
    scheduled.schedule.channels.map(({ channel }) => channel),
    ["instagram", "facebook", "telegram"],
  );
});

test("all selected channels require human approval", async () => {
  const { agent } = createApp();
  agent.createIdea({
    id: "channel-review",
    format: "carousel",
    topic: "community events",
    objective: "Invite people",
  });
  await agent.runToApproval("channel-review");

  const instagram = agent.reviewChannel(
    "channel-review",
    "instagram",
    "approved",
    "Instagram checked",
  );
  assert.equal(instagram.state, "approval_pending");
  assert.equal(instagram.approval.channels.instagram.decision, "approved");

  agent.reviewChannel("channel-review", "facebook", "approved", "Facebook checked");
  const telegram = agent.reviewChannel(
    "channel-review",
    "telegram",
    "approved",
    "Telegram checked",
  );
  assert.equal(telegram.state, "approved");
});

test("editing a channel draft resets its review", async () => {
  const { agent } = createApp();
  agent.createIdea({
    id: "edit-review",
    format: "reel",
    topic: "Hebrew and Israeli slang",
    objective: "Teach a phrase",
  });
  await agent.runToApproval("edit-review");
  agent.reviewChannel("edit-review", "instagram", "approved", "Looks good");
  const edited = agent.updateChannelDraft("edit-review", "instagram", {
    caption: "Новая версия подписи ADAMA",
  });

  assert.equal(edited.channelDrafts.instagram.caption, "Новая версия подписи ADAMA");
  assert.equal(edited.approval.channels.instagram.decision, "pending");
});

test("requested revision can regenerate back to approval", async () => {
  const { agent } = createApp();
  agent.createIdea({
    id: "revision-loop",
    format: "reel",
    topic: "new immigrant memes",
    objective: "Build belonging",
  });
  await agent.runToApproval("revision-loop");
  const returned = agent.reviewChannel(
    "revision-loop",
    "telegram",
    "revision_requested",
    "Shorten the opening",
  );
  assert.equal(returned.state, "revision_needed");

  const regenerated = await agent.runToApproval("revision-loop");
  assert.equal(regenerated.state, "approval_pending");
  assert.equal(regenerated.revisionCount, 1);
});

test("rejects unsupported social channels", () => {
  const { agent } = createApp();
  assert.throws(() => agent.createIdea({
    id: "bad-channel",
    format: "reel",
    topic: "community",
    objective: "test",
    channels: ["myspace"],
  }), /Unsupported social channel/);
});

test("publisher rejects content that was not approved", async () => {
  const { agent } = createApp();
  agent.createIdea({
    id: "story-1",
    format: "story",
    topic: "community events",
    objective: "Invite people",
  });

  await assert.rejects(
    () => agent.schedule("story-1", "2026-07-27T17:00:00+03:00"),
    /approved content only/,
  );
});

test("ADAMA and CBA Young keep brand context and queues isolated", async () => {
  const { accounts } = createMultiAccountApp();
  const adama = accounts.adama;
  const cba = accounts["cba-young"];
  const idea = {
    id: "same-local-id",
    format: "carousel",
    topic: "community events",
    objective: "Invite people",
  };

  adama.agent.createIdea(idea);
  cba.agent.createIdea(idea);
  const adamaDraft = await adama.agent.runToApproval(idea.id);
  const cbaDraft = await cba.agent.runToApproval(idea.id);

  assert.equal(adamaDraft.accountId, "adama");
  assert.equal(adamaDraft.brandId, "adama");
  assert.equal(cbaDraft.accountId, "cba-young");
  assert.equal(cbaDraft.brandId, "cba-young");
  assert.match(adamaDraft.draft.cta, /ADAMA/);
  assert.doesNotMatch(adamaDraft.draft.cta, /CBA Young/);
  assert.match(cbaDraft.draft.cta, /CBA Young/);
  assert.doesNotMatch(cbaDraft.draft.cta, /ADAMA/);
  assert.equal(adama.agent.approvalInbox().length, 1);
  assert.equal(cba.agent.approvalInbox().length, 1);
  assert.equal(adama.store.list().length, 1);
  assert.equal(cba.store.list().length, 1);

  assert.throws(
    () => adama.agent.createIdea({ ...idea, id: "wrong-account", accountId: "cba-young" }),
    /cannot create content/,
  );
});
