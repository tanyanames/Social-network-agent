import { MemoryStore } from "./store/memory-store.mjs";
import {
  MockAccountAnalyzer,
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
    researcher: new MockTrendResearcher(),
    generator: new MockContentGenerator(),
    critic: new MockCritic(),
    publisher: new MockPublisher(),
  });
  return { agent, store };
}
