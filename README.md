# ADAMA + CBA Young Social Media Agent

Mock-first autonomous content pipeline for two separate communities and social
accounts: ADAMA and CBA Young. The current shadow-mode MVP
performs account analysis, planning, drafting, Instagram/Facebook/Telegram
adaptation, critique, revision, persistent approval, and queue preparation.
External publishing remains deliberately disabled.

The MIT-licensed LangChain reference implementation is preserved under
`vendor/langchain-social-media-agent/`. ADAMA-owned code lives under `src/`.

## Requirements

- Node.js 20 or newer
- No API keys for mock mode

## Run

```powershell
npm test
npm run demo
npm run batch -- adama weekly 2026-07-26
npm run batch -- cba-young weekly 2026-07-26
npm run dev
```

Open `http://localhost:3000` and switch between the two isolated approval
inboxes. ADAMA persists to `Context/runtime-state/items.json`; CBA Young
persists to `Context/runtime-state/cba-young-items.json`.

The shadow-mode protocol is documented in `docs/shadow-mode.md`.
Operational steps are in `docs/operator-runbook.md`; the prioritized readiness
backlog is in `docs/implementation-backlog.md`.

## Safety invariant

`approval_pending` can transition to `approved` only through an explicit human
decision. The publisher rejects every other state, and mock mode never calls an
external platform. Every item is bound to exactly one `accountId`; brand
profiles, queues, state files, and future publishing credentials are not shared.
