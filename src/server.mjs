import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { createApp } from "./app.mjs";

function send(response, status, data, contentType = "application/json") {
  response.writeHead(status, { "content-type": `${contentType}; charset=utf-8` });
  response.end(contentType === "application/json" ? JSON.stringify(data) : data);
}

async function body(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {};
}

function page(store) {
  const items = store.list();
  const rows = items.map((item) => `
    <article>
      <small>${item.format} · ${item.state}</small>
      <h2>${item.topic}</h2>
      <p>${item.draft?.hook ?? "Not drafted"}</p>
      ${item.state === "approval_pending" ? `
        <button onclick="decide('${item.id}','approve')">Approve</button>
        <button class="secondary" onclick="decide('${item.id}','revise')">Request revision</button>
      ` : ""}
    </article>`).join("");
  return `<!doctype html>
  <html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
  <title>ADAMA Approval Inbox</title>
  <style>
  :root{font-family:Arial,sans-serif;color:#111;background:#f4f1e8}
  body{max-width:900px;margin:0 auto;padding:48px 20px}h1{font-size:clamp(42px,8vw,92px);line-height:.9;margin:0 0 32px}
  .lime{color:#76e600}article{background:#fff;padding:24px;margin:16px 0;border:3px solid #111;box-shadow:8px 8px 0 #76e600}
  button{background:#111;color:#fff;border:0;padding:12px 18px;font-weight:700;margin-right:8px}.secondary{background:#76e600;color:#111}
  </style></head><body><h1>ADAMA<br><span class="lime">APPROVAL</span></h1>
  <p>Ничего не публикуется без ручного подтверждения.</p>${rows || "<p>Inbox пуст.</p>"}
  <script>
  async function decide(id, action){await fetch('/api/items/'+id+'/'+action,{method:'POST'});location.reload()}
  </script></body></html>`;
}

export function createApprovalServer(app = createApp()) {
  const { agent, store } = app;
  return createServer(async (request, response) => {
    try {
      if (request.method === "GET" && request.url === "/") {
        return send(response, 200, page(store), "text/html");
      }
      if (request.method === "GET" && request.url === "/api/items") {
        return send(response, 200, store.list());
      }
      if (request.method === "POST" && request.url === "/api/run") {
        const input = await body(request);
        agent.createIdea(input);
        return send(response, 201, await agent.runToApproval(input.id));
      }
      const match = request.url?.match(/^\/api\/items\/([^/]+)\/(approve|revise)$/);
      if (request.method === "POST" && match) {
        const [, id, action] = match;
        const result = action === "approve"
          ? agent.approve(id, "Approved in ADAMA inbox")
          : agent.requestRevision(id, "Please revise in ADAMA inbox");
        return send(response, 200, result);
      }
      return send(response, 404, { error: "Not found" });
    } catch (error) {
      return send(response, 400, { error: error.message });
    }
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const port = Number(process.env.PORT ?? 3000);
  const server = createApprovalServer();
  server.listen(port, () => {
    console.log(`ADAMA approval inbox: http://localhost:${port}`);
  });
}
