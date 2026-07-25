# ADAMA implementation backlog

## Readiness verdict

The agent is ready for daily **shadow-mode content production** for two isolated
accounts, not unattended live publishing. It can plan, draft, adapt, critique,
persist, approve, and prepare mock schedules for Instagram, Facebook, and
Telegram. Every item stops for human approval and makes zero external calls.

## P0 — usable now

- [x] Local ADAMA context vault and knowledge graph.
- [x] Weekly/monthly planning fixtures.
- [x] Master draft plus Instagram/Facebook/Telegram adaptations.
- [x] Design brief and provisional visual profile.
- [x] Critique/revision loop.
- [x] Mandatory human approval.
- [x] Persistent local approval queue.
- [x] Batch command and approval HTTP inbox.
- [x] Editable channel-specific review with independent Instagram, Facebook,
  and Telegram decisions.
- [x] Human revision feedback can regenerate into a new approval cycle.
- [x] Shadow scheduler with a per-channel status.
- [x] Separate ADAMA and CBA Young brand profiles, state files, approval
  inboxes, account routes, and queue identities.

## P1 — required before live publishing

- [ ] Replace fixture research with cited live trend research.
- [ ] Connect an LLM provider with structured-output validation and cost limits.
- [ ] Approve separate ADAMA and CBA Young brand kits, fonts, logos, templates,
  palettes, and Figma/Canva sources. Never derive one from the other.
- [ ] Connect each community's Meta assets independently: Instagram professional
  account, Facebook Page, permissions, webhooks, and token rotation.
- [ ] Connect a Telegram bot and target channel with least-privilege rights.
- [ ] Store credentials outside Git and add startup configuration diagnostics.
- [ ] Implement idempotency, retry policy, rate limits, asset upload, publication
  receipts, and reconciliation.
- [ ] Run 2–4 weeks of shadow mode and meet the exit criteria.

## P2 — growth loop

- [ ] Import post/account analytics with platform-normalized metrics.
- [ ] Attribute results to content pillars, hooks, formats, channels, and dates.
- [ ] Produce weekly recommendations without silently rewriting brand rules.
- [ ] Add duplicate detection, asset rights/consent metadata, OCR, transcription,
  and searchable vector retrieval with provenance.

## External blockers

Live publishing cannot be completed autonomously without account-owner actions:
Meta app/account permissions, Telegram bot administration, approved brand
decisions, credentials, and explicit production authorization.
