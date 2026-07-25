---
type: concept
created: 2026-07-25
updated: 2026-07-25
sources: [adama-project-brief, github-repository-inspection-2026-07-25]
confidence: high
status: active
verified_by: Codex 2026-07-25
staleness_window: 90d
relates_to: [adama]
tags: [architecture, licensing, repository-selection]
---
# Repository selection for the ADAMA social media agent

## Decision

Use `langchain-ai/social-media-agent` as the legal and engineering base.

Reuse selected product ideas—not copied code—from
`anthonyonazure/social-agent` unless that repository adds a real license file.
Port the account-analysis, viral-critique, and post-improvement patterns from
the MIT-licensed `MODSetter/gpt-instagram`. Treat
`Anil-matcha/Free-AI-Social-Media-Scheduler` only as a later reference for a
simple queue UI and publishing-status model.

## Comparison

| Repository | License reality | Strengths | Main gap for ADAMA | Verdict |
|---|---|---|---|---|
| `langchain-ai/social-media-agent` | Root MIT license | Mature LangGraph workflows, human interrupts, scheduling, verification/reflection, tests and CI, active maintenance | Twitter/LinkedIn and URL-first; no Instagram content model or ADAMA planning layer; several paid APIs | Best base |
| `MODSetter/gpt-instagram` | Root MIT license | Historical Instagram analysis, personality/style synthesis, trend research, viral critic, image generator, iterative improvement | Explicit toy project; old Basic Display API assumptions; almost no tests or operational workflow | Reuse agent/prompt patterns |
| `anthonyonazure/social-agent` | README says MIT, but no root license file | Closest architecture: Postgres state machine, stateless workers, audit log, HITL inbox, mock providers, IG/TikTok adapters, dashboard | Legally unlicensed as checked; no tests/CI; very new and lightly validated; video/avatar-specific | Do not copy code until licensed |
| `Anil-matcha/Free-AI-Social-Media-Scheduler` | Root MIT license | Simple Next.js queue, accounts, scheduling statuses, auth and persistence | Not an autonomous agent; Instagram is marked “Coming Soon”; depends on MuAPI and includes irrelevant billing | Later publishing/UI reference only |

## Recommended architecture

1. **LangGraph orchestration** — durable graphs for research, planning,
   generation, critique, revision, and approval interrupts.
2. **Postgres durable state** — campaigns, content ideas, drafts, assets,
   approvals, queue items, publication attempts, and analytics snapshots.
3. **Content state machine** — `idea → researched → drafted → critiqued →
   revision_needed|approval_pending → approved → scheduled → published|failed`.
   The MVP must not permit an automatic transition from `approval_pending` to
   `approved`.
4. **ADAMA brand memory** — versioned tone, visual, topic, religious-calendar,
   safety, and language rules; Russian primary with Hebrew/English where useful.
5. **Format-specific outputs** — typed schemas for Reel scripts, carousel
   slides, stories, memes, announcements, captions, design briefs, and ads.
6. **Provider boundary** — LLM, trend search, Instagram analysis, asset
   generation, and publishers behind interfaces with mock implementations.
7. **Approval inbox** — approve, reject, edit, request revision, and record the
   human decision with an audit trail.
8. **Publisher adapters later** — Meta Graph API and Telegram added only after
   the approval pipeline is stable.
9. **Analytics loop later** — ingest reach, saves, shares, comments, retention,
   and follows; use results to adjust planning, never to bypass brand rules.

## Reusable parts

### From LangChain

- LangGraph state and subgraph composition.
- Human-in-the-loop interrupts and Agent Inbox integration.
- Scheduled jobs, reflection, verification, retries, and structured state.
- Test/CI conventions and provider separation.
- Image search/generation flow, after replacing platform assumptions.

### From GPT-Instagram

- Historical-post explainer and condensed style profile.
- Research → generation → viral critique → improvement loop.
- Instagram-oriented structured output and conversational revision.
- Do not retain obsolete Basic Display API integration without revalidation.

### From social-agent

- Architecture concepts only until licensing is fixed: strict state machine,
  stateless workers, `FOR UPDATE SKIP LOCKED`, append-only workflow audit,
  mock providers, and an approval dashboard.

### From the scheduler

- Queue/status UI concepts, account connection model, retries, and publication
  history. Exclude Stripe/credits and MuAPI coupling from the ADAMA core.

## Principal risks

- Meta API access, permissions, token rotation, app review, and account type.
- “Free/open-source” code does not make LLM, search, media, hosting, or
  publishing APIs free.
- Existing Instagram history access may be narrower than old Basic Display API
  examples imply; validate against the current Meta API before implementation.
- Trend scraping is brittle and can violate platform terms if done outside
  supported APIs.
- Religious/cultural accuracy, dates, transliteration, and political
  sensitivity require explicit review rules.
- Virality optimization can conflict with trust and community safety.
- Multilingual output needs separate quality checks rather than translation
  after the fact.
- The most ADAMA-shaped candidate currently has no legally effective license
  file, so copying its code creates unacceptable provenance risk.

## First implementation roadmap

1. Freeze the research decision and create an upstream provenance record.
2. Import/fork the LangChain base into a feature branch while preserving MIT
   notices and git history.
3. Establish a minimal local quickstart with mock providers and green unit tests.
4. Replace Twitter/LinkedIn post state with an ADAMA content-item schema and
   format-specific Zod contracts.
5. Add account-ingest and brand-profile graphs using fixtures before live Meta
   credentials.
6. Add plan, draft, critique, revise, and mandatory approval graphs.
7. Add a minimal approval inbox and queue; keep publishing mocked.
8. Run a 2–4 week shadow-mode pilot against real ADAMA content.
9. Add Meta/Telegram adapters only after approval and audit behavior is proven.
10. Add analytics ingestion and recommendation feedback after publishing is
    reliable.

## Exact next Codex steps

Run these only after the operator confirms the selection:

```powershell
git switch -c research/select-langchain-base
git remote add upstream-template https://github.com/langchain-ai/social-media-agent.git
git fetch upstream-template main
git subtree add --prefix vendor/langchain-social-media-agent upstream-template main --squash
```

Then inspect before adapting:

```powershell
git -C vendor/langchain-social-media-agent status
Get-Content vendor/langchain-social-media-agent/LICENSE
Get-Content vendor/langchain-social-media-agent/package.json
rg -n "interrupt|schedule|human|approve|upload" vendor/langchain-social-media-agent/src
```

Preferred production approach after the audit is to extract only selected
LangGraph modules into ADAMA-owned directories, retain required attribution,
and delete the temporary vendor subtree before the first product commit if
full upstream history is not desired.
