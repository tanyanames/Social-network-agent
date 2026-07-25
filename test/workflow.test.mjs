import assert from "node:assert/strict";
import test from "node:test";
import { createApp } from "../src/app.mjs";
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
