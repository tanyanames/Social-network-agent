import assert from "node:assert/strict";
import test from "node:test";
import { mkdtempSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { JsonFileStore } from "../src/store/json-file-store.mjs";

test("JSON store survives process-style reinitialization", (context) => {
  const directory = mkdtempSync(join(tmpdir(), "adama-store-"));
  context.after(() => rmSync(directory, { recursive: true, force: true }));
  const path = join(directory, "items.json");
  const first = new JsonFileStore(path);
  first.save({ id: "persistent", state: "approval_pending" });

  const second = new JsonFileStore(path);
  assert.equal(second.get("persistent").state, "approval_pending");
});
