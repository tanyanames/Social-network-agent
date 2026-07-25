import { MemoryStore } from "./store/memory-store.mjs";
import { JsonFileStore } from "./store/json-file-store.mjs";
import {
  MockAccountAnalyzer,
  MockContentPlanner,
  MockContentGenerator,
  MockCritic,
  MockPublisher,
  MockTrendResearcher,
} from "./providers/mock-providers.mjs";
import { AdamaContentAgent } from "./workflow/adama-agent.mjs";

export function createApp({ store = new MemoryStore() } = {}) {
  const agent = new AdamaContentAgent({
    store,
    analyzer: new MockAccountAnalyzer(),
    planner: new MockContentPlanner(),
    researcher: new MockTrendResearcher(),
    generator: new MockContentGenerator(),
    critic: new MockCritic(),
    publisher: new MockPublisher(),
  });
  return { agent, store };
}

export function createOperationalApp({
  statePath = process.env.ADAMA_STATE_PATH ?? "Context/runtime-state/items.json",
} = {}) {
  return createApp({ store: new JsonFileStore(statePath) });
}
