import assert from "node:assert/strict";
import test from "node:test";
import { once } from "node:events";
import { createApprovalServer } from "../src/server.mjs";

test("approval inbox exposes editable per-channel review", async (context) => {
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
  assert.match(page, /Approve channel/);
  assert.match(
    page,
    /Ничего не публикуется без ручного подтверждения каждого канала/,
  );

  const editedResponse = await fetch(
    `${baseUrl}/api/items/api-reel/channels/instagram/draft`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ caption: "Edited Instagram caption" }),
    },
  );
  const edited = await editedResponse.json();
  assert.equal(edited.channelDrafts.instagram.caption, "Edited Instagram caption");

  for (const channel of ["instagram", "facebook", "telegram"]) {
    const reviewed = await fetch(
      `${baseUrl}/api/items/api-reel/channels/${channel}/approve`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ note: `${channel} checked` }),
      },
    );
    assert.equal(reviewed.status, 200);
  }
  const approved = await (await fetch(`${baseUrl}/api/items`)).json();
  assert.equal(approved[0].state, "approved");
});
