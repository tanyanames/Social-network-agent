# Wiki Log

Append-only chronological record. One entry per ingest / meaningful operation.
Format: `## [YYYY-MM-DD] {ingest|update|query|lint} | {short title}` (newest-first).

Tip: `grep "^## \[" log.md | head -20` shows recent activity.

---

## [2026-07-25] ingest | ADAMA project brief and repository research
**Object**: ADAMA project scope and four open-source social-agent candidates.
**Scenario**: ingest
**Outcome**: ✅ success
**What happened**: Ingested the operator's project brief and inspected the current default branches, repository structures, manifests, tests, workflows, README claims, and license files of all four candidates. Selected `langchain-ai/social-media-agent` as the recommended base. Flagged `anthonyonazure/social-agent` as functionally close but legally unsafe to copy because it has no license file despite an MIT statement in its README.
**Code changes**: this commit — project brief and repository research.
**Updated**: `wiki/sources/adama-project-brief.md`, `wiki/entities/adama.md`, `wiki/concepts/repository-selection.md`, `wiki/index.md`, `wiki/overview.md`, `wiki/log.md`.

## [2026-07-25] update | adopt universal agent framework
**Object**: Repository agent environment.
**Scenario**: rule-change
**Outcome**: ✅ success
**What happened**: Adopted the portable handover for the Codex runtime. Installed the graph wiki and raw inbox scaffolds, Obsidian configuration, 13 quality-loop prompts, `/ship`, Codex hooks, operator-local memory, and Graphify with repository hooks and an initial graph build.
**Code changes**: this commit — framework scaffold.
**Updated**: `AGENTS.md`, `.agents/`, `.codex/`, `.loops/`, `.obsidian/`, `Context/`, `docs/`, `graphify-out/`, `wiki/`, `.gitignore`.
