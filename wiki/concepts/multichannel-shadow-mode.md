---
title: Multichannel shadow mode
type: concept
date: 2026-07-25
status: active
---

# Multichannel shadow mode

ADAMA now has an operational local content loop for Instagram, Facebook, and
Telegram:

`plan → master draft → channel adaptations → critique → human approval →
shadow schedule`

Each item stores channel-specific captions, calls to action, asset plans, and
design briefs. The durable local queue uses a JSON store under gitignored
`Context/runtime-state/`, so pending approvals survive server restarts.

The mock publisher produces one `shadow_scheduled` record per selected channel
and always declares `externalCallMade: false`. Live Meta and Telegram adapters
remain blocked by account permissions, credentials, production authorization,
and the 2–4 week shadow-mode exit criteria.

The provisional design profile comes from an initial visual review of local
ADAMA/CBA assets. It records the archive's coral/blue legacy system while keeping
the operator's green/lime target palette separate. Current Figma/Canva sources
must resolve that conflict before automated templates become authoritative.

See [the implementation backlog](../../docs/implementation-backlog.md),
[design audit](../../docs/design-audit.md), and
[operator runbook](../../docs/operator-runbook.md).

