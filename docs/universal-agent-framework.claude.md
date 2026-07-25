# Universal Autonomous-Agent Operating Framework — **Claude edition**

> **What this is.** The complete, project-agnostic method one operator uses to
> run AI coding agents so that knowledge *compounds* instead of evaporating.
> It is distilled from a mature multi-agent repo and stripped of any
> domain specifics — hand it to **Claude Code** (desktop, CLI, web, or mobile
> via GitHub) in any repo and the agent immediately knows how the operator
> wants to work: how to think, where knowledge lives, how to persist it, how
> automation and CI/CD are wired, and which guardrails are non-negotiable.
>
> **There is a twin file** — `universal-agent-framework.codex.md` — identical
> in spirit, bound to OpenAI Codex instead. Keep them in sync; they differ
> only in the *Runtime binding* (§3) and the path tokens.
>
> **How to use it.** Drop this file in a fresh repo and tell the agent
> *"Adopt this framework and bootstrap the project."* It runs every command
> and writes every file here. When the wiki is still empty, the agent's first
> job is to tell the operator **where to drop raw material** (`Context/`) so it
> can build the knowledge graph. Replace `<owner>/<repo>` and `<agent>` with
> yours.

---

## 0. The one-paragraph thesis

Most people use a coding agent like a goldfish: every chat starts from zero,
re-derives yesterday's lessons, repeats yesterday's mistakes. This framework
fixes that with **plain-text layers** the agent reads and writes, **three
habits** (a startup ritual, auto-logging, a verify-then-persist loop), and
**automation** that keeps the knowledge fresh and the repo shippable. Git
history is the version history. Everything compounds because **every session
reads what the last one wrote.** Session #50 is smarter than session #1.

---

## 1. The full architecture at a glance

```
                       ┌───────────────────────────────────────────┐
                       │  CLAUDE.md  (repo root, read EVERY session) │   ← the glue
                       │  schema · rituals · ops · house rules       │
                       └──┬─────────┬──────────┬──────────┬──────────┘
       HOW to think ──────┘         │          │          └────── operator-local
   ┌───────────────────┐  ┌─────────▼──────┐  ┌▼──────────────┐  ┌─────────────────┐
   │ Karpathy          │  │ wiki/  GRAPH KB │  │ Context/      │  │ ~/.claude/...    │
   │ discipline skill  │  │ index·log·      │  │ raw inbox     │  │ memory/ (creds,  │
   │ (plugin / global) │  │ concepts·       │  │ IMMUTABLE     │  │ prefs)           │
   └───────────────────┘  │ entities·       │  │ (drop files)  │  └─────────────────┘
                          │ sources         │  └───────────────┘
                          └───┬─────────────┘
        ┌─────────────────────┼───────────────────┬─────────────────────┐
   ┌────▼─────┐   ┌───────────▼────────┐   ┌───────▼────────┐   ┌────────▼─────────┐
   │ Obsidian  │   │ Graphify           │   │ 13 quality     │   │ GitHub: hooks +   │
   │ human     │   │ auto knowledge-    │   │ loops + .loops/│   │ Actions + /ship + │
   │ graph     │   │ graph (no API)     │   │ guardrails     │   │ Secrets (CI/CD)   │
   └───────────┘   └────────────────────┘   └────────────────┘   └───────────────────┘
```

| # | Layer | Path | Owner | Role |
|---|-------|------|-------|------|
| 1 | Behavioral discipline | Karpathy skill (plugin/global) | installed once | *How* the agent thinks & edits |
| 2 | Glue config | `CLAUDE.md` (root) | you + agent | The always-read schema |
| 3 | Graph knowledge base | `wiki/` | the agent | Compounding plain-text knowledge |
| 4 | Raw inbox | `Context/` | you (drop files) | Immutable source material |
| 5 | Human graph view | `.obsidian/` | you (read) | Visual graph, backlinks, properties |
| 6 | Auto knowledge graph | `graphify-out/` | tooling | Structural map (god nodes, clusters) |
| 7 | Quality-gate loops | `.claude/commands/loop-*.md` + `.loops/` | you + agent | Self-pacing checks, accumulated guardrails |
| 8 | Hooks | `.claude/settings.json` + `.githooks/` | you | Event-driven automation glue |
| 9 | One-button ship | `.claude/commands/ship.md` | you + agent | Persist + publish in one keystroke |
| 10 | CI/CD | `.github/workflows/` | you + agent | Scheduled & triggerable execution |
| 11 | Operator memory | `~/.claude/projects/.../memory/` | you | Secrets/prefs, never committed |
| 12 | Session memory compiler | `.claude-memory-compiler/` (gitignored) | tooling | Cross-session AI-interaction knowledge |

The split that matters: **`Context/` is raw and immutable; `wiki/` is the
agent's compounding artifact; code is runtime.** Narrative knowledge never
hides in code comments — it goes in the wiki where the next session finds it.

---

## 2. Where your files go (the ingest flow — read first)

```
  YOU drop raw files here     →  AGENT ingests them into      →  YOU browse here
  ─────────────────────          ──────────────────────          ───────────────
   Context/                       wiki/sources/<slug>.md           Obsidian (graph)
   ├── brief.pdf      ─ "ingest" ─▶ wiki/entities/<name>.md   ────▶ + Graphify
   ├── export.csv                  wiki/concepts/<topic>.md          (god nodes,
   └── clipped/*.md                wiki/log.md  (dated entry)         clusters)
       (IMMUTABLE)                  ▲ cross-linked [[links]] + relates_to:
                                    └ that network of wiki/ pages IS the graph KB
```

1. **Drop anything into `Context/`** — briefs, PDFs, CSV/JSON exports, transcripts,
   screenshots, web clips (`Context/clipped/`). The agent **reads, never edits** it.
2. **Say "ingest `Context/`."** The agent reads each source, discusses takeaways,
   writes a summarized `wiki/sources/` page, creates/updates `entities/` +
   `concepts/`, **cross-links** them, and logs it.
3. **Browse in Obsidian** (open the repo as a vault) and read the **Graphify**
   report for the structural map.

---

## 3. Runtime binding — Claude Code

This is the only runtime-specific section. The Codex twin swaps these values.

| Concept | Claude Code |
|---|---|
| Always-read config | `CLAUDE.md` at repo root (auto-loaded from any subfolder; parents merge) |
| Behavioral skill | `~/.claude/skills/<name>/SKILL.md` (auto-loads by name) **or** a plugin in `.claude/settings.json` → `enabledPlugins` |
| Slash commands | `~/.claude/commands/<name>.md` (global) + `<repo>/.claude/commands/<name>.md` (repo, mobile-visible) |
| Quality loops | `<repo>/.claude/commands/loop-*.md`, invoked `/loop-<name>` |
| Event hooks | `<repo>/.claude/settings.json` → `hooks` (SessionStart, Stop, PreToolUse, PreCompact, SessionEnd) |
| Operator memory | `~/.claude/projects/<repo-slug>/memory/` (`MEMORY.md` index + topic files) |
| Commit co-author | `Co-Authored-By: Claude <noreply@anthropic.com>` |
| Ship `.gitignore` rule | un-ignore `.claude/skills/**` and `.claude/commands/**` (see §6) |

Codex differences (for awareness): config is `AGENTS.md`; no global skill
auto-loader (discipline is pasted into `AGENTS.md`); commands live in
`~/.codex/prompts/`; hooks are `.codex/hooks.json` (fewer events).

---

## 4. Layer 1 — Behavioral discipline (Karpathy)

The single highest-leverage addition: guardrails that stop over-engineering
and sloppy edits. Install once, reference once.

**Install** — either as a Claude plugin (preferred):
```jsonc
// .claude/settings.json
{ "enabledPlugins": { "andrej-karpathy-skills@karpathy-skills": true } }
```
…or as a global skill:
```bash
git clone --depth 1 https://github.com/forrestchang/andrej-karpathy-skills /tmp/aks
mkdir -p ~/.claude/skills/karpathy-guidelines
cp /tmp/aks/karpathy-guidelines/SKILL.md ~/.claude/skills/karpathy-guidelines/SKILL.md
rm -rf /tmp/aks
```

**Reference** in `CLAUDE.md`: *"Apply the `karpathy-guidelines` skill on every
non-trivial task."* The four rules, in one breath:

1. **Think before coding** — state assumptions; if two readings exist, ask; prefer the simpler approach; if unclear, stop and name it.
2. **Simplicity first** — minimum code; no speculative abstractions/flexibility/error-handling for impossible cases. "Would a senior call this overcomplicated?" If yes, rewrite.
3. **Surgical changes** — touch only what the request needs; don't "improve" adjacent code; match existing style; remove only what *your* change made unused.
4. **Goal-driven** — define a checkable success criterion up front; loop until it verifiably passes.

(Source: https://github.com/forrestchang/andrej-karpathy-skills · Karpathy's
[LLM-pitfalls notes](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).)

---

## 5. Layer 2 — `CLAUDE.md` (the glue)

The one file read every session. Keep it ~100 lines — long configs get
skimmed, short ones internalized. Skeleton (fill `<…>`):

````markdown
# <project> — Project Schema

## Behavioral guidelines
Apply the `karpathy-guidelines` skill on every non-trivial task: think before
coding, surface assumptions, surgical changes, define verifiable success.

## First-run behaviour
If the wiki is still empty (only seed `index.md`/`log.md`/`overview.md`), your
NEXT message must tell the operator: "Drop raw files into `Context/` and tell
me to ingest — I'll build the graph under `wiki/`." Then wait; don't invent.

## Session-startup ritual (read before doing anything)
1. This file.
2. Operator memory: `cat ~/.claude/projects/<slug>/memory/MEMORY.md 2>/dev/null`.
3. Knowledge graph: `cat graphify-out/GRAPH_REPORT.md 2>/dev/null | head -80`.
4. Recent log: `grep "^## \[" wiki/log.md | head -20`.
5. Active guardrails: `cat .loops/guardrails.md 2>/dev/null`.
6. Relevant skill/command: `ls .claude/skills/ .claude/commands/`.
7. Recent commits: `git log --oneline -10 && git status --short`.
8. `wiki/index.md` if the task touches domain knowledge.
If an existing wiki/log/graph entry covers the request, CITE it.

## Per-task operating loop
Surface assumptions → check prior work → state a plan → probe → run → verify by
re-reading the actual resource → clean up scratch scripts → log it → /ship.

## Auto-fire the loops (don't wait to be told)
Run the matching `/loop-*` at its trigger moment (see §13 table).

## /ship
When work is ready to persist, type `/ship` — surgical stage, auto-log, commit,
push, verify remote, update the graph. Don't reinvent the tail of the loop.

## Wiki layer (agent-owned) — the GRAPH knowledge base
`Context/` raw & immutable; `wiki/` is yours to write and cross-link.
- `wiki/index.md` — catalog. READ FIRST.   - `wiki/log.md` — append-only journal.
- `wiki/overview.md` — synthesis.           - `wiki/{sources,entities,concepts}/`.

## Operations
**Ingest**: read source → discuss → `wiki/sources/<slug>.md` → update
entities/concepts (cross-link `[[…]]`) → prepend `wiki/log.md` entry → update index.
**Query**: read index first → drill in → answer with citations → file reusable answers back.
**Lint**: contradictions, stale claims, orphans, missing concept pages, broken links.

## Auto-logging rule (no exceptions)
After EVERY meaningful operation, prepend a `wiki/log.md` entry and commit —
without being asked. Unsure if meaningful? Default YES. Cite a rule's origin
("Per <operator> YYYY-MM-DD …") and the commit hash.

## Page conventions
YAML frontmatter (`type/created/updated/sources` + optional
`confidence/status/verified_by/staleness_window/relates_to/supersedes/tags`).
Today's date; convert relative dates to absolute. Paraphrase, no long quotes.
Relative links so Obsidian AND GitHub resolve.

## House rules
(see §18 — the operator's non-negotiables)

## What NOT to do
Never edit `Context/`. Never `git add -A`. Don't pre-create empty pages. Don't
duplicate across pages (link). Don't bury knowledge in code comments.
````

---

## 6. Layer 3 — the wiki (graph knowledge base)

Plain Markdown, agent-owned, version-controlled. **The priority layer — the
thing the whole method exists to build.**

```
wiki/  index.md (READ FIRST) · log.md (compounds) · overview.md
       sources/   one page per ingested raw source
       entities/  brands, people, vendors, services, components
       concepts/  APIs, workflows, rules, domain topics
```

**Frontmatter** (every page):
```yaml
---
# REQUIRED
type: source | entity | concept
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [<slug>, …]
# OPTIONAL (borrowed from agentmemory — plain frontmatter, no DB)
confidence: high | medium | low
status: active | deprecated | archived
verified_by: <name> YYYY-MM-DD
staleness_window: 30d | 90d | 180d | 1y | none   # linter flags when updated+window < today
relates_to: [<slug>, …]        # explicit graph edges
supersedes: <slug> / superseded_by: <slug>   # lineage
tags: [<topic>, …]
---
```
Why the optional fields: a KB without confidence/freshness/graph signals
poisons itself — stale claims look like fresh ones. Linter rules: `confidence:
low` → surface; `updated+staleness_window < today` → flag stale; `deprecated`
without `superseded_by` → ask; dangling `relates_to` → broken-edge report.
(Source: https://github.com/rohitg00/agentmemory — concepts reused, not the DB.)

**Log entry format** (newest-first within a day — a guardrail):
```markdown
## [YYYY-MM-DD] {ingest|update|incident|lint} | <short subject>
**Object**: what this touched, or "N/A — meta".
**Scenario**: feature | bugfix | refactor | rule-change | incident | ingest
**Outcome**: ✅ success | ⚠️ partial | ❌ failed
**What happened**: 1–3 plain-English paragraphs (not stdout dumps). Cite a new
rule's origin ("Per <operator> YYYY-MM-DD …").
**Code changes**: commit <hash> — subject.
**Updated**: relative paths.
```
The log is where *reasoning* lives ("tried X, failed because Y, now do Z"). A
postmortem written today stops the same mistake next week, because next week's
startup ritual reads it.

**Ship `.gitignore` for `.claude/`** (ship playbooks, hide local state):
```
.claude/*
!.claude/skills/
!.claude/skills/**
!.claude/commands/
!.claude/commands/**
```

---

## 6b. Knowledge integrity — pointers, precedence, supersession

The KB only compounds if the agent trusts the *right* layer. Three rules keep it
from poisoning itself (added <operator> 2026-07 after each was paid for once):

**1. Index lines are POINTERS, not facts.** `wiki/index.md`, a `MEMORY.md` line,
a code-graph report — each is a *cache* of the underlying notes, and caches
drift. Before acting on an index line, open the note it points to. Before
asserting anything a tool can re-derive, run the tool: code structure → the code
graph; external-service state → the live API call; file contents → read the file.
***Shipped ≠ confirmed*** — "it's in the changelog" is not "I re-checked it
today". (Paid for once: a stale index line contradicted its own correct note and
a whole component got built on the wrong base before anyone re-opened the note.)

**2. Precedence ladder — when stored facts conflict, resolve deterministically:**
a code/API anchor *re-verified this session* **>** a human's stated fact **>** an
agent's *observed* result **>** an agent's *inferred* guess. **Recency breaks
ties only WITHIN a tier** — pick the newest by an explicit `updated:` /
`asserted_on:` date (a `max()` in code, never "which feels more recent").
`status: superseded` / `retracted` notes are excluded from context entirely;
only an explicitly historical question ("why did we change X?") unlocks them.

**3. Supersession ritual (HARD RULE — never silently edit a decision note).**
Reversing a recorded decision is four moves, not one edit:
- (a) the old note gets `status: superseded`, `superseded_by: <new-slug>`, `valid_until: <date>`;
- (b) its body collapses to a 3-line tombstone naming what changed and why (the full body survives in git history);
- (c) the new note carries the **same** claim keys the old one asserted, so queries resolve to the replacement, not to a ghost;
- (d) the old index line moves to a `## Superseded` section — history, not truth, out of the default context.

A KB linter enforces these invariants (pointer-freshness, dangling
`superseded_by`, orphaned claim keys) and must exit 0 at every `/ship`.

---

## 7. Layer 4 — `Context/` + Obsidian (graph links)

`Context/` is the raw inbox (§2) — immutable. The **graph** is made of three
edge types in `wiki/`:
1. **`[[wiki-links]]` / relative md links** in bodies — the real edges (resolve in Obsidian, GitHub, plain viewers).
2. **`relates_to:`** frontmatter — explicit peer edges.
3. **`supersedes:`/`superseded_by:`** — lineage edges.

**Obsidian** overlays a visual graph (agent never touches it; human read layer).
The repo root *is* the vault. Config files (commit these):

`.obsidian/app.json` — note `userIgnoreFilters` keeps tooling dirs out of the graph:
```json
{ "attachmentFolderPath": "Context/clipped", "newLinkFormat": "relative",
  "useMarkdownLinks": true, "alwaysUpdateLinks": true,
  "userIgnoreFilters": ["node_modules", ".venv", ".claude/worktrees", "graphify-out"] }
```
`.obsidian/graph.json` — colour-code nodes by layer + scope the graph to the wiki:
```json
{ "showOrphans": true, "nodeSizeMultiplier": 1.2, "linkDistance": 200,
  "search": "(path:wiki/concepts OR path:wiki/entities OR path:wiki/sources)",
  "colorGroups": [
    { "query": "path:wiki/concepts", "color": { "a": 1, "rgb": 6000639 } },
    { "query": "path:wiki/entities", "color": { "a": 1, "rgb": 11032055 } },
    { "query": "path:wiki/sources",  "color": { "a": 1, "rgb": 2278750 } } ] }
```
Core plugins to enable: `graph, backlink, outgoing-link, properties, tag-pane,
global-search, command-palette, bookmarks, file-recovery, canvas`. `.gitignore`
the per-user noise: `.obsidian/workspace.json`, `workspace-mobile.json`, `.DS_Store`.
**Web Clipper** (https://obsidian.md/clipper) drops web sources into
`Context/clipped/` as raw material to ingest.

---

## 8. Layer 6 — Graphify (the auto knowledge graph)

`graphify` (PyPI `graphifyy`) scans the whole repo + wiki, clusters concepts
(Louvain communities), and emits — with **no API key, structural analysis only**:
- `graphify-out/GRAPH_REPORT.md` — **god nodes** (most-connected abstractions),
  **community clusters**, surprising connections, import cycles, freshness.
- `graphify-out/graph.json` — structured data for queries.
- `graphify-out/manifest.json` — per-file hashes for incremental rebuilds.

All three are committed so every session starts on a fresh graph. Integration:
- **Startup ritual step 3** reads `GRAPH_REPORT.md | head -80` — god nodes +
  clusters tell you the core abstractions before diving into files.
- **Git post-commit hook** (`.githooks/post-commit`) rebuilds in the background
  after each commit; **post-checkout** rebuilds on branch switch. Wire with
  `git config core.hooksPath .githooks`. Pin `PYTHONHASHSEED=0` for deterministic
  clustering; record the python interpreter at install time so it works in GUI/CI.
- **`/ship` step 9b** commits any updated graph artifacts after push.
- **Query without rebuild / cost**: `graphify query "<question>" --graph graphify-out/graph.json`.
- Keep `graphify-out/` out of the Obsidian graph (it's in `userIgnoreFilters`).

The wiki gives you the *authored* graph (your `[[links]]`); Graphify gives you
the *discovered* graph (structural connections you didn't author). Use both.

---

## 9. Layer 11 — operator-local memory & §12 session compiler

**Operator memory** (`~/.claude/projects/<slug>/memory/`, never committed) — for
secrets and preferences: API tokens, voice/style prefs, approval rules, commit-
scope rules, model policy. `MEMORY.md` is a <30-line index of links; each topic
file:
```markdown
---
name: <slug>
description: <what this remembers; shown in the index>
metadata: { type: reference | feedback | user | project }
---
<the fact; link peers with [[name]]>
```
Document in `CLAUDE.md` that a new machine sets this up locally. This is
startup-ritual step 2.

**Session memory compiler** (optional; `.claude-memory-compiler/`, gitignored) —
auto-captures every session to `daily/YYYY-MM-DD.md` via hooks, compiles into
`knowledge/` articles. This is *cross-session AI-interaction* knowledge
(decisions, gotchas) — distinct from the *project-domain* wiki. They don't overlap.

---

## 10. The operating loop (the three habits)

**Habit 1 — Startup ritual** (§5): read config → memory → graph report → recent
log → guardrails → commands → commits → index, *before acting*. Two minutes here
saves an hour of re-deriving. Cite anything that already covers the request.

**Habit 2 — Auto-logging** (§5): after any meaningful action, prepend a
`wiki/log.md` entry and commit. Without being asked. Default YES.

**Habit 3 — Per-task loop**:
1. Surface assumptions (two readings → ask).
2. Check prior work: `grep -rn "<kw>" . ; grep "<kw>" wiki/log.md`.
3. State a 2–5 step plan, each with a verification check; put it in the reply.
4. Probe before committing to specifics — throwaway `scripts/_probe_*.py`
   (underscore = delete before commit). UI/API assumptions are wrong ~30% of the time.
5. Run; capture output into the report.
6. **Verify by re-reading the actual resource** — "✅ done" is not proof,
   especially with async/caching/early success messages.
7. Clean up scratch scripts.
8. Log it (Habit 2). 9. `/ship`. 10. Report: done (with verification facts) / left / watch-next.

**Productize on the second repeat** — the second time you do a thing, write the
reusable CLI. **Versioning is git**: one semantic change per commit; date-stamp
rules when introduced; put the commit hash in the matching log entry (two-way link).

---

## 10b. Autonomy & decision posture (autopilot is the default)

**Autopilot is the default.** Take a well-specified task and drive it to a
verified-green state on your own — plan → probe → run → verify by re-reading the
resource → clean up → log → `/ship` — *then* report. Don't wait for a "go"
between steps; the per-task loop (§10) IS the autopilot.

**BLOCKING — stop and ask first (never auto-done):**
- **Outward-facing / hard-to-reverse** — sending email, posting to a person or
  service, anything published externally, money/payment mutations, production
  pushes against real systems.
- **Out-of-scope repos** — commit only where the task lives; don't touch sibling
  repos/agents without an explicit ask.
- **Destructive ops** — deleting/overwriting files you didn't create, force-push,
  history rewrites, dropping data.
- **Releases** — tags, version bumps, anything a human treats as "shipped to users".

Inside those bounds, act: surface the assumption, pick the sensible default, proceed.

**Context-rot hygiene.** For long / multi-file / repo-sweep work, offload to
fresh-context sub-agent or workflow waves and keep only the *conclusion* in the
main thread. Delegate the sweep; retain the answer — don't let one context fill
with file dumps.

**Hard decisions → convene a council, don't guess.** For genuinely hard,
high-stakes, or multi-trade-off forks (architecture choices, irreversible
data/release calls, close "which approach" calls), run a multi-persona
deliberation that surfaces disagreement instead of false consensus — in Claude
Code this is `/council <question>` (a panel of thinker personas; `--quick` =
2-round pass, `--duo` = focused two-voice dialectic). Not for routine tasks
(autopilot handles those) — reach for it only when a wrong call is expensive.

**Don't bolt on external task-runners.** This native loop (startup ritual →
autopilot → quality loops → `/ship`) IS the "get-shit-done" engine. Adding a
second orchestration framework on top duplicates the loop, clashes with `/ship`,
and bloats context. Extend the loop you have; don't import a parallel one.

---

## 11. Quality-gate loops (the 13 self-pacing loops)

A **loop** is a slash command that runs a check between iterations and stops at a
verifiable exit condition or an iteration cap. Pattern (`.claude/commands/loop-*.md`):

```markdown
---
description: <when to use + what it does — dense trigger phrases>
argument-hint: "<optional arg>"
---
Start the '<Name>' loop. Goal: <verifiable goal>. Max iterations: N.
Between iterations run: `<check command>`. Exit when: <exit condition>.

Step 1: … Step 2: … Step 3: self-pace — re-run the check, continue only if not met.

**Guardrail rules (never break):**
- Don't modify the check/criteria to force a pass. Don't stub checks.
- If blocked after N iterations, write the blocker down and report — don't game it.
```

**State files in `.loops/`** (tracked in git — accumulated project knowledge):
- `.loops/guardrails.md` — **permanent hard constraints**, one `## Guardrail:`
  entry written each time a failure repeats twice. Read at startup; treated as
  law. (Real examples: never `git add -A`; log entries newest-first; read
  `wiki/index.md` before domain questions.)
- `.loops/reflexion.md` — debug attempt log (one entry per failed attempt:
  tried / failed / next hypothesis). Never delete entries; clear only at the
  start of a new, unrelated debug session.

**The 13 loops & their auto-fire triggers** (run automatically — no reminder):

| Trigger moment | Command | Does |
|---|---|---|
| After any code/config/wiki change | `/loop-docs-sync` | Sync stale wiki/docs to match code |
| After every `/ship` | `/loop-changelog` | Ensure every change is in `wiki/log.md` |
| Before any PR | `/loop-pr-review` | 3-pass diff self-review, fix findings |
| Same failure twice | `/loop-guardrails` | Write a constraint to `.loops/guardrails.md` |
| Bug resisted one fix | `/loop-debug` | Reflexion log, try a *different* fix each time |
| Can't find root cause | `/loop-investigate` | Tiny throwaway probe to isolate the issue |
| After migration files | `/loop-migrate` | Apply DB migrations cleanly |
| PRs in flight | `/loop 15m /loop-pr-babysitter` | Watch + heal open PRs on an interval |
| Post-impl, pre-commit | `/loop-de-sloppify` | Strip debug code, dead branches, slop |
| Start of multi-req task | `/loop-spec-ship` | Implement `spec.md` one requirement at a time |
| Lint errors | `/loop-lint` | Fix lint/typecheck with minimal diffs until clean |
| Integration tests failing | `/loop-e2e` | Fix first failure, repeat until green |
| After UI changes | `/loop-visual-regression` | Compare screenshots, fix diffs |

These are runtime-agnostic in spirit; adapt each loop's *check command* to your
stack (`pytest`, `ruff`, `flutter analyze`, an API call, a wiki lint).

---

## 12. Hooks — event-driven automation glue

Two hook systems compose: **git hooks** (`.githooks/`, wired via
`core.hooksPath`) and **Claude hooks** (`.claude/settings.json`).

**Claude hooks** (real examples, generalize freely):
- `SessionStart` → run the session-memory-compiler; echo the active-guardrail
  count (`grep -c '## Guardrail:' .loops/guardrails.md`).
- `Stop` → if `git status --short` is non-empty, remind "run /ship"; if a recent
  non-wiki commit exists, remind "/loop-changelog".
- `PreToolUse:Bash` → if the command is `git commit` and staged `.py` files have
  ruff issues, nudge "/loop-lint first".
- `PreCompact` / `SessionEnd` → flush session knowledge to the memory compiler.

**Git hooks**: `post-commit` + `post-checkout` rebuild the Graphify graph in the
background; `pre-commit` for fast local checks. Keep them idempotent and skip
during rebase/merge/cherry-pick.

The principle: **anything the operator wants to happen automatically ("from now
on, whenever X…") is a hook, not a memory** — the harness runs hooks; the model
can forget. Automated behaviors live in `settings.json`/`.githooks/`.

---

## 13. `/ship` — one button for the whole tail

`/ship` (`.claude/commands/ship.md`, mirrored to `~/.claude/commands/ship.md`)
treats every meaningful operation as **five outputs that land together**: code,
skill, wiki concept pages, wiki log, GitHub. The flow (generalized — drop any
domain-specific gates):

1. **Diagnose** — `git status/log/diff`; spot dangerous staged content (`.env`, keys, secrets) → STOP and ask.
2. **Cross-repo detection** — touched two repos? One surgical commit per repo.
3. **Skill mirror sync** — copy edited `.claude/skills/*/SKILL.md` to `~/.claude/skills/` (repo copy canonical).
4. **Auto-log** — prepend a `wiki/log.md` entry if not already covered (newest-first).
5. **Wiki index update** — add any new `wiki/{concepts,entities,sources}/` pages.
6. **Stage surgically** — explicit paths only, never `-A`; `git diff --cached --stat` sanity check.
7. **Commit** — subject ≤72 chars; body explains *why* not *what*; date-stamp rules; Co-Authored-By trailer; via HEREDOC temp file.
8. **Push** — `git push origin HEAD`; non-`main` → ask about PR/force.
9. **Verify remote sync** — compare local vs `gh api` remote SHA.
9b. **Graph update** — commit refreshed `graphify-out/*` (hook already rebuilt it; use `GRAPHIFY_SKIP_HOOK=1` to avoid re-trigger).
10. **Backfill** the real commit hash into the log entry (no `<hash>` placeholder ships).
11. **Report** — Done (hash + URL) / Logged (which page) / Sync (✓ or drift).

**Hard rules**: never `git add -A`/`.`; never commit `.env`/keys/credentials;
never `--no-verify`; never force-push `main` without OK; never empty commits to
satisfy ship; push immediately. **When NOT to ship**: mid-task checkpoint (use a
branch); right after an unverified destructive op; while secrets are dirty.

---

## 14. CI/CD & deployment (GitHub)

GitHub-hosted runners do the heavy lifting; the operator (even on a phone) only
triggers. **Secrets**: `printf '%s' '<value>' | gh secret set NAME` — **never
`--body -`** (stores the literal `-`); name secrets to match the env var the
code reads, so the same script runs locally (`.env`) or in CI.

Workflow patterns that pay off:
- **`workflow_dispatch` with a `choice` input** — one mega-workflow + branching
  beats N tiny workflows (better mobile UX).
- **`if: always()` artifact upload** — you get logs/screenshots even on failure
  (the case you most want to debug).
- **Scheduled ingest** (`cron`) — pull external data (email, analytics, metrics)
  on an interval and ingest into the wiki/brain; dedup by id.
- **Push-triggered sync** (`paths: ["wiki/**"]`) — refresh any downstream index
  when the wiki changes.
- **PR babysitter** — interval workflow that watches labeled PRs, fixes CI,
  rebases, escalates. (Mind the Actions-minutes budget — pause to manual when low.)
- **Optional RAG mirror** — if the wiki ever outgrows the context window, mirror
  it into a vector store (Supabase pgvector + embeddings, idempotent
  delete+reingest on push). **Default OFF — the graph KB is the priority**; add
  this only when the agent can no longer hold the relevant slice in context.
- **Deploy after every commit** — if the agent targets a device/app/site, push
  the build to the real target each commit so the operator actually sees the
  change (local-only work is invisible).

---

## 15. Versioning & git conventions

- **Git history IS the version history** — no parallel scheme for wiki/skills.
- One **semantic change per commit** (a doc edit, a code change, a config tweak = three commits).
- Subject ≤72 chars, present tense; **body explains *why*, not *what*** (the diff shows what).
- **Date-stamp rules** when introduced ("Per <operator> YYYY-MM-DD …") so the conversation that produced them is findable.
- **Commit hash in the matching `wiki/log.md` entry** — a two-way link between narrative and diff.
- **Push immediately** — local-only work is invisible to the next session, to Actions, and to mobile.
- **Cross-repo** — one surgical commit per repo; never mash.

---

## 16. House rules — the operator's conventions (the personal layer)

The non-negotiables that make an agent "work the way I want." Put these in
`CLAUDE.md` and `.loops/guardrails.md`:

- **Autopilot by default** — drive well-specified tasks to verified-green on your own; only STOP for the 4 BLOCKING cases (outward-facing/hard-to-reverse, out-of-scope repos, destructive ops, releases). See §10b.
- **Hard / high-stakes forks → convene the council, don't guess** (`/council`, §10b).
- **Offload long/multi-file/repo-sweep work to fresh-context waves** — keep only the conclusion in the main thread (context-rot hygiene).
- **Don't bolt external task-runners onto the native loop** — it IS the get-shit-done engine.
- **Never `git add -A` / `git add .`** — explicit paths only. (Guardrail.)
- **`wiki/log.md` newest-first within a day.** (Guardrail.)
- **Read `wiki/index.md` before any domain question.** (Guardrail.)
- **Auto-log everything meaningful, unasked; default YES** when unsure.
- **Auto-fire the loops by trigger** — don't wait to be told.
- **Verify by re-reading reality** — never report success off stdout alone.
- **Probe scripts are `_probe_*.py`, deleted before commit.** Productize on the 2nd repeat.
- **Don't touch sibling repos/agents without an explicit ask** — scope discipline.
- **Skills/commands: repo copy canonical, `~/.claude/` is a mirror** — keep in sync.
- **Secrets only via `printf | gh secret set`** — never inline, never `--body -`.
- **Convert relative dates to absolute** when filing; today's date from session context.
- **Language: match the source** for direct quotes; both EN/RU fine.
- **Model policy** (if the agent calls models): default to the cheap/free tier; keep the model id in one place so it's swappable.
- **Cite your sources** — when an existing wiki/log/graph entry covers the ask, link it. Show your work.
- **Index lines are pointers, not facts** — open the note before acting; **verify-with-tool before asserting**; *shipped ≠ confirmed*. (§6b)
- **Conflicting facts → the precedence ladder; never silently edit a decision — supersede it** with a tombstone. (§6b)
- **Task state must AGREE across every tracker after each action that changes what's done** — code+git is FINAL truth, the board is the source of DONE, issues mirror the open backlog, the roadmap doc rots. Before STARTING a task, prove it isn't already built by checking the **code** first, then the tracker; the moment any source is found stale, fix it that same turn.
- **Deploy after every commit** so the operator sees the change.

---

## 17. Pitfalls — paid-for lessons (don't relearn them)

- **`gh secret set NAME --body -`** stores the literal `"-"`. Use the `printf` pipe.
- **"✅ done" is not proof** — re-read the resource; the worst bugs are where the success message fired but the durable state didn't change.
- **Skipping the startup ritual** cost ~40 min once (re-probing already-known selectors). Two minutes of reading first, always.
- **Silent API failures** — rate limits / expired tokens often return a 200 with an empty body or a re-auth redirect, not a clean error. Assert on response *shape*. Cache the failure mode in a concept page with a `staleness_window`.
- **Async / eventual consistency** — re-check after a short wait before declaring failure; don't raise on the first miss.
- **Scope creep into a parallel memory store** — the graph wiki + git + Graphify already give persistence, versioning, links, and discovery. Two sources of truth age badly; move-and-cross-link, don't fork. (Why RAG is opt-in, not core.)
- **Non-deterministic graph clustering** — pin `PYTHONHASHSEED=0` or `graphify-out/` churns every run.
- **Index rot silently misleads.** An incrementally-synced code-graph index loses cross-file edges: sync detects changes via `git status`, so after a commit / checkout / pull / rebase the tree is clean, sync reports "up to date", and the graph quietly rots — measured once at a **5× under-report** of call edges with *no sign* anything was missing. Run a FULL rebuild (`<graph> index -f`, a few seconds) after any branch switch, pull, rebase, or large multi-file change, and at `/ship`. Non-zero unresolved refs = stale; rebuild before trusting the answer.
- **Worktree toolchain trap.** A fresh `git worktree` starts without the toolchain's cache (dependency cache / virtualenv / the code-graph index), so a tool run inside it resolves against the **main** checkout — compiling the wrong code while reading the worktree's files, a silent wrong-result class. Rebuild the toolchain cache *inside the checkout you are working in* before running any tool; each worktree also owns its code-graph index (the MCP server serves the checkout it was started in) — re-index the one you're actually querying.
- **Trackers filed from stale prose ≈ double-build.** Two tickets were once opened from a stale roadmap doc for work that had shipped a **month earlier**; they were picked up as "next tasks" and were minutes from being rebuilt — only opening the code caught it. Check the **code** before *starting*, not just the tracker (§16).

---

## 18. Adoption checklist

- [ ] Drop this file in the repo; tell the agent to adopt + bootstrap.
- [ ] Install Karpathy (plugin or global skill); reference it in `CLAUDE.md`.
- [ ] Write `CLAUDE.md` (§5).
- [ ] Scaffold `wiki/{sources,entities,concepts}` + `Context/` + seeds (`index/log/overview`).
- [ ] `.obsidian/` config (§7); open the repo as a vault — confirm graph + properties.
- [ ] Install Graphify; `git config core.hooksPath .githooks`; first build; commit `graphify-out/`.
- [ ] Add `.claude/commands/loop-*.md` + `.loops/{guardrails,reflexion}.md` (§11).
- [ ] Add `/ship` (`.claude/commands/ship.md` + `~/.claude/` mirror); fix `.gitignore` to un-ignore skills/commands.
- [ ] Add `.claude/settings.json` hooks (§12).
- [ ] `gh secret set` credentials; add `.github/workflows/` (§14).
- [ ] Set up operator memory locally (`~/.claude/projects/<slug>/memory/`).
- [ ] First **ingest**: drop a real source in `Context/`, ask the agent to process it, watch the graph appear, then `/ship`.
- [ ] Verify the point: a brand-new session answers a question only written to `wiki/` last session, without re-explanation.

---

## 19. Instantiating for a new domain

This framework is the *chassis*; a project supplies the *content*. To adapt:
1. **Entities** = the nouns your project tracks (clients, vendors, services, components, accounts).
2. **Concepts** = the APIs, workflows, rules, and policies (one page each; tag rate-limit/credential pages `staleness_window: 90d`).
3. **Sources** = whatever you drop in `Context/` (briefs, exports, transcripts).
4. **Loops** = keep all 13; swap each check command for your stack's equivalent.
5. **Workflows** = your scheduled ingest + any triggerable automation.
6. **House rules** = §16 as-is, plus any project-specific gate (encode it in `/ship` and `.loops/guardrails.md`).

Don't pre-create empty pages — each is born on the first real ingest that
mentions it. The graph grows from `Context/`, one ingest at a time.

---

*This framework is itself an artifact of the method it describes: plain
Markdown, version-controlled, handed to the next agent. Drop your files in
`Context/`, adopt the framework, and session #50 stands on session #1's
shoulders. Twin: `universal-agent-framework.codex.md`.*
