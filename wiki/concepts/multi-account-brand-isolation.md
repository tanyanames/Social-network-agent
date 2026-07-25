---
type: concept
created: 2026-07-26
updated: 2026-07-26
sources:
  - ../entities/adama.md
  - ../entities/cba-young.md
confidence: high
status: active
verified_by: operator 2026-07-26
staleness_window: none
relates_to:
  - "[[ADAMA]]"
  - "[[CBA Young]]"
  - "[[Multichannel shadow mode]]"
tags:
  - multi-account
  - brand-safety
  - isolation
---

# Multi-account brand isolation

ADAMA and CBA Young use one workflow engine but are separate tenants.

Each content item is stamped with one `accountId` and `brandId`. Each account
has its own brand profile, persistent state file, approval inbox, API namespace,
content generator context, critique rules, schedule identity, and future
publishing credential namespace. The same local content ID can safely exist in
both accounts because their stores are separate.

The local UI switches between account-specific inboxes. Account actions use
`/api/accounts/{accountId}/...`; legacy `/api/...` routes remain mapped to ADAMA
for compatibility. Human approval is still required independently for every
channel.

Brand assets are not reusable across tenants. The CBA Young Figma file cannot
serve as an ADAMA design library, and an ADAMA source cannot silently update CBA
tokens or templates.
