# Graph Report - Social Network Agent  (2026-07-25)

## Corpus Check
- 265 files · ~134,478 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1450 nodes · 2749 edges · 134 communities (79 shown, 55 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 50 edges (avg confidence: 0.51)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `eb555d55`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Universal Autonomous-Agent Operating Framework — **Claude edition**
- Universal Autonomous-Agent Operating Framework — **Codex edition**
- Universal Autonomous-Agent Operating Framework — **Claude edition**
- Universal Autonomous-Agent Operating Framework — **Codex edition**
- Execution plan (in order; stop and ask if anything is ambiguous)
- Execution plan (in order; stop and ask if anything is ambiguous)
- Social Network Agent — Project Schema
- userIgnoreFilters
- userIgnoreFilters
- HANDOVER — universal autonomous-agent framework (Codex, portable)
- Knowledge Base Index
- Project Guardrails
- agent-env-setup — one-button new-environment install
- Project Guardrails
- Reflexion Log
- Reflexion Log
- bootstrap.sh
- log.md
- loop-changelog.md
- loop-de-sloppify.md
- loop-debug.md
- loop-docs-sync.md
- loop-e2e.md
- loop-guardrails.md
- loop-investigate.md
- loop-lint.md
- loop-migrate.md
- loop-pr-babysitter.md
- loop-pr-review.md
- loop-spec-ship.md
- loop-visual-regression.md
- Repository selection for the ADAMA social media agent
- repurposer/index.ts
- verify-links-graph.ts
- graph.py
- ingest-data-graph.ts
- verify-general.ts
- ingest-data.ts
- video-summary.ts
- prompts/index.ts
- SocialAuthServer
- package.json
- verify-github.ts
- reflections.ts
- Detailed Feature List
- generatePostGraph
- human-node.ts
- dependencies
- src/tests/graph.int.test.ts
- LangGraph Application Integration with Slack
- langgraph-config.test.ts
- devDependencies
- memory-v2/langgraph.json
- ADAMA Social Media Agent
- twitter/index.ts
- checkLanggraphPaths.js
- validate-images/inputs.ts
- delay-run.ts
- cheerio
- date-fns
- date-fns-tz
- @eslint/eslintrc
- @eslint/js
- eslint-plugin-import
- eslint-plugin-no-instanceof
- eslint-plugin-prettier
- express-session
- file-type
- @google/genai
- @googleapis/youtube
- jest
- @jest/globals
- @langchain/community
- @langchain/core
- @langchain/google-vertexai-web
- @langchain/langgraph-sdk
- @langchain/openai
- langsmith
- @mendable/firecrawl-js
- moment
- @octokit/rest
- passport
- passport-twitter
- playwright
- prettier
- sharp
- @slack/web-api
- snoowrap
- @supabase/supabase-js
- timezone-mock
- ts-jest
- @tsconfig/recommended
- tsx
- @types/express
- @types/express-session
- @types/jest
- @types/passport
- @types/passport-twitter
- @types/snoowrap
- @types/xml2js
- typescript
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- xml2js
- zod
- inputs-outputs.ts
- SETUP.md
- e2e/inputs.ts
- langgraph-slack
- memory-v2
- eslint-config-prettier

## God Nodes (most connected - your core abstractions)
1. `scripts` - 25 edges
2. `TwitterClient` - 23 edges
3. `Universal Autonomous-Agent Operating Framework — **Claude edition**` - 23 edges
4. `Universal Autonomous-Agent Operating Framework — **Codex edition**` - 23 edges
5. `Submission` - 20 edges
6. `SlackClient` - 20 edges
7. `getUrlType()` - 19 edges
8. `compilerOptions` - 19 edges
9. `imageUrlToBuffer()` - 16 edges
10. `RedditClient` - 16 edges

## Surprising Connections (you probably didn't know these)
- `generatePostOrContinue()` --calls--> `useLangChainPrompts()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/curate-data/index.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `extractContentsFunc()` --calls--> `isValidUrl()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/ingest-repurposed-data/nodes/extract.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `filterRedditPosts()` --calls--> `isValidUrl()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/curate-data/loaders/reddit.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `getAfterSeconds()` --calls--> `getAfterSecondsFromLinks()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/curate-data/nodes/generate-posts-subgraph.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `generatePostsSubgraph()` --calls--> `shouldPostToLinkedInOrg()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/curate-data/nodes/generate-posts-subgraph.ts → vendor/langchain-social-media-agent/src/agents/utils.ts

## Import Cycles
- None detected.

## Communities (134 total, 55 thin omitted)

### Community 0 - "Universal Autonomous-Agent Operating Framework — **Claude edition**"
Cohesion: 0.08
Nodes (37): formatGroupsPrompt(), formatTweetsInGroup(), parseGeneration(), reGroupTweets(), splitGroups(), formatTweetsInGroup(), formatUserPrompt(), parseGeneration() (+29 more)

### Community 1 - "Universal Autonomous-Agent Operating Framework — **Codex edition**"
Cohesion: 0.06
Nodes (23): { agent }, posts, createApp(), ADAMA_BRAND_PROFILE, assertFormat(), CONTENT_FORMATS, CONTENT_STATES, createContentItem() (+15 more)

### Community 2 - "Universal Autonomous-Agent Operating Framework — **Claude edition**"
Cohesion: 0.08
Nodes (23): 0. The one-paragraph thesis, 10. The operating loop (the three habits), 10b. Autonomy & decision posture (autopilot is the default), 11. Quality-gate loops (the 13 self-pacing loops), 12. Hooks — event-driven automation glue, 13. `/ship` — one button for the whole tail, 14. CI/CD & deployment (GitHub), 15. Versioning & git conventions (+15 more)

### Community 3 - "Universal Autonomous-Agent Operating Framework — **Codex edition**"
Cohesion: 0.08
Nodes (23): 0. The one-paragraph thesis, 10. The operating loop (the three habits), 10b. Autonomy & decision posture (autopilot is the default), 11. Quality-gate loops (the 13 self-pacing loops), 12. Hooks — event-driven automation glue, 13. `/ship` — one button for the whole tail, 14. CI/CD & deployment (GitHub), 15. Versioning & git conventions (+15 more)

### Community 4 - "Execution plan (in order; stop and ask if anything is ambiguous)"
Cohesion: 0.07
Nodes (26): getScheduledRuns(), PendingRun, builder, graph, extract(), extractContents, extractContentsFunc(), extractionSchema (+18 more)

### Community 5 - "Execution plan (in order; stop and ask if anything is ambiguous)"
Cohesion: 0.12
Nodes (16): 10. Backfill the commit hash into the log entry (no `<hash>` placeholder ships)., 11. Report — three lines: Done (subject + hash + URL) / Logged (which page) / Sync (✓ or drift)., 1. Diagnose, 2. Cross-repo detection, 3. Skill mirror sync, 4. Auto-log entry, 5. Wiki index update, 6. Stage surgically — explicit paths only, never `-A`/`.` (+8 more)

### Community 6 - "Social Network Agent — Project Schema"
Cohesion: 0.14
Nodes (13): Auto-fire the loops (`~/.codex/prompts/loop-*.md`) at their trigger moments., Auto-logging rule (no exceptions), Autopilot is the default, Before any git commit, Behavioral guidelines (Karpathy), First-run behaviour, Operations, Page conventions (+5 more)

### Community 7 - "userIgnoreFilters"
Cohesion: 0.04
Nodes (44): Advanced Setup, Arcade setup, Clone the repository:, Clone the repository:, Customization, Generate Post, Install dependencies:, Install dependencies: (+36 more)

### Community 8 - "userIgnoreFilters"
Cohesion: 0.18
Nodes (10): alwaysUpdateLinks, attachmentFolderPath, node_modules, newLinkFormat, useMarkdownLinks, userIgnoreFilters, .agents, .claude (+2 more)

### Community 9 - "HANDOVER — universal autonomous-agent framework (Codex, portable)"
Cohesion: 0.05
Nodes (41): author, description, license, main, name, packageManager, private, resolutions (+33 more)

### Community 10 - "Knowledge Base Index"
Cohesion: 0.06
Nodes (28): ADAMA mock MVP, Implemented flow, Safety invariant, Verification, Comparison, Decision, Exact next Codex steps, First implementation roadmap (+20 more)

### Community 11 - "Project Guardrails"
Cohesion: 0.11
Nodes (27): EXAMPLES, generateThreadGraph, generateThreadWorkflow, generateThreadPlan(), parseTotalPosts(), TODO: Make this pass to an LLM and have the LLM extract the number., generateThreadPosts(), constructDescription() (+19 more)

### Community 12 - "agent-env-setup — one-button new-environment install"
Cohesion: 0.13
Nodes (32): ALLOWED_P1_DAY_AND_TIMES_IN_UTC, ALLOWED_P2_DAY_AND_TIMES_IN_UTC, ALLOWED_P3_DAY_AND_TIMES_IN_UTC, ALLOWED_R1_DAY_AND_TIMES_IN_UTC, ALLOWED_R2_DAY_AND_TIMES_IN_UTC, ALLOWED_R3_DAY_AND_TIMES_IN_UTC, DEFAULT_TAKEN_DATES, getNextFriday() (+24 more)

### Community 13 - "Project Guardrails"
Cohesion: 0.40
Nodes (4): Guardrail: Never `git add -A` or `git add .`, Guardrail: Read wiki/index.md before answering domain questions, Guardrail: wiki/log.md entries go at the TOP (newest-first), Project Guardrails

### Community 14 - "Reflexion Log"
Cohesion: 0.06
Nodes (33): dist, DOM, ES2021, ES2022.Object, jest, jest.setup.cjs, **/*.js, node (+25 more)

### Community 15 - "Reflexion Log"
Cohesion: 0.50
Nodes (3): Attempt N, Reflexion Log, [YYYY-MM-DD] Bug: <short description>

### Community 16 - "bootstrap.sh"
Cohesion: 0.07
Nodes (11): FlairTemplate, ImagePreview, ImagePreviewSource, ListingOptions, Media, MediaEmbed, RedditContent, RichTextFlair (+3 more)

### Community 17 - "log.md"
Cohesion: 0.33
Nodes (5): [2026-07-25] ingest | ADAMA project brief and repository research, [2026-07-25] update | add content planning and shadow-mode gates, [2026-07-25] update | adopt universal agent framework, [2026-07-25] update | build ADAMA mock approval pipeline, Wiki Log

### Community 18 - "loop-changelog.md"
Cohesion: 0.10
Nodes (17): getInterrupts(), redoInterrupts(), updateImageUrls(), uploadImageBufferToSupabase(), getUrlForScreenshot(), takeScreenshotAndUpload(), ALLOWED_DAYS, GITHUB_BROWSER_CONTEXT_OPTIONS (+9 more)

### Community 19 - "loop-de-sloppify.md"
Cohesion: 0.12
Nodes (25): dotenv, FastAPI, Request, TypedDict, uuid, dotenv, uuid, _build_contextual_message() (+17 more)

### Community 20 - "loop-debug.md"
Cohesion: 0.16
Nodes (14): curatedPostInterruptGraph, workflow, CuratedPostInterruptAnnotation, CuratedPostInterruptConfigurableAnnotation, CuratedPostInterruptState, CuratedPostInterruptUpdate, TODO: Refactor the post/complexPost state interfaces to use a single shared inte, rewritePost() (+6 more)

### Community 21 - "loop-docs-sync.md"
Cohesion: 0.19
Nodes (15): condenseOrHumanConditionalEdge(), routeToCuratedInterruptOrContinue(), builder, generatePostFromMessages(), graph, generatePostsFromMessages(), schedulePost(), sendSlackMessage() (+7 more)

### Community 22 - "loop-e2e.md"
Cohesion: 0.05
Nodes (74): getAllUsedLinks(), getCurrentInterrupts(), getScheduledPosts(), checkRedditURLExists(), checkTwitterURLExists(), extractAINewsletterContent(), answerSchema, formatTweets() (+66 more)

### Community 23 - "loop-guardrails.md"
Cohesion: 0.08
Nodes (23): RUN npx -y playwright@1.61.1 install --with-deps, dependencies, dockerfile_lines, env, graphs, curate_data, curated_post_interrupt, generate_post (+15 more)

### Community 24 - "loop-investigate.md"
Cohesion: 0.15
Nodes (14): generatePostBuilder, BASE_GENERATE_POST_CONFIG, GeneratePostConfigurableAnnotation, GeneratePostState, GeneratePostUpdate, LangChainProduct, TODO: Refactor the post/complexPost state interfaces to use a single shared inte, YouTubeVideoSummary (+6 more)

### Community 25 - "loop-lint.md"
Cohesion: 0.46
Nodes (6): startGenerateReportRuns(), formatUserPrompt(), RELEVANCY_SCHEMA, validateRedditPost(), convertPostToString(), formatComments()

### Community 26 - "loop-migrate.md"
Cohesion: 0.06
Nodes (31): authSocialsPassthrough(), getArcadeLinkedInAuthOrInterrupt(), getBasicLinkedInAuthOrInterrupt(), getLinkedInAuthOrInterrupt(), getBasicTwitterAuthOrInterrupt(), getTwitterAuthOrInterrupt(), ensureSignature(), getMediaFromImage() (+23 more)

### Community 27 - "loop-pr-babysitter.md"
Cohesion: 0.09
Nodes (18): isRedditPostUrl(), RedditClient, getRedditUserlessToken(), RedditTokenResponse, Data, Gildings, Image, MediaEmbed (+10 more)

### Community 28 - "loop-pr-review.md"
Cohesion: 0.14
Nodes (14): curateDataGraph, curateDataWorkflow, generatePostOrContinue(), formatData(), getTweetGroupEngagement(), groupTweetsByContent(), parseGeneration(), CurateDataAnnotation (+6 more)

### Community 29 - "loop-spec-ship.md"
Cohesion: 0.40
Nodes (4): ADAMA shadow-mode runbook, Daily workflow, Exit criteria, Hard boundary

### Community 30 - "loop-visual-regression.md"
Cohesion: 0.12
Nodes (20): verifyRedditWrapper(), VerifyLinksGraphConfigurableAnnotation, getPost(), FormattedRedditPost, RedditPostChildren, RedditPostData, RedditPostData2, RedditPostGildings (+12 more)

### Community 32 - "repurposer/index.ts"
Cohesion: 0.09
Nodes (37): repurposerBuilder, repurposerGraph, generateCampaignPlan(), formatUserPrompt(), generatePosts(), startInterruptGraphRuns(), repurposerPostInterruptGraph, workflow (+29 more)

### Community 33 - "verify-links-graph.ts"
Cohesion: 0.20
Nodes (16): verifyContentIsRelevant, verifyGeneralContent(), verifyLumaEvent(), RELEVANCY_SCHEMA, verifyYouTubeContent(), VerifyYouTubeContentReturn, VerifyContentAnnotation, skipContentRelevancyCheck (+8 more)

### Community 36 - "graph.py"
Cohesion: 0.17
Nodes (14): Any, BaseStore, @langchain/anthropic, aget_reflections(), aput_reflections(), The reflection graph., Get reflections from the store., Put reflections in the store. (+6 more)

### Community 38 - "ingest-data-graph.ts"
Cohesion: 0.20
Nodes (11): IngestDataAnnotation, IngestDataConfigurableAnnotation, LangChainProduct, SimpleSlackMessageWithLinks, getChannelIdFromConfig(), ingestSlackData(), ingestTweets(), TweetResult (+3 more)

### Community 39 - "verify-general.ts"
Cohesion: 0.18
Nodes (12): TODO: Type casting as any here shouldn't be required..., RELEVANCY_SCHEMA, getUrlContents, getUrlContentsFunc(), RELEVANCY_SCHEMA, UrlContents, getUrlContents, getUrlContentsFunc() (+4 more)

### Community 40 - "ingest-data.ts"
Cohesion: 0.06
Nodes (47): aiNewsBlogLoader, RSSFeed, RSSItem, getOctokit(), getSinceDate(), langchainDependencyReposLoader, langchainDependencyReposLoaderFunc(), LIMITS (+39 more)

### Community 42 - "video-summary.ts"
Cohesion: 0.29
Nodes (12): getChannelInfo(), getVideoID(), getVideoThumbnailUrl(), getYouTubeClientFromUrl(), getYouTubeVideoDuration(), parseDuration(), TODO: Handle this better, generateVideoSummary() (+4 more)

### Community 43 - "prompts/index.ts"
Cohesion: 0.27
Nodes (7): getPrompts(), NOTE: you should likely not have this set, unless you want to use the LangChain, TWEET_EXAMPLES, LANGCHAIN_DOMAINS, shouldExcludeGeneralContent(), shouldExcludeGitHubContent(), useLangChainPrompts()

### Community 46 - "SocialAuthServer"
Cohesion: 0.21
Nodes (5): express-session, main(), SessionData, SocialAuthServer, TwitterUser

### Community 50 - "package.json"
Cohesion: 0.17
Nodes (11): engines, node, name, private, scripts, check, demo, dev (+3 more)

### Community 51 - "verify-github.ts"
Cohesion: 0.27
Nodes (11): fetchStargazersCount(), verifyGitHubWrapper(), GeneratePostAnnotation, getDependencies(), getOctokit(), RELEVANCY_SCHEMA, verifyGitHubContent(), verifyGitHubContentIsRelevant() (+3 more)

### Community 52 - "reflections.ts"
Cohesion: 0.17
Nodes (15): ALLOWED_TIMES, condensePost(), generatePost(), formatPrompt(), parseGeneration(), reflection(), ReflectionAnnotation, reflectionGraph (+7 more)

### Community 53 - "Detailed Feature List"
Cohesion: 0.18
Nodes (10): Detailed Feature List, Exclude URLs, Generate Post, Key, Key, Main Key, Shared, Skip Content Verification (+2 more)

### Community 56 - "generatePostGraph"
Cohesion: 0.19
Nodes (12): generatePostGraph, evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph(), evaluatePost(), runEval(), runGraph() (+4 more)

### Community 57 - "human-node.ts"
Cohesion: 0.21
Nodes (13): checkIfUrlsArePreviouslyUsed(), generateReportOrEndConditionalEdge(), constructDescription(), ConstructDescriptionArgs, getUnknownResponseDescription(), humanNode(), TODO: Update so if the mime type is blacklisted, it re-routes to human node with, routeResponse() (+5 more)

### Community 58 - "dependencies"
Cohesion: 0.22
Nodes (9): @arcadeai/arcadejs, express, google-auth-library, twitter-api-v2, dependencies, @arcadeai/arcadejs, express, google-auth-library (+1 more)

### Community 59 - "src/tests/graph.int.test.ts"
Cohesion: 0.36
Nodes (5): GITHUB_MESSAGE, GITHUB_URL_STATE, TWITTER_NESTED_GENERAL_MESSAGE, TWITTER_NESTED_GITHUB_MESSAGE, TWITTER_NESTED_YOUTUBE_MESSAGE

### Community 61 - "LangGraph Application Integration with Slack"
Cohesion: 0.25
Nodes (7): Customizing the input and output, Flow, `From Scratch` Slack App Setup, LangGraph Application Integration with Slack, Prerequisites, Quickstart, Quickstart setup

### Community 62 - "langgraph-config.test.ts"
Cohesion: 0.36
Nodes (6): escapeRegExp(), getLanggraphConfig(), getRepoRoot(), getResolvedPlaywrightVersionFromYarnLock(), LanggraphConfig, PackageJson

### Community 63 - "devDependencies"
Cohesion: 0.29
Nodes (7): cross-env, eslint, @types/node, devDependencies, cross-env, eslint, @types/node

### Community 66 - "memory-v2/langgraph.json"
Cohesion: 0.33
Nodes (5): dependencies, env, graphs, reflection_v2, .

### Community 67 - "ADAMA Social Media Agent"
Cohesion: 0.40
Nodes (4): ADAMA Social Media Agent, Requirements, Run, Safety invariant

### Community 68 - "twitter/index.ts"
Cohesion: 0.60
Nodes (4): evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 70 - "checkLanggraphPaths.js"
Cohesion: 0.83
Nodes (3): checkLanggraphPaths(), fileExists(), isObjectExported()

### Community 71 - "validate-images/inputs.ts"
Cohesion: 0.50
Nodes (3): INPUTS, OUTPUTS, TEST_EACH_INPUTS_OUTPUTS

## Knowledge Gaps
- **461 isolated node(s):** `attachmentFolderPath`, `newLinkFormat`, `useMarkdownLinks`, `alwaysUpdateLinks`, `node_modules` (+456 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **55 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `HANDOVER — universal autonomous-agent framework (Codex, portable)`, `loop-de-sloppify.md`, `Repository selection for the ADAMA social media agent`, `graph.py`, `cheerio`, `date-fns`, `date-fns-tz`, `express-session`, `file-type`, `@google/genai`, `@googleapis/youtube`, `@langchain/community`, `@langchain/core`, `@langchain/google-vertexai-web`, `@langchain/langgraph-sdk`, `@langchain/openai`, `langsmith`, `@mendable/firecrawl-js`, `moment`, `@octokit/rest`, `passport`, `passport-twitter`, `playwright`, `sharp`, `@slack/web-api`, `snoowrap`, `@supabase/supabase-js`, `@types/snoowrap`, `xml2js`, `zod`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `HANDOVER — universal autonomous-agent framework (Codex, portable)`, `eslint-config-prettier`, `@eslint/eslintrc`, `@eslint/js`, `eslint-plugin-import`, `eslint-plugin-no-instanceof`, `eslint-plugin-prettier`, `jest`, `@jest/globals`, `prettier`, `timezone-mock`, `ts-jest`, `@tsconfig/recommended`, `tsx`, `@types/express`, `@types/express-session`, `@types/jest`, `@types/passport`, `@types/passport-twitter`, `@types/xml2js`, `typescript`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **What connects `attachmentFolderPath`, `newLinkFormat`, `useMarkdownLinks` to the rest of the system?**
  _461 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Universal Autonomous-Agent Operating Framework — **Claude edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.07547169811320754 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Codex edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.06334841628959276 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Claude edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Codex edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._