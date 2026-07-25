import { createOperationalApp } from "../src/app.mjs";

const cadence = process.argv[2] ?? "weekly";
const startDate = process.argv[3] ?? new Date().toISOString().slice(0, 10);
const { agent } = createOperationalApp();
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
  cadence,
  startDate,
  generated: created.length,
  approvalPending: agent.approvalInbox().length,
  externalCallsMade: false,
}, null, 2));
