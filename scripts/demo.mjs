import { readFile } from "node:fs/promises";
import { createApp } from "../src/app.mjs";

const { agent } = createApp();
const posts = JSON.parse(
  await readFile(new URL("../fixtures/account-posts.json", import.meta.url)),
);

console.log("Account analysis");
console.log(await agent.analyzeAccount(posts));

console.log("\nWeekly content plan");
console.log(await agent.createContentPlan({
  cadence: "weekly",
  startDate: "2026-07-26",
}));

agent.createIdea({
  id: "demo-reel",
  format: "reel",
  topic: "Hebrew and Israeli slang",
  objective: "Help new immigrants feel confident using everyday Hebrew",
});
const result = await agent.runToApproval("demo-reel");
console.log("\nAutonomous run stopped safely");
console.log({
  id: result.id,
  state: result.state,
  externalCallMade: result.schedule?.externalCallMade ?? false,
  hook: result.draft.hook,
});
