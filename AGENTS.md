# Social Network Agent — Project Schema

Read automatically by Codex from any subfolder (root + nested `AGENTS.md` merge
up the tree). Full method: `docs/universal-agent-framework.codex.md`.

## Behavioral guidelines (Karpathy)
Apply on every non-trivial task (Codex has no skill auto-loader — these live here):
1. **Think before coding** — state assumptions; two readings → ask; prefer the simpler approach; if unclear, stop and name it.
2. **Simplicity first** — minimum code; no speculative abstractions/flexibility/error-handling for impossible cases.
3. **Surgical changes** — touch only what the request needs; match existing style; remove only what your change made unused.
4. **Goal-driven** — define a checkable success criterion up front; loop until it verifiably passes.

## First-run behaviour
If the wiki is still empty (only seed `index.md`/`log.md`/`overview.md`), your
NEXT message must tell the operator: "Drop raw files into `Context/` and tell me
to ingest — I'll build the graph under `wiki/`." Then wait; don't invent content.

## Autopilot is the default
Drive a well-specified task to verified-green on your own (plan → probe → run →
verify by re-reading the resource → clean up → log → `/ship`), then report.
Don't wait for a "go". STOP and ask first ONLY for the BLOCKING cases:
outward-facing / hard-to-reverse actions, out-of-scope repos, destructive ops,
releases. For hard / high-stakes forks, run a multi-lens deliberation (parallel
expert-lens sub-agents) instead of guessing. For long / repo-sweep work, offload
to fresh-context waves and keep only the conclusion (context-rot hygiene).

## Session-startup ritual (read before doing anything)
1. This file.
2. Operator memory: `cat ~/.codex/memory/$(basename "$PWD")/MEMORY.md 2>/dev/null`.
3. Knowledge graph: `cat graphify-out/GRAPH_REPORT.md 2>/dev/null | head -80`.
4. Recent log: `grep "^## \[" wiki/log.md | head -20`.
5. Active guardrails: `cat .loops/guardrails.md 2>/dev/null`.
6. Playbooks: `ls .agents/skills/ 2>/dev/null`.
7. Recent commits: `git log --oneline -10 && git status --short`.
8. `wiki/index.md` if the task touches domain knowledge.
If an existing wiki/log/graph entry covers the request, CITE it.

## Before any git commit
Run lint on staged files; if uncommitted work remains at session end, run /ship.
(Codex has fewer event hooks than Claude — these are rules, not hooks.)

## Auto-fire the loops (`~/.codex/prompts/loop-*.md`) at their trigger moments.

## /ship
When work is ready to persist, type `/ship` — surgical stage, auto-log, commit,
push, verify remote, update the graph. Don't reinvent the tail of the loop.

## Wiki layer (agent-owned) — the GRAPH knowledge base
`Context/` raw & immutable; `wiki/` is yours to write and cross-link.
- `wiki/index.md` — catalog. READ FIRST.   - `wiki/log.md` — append-only journal (newest-first).
- `wiki/overview.md` — synthesis.           - `wiki/{sources,entities,concepts}/`.

## Operations
**Ingest**: read source → discuss → `wiki/sources/<slug>.md` → update
entities/concepts (cross-link `[[…]]`) → prepend `wiki/log.md` entry → update index.
**Query**: read index first → drill in → answer with citations → file reusable answers back.
**Lint**: contradictions, stale claims, orphans, missing concept pages, broken links.

## Auto-logging rule (no exceptions)
After EVERY meaningful operation, prepend a `wiki/log.md` entry and commit —
without being asked. Default YES if unsure. Cite a rule's origin and the commit hash.

## Page conventions
YAML frontmatter (`type/created/updated/sources` + optional
`confidence/status/verified_by/staleness_window/relates_to/supersedes/tags`).
Today's date; relative→absolute. Paraphrase. Relative links.

## What NOT to do
Never edit `Context/`. Never `git add -A`. Don't pre-create empty pages. Don't
duplicate across pages (link). Don't bury knowledge in code comments. Don't bolt
external task-runners onto the loop — it IS the get-shit-done engine.
