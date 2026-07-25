import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import {
  createApp,
  createMultiAccountOperationalApp,
} from "./app.mjs";

function send(response, status, data, contentType = "application/json") {
  response.writeHead(status, { "content-type": `${contentType}; charset=utf-8` });
  response.end(contentType === "application/json" ? JSON.stringify(data) : data);
}

async function body(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {};
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function channelPanel(item, channel) {
  const draft = item.channelDrafts?.[channel] ?? {};
  const review = item.approval?.channels?.[channel] ?? { decision: "pending" };
  const key = `${item.id}-${channel}`;
  const editable = item.state === "approval_pending";
  return `
    <section class="channel">
      <div class="channel-head">
        <h3>${escapeHtml(channel)}</h3>
        <span class="status ${escapeHtml(review.decision)}">${escapeHtml(review.decision)}</span>
      </div>
      <label>Caption
        <textarea id="${escapeHtml(key)}-caption" ${editable ? "" : "disabled"}>${escapeHtml(draft.caption)}</textarea>
      </label>
      <label>CTA
        <textarea class="short" id="${escapeHtml(key)}-cta" ${editable ? "" : "disabled"}>${escapeHtml(draft.cta)}</textarea>
      </label>
      <label>Design brief
        <textarea class="short" id="${escapeHtml(key)}-design" ${editable ? "" : "disabled"}>${escapeHtml(draft.designBrief)}</textarea>
      </label>
      <p class="asset"><strong>Asset plan:</strong> ${escapeHtml(draft.assetPlan)}</p>
      ${editable ? `
        <div class="actions">
          <button onclick="saveDraft('${escapeHtml(item.id)}','${escapeHtml(channel)}')">Save edits</button>
          <button class="approve" onclick="review('${escapeHtml(item.id)}','${escapeHtml(channel)}','approve')">Approve channel</button>
          <button class="revise" onclick="review('${escapeHtml(item.id)}','${escapeHtml(channel)}','revise')">Request revision</button>
        </div>
      ` : ""}
    </section>`;
}

function itemCard(item) {
  return `
    <article>
      <div class="meta">
        <span>${escapeHtml(item.format)}</span>
        <span>${escapeHtml(item.state)}</span>
        <span>${item.revisionCount} revisions</span>
      </div>
      <h2>${escapeHtml(item.topic)}</h2>
      <p class="objective">${escapeHtml(item.objective)}</p>
      <details>
        <summary>Master draft and critique</summary>
        <h3>${escapeHtml(item.draft?.hook ?? "Not drafted")}</h3>
        <p>${escapeHtml(item.draft?.caption)}</p>
        <p><strong>Critique:</strong> brand ${item.critique?.brandFit ?? "—"} · virality ${item.critique?.viralityPotential ?? "—"} · safety ${item.critique?.culturalSafety ?? "—"}</p>
      </details>
      <div class="channels">${item.channels.map((channel) => channelPanel(item, channel)).join("")}</div>
      ${item.state === "revision_needed" ? `
        <button class="regenerate" onclick="regenerate('${escapeHtml(item.id)}')">Regenerate after feedback</button>
      ` : ""}
      ${item.state === "approved" ? `
        <div class="schedule">
          <input id="${escapeHtml(item.id)}-date" type="datetime-local">
          <button onclick="scheduleItem('${escapeHtml(item.id)}')">Add to shadow queue</button>
        </div>
      ` : ""}
    </article>`;
}

function page(store, account, accountIds) {
  const items = store.list();
  const pending = items.filter((item) => item.state === "approval_pending").length;
  const accent = account.id === "cba-young" ? "#3A39FF" : "#76e600";
  const tabs = accountIds.map((accountId) => `
    <a class="${accountId === account.id ? "active" : ""}" href="/?account=${encodeURIComponent(accountId)}">${escapeHtml(accountId)}</a>
  `).join("");
  return `<!doctype html>
  <html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
  <title>${escapeHtml(account.displayName)} Approval Inbox</title>
  <style>
  :root{font-family:Inter,Arial,sans-serif;color:#111;background:#f4f1e8;--accent:${accent}}
  *{box-sizing:border-box}body{max-width:1280px;margin:0 auto;padding:36px 20px 80px}
  header{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:28px}
  h1{font-size:clamp(42px,7vw,88px);line-height:.86;margin:0}.lime{color:#76e600}
  .counter{background:#111;color:#fff;padding:14px 18px;font-weight:800}
  nav{display:flex;gap:8px;margin-bottom:28px}nav a{border:2px solid #111;color:#111;padding:8px 12px;text-decoration:none;font-weight:800;text-transform:uppercase}nav a.active{background:var(--accent)}
  article{background:#fff;padding:26px;margin:22px 0;border:3px solid #111;box-shadow:9px 9px 0 var(--accent)}
  .meta{display:flex;gap:8px;flex-wrap:wrap}.meta span,.status{border:1px solid #111;padding:5px 9px;text-transform:uppercase;font-size:12px;font-weight:800}
  h2{font-size:clamp(28px,4vw,48px);margin:16px 0 6px}.objective{color:#555}
  details{margin:18px 0;padding:14px;background:#f4f1e8}summary{font-weight:800;cursor:pointer}
  .channels{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:16px}
  .channel{border:2px solid #111;padding:16px;background:#fff}.channel-head{display:flex;justify-content:space-between;align-items:center}
  .channel h3{text-transform:capitalize}.status.approved{background:var(--accent)}.status.revision_requested{background:#ff7657}.status.pending{background:#eee}
  label{display:block;font-size:12px;text-transform:uppercase;font-weight:800;margin:12px 0}
  textarea{display:block;width:100%;min-height:170px;margin-top:6px;padding:10px;border:1px solid #777;resize:vertical;font:14px/1.45 inherit}
  textarea.short{min-height:82px}.asset{min-height:50px;font-size:13px}.actions{display:flex;gap:7px;flex-wrap:wrap}
  button{background:#111;color:#fff;border:0;padding:10px 13px;font-weight:800;cursor:pointer}
  button.approve{background:var(--accent);color:#111}button.revise{background:#ff7657;color:#111}
  button.regenerate{margin-top:18px;background:var(--accent);color:#111}.schedule{display:flex;gap:10px;margin-top:18px}
  input{padding:10px;border:2px solid #111}
  #notice{position:fixed;right:20px;bottom:20px;max-width:360px;padding:14px 18px;background:#111;color:#fff;display:none}
  @media(max-width:600px){header{align-items:start;flex-direction:column}.channels{grid-template-columns:1fr}}
  </style></head><body>
  <nav>${tabs}</nav>
  <header><h1>${escapeHtml(account.displayName)}<br><span style="color:var(--accent)">APPROVAL</span></h1><div class="counter">${pending} awaiting review</div></header>
  <p>Ничего не публикуется без ручного подтверждения каждого канала.</p>
  ${items.map(itemCard).join("") || "<p>Inbox пуст.</p>"}
  <div id="notice"></div>
  <script>
  const apiBase = '/api/accounts/${encodeURIComponent(account.id)}';
  const notice = document.getElementById('notice');
  async function call(url, options = {}) {
    const response = await fetch(url, options);
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Request failed');
    return result;
  }
  function show(message) {
    notice.textContent = message; notice.style.display = 'block';
    setTimeout(() => notice.style.display = 'none', 2500);
  }
  async function saveDraft(id, channel) {
    const key = id + '-' + channel;
    await call(apiBase + '/items/' + encodeURIComponent(id) + '/channels/' + channel + '/draft', {
      method:'PATCH', headers:{'content-type':'application/json'},
      body:JSON.stringify({
        caption:document.getElementById(key+'-caption').value,
        cta:document.getElementById(key+'-cta').value,
        designBrief:document.getElementById(key+'-design').value
      })
    });
    show('Saved ' + channel);
  }
  async function review(id, channel, action) {
    const note = prompt(action === 'approve' ? 'Approval note (optional)' : 'What should be revised?') ?? '';
    await call(apiBase + '/items/' + encodeURIComponent(id) + '/channels/' + channel + '/' + action, {
      method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({note})
    });
    location.reload();
  }
  async function regenerate(id) {
    await call(apiBase + '/items/' + encodeURIComponent(id) + '/regenerate', {method:'POST'});
    location.reload();
  }
  async function scheduleItem(id) {
    const date = document.getElementById(id+'-date').value;
    if (!date) return show('Choose a date');
    await call(apiBase + '/items/' + encodeURIComponent(id) + '/schedule', {
      method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({date})
    });
    location.reload();
  }
  </script></body></html>`;
}

export function createApprovalServer(app = createApp()) {
  const accounts = app.accounts ?? { [app.account.id]: app };
  const accountIds = Object.keys(accounts);
  const defaultAccountId = accountIds.includes("adama") ? "adama" : accountIds[0];
  return createServer(async (request, response) => {
    try {
      const url = new URL(request.url, "http://localhost");
      let pathname = url.pathname;
      let accountId = url.searchParams.get("account") ?? defaultAccountId;
      const accountRoute = pathname.match(/^\/api\/accounts\/([^/]+)(\/.*)?$/);
      if (accountRoute) {
        accountId = decodeURIComponent(accountRoute[1]);
        pathname = `/api${accountRoute[2] || ""}`;
      }
      const selected = accounts[accountId];
      if (!selected) return send(response, 404, { error: `Unknown social account: ${accountId}` });
      const { account, agent, store } = selected;

      if (request.method === "GET" && pathname === "/" && !accountRoute) {
        return send(response, 200, page(store, account, accountIds), "text/html");
      }
      if (request.method === "GET" && pathname === "/api" && accountRoute) {
        return send(response, 200, store.list());
      }
      if (request.method === "GET" && pathname === "/api/accounts") {
        return send(response, 200, accountIds.map((id) => ({
          id,
          displayName: accounts[id].account.displayName,
        })));
      }
      if (request.method === "GET" && pathname === "/api/items") {
        return send(response, 200, store.list());
      }
      if (request.method === "POST" && pathname === "/api/run") {
        const input = await body(request);
        agent.createIdea(input);
        return send(response, 201, await agent.runToApproval(input.id));
      }
      if (request.method === "POST" && pathname === "/api/plan") {
        return send(response, 200, await agent.createContentPlan(await body(request)));
      }

      let match = pathname.match(/^\/api\/items\/([^/]+)\/regenerate$/);
      if (request.method === "POST" && match) {
        return send(response, 200, await agent.runToApproval(decodeURIComponent(match[1])));
      }
      match = pathname.match(/^\/api\/items\/([^/]+)\/schedule$/);
      if (request.method === "POST" && match) {
        const input = await body(request);
        return send(response, 200, await agent.schedule(decodeURIComponent(match[1]), input.date));
      }
      match = pathname.match(/^\/api\/items\/([^/]+)\/channels\/([^/]+)\/draft$/);
      if (request.method === "PATCH" && match) {
        return send(response, 200, agent.updateChannelDraft(
          decodeURIComponent(match[1]),
          decodeURIComponent(match[2]),
          await body(request),
        ));
      }
      match = pathname.match(/^\/api\/items\/([^/]+)\/channels\/([^/]+)\/(approve|revise)$/);
      if (request.method === "POST" && match) {
        const input = await body(request);
        return send(response, 200, agent.reviewChannel(
          decodeURIComponent(match[1]),
          decodeURIComponent(match[2]),
          match[3] === "approve" ? "approved" : "revision_requested",
          input.note,
        ));
      }
      match = pathname.match(/^\/api\/items\/([^/]+)\/(approve|revise)$/);
      if (request.method === "POST" && match) {
        const id = decodeURIComponent(match[1]);
        const input = await body(request);
        const result = match[2] === "approve"
          ? agent.approve(id, input.note ?? `Approved in ${account.displayName} inbox`)
          : agent.requestRevision(id, input.note ?? `Please revise in ${account.displayName} inbox`);
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
  const server = createApprovalServer(createMultiAccountOperationalApp());
  server.listen(port, () => {
    console.log(`Multi-account approval inbox: http://localhost:${port}`);
  });
}
