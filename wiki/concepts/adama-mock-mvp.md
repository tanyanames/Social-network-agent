---
type: concept
created: 2026-07-25
updated: 2026-07-25
sources: [adama-project-brief, repository-selection]
confidence: high
status: active
verified_by: Codex tests 2026-07-25
staleness_window: 90d
relates_to: [adama, repository-selection]
tags: [architecture, approval, mock, mvp]
---
# ADAMA mock MVP

The first executable ADAMA-owned vertical slice is implemented at the repository
root. The LangChain project remains an attributed reference snapshot under
`vendor/langchain-social-media-agent/`.

## Implemented flow

`idea → researched → drafted → critiqued → revision_needed|approval_pending →
approved → scheduled`

The agent can analyze account fixtures, research fixture trends, generate Reel
and carousel drafts, critique brand fit, revise, and prepare an approval inbox.

## Safety invariant

Only actor `human` can transition `approval_pending → approved`. The publisher
accepts only approved items, and the current provider always reports
`externalCallMade: false`.

## Verification

Five tests pass:

1. HTTP approval inbox end-to-end.
2. Autonomous execution stops at approval.
3. Self-approval is rejected.
4. Human approval unlocks the mock queue.
5. Unapproved publishing is rejected.

The upstream snapshot separately produced 68 passing unit tests and two
toolchain/ESM failures under the available Windows dependency setup. Those
failures were not hidden by editing vendor code.
