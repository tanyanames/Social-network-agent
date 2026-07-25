import { createOperationalApp } from "../src/app.mjs";

const accountIds = new Set(["adama", "cba-young"]);
const first = process.argv[2];
const accountId = accountIds.has(first) ? first : "adama";
const cadence = accountIds.has(first) ? (process.argv[3] ?? "weekly") : (first ?? "weekly");
const startDate = accountIds.has(first)
  ? (process.argv[4] ?? new Date().toISOString().slice(0, 10))
  : (process.argv[3] ?? new Date().toISOString().slice(0, 10));
const { agent } = createOperationalApp({
  accountId,
  statePath: accountId === "adama"
    ? (process.env.ADAMA_STATE_PATH ?? "Context/runtime-state/items.json")
    : (process.env.CBA_YOUNG_STATE_PATH ?? "Context/runtime-state/cba-young-items.json"),
});
const plan = await agent.createContentPlan({ cadence, startDate });
const created = [];

for (const entry of plan) {
  const id = `${entry.id}-${entry.date}`;
  try {
    agent.createIdea({ ...entry, id });
    created.push(await agent.runToApproval(id));
  } catch (error) {
    if (!error.message.includes("Autonomous run must start")) throw error;
  }
}

console.log(JSON.stringify({
  mode: "shadow",
  accountId,
  cadence,
  startDate,
  generated: created.length,
  approvalPending: agent.approvalInbox().length,
  externalCallsMade: false,
}, null, 2));
