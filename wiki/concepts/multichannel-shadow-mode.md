---
title: Multichannel shadow mode
type: concept
date: 2026-07-25
status: active
---

# Multichannel shadow mode

ADAMA and CBA Young each have an isolated local content loop for Instagram,
Facebook, and Telegram:

`plan → master draft → channel adaptations → critique → human approval →
shadow schedule`

Each item stores editable channel-specific captions, calls to action, asset
plans, design briefs, review notes, and decisions. Instagram, Facebook, and
Telegram are reviewed independently; the package reaches `approved` only when
every selected channel has a human approval. Editing resets that channel to
pending, while any revision request returns the whole package to a regeneratable
revision loop. The durable local queue uses a JSON store under gitignored
`Context/runtime-state/`, so pending approvals survive server restarts.

The mock publisher produces one `shadow_scheduled` record per selected channel
and always declares `externalCallMade: false`. Live Meta and Telegram adapters
remain blocked by account permissions, credentials, production authorization,
and the 2–4 week shadow-mode exit criteria.

Each account uses its own brand profile and state file. The CBA Young Figma
source is not an ADAMA design source. Current Figma/Canva sources must be
approved independently before automated templates become authoritative.

See [the implementation backlog](../../docs/implementation-backlog.md),
[design audit](../../docs/design-audit.md), and
[operator runbook](../../docs/operator-runbook.md).
