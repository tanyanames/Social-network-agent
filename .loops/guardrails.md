# Project Guardrails

Constraints accumulated by the `/loop-guardrails` command. Each entry was written
when the same failure pattern repeated twice. Treat every entry as a hard
constraint before attempting any fix or change. Read this file at session start.

---

## Guardrail: Never `git add -A` or `git add .`
Always stage by explicit path. Never bulk-stage.
Why: risk of committing `.env`, credentials, probe scripts, or private data.

## Guardrail: wiki/log.md entries go at the TOP (newest-first)
New entries are prepended, not appended.
Why: `grep "^## \[" wiki/log.md | head -20` expects newest-first order.

## Guardrail: Read wiki/index.md before answering domain questions
Why: re-discovering already-documented information wastes session time.
