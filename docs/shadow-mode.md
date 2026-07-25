# ADAMA shadow-mode runbook

Shadow mode evaluates the agent against real ADAMA work without publishing.
Run it for 2–4 weeks only after real historical content has been exported into
`Context/` and converted to test fixtures.

## Hard boundary

- Use mock publishers.
- Do not store access tokens in fixtures or git.
- Every item must stop at `approval_pending`.
- A human records approve, revise, or reject.
- Do not call Meta or Telegram publication endpoints.

## Daily workflow

1. Ingest new account/content fixtures.
2. Generate the next items from the approved weekly plan.
3. Review factual, religious, cultural, language, and brand accuracy.
4. Record the human decision and requested revision.
5. Compare generated work with the content actually chosen by the team.

## Exit criteria

- 100% of attempted publications require a recorded human approval.
- Zero external publishing calls in logs.
- At least 80% of drafts need no more than one revision.
- No invented quotations, dates, events, or religious claims.
- The team accepts the weekly plan as operationally useful.

Only after these conditions hold should Meta or Telegram adapters be configured.
