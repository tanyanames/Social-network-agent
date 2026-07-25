---
description: Persist the current batch of changes — surgically stage, auto-log to wiki, commit with proper format, push to GitHub, verify remote sync, update the knowledge graph. Handles cross-repo changes by making one surgical commit per repo.
---

# /ship — save and ship the current batch of changes

You just finished a meaningful operation (code edit, rule change, wiki update,
skill tweak). The operator typed `/ship` to persist everything: locally, in the
wiki, in the log, and on GitHub. Be thorough but surgical — never `git add -A`,
never commit `.env` or anything with credentials.

Every meaningful operation has five outputs that land together: **code/config ·
skill/playbook · wiki concept pages · wiki log entry · GitHub commit+push.**

## Execution plan (in order; stop and ask if anything is ambiguous)

### 1. Diagnose
```bash
git status --short
git log --oneline -5
git diff --stat 2>/dev/null | tail -20
```
Identify the repo root; which files changed (code? wiki? log? skill? config?);
anything already staged; anything dangerous (`.env`, `*.key`, tokens, real
personal data → STOP and ask before staging).

### 2. Cross-repo detection
If the work touched more than one repo, do **one surgical commit per repo** —
never mash them. Report all commit hashes at the end.

### 3. Skill mirror sync
If `.claude/skills/<name>/SKILL.md` was edited, copy it to `~/.claude/skills/<name>/`
(repo copy canonical, home copy is the desktop mirror).

### 4. Auto-log entry
If the newest `## [YYYY-MM-DD]` entry in `wiki/log.md` doesn't already cover what
happened, prepend a new entry (newest-first within the day):
```markdown
## [YYYY-MM-DD] {ingest|update|incident|lint} | <short subject>
**Object**: what this touched, or "N/A — meta".
**Scenario**: feature | bugfix | refactor | rule-change | incident | ingest
**Outcome**: ✅ success | ⚠️ partial | ❌ failed
**What happened**: 1–3 plain-English paragraphs. Cite a new rule's origin.
**Code changes**: this commit — hash filled in after it lands.
**Updated**: relative paths.
```
Default YES on "is this meaningful". If the operator hand-wrote an entry, don't double-log.

### 5. Wiki index update
Add any new `wiki/{concepts,entities,sources}/` pages to `wiki/index.md` with a one-liner.

### 6. Stage surgically — explicit paths only, never `-A`/`.`
```bash
git add path/to/file ... wiki/log.md
git diff --cached --stat
```
Confirm no `.env`, no credentials, no scratch `_probe_*` scripts (delete those first).

### 7. Compose commit message (temp file avoids quoting headaches)
Subject ≤72 chars, present tense; body explains *why*, not *what*; date-stamp new
rules ("Per <operator> YYYY-MM-DD …"); cite related commit hashes.
```bash
cat > /tmp/commit-msg.txt <<'EOF'
<subject under 72 chars>

<why-body>
EOF
git commit -F /tmp/commit-msg.txt
```

### 8. Push
```bash
git push origin HEAD
```
If not on `main`, ask whether to open a PR first. Default: just push.

### 9. Verify remote sync
```bash
LOCAL_SHA=$(git rev-parse HEAD)
REMOTE_REPO=$(git remote get-url origin | sed -E 's#.*github\.com[:/]([^/]+/[^/.]+).*#\1#')
REMOTE_SHA=$(gh api "repos/$REMOTE_REPO/commits/$(git symbolic-ref --short HEAD)" --jq .sha 2>/dev/null | head -c 40)
[ "$LOCAL_SHA" = "$REMOTE_SHA" ] && echo "✓ remote in sync" || echo "✗ remote drift"
git status --short
```

### 9b. Knowledge graph update (Graphify)
The post-commit hook already rebuilt the graph. Commit any updated artifacts so
the next session reads a fresh graph (no API key — structural analysis only):
```bash
if ! git diff --quiet graphify-out/graph.json graphify-out/GRAPH_REPORT.md 2>/dev/null; then
  git add graphify-out/graph.json graphify-out/GRAPH_REPORT.md graphify-out/manifest.json 2>/dev/null
  GRAPHIFY_SKIP_HOOK=1 git commit -m "chore: update knowledge graph" 2>/dev/null \
    && git push origin HEAD && echo "  ✓ graph updated and pushed"
fi
```

### 10. Backfill the commit hash into the log entry (no `<hash>` placeholder ships).

### 11. Report — three lines: Done (subject + hash + URL) / Logged (which page) / Sync (✓ or drift).

## Hard rules
- NEVER `git add -A` / `git add .` — explicit paths only.
- NEVER commit `.env`, `*.key`, credentials, or live personal data.
- NEVER `--no-verify` unless the operator asks; fix the underlying hook failure.
- NEVER force-push `main` without explicit OK.
- NEVER create empty commits to satisfy /ship — if nothing's worth shipping, say so.
- Push immediately after commit. Local-only work is invisible to the next agent and to Actions.

## When NOT to use /ship
- Mid-task checkpoint → manual commit on a feature branch.
- Right after an unverified destructive op.
- While `.env`/secrets are dirty → clean them first.
