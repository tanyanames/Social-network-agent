import { MemoryStore } from "./store/memory-store.mjs";
import {
  MockAccountAnalyzer,
  MockContentPlanner,
  MockContentGenerator,
  MockCritic,
  MockPublisher,
  MockTrendResearcher,
} from "./providers/mock-providers.mjs";
import { AdamaContentAgent } from "./workflow/adama-agent.mjs";

export function createApp() {
  const store = new MemoryStore();
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
