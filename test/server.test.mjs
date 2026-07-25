import assert from "node:assert/strict";
import test from "node:test";
import { once } from "node:events";
import { createApprovalServer } from "../src/server.mjs";

test("approval inbox exposes a safe end-to-end mock flow", async (context) => {
  const server = createApprovalServer();
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  context.after(() => server.close());

  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;
  const created = await fetch(`${baseUrl}/api/run`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: "api-reel",
      format: "reel",
      topic: "Hebrew and Israeli slang",
      objective: "Teach a useful phrase",
    }),
  });
  const item = await created.json();
  const page = await (await fetch(baseUrl)).text();

  assert.equal(created.status, 201);
  assert.equal(item.state, "approval_pending");
  assert.match(page, /Approve/);
  assert.match(page, /Ничего не публикуется без ручного подтверждения/);
});
