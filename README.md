# ADAMA Social Media Agent

Mock-first autonomous content pipeline for ADAMA. The current shadow-mode MVP
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
npm run batch -- weekly 2026-07-26
npm run dev
```

Open `http://localhost:3000` for the approval inbox.

The shadow-mode protocol is documented in `docs/shadow-mode.md`.
Operational steps are in `docs/operator-runbook.md`; the prioritized readiness
backlog is in `docs/implementation-backlog.md`.

## Safety invariant

`approval_pending` can transition to `approved` only through an explicit human
decision. The publisher rejects every other state, and mock mode never calls an
external platform.
