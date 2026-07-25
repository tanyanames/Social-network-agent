# Graph Report - Social Network Agent  (2026-07-26)

## Corpus Check
- 278 files · ~139,909 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1523 nodes · 2836 edges · 147 communities (93 shown, 54 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.51)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d6b46646`
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
- extract-ai-newsletter-content.ts
- reddit/types.ts
- graph.py
- find-and-generate-images-graph.ts
- verify-general.ts
- verify-general.ts
- generate-post/index.ts
- content.mjs
- video-summary.ts
- generate-thread-posts.ts
- src/tests/graph.int.test.ts
- express
- SocialAuthServer
- adama-profile.mjs
- generate-thread-posts.ts
- verify-github.ts
- package.json
- curate-data/types.ts
- GeneratePostAnnotation
- Detailed Feature List
- general/index.ts
- skipUsedUrlsCheck
- twitter/index.ts
- human-node.ts
- index-local-vault.py
- LangGraph Application Integration with Slack
- langgraph-config.test.ts
- devDependencies
- general/index.ts
- memory-v2/langgraph.json
- ADAMA Social Media Agent
- twitter/index.ts
- google-auth-library
- checkLanggraphPaths.js
- validate-images/inputs.ts
- delay-run.ts
- cheerio
- date-fns-tz
- @langchain/langgraph
- @eslint/eslintrc
- @eslint/js
- eslint-plugin-import
- eslint-plugin-no-instanceof
- eslint-plugin-prettier
- express-session
- file-type
- Repository selection for the ADAMA social media agent
- @googleapis/youtube
- jest
- @jest/globals
- @langchain/community
- JsonFileStore
- @langchain/google-vertexai-web
- @langchain/openai
- langsmith
- Local vault import — Downloads and work
- moment
- chunkArray
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
- Knowledge Base Index
- eslint-config-prettier
- ADAMA mock MVP
- express-session

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
- `findImages()` --indirect_call--> `extractAllImageUrlsFromMarkdown()`  [INFERRED]
  vendor/langchain-social-media-agent/src/agents/find-and-generate-images/nodes/find-images.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `extractContentsFunc()` --calls--> `isValidUrl()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/ingest-repurposed-data/nodes/extract.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `routePostUrls()` --calls--> `getUrlType()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/verify-reddit-post/verify-reddit-post-graph.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `generatePostOrContinue()` --calls--> `useLangChainPrompts()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/curate-data/index.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `filterRedditPosts()` --calls--> `isValidUrl()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/curate-data/loaders/reddit.ts → vendor/langchain-social-media-agent/src/agents/utils.ts

## Import Cycles
- None detected.

## Communities (147 total, 54 thin omitted)

### Community 0 - "Universal Autonomous-Agent Operating Framework — **Claude edition**"
Cohesion: 0.06
Nodes (50): curateDataGraph, curateDataWorkflow, formatData(), getTweetGroupEngagement(), groupTweetsByContent(), parseGeneration(), formatGroupsPrompt(), formatTweetsInGroup() (+42 more)

### Community 1 - "Universal Autonomous-Agent Operating Framework — **Codex edition**"
Cohesion: 0.11
Nodes (13): { agent }, posts, { agent }, created, createApp(), createOperationalApp(), fixtureTrendMap, MockAccountAnalyzer (+5 more)

### Community 2 - "Universal Autonomous-Agent Operating Framework — **Claude edition**"
Cohesion: 0.08
Nodes (23): 0. The one-paragraph thesis, 10. The operating loop (the three habits), 10b. Autonomy & decision posture (autopilot is the default), 11. Quality-gate loops (the 13 self-pacing loops), 12. Hooks — event-driven automation glue, 13. `/ship` — one button for the whole tail, 14. CI/CD & deployment (GitHub), 15. Versioning & git conventions (+15 more)

### Community 3 - "Universal Autonomous-Agent Operating Framework — **Codex edition**"
Cohesion: 0.08
Nodes (23): 0. The one-paragraph thesis, 10. The operating loop (the three habits), 10b. Autonomy & decision posture (autopilot is the default), 11. Quality-gate loops (the 13 self-pacing loops), 12. Hooks — event-driven automation glue, 13. `/ship` — one button for the whole tail, 14. CI/CD & deployment (GitHub), 15. Versioning & git conventions (+15 more)

### Community 4 - "Execution plan (in order; stop and ask if anything is ambiguous)"
Cohesion: 0.16
Nodes (15): builder, graph, extract(), extractContents, extractContentsFunc(), extractionSchema, TODO: Update Slack message handler to include fileIds, getChannelIdFromConfig() (+7 more)

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
Cohesion: 0.24
Nodes (8): GeneratePostConfigurableAnnotation, GeneratePostState, GeneratePostUpdate, LangChainProduct, TODO: Refactor the post/complexPost state interfaces to use a single shared inte, YouTubeVideoSummary, postSchema, rewritePostWithSplitUrl()

### Community 11 - "Project Guardrails"
Cohesion: 0.21
Nodes (11): generateThreadGraph, generateThreadWorkflow, generateThreadPlan(), parseTotalPosts(), TODO: Make this pass to an LLM and have the LLM extract the number., rewriteThread(), schema, scheduleThread() (+3 more)

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
Cohesion: 0.18
Nodes (10): [2026-07-25] ingest | ADAMA project brief and repository research, [2026-07-25] ingest | audit connected CBA.young Figma sandbox, [2026-07-25] ingest | index local Downloads and work vaults, [2026-07-25] update | add content planning and shadow-mode gates, [2026-07-25] update | add editable per-channel approval workspace, [2026-07-25] update | adopt universal agent framework, [2026-07-25] update | build ADAMA mock approval pipeline, [2026-07-25] update | make ADAMA shadow mode operational across channels (+2 more)

### Community 18 - "loop-changelog.md"
Cohesion: 0.08
Nodes (32): getInterrupts(), redoInterrupts(), updateImageUrls(), fetchStargazersCount(), verifyGitHubWrapper(), uploadImageBufferToSupabase(), checkIsGitHubImageUrl(), findImages() (+24 more)

### Community 19 - "loop-de-sloppify.md"
Cohesion: 0.12
Nodes (25): dotenv, FastAPI, Request, TypedDict, uuid, dotenv, uuid, _build_contextual_message() (+17 more)

### Community 20 - "loop-debug.md"
Cohesion: 0.29
Nodes (8): generatePostGraph, evaluatePost(), runEval(), runGraph(), evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 21 - "loop-docs-sync.md"
Cohesion: 0.15
Nodes (15): curatedPostInterruptGraph, workflow, CuratedPostInterruptAnnotation, CuratedPostInterruptConfigurableAnnotation, CuratedPostInterruptState, CuratedPostInterruptUpdate, TODO: Refactor the post/complexPost state interfaces to use a single shared inte, IngestDataAnnotation (+7 more)

### Community 22 - "loop-e2e.md"
Cohesion: 0.20
Nodes (14): repurposerBuilder, repurposerGraph, extractContent(), generateCampaignPlan(), formatUserPrompt(), generatePosts(), startInterruptGraphRuns(), Image (+6 more)

### Community 23 - "loop-guardrails.md"
Cohesion: 0.08
Nodes (23): RUN npx -y playwright@1.61.1 install --with-deps, dependencies, dockerfile_lines, env, graphs, curate_data, curated_post_interrupt, generate_post (+15 more)

### Community 24 - "loop-investigate.md"
Cohesion: 0.22
Nodes (6): reflection(), ReflectionAnnotation, reflectionGraph, reflectionWorkflow, NAMESPACE, putReflectionsPrompt()

### Community 25 - "loop-lint.md"
Cohesion: 0.13
Nodes (24): repurposerPostInterruptGraph, workflow, humanNode(), routeResponse(), routeResponseSchema, constructDescription(), formatImageDescriptions(), getUnknownResponseDescription() (+16 more)

### Community 26 - "loop-migrate.md"
Cohesion: 0.21
Nodes (10): VerifyContentAnnotation, verifyLinksWorkflow, sharedLinksReducer(), VerifyLinksGraphAnnotation, VerifyLinksGraphConfigurableAnnotation, VerifyLinksGraphSharedAnnotation, verifyTweetBuilder, verifyTweetGraph (+2 more)

### Community 27 - "loop-pr-babysitter.md"
Cohesion: 0.09
Nodes (19): isRedditPostUrl(), RedditClient, getRedditUserlessToken(), RedditTokenResponse, Data, Gildings, Image, MediaEmbed (+11 more)

### Community 28 - "loop-pr-review.md"
Cohesion: 0.06
Nodes (34): authSocialsPassthrough(), ingestTweets(), TweetResult, getArcadeLinkedInAuthOrInterrupt(), getBasicLinkedInAuthOrInterrupt(), getLinkedInAuthOrInterrupt(), getArcadeTwitterAuthOrInterrupt(), getBasicTwitterAuthOrInterrupt() (+26 more)

### Community 29 - "loop-spec-ship.md"
Cohesion: 0.40
Nodes (4): ADAMA shadow-mode runbook, Daily workflow, Exit criteria, Hard boundary

### Community 30 - "loop-visual-regression.md"
Cohesion: 0.20
Nodes (6): getScheduledRuns(), PendingRun, getChannelIdFromConfig(), ingestSlackData(), extractUrlsFromSlackText(), SlackClient

### Community 31 - "Repository selection for the ADAMA social media agent"
Cohesion: 0.06
Nodes (63): getAllUsedLinks(), getCurrentInterrupts(), getScheduledPosts(), checkRedditURLExists(), checkTwitterURLExists(), extractAINewsletterContent(), answerSchema, formatTweets() (+55 more)

### Community 32 - "repurposer/index.ts"
Cohesion: 0.22
Nodes (10): checkIfUrlsArePreviouslyUsed(), condenseOrHumanConditionalEdge(), generatePostBuilder, generateReportOrEndConditionalEdge(), routeToCuratedInterruptOrContinue(), getSavedUrls(), NAMESPACE, saveUsedUrls() (+2 more)

### Community 33 - "verify-links-graph.ts"
Cohesion: 0.17
Nodes (14): generatePostOrContinue(), getPrompts(), NOTE: you should likely not have this set, unless you want to use the LangChain, TWEET_EXAMPLES, getUrlContents, RELEVANCY_SCHEMA, UrlContents, verifyLumaEvent() (+6 more)

### Community 34 - "extract-ai-newsletter-content.ts"
Cohesion: 0.31
Nodes (11): getChannelInfo(), getVideoID(), getVideoThumbnailUrl(), getYouTubeClientFromUrl(), getYouTubeVideoDuration(), parseDuration(), TODO: Handle this better, generateVideoSummary() (+3 more)

### Community 35 - "reddit/types.ts"
Cohesion: 0.23
Nodes (10): TODO: Type casting as any here shouldn't be required..., RELEVANCY_SCHEMA, verifyContentIsRelevant, RELEVANCY_SCHEMA, verifyYouTubeContent(), VerifyYouTubeContentReturn, skipContentRelevancyCheck, constructContext() (+2 more)

### Community 36 - "graph.py"
Cohesion: 0.17
Nodes (14): Any, BaseStore, @langchain/anthropic, aget_reflections(), aput_reflections(), The reflection graph., Get reflections from the store., Put reflections in the store. (+6 more)

### Community 37 - "find-and-generate-images-graph.ts"
Cohesion: 0.18
Nodes (9): IngestDataConfigurableAnnotation, LangChainProduct, SimpleSlackMessageWithLinks, GetChannelMessagesArgs, SimpleSlackMessage, SlackClientArgs, SlackMessage, SlackMessageAttachment (+1 more)

### Community 38 - "verify-general.ts"
Cohesion: 0.31
Nodes (8): getUrlContents, getUrlContentsFunc(), RELEVANCY_SCHEMA, UrlContents, verifyGeneralContent(), getUrlContentsFunc(), getPageText(), getImagesFromFireCrawlMetadata()

### Community 39 - "verify-general.ts"
Cohesion: 0.22
Nodes (13): builder, generatePostFromMessages(), graph, generatePostsFromMessages(), schedulePost(), sendSlackMessage(), SendSlackMessageArgs, ComplexPost (+5 more)

### Community 40 - "generate-post/index.ts"
Cohesion: 0.49
Nodes (7): condensePost(), generatePost(), formatPrompt(), parseGeneration(), filterLinksForPostContent(), removeUrls(), getReflectionsPrompt()

### Community 41 - "content.mjs"
Cohesion: 0.46
Nodes (6): startGenerateReportRuns(), formatUserPrompt(), RELEVANCY_SCHEMA, validateRedditPost(), convertPostToString(), formatComments()

### Community 42 - "video-summary.ts"
Cohesion: 0.11
Nodes (21): CurateDataState, VerifyLinksResultAnnotation, getPost(), FormattedRedditPost, RedditPostChildren, RedditPostData, RedditPostData2, RedditPostGildings (+13 more)

### Community 43 - "generate-thread-posts.ts"
Cohesion: 0.42
Nodes (7): EXAMPLES, generateThreadPosts(), formatAllPostsForPrompt(), formatBodyPostsForPrompt(), formatReportsForPrompt(), formatTweetExamplesForPrompt(), parseTweetGeneration()

### Community 44 - "src/tests/graph.int.test.ts"
Cohesion: 0.31
Nodes (6): BASE_GENERATE_POST_CONFIG, GITHUB_MESSAGE, GITHUB_URL_STATE, TWITTER_NESTED_GENERAL_MESSAGE, TWITTER_NESTED_GITHUB_MESSAGE, TWITTER_NESTED_YOUTUBE_MESSAGE

### Community 45 - "express"
Cohesion: 0.12
Nodes (17): @arcadeai/arcadejs, express, @google/genai, @langchain/core, @langchain/langgraph-sdk, @mendable/firecrawl-js, @octokit/rest, passport (+9 more)

### Community 46 - "SocialAuthServer"
Cohesion: 0.21
Nodes (5): express-session, main(), SessionData, SocialAuthServer, TwitterUser

### Community 47 - "adama-profile.mjs"
Cohesion: 0.06
Nodes (46): aiNewsBlogLoader, RSSFeed, RSSItem, getOctokit(), getSinceDate(), langchainDependencyReposLoader, langchainDependencyReposLoaderFunc(), LIMITS (+38 more)

### Community 48 - "generate-thread-posts.ts"
Cohesion: 0.44
Nodes (7): body(), channelPanel(), createApprovalServer(), escapeHtml(), itemCard(), page(), send()

### Community 49 - "verify-github.ts"
Cohesion: 0.38
Nodes (3): File, getPublicFileUrlsFunc(), getUrlForPublicFile()

### Community 50 - "package.json"
Cohesion: 0.15
Nodes (12): engines, node, name, private, scripts, batch, check, demo (+4 more)

### Community 52 - "GeneratePostAnnotation"
Cohesion: 0.60
Nodes (4): GeneratePostAnnotation, formatReportPrompt(), generateContentReport(), parseGeneration()

### Community 53 - "Detailed Feature List"
Cohesion: 0.18
Nodes (10): Detailed Feature List, Exclude URLs, Generate Post, Key, Key, Main Key, Shared, Skip Content Verification (+2 more)

### Community 54 - "general/index.ts"
Cohesion: 0.60
Nodes (4): evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 55 - "skipUsedUrlsCheck"
Cohesion: 0.26
Nodes (9): ADAMA_BRAND_PROFILE, assertChannels(), CHANNEL_CAPABILITIES, SOCIAL_CHANNELS, assertFormat(), CONTENT_FORMATS, CONTENT_STATES, createContentItem() (+1 more)

### Community 56 - "twitter/index.ts"
Cohesion: 0.60
Nodes (4): evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 57 - "human-node.ts"
Cohesion: 0.18
Nodes (17): constructDescription(), ConstructDescriptionArgs, extractThreadPostsFromArgs(), getUnknownResponseDescription(), humanNode(), TODO: Handle invalid dates better, TODO: Update so if the mime type is blacklisted, it re-routes to human node with, ThreadPost (+9 more)

### Community 59 - "index-local-vault.py"
Cohesion: 0.53
Nodes (5): Path, extract(), main(), normalize(), Build a local, derived text/metadata index for ADAMA source vaults.  The source

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
Cohesion: 0.10
Nodes (17): ADAMA / CBA design audit, Evidence reviewed, Observed system, Production rules, Required preparation for automated design, Risks, ADAMA implementation backlog, External blockers (+9 more)

### Community 70 - "checkLanggraphPaths.js"
Cohesion: 0.83
Nodes (3): checkLanggraphPaths(), fileExists(), isObjectExported()

### Community 71 - "validate-images/inputs.ts"
Cohesion: 0.50
Nodes (3): INPUTS, OUTPUTS, TEST_EACH_INPUTS_OUTPUTS

### Community 84 - "Repository selection for the ADAMA social media agent"
Cohesion: 0.15
Nodes (12): Comparison, Decision, Exact next Codex steps, First implementation roadmap, From GPT-Instagram, From LangChain, From social-agent, From the scheduler (+4 more)

### Community 95 - "Local vault import — Downloads and work"
Cohesion: 0.11
Nodes (16): ADAMA content corpus, Recommended retrieval layers, Source, Strong graph relationships, ADAMA, ADAMA social media agent — project brief, Content and brand, Current phase constraint (+8 more)

### Community 150 - "Knowledge Base Index"
Cohesion: 0.14
Nodes (12): Concepts, Entities, Knowledge Base Index, Overview, Sources, Social Network Agent — Overview, Automation foundations — 2026-07-26, Automation relationship (+4 more)

### Community 154 - "ADAMA mock MVP"
Cohesion: 0.40
Nodes (4): ADAMA mock MVP, Implemented flow, Safety invariant, Verification

## Knowledge Gaps
- **497 isolated node(s):** `[2026-07-26] incident | create Figma automation foundations; page creation blocked`, `[2026-07-25] ingest | audit connected CBA.young Figma sandbox`, `[2026-07-25] update | add editable per-channel approval workspace`, `[2026-07-25] update | make ADAMA shadow mode operational across channels`, `[2026-07-25] ingest | index local Downloads and work vaults` (+492 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **54 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `express` to `HANDOVER — universal autonomous-agent framework (Codex, portable)`, `loop-de-sloppify.md`, `express-session`, `graph.py`, `google-auth-library`, `cheerio`, `date-fns-tz`, `@langchain/langgraph`, `express-session`, `file-type`, `@googleapis/youtube`, `@langchain/community`, `@langchain/google-vertexai-web`, `@langchain/openai`, `langsmith`, `moment`, `chunkArray`, `passport-twitter`, `playwright`, `sharp`, `@slack/web-api`, `snoowrap`, `@supabase/supabase-js`, `@types/snoowrap`, `xml2js`, `zod`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `SlackClient` connect `loop-visual-regression.md` to `Universal Autonomous-Agent Operating Framework — **Claude edition**`, `Execution plan (in order; stop and ask if anything is ambiguous)`, `find-and-generate-images-graph.ts`, `verify-general.ts`, `agent-env-setup — one-button new-environment install`, `adama-profile.mjs`, `verify-github.ts`, `loop-pr-review.md`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `TwitterClient` connect `loop-pr-review.md` to `Repository selection for the ADAMA social media agent`, `adama-profile.mjs`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `[2026-07-26] incident | create Figma automation foundations; page creation blocked`, `[2026-07-25] ingest | audit connected CBA.young Figma sandbox`, `[2026-07-25] update | add editable per-channel approval workspace` to the rest of the system?**
  _497 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Universal Autonomous-Agent Operating Framework — **Claude edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.05627545353572751 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Codex edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.11333333333333333 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Claude edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._