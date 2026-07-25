# ADAMA Social Media Agent

Mock-first autonomous content pipeline for ADAMA. The current MVP performs
account analysis, planning, drafting, critique, revision, and queue preparation.
Publishing is deliberately unavailable until a human approves each item.

The MIT-licensed LangChain reference implementation is preserved under
`vendor/langchain-social-media-agent/`. ADAMA-owned code lives under `src/`.

## Requirements

- Node.js 20 or newer
- No API keys for mock mode

## Run

```powershell
npm test
npm run demo
npm run dev
```

Open `http://localhost:3000` for the approval inbox.

The shadow-mode protocol is documented in `docs/shadow-mode.md`.

## Safety invariant

`approval_pending` can transition to `approved` only through an explicit human
decision. The publisher rejects every other state, and mock mode never calls an
external platform.
