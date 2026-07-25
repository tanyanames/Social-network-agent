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
import { getSocialAccount, SOCIAL_ACCOUNTS } from "./brand/accounts.mjs";
import { SocialContentAgent } from "./workflow/adama-agent.mjs";

export function createApp({
  accountId = "adama",
  store = new MemoryStore(),
} = {}) {
  const account = getSocialAccount(accountId);
  const agent = new SocialContentAgent({
    account,
    store,
    analyzer: new MockAccountAnalyzer(),
    planner: new MockContentPlanner(),
    researcher: new MockTrendResearcher(),
    generator: new MockContentGenerator(),
    critic: new MockCritic(),
    publisher: new MockPublisher(),
  });
  return { account, agent, store };
}

export function createOperationalApp({
  accountId = "adama",
  statePath,
} = {}) {
  const resolvedStatePath = statePath ?? (
    accountId === "cba-young"
      ? (process.env.CBA_YOUNG_STATE_PATH
        ?? "Context/runtime-state/cba-young-items.json")
      : (process.env.ADAMA_STATE_PATH ?? "Context/runtime-state/items.json")
  );
  return createApp({
    accountId,
    store: new JsonFileStore(resolvedStatePath),
  });
}

export function createMultiAccountApp({ stores = {} } = {}) {
  const accounts = Object.fromEntries(
    Object.keys(SOCIAL_ACCOUNTS).map((accountId) => [
      accountId,
      createApp({ accountId, store: stores[accountId] ?? new MemoryStore() }),
    ]),
  );
  return { accounts };
}

export function createMultiAccountOperationalApp({
  statePaths = {
    adama: process.env.ADAMA_STATE_PATH ?? "Context/runtime-state/items.json",
    "cba-young": process.env.CBA_YOUNG_STATE_PATH
      ?? "Context/runtime-state/cba-young-items.json",
  },
} = {}) {
  return createMultiAccountApp({
    stores: Object.fromEntries(
      Object.entries(statePaths).map(([accountId, path]) => [
        accountId,
        new JsonFileStore(path),
      ]),
    ),
  });
}
