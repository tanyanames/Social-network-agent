# Wiki Log

Append-only chronological record. One entry per ingest / meaningful operation.
Format: `## [YYYY-MM-DD] {ingest|update|query|lint} | {short title}` (newest-first).

Tip: `grep "^## \[" log.md | head -20` shows recent activity.

---

## [2026-07-25] ingest | audit connected CBA.young Figma sandbox
**Object**: Connected CBA.young design source.
**Scenario**: design-source ingest
**Outcome**: ✅ success
**What happened**: Registered and inspected the three-page Figma file read-only, fully profiled the 5,537-layer current page, inventoried both archive pages, reviewed local styles, and visually checked representative 4:5 and Story designs. Confirmed the social formats, dominant CBA colours, typography, and photo-mask grammar. Also confirmed that the file is a mixed production archive with almost no reusable components, so automatic generation must target a curated template/library layer rather than arbitrary sandbox frames.
**Code changes**: this commit — Figma source registry and evidence-backed design audit.
**Updated**: `config/figma-sources.json`, `docs/design-audit.md`, `src/brand/adama-profile.mjs`, `wiki/sources/figma-cba-young-sandbox.md`, `wiki/index.md`, `wiki/overview.md`, `wiki/log.md`, `graphify-out/`.

## [2026-07-25] update | add editable per-channel approval workspace
**Object**: ADAMA approval inbox and review state machine.
**Scenario**: feature
**Outcome**: ✅ success
**What happened**: Rebuilt the local inbox as an editable Instagram/Facebook/Telegram review workspace. Each channel now has its own caption, CTA, design brief, note, and decision; editing resets only that channel, all selected channels must be approved before scheduling, and revision feedback can regenerate into a new review cycle. Desktop and 390px mobile layouts were visually verified, and eleven tests pass.
**Code changes**: this commit — editable per-channel review workspace.
**Updated**: `src/domain/content.mjs`, `src/workflow/adama-agent.mjs`, `src/server.mjs`, `test/`, `docs/implementation-backlog.md`, `docs/operator-runbook.md`, `wiki/concepts/multichannel-shadow-mode.md`, `wiki/log.md`, `graphify-out/`.

## [2026-07-25] update | make ADAMA shadow mode operational across channels
**Object**: Multichannel content production and local operations.
**Scenario**: feature
**Outcome**: ✅ success
**What happened**: Added Instagram, Facebook, and Telegram content adaptations, per-channel shadow scheduling, persistent local queue storage, a weekly/monthly batch command, API scheduling, a provisional design audit from representative vault assets, and a prioritized production-readiness backlog. Eight tests pass and a four-item weekly batch reaches the approval inbox with zero external calls.
**Code changes**: this commit — operational multichannel shadow mode.
**Updated**: `src/`, `scripts/generate-batch.mjs`, `test/`, `docs/implementation-backlog.md`, `docs/design-audit.md`, `docs/operator-runbook.md`, `README.md`, `wiki/`.

## [2026-07-25] ingest | index local Downloads and work vaults
**Object**: Local Downloads and desktop work archives.
**Scenario**: ingest
**Outcome**: ✅ success
**What happened**: Copied 4,710 supported files (15.27 GiB) into a gitignored immutable vault, created a complete metadata index, extracted 3,023,260 characters from 530 readable documents, synthesized seven ADAMA-relevant thematic clusters, and added the corpus relationships to the project wiki. No vector database was present, so Graphify remains the durable graph layer. Raw files, filenames, and extracted private text remain local and untracked.
**Code changes**: this commit — reproducible local vault indexer, knowledge synthesis, and graph update.
**Updated**: `.gitignore`, `scripts/index-local-vault.py`, `wiki/sources/local-vault-import-2026-07-25.md`, `wiki/concepts/adama-content-corpus.md`, `wiki/index.md`, `wiki/log.md`, `graphify-out/`.

## [2026-07-25] update | add content planning and shadow-mode gates
**Object**: Weekly/monthly planning and non-publishing pilot protocol.
**Scenario**: feature
**Outcome**: ✅ success
**What happened**: Added deterministic weekly and monthly planning to the mock agent and documented the 2–4 week shadow-mode workflow, metrics, and exit criteria. Six project tests now pass. Real Meta and Telegram adapters remain intentionally unconfigured.
**Code changes**: this commit — planning and shadow-mode runbook.
**Updated**: `src/providers/mock-providers.mjs`, `src/workflow/adama-agent.mjs`, `scripts/demo.mjs`, `test/workflow.test.mjs`, `docs/shadow-mode.md`, `README.md`, `wiki/concepts/adama-mock-mvp.md`, `wiki/log.md`.

## [2026-07-25] update | build ADAMA mock approval pipeline
**Object**: ADAMA-owned content workflow and approval inbox.
**Scenario**: feature
**Outcome**: ✅ success
**What happened**: Imported the MIT-licensed LangChain social-media-agent as an attributed vendor snapshot, then built a dependency-free mock vertical slice for account analysis, trend fixtures, Reel/carousel drafting, critique, revision, mandatory human approval, and queue preparation. The safety gate is enforced in both the state transition and publisher boundary. Five ADAMA tests pass; no external API or publishing call is made.
**Code changes**: this commit — mock MVP and approval workflow.
**Updated**: `vendor/langchain-social-media-agent/`, `src/`, `test/`, `fixtures/`, `scripts/`, `package.json`, `README.md`, `wiki/concepts/adama-mock-mvp.md`, `wiki/index.md`, `wiki/overview.md`, `wiki/log.md`.

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
