# Graph Report - Social Network Agent  (2026-07-26)

## Corpus Check
- 282 files · ~141,316 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1541 nodes · 2868 edges · 165 communities (112 shown, 53 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.51)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1fbbb85b`
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
- LinkedInClient
- index-local-vault.py
- loaders/twitter.ts
- LangGraph Application Integration with Slack
- langgraph-config.test.ts
- devDependencies
- multichannel-shadow-mode.md
- general/index.ts
- memory-v2/langgraph.json
- ADAMA Social Media Agent
- twitter/index.ts
- google-auth-library
- checkLanggraphPaths.js
- validate-images/inputs.ts
- delay-run.ts
- cheerio
- upload-post/index.ts
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
- agents/utils.ts
- extractUrls
- @langchain/openai
- langsmith
- Local vault import — Downloads and work
- moment
- chunkArray
- auth-socials.ts
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
- repurposer/nodes/validate-images.ts
- verify-github.ts
- ADAMA mock MVP
- latent-space.ts
- Separate ADAMA and CBA Young design audit
- express-session
- ADAMA social media agent — project brief
- Local vault import — Downloads and work
- ADAMA + CBA Young shadow-mode runbook
- chunkArray
- youtube/index.ts
- Knowledge Base Index

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
- `FormatReportPromptParams` --references--> `TweetsGroupedByContent`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/generate-report/nodes/generate-report.ts → vendor/langchain-social-media-agent/src/agents/curate-data/types.ts
- `extractContentsFunc()` --calls--> `isValidUrl()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/ingest-repurposed-data/nodes/extract.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `startGenerateReportRuns()` --calls--> `convertPostToString()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/supervisor/supervisor-graph.ts → vendor/langchain-social-media-agent/src/agents/verify-reddit-post/utils.ts
- `langchainDependencyReposLoaderFunc()` --calls--> `getGitHubRepoURLs()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/curate-data/loaders/github/langchain.ts → vendor/langchain-social-media-agent/src/agents/curate-data/utils/stores/github-repos.ts

## Import Cycles
- None detected.

## Communities (165 total, 53 thin omitted)

### Community 0 - "Universal Autonomous-Agent Operating Framework — **Claude edition**"
Cohesion: 0.09
Nodes (29): curateDataGraph, generateReportGraph, generateReportWorkflow, extractKeyDetails(), formatKeyDetailsPrompt(), formatReportPrompt(), FormatReportPromptParams, generateReport() (+21 more)

### Community 1 - "Universal Autonomous-Agent Operating Framework — **Codex edition**"
Cohesion: 0.05
Nodes (37): { agent }, posts, accountIds, { agent }, created, createApp(), createMultiAccountApp(), createMultiAccountOperationalApp() (+29 more)

### Community 2 - "Universal Autonomous-Agent Operating Framework — **Claude edition**"
Cohesion: 0.08
Nodes (23): 0. The one-paragraph thesis, 10. The operating loop (the three habits), 10b. Autonomy & decision posture (autopilot is the default), 11. Quality-gate loops (the 13 self-pacing loops), 12. Hooks — event-driven automation glue, 13. `/ship` — one button for the whole tail, 14. CI/CD & deployment (GitHub), 15. Versioning & git conventions (+15 more)

### Community 3 - "Universal Autonomous-Agent Operating Framework — **Codex edition**"
Cohesion: 0.08
Nodes (23): 0. The one-paragraph thesis, 10. The operating loop (the three habits), 10b. Autonomy & decision posture (autopilot is the default), 11. Quality-gate loops (the 13 self-pacing loops), 12. Hooks — event-driven automation glue, 13. `/ship` — one button for the whole tail, 14. CI/CD & deployment (GitHub), 15. Versioning & git conventions (+15 more)

### Community 4 - "Execution plan (in order; stop and ask if anything is ambiguous)"
Cohesion: 0.14
Nodes (17): builder, generatePostsFromMessages(), graph, extract(), extractContents, extractContentsFunc(), extractionSchema, TODO: Update Slack message handler to include fileIds (+9 more)

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
Cohesion: 0.17
Nodes (12): BASE_GENERATE_POST_CONFIG, GeneratePostConfigurableAnnotation, GeneratePostState, GeneratePostUpdate, LangChainProduct, TODO: Refactor the post/complexPost state interfaces to use a single shared inte, YouTubeVideoSummary, formatReportPrompt() (+4 more)

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
Cohesion: 0.17
Nodes (11): [2026-07-25] ingest | ADAMA project brief and repository research, [2026-07-25] ingest | audit connected CBA.young Figma sandbox, [2026-07-25] ingest | index local Downloads and work vaults, [2026-07-25] update | add content planning and shadow-mode gates, [2026-07-25] update | add editable per-channel approval workspace, [2026-07-25] update | adopt universal agent framework, [2026-07-25] update | build ADAMA mock approval pipeline, [2026-07-25] update | make ADAMA shadow mode operational across channels (+3 more)

### Community 18 - "loop-changelog.md"
Cohesion: 0.15
Nodes (17): checkIsGitHubImageUrl(), findImages(), getUrlForScreenshot(), takeScreenshotAndUpload(), ALLOWED_DAYS, GITHUB_BROWSER_CONTEXT_OPTIONS, GITHUB_SCREENSHOT_OPTIONS, extractAllImageUrlsFromMarkdown() (+9 more)

### Community 19 - "loop-de-sloppify.md"
Cohesion: 0.12
Nodes (25): dotenv, FastAPI, Request, TypedDict, uuid, dotenv, uuid, _build_contextual_message() (+17 more)

### Community 20 - "loop-debug.md"
Cohesion: 0.29
Nodes (8): generatePostGraph, evaluatePost(), runEval(), runGraph(), evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 21 - "loop-docs-sync.md"
Cohesion: 0.29
Nodes (7): curatedPostInterruptGraph, workflow, CuratedPostInterruptAnnotation, CuratedPostInterruptConfigurableAnnotation, CuratedPostInterruptState, CuratedPostInterruptUpdate, TODO: Refactor the post/complexPost state interfaces to use a single shared inte

### Community 22 - "loop-e2e.md"
Cohesion: 0.22
Nodes (13): repurposerBuilder, repurposerGraph, generateCampaignPlan(), formatUserPrompt(), generatePosts(), startInterruptGraphRuns(), Image, RepurposerConfigurableAnnotation (+5 more)

### Community 23 - "loop-guardrails.md"
Cohesion: 0.08
Nodes (23): RUN npx -y playwright@1.61.1 install --with-deps, dependencies, dockerfile_lines, env, graphs, curate_data, curated_post_interrupt, generate_post (+15 more)

### Community 24 - "loop-investigate.md"
Cohesion: 0.22
Nodes (6): reflection(), ReflectionAnnotation, reflectionGraph, reflectionWorkflow, NAMESPACE, putReflectionsPrompt()

### Community 25 - "loop-lint.md"
Cohesion: 0.14
Nodes (23): repurposerPostInterruptGraph, workflow, humanNode(), routeResponse(), routeResponseSchema, constructDescription(), formatImageDescriptions(), getUnknownResponseDescription() (+15 more)

### Community 26 - "loop-migrate.md"
Cohesion: 0.20
Nodes (12): verifyYouTubeContent(), verifyLinksWorkflow, sharedLinksReducer(), VerifyLinksGraphAnnotation, VerifyLinksGraphConfigurableAnnotation, VerifyLinksGraphSharedAnnotation, verifyRedditPostBuilder, verifyRedditPostGraph (+4 more)

### Community 27 - "loop-pr-babysitter.md"
Cohesion: 0.08
Nodes (21): checkRedditURLExists(), checkTwitterURLExists(), extractAINewsletterContent(), isRedditPostUrl(), RedditClient, getRedditUserlessToken(), RedditTokenResponse, Data (+13 more)

### Community 28 - "loop-pr-review.md"
Cohesion: 0.13
Nodes (7): useTwitterApiOnly(), BASE_FETCH_TWEET_OPTIONS, MediaIdStringArray, TwitterClient, CreateMediaRequest, CreateTweetRequest, TwitterClientArgs

### Community 29 - "loop-spec-ship.md"
Cohesion: 0.40
Nodes (4): ADAMA shadow-mode runbook, Daily workflow, Exit criteria, Hard boundary

### Community 30 - "loop-visual-regression.md"
Cohesion: 0.22
Nodes (4): SlackClient, File, getPublicFileUrlsFunc(), getUrlForPublicFile()

### Community 31 - "Repository selection for the ADAMA social media agent"
Cohesion: 0.22
Nodes (14): FindAndGenerateImagesAnnotation, findAndGenerateImagesGraph, findAndGenerateImagesWorkflow, parseResult(), reRankImages(), filterImageUrls(), getProtectedUrls(), parseResult() (+6 more)

### Community 32 - "repurposer/index.ts"
Cohesion: 0.22
Nodes (10): checkIfUrlsArePreviouslyUsed(), condenseOrHumanConditionalEdge(), generatePostBuilder, generateReportOrEndConditionalEdge(), routeToCuratedInterruptOrContinue(), getSavedUrls(), NAMESPACE, saveUsedUrls() (+2 more)

### Community 33 - "verify-links-graph.ts"
Cohesion: 0.27
Nodes (7): getPrompts(), NOTE: you should likely not have this set, unless you want to use the LangChain, TWEET_EXAMPLES, LANGCHAIN_DOMAINS, shouldExcludeGeneralContent(), shouldExcludeGitHubContent(), useLangChainPrompts()

### Community 34 - "extract-ai-newsletter-content.ts"
Cohesion: 0.29
Nodes (12): getChannelInfo(), getVideoID(), getVideoThumbnailUrl(), getYouTubeClientFromUrl(), getYouTubeVideoDuration(), parseDuration(), TODO: Handle this better, generateVideoSummary() (+4 more)

### Community 35 - "reddit/types.ts"
Cohesion: 0.22
Nodes (10): GeneratePostAnnotation, RELEVANCY_SCHEMA, VerifyYouTubeContentReturn, VerifyContentAnnotation, constructContext(), RELEVANCY_SCHEMA, validateTweetContent(), verifyTweetBuilder (+2 more)

### Community 36 - "graph.py"
Cohesion: 0.17
Nodes (14): Any, BaseStore, @langchain/anthropic, aget_reflections(), aput_reflections(), The reflection graph., Get reflections from the store., Put reflections in the store. (+6 more)

### Community 37 - "find-and-generate-images-graph.ts"
Cohesion: 0.17
Nodes (8): getScheduledRuns(), PendingRun, postUploadFailureToSlack(), GetChannelMessagesArgs, SlackClientArgs, SlackMessage, SlackMessageAttachment, SlackMessageFile

### Community 38 - "verify-general.ts"
Cohesion: 0.22
Nodes (13): getUrlContents, getUrlContentsFunc(), RELEVANCY_SCHEMA, UrlContents, verifyGeneralContent(), getUrlContents, getUrlContentsFunc(), RELEVANCY_SCHEMA (+5 more)

### Community 39 - "verify-general.ts"
Cohesion: 0.20
Nodes (13): rewritePost(), runReflections(), RunReflectionsArgs, schedulePost(), sendSlackMessage(), SendSlackMessageArgs, BaseGeneratePostAnnotation, BaseGeneratePostState (+5 more)

### Community 40 - "generate-post/index.ts"
Cohesion: 0.38
Nodes (9): ALLOWED_TIMES, condensePost(), generatePost(), formatPrompt(), parseGeneration(), filterLinksForPostContent(), removeUrls(), getNextSaturdayDate() (+1 more)

### Community 41 - "content.mjs"
Cohesion: 0.29
Nodes (8): TODO: Type casting as any here shouldn't be required..., RELEVANCY_SCHEMA, verifyContentIsRelevant, formatUserPrompt(), RELEVANCY_SCHEMA, validateRedditPost(), convertPostToString(), formatComments()

### Community 42 - "video-summary.ts"
Cohesion: 0.17
Nodes (11): getPost(), FormattedRedditPost, RedditPostChildren, RedditPostData, RedditPostData2, RedditPostGildings, RedditPostMediaEmbed, RedditPostRoot (+3 more)

### Community 43 - "generate-thread-posts.ts"
Cohesion: 0.42
Nodes (7): EXAMPLES, generateThreadPosts(), formatAllPostsForPrompt(), formatBodyPostsForPrompt(), formatReportsForPrompt(), formatTweetExamplesForPrompt(), parseTweetGeneration()

### Community 44 - "src/tests/graph.int.test.ts"
Cohesion: 0.31
Nodes (6): verifyTweetGraph, GITHUB_MESSAGE, GITHUB_URL_STATE, TWITTER_NESTED_GENERAL_MESSAGE, TWITTER_NESTED_GITHUB_MESSAGE, TWITTER_NESTED_YOUTUBE_MESSAGE

### Community 45 - "express"
Cohesion: 0.12
Nodes (17): @arcadeai/arcadejs, express, @google/genai, @langchain/core, @langchain/langgraph-sdk, @mendable/firecrawl-js, @octokit/rest, passport (+9 more)

### Community 46 - "SocialAuthServer"
Cohesion: 0.21
Nodes (5): express-session, main(), SessionData, SocialAuthServer, TwitterUser

### Community 47 - "adama-profile.mjs"
Cohesion: 0.17
Nodes (19): githubTrendingLoaderFunc(), filterRedditPosts(), getLangChainRedditPostsFunc(), getRedditPosts, getRedditPostsFunc(), generatePostsSubgraph(), getAfterSeconds(), saveIngestedData() (+11 more)

### Community 48 - "generate-thread-posts.ts"
Cohesion: 0.11
Nodes (29): curateDataWorkflow, generatePostOrContinue(), formatData(), getTweetGroupEngagement(), groupTweetsByContent(), parseGeneration(), formatGroupsPrompt(), formatTweetsInGroup() (+21 more)

### Community 49 - "verify-github.ts"
Cohesion: 0.15
Nodes (15): aiNewsBlogLoader, RSSFeed, RSSItem, getOctokit(), getSinceDate(), langchainDependencyReposLoader, langchainDependencyReposLoaderFunc(), LIMITS (+7 more)

### Community 50 - "package.json"
Cohesion: 0.15
Nodes (12): engines, node, name, private, scripts, batch, check, demo (+4 more)

### Community 51 - "curate-data/types.ts"
Cohesion: 0.18
Nodes (14): getInterrupts(), redoInterrupts(), updateImageUrls(), embedImageInTemplate(), uploadImageBufferToSupabase(), GENERATE_IMAGE_PROMPT_TEMPLATE, generateImageCandidatesForPost(), generateImageWithNanoBananaPro() (+6 more)

### Community 52 - "GeneratePostAnnotation"
Cohesion: 0.16
Nodes (16): builder, generatePostFromMessages(), graph, IngestDataAnnotation, IngestDataConfigurableAnnotation, LangChainProduct, SimpleSlackMessageWithLinks, getChannelIdFromConfig() (+8 more)

### Community 53 - "Detailed Feature List"
Cohesion: 0.18
Nodes (10): Detailed Feature List, Exclude URLs, Generate Post, Key, Key, Main Key, Shared, Skip Content Verification (+2 more)

### Community 54 - "general/index.ts"
Cohesion: 0.60
Nodes (4): evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 55 - "skipUsedUrlsCheck"
Cohesion: 0.67
Nodes (3): assertChannels(), CHANNEL_CAPABILITIES, SOCIAL_CHANNELS

### Community 56 - "twitter/index.ts"
Cohesion: 0.29
Nodes (14): getGeneralContent(), getTwitterContent(), getUrlContents(), getYouTubeContent(), extractContent(), shouldExcludeTweetContent(), extractTweetId(), getTweetContent() (+6 more)

### Community 57 - "human-node.ts"
Cohesion: 0.17
Nodes (16): constructDescription(), ConstructDescriptionArgs, extractThreadPostsFromArgs(), getUnknownResponseDescription(), humanNode(), TODO: Handle invalid dates better, TODO: Update so if the mime type is blacklisted, it re-routes to human node with, ThreadPost (+8 more)

### Community 58 - "LinkedInClient"
Cohesion: 0.18
Nodes (6): CreateLinkedInImagePostRequest, LinkedInClient, LinkedInPost, MediaUploadResponse, RegisterUploadRequest, AuthorizeUserResponse

### Community 59 - "index-local-vault.py"
Cohesion: 0.53
Nodes (5): Path, extract(), main(), normalize(), Build a local, derived text/metadata index for ADAMA source vaults.  The source

### Community 60 - "loaders/twitter.ts"
Cohesion: 0.24
Nodes (8): fetchListTweetsWrapper(), twitterLoader, twitterLoaderFunc(), twitterLoaderWithLangChainFunc(), createdAtAfter(), getLastIngestedTweetId(), NAMESPACE, putLastIngestedTweetId()

### Community 61 - "LangGraph Application Integration with Slack"
Cohesion: 0.25
Nodes (7): Customizing the input and output, Flow, `From Scratch` Slack App Setup, LangGraph Application Integration with Slack, Prerequisites, Quickstart, Quickstart setup

### Community 62 - "langgraph-config.test.ts"
Cohesion: 0.36
Nodes (6): escapeRegExp(), getLanggraphConfig(), getRepoRoot(), getResolvedPlaywrightVersionFromYarnLock(), LanggraphConfig, PackageJson

### Community 63 - "devDependencies"
Cohesion: 0.29
Nodes (7): cross-env, eslint, @types/node, devDependencies, cross-env, eslint, @types/node

### Community 64 - "multichannel-shadow-mode.md"
Cohesion: 0.24
Nodes (4): Multi-account brand isolation, Multichannel shadow mode, CBA Young, Social Network Agent — Overview

### Community 66 - "memory-v2/langgraph.json"
Cohesion: 0.33
Nodes (5): dependencies, env, graphs, reflection_v2, .

### Community 67 - "ADAMA Social Media Agent"
Cohesion: 0.40
Nodes (4): ADAMA + CBA Young Social Media Agent, Requirements, Run, Safety invariant

### Community 68 - "twitter/index.ts"
Cohesion: 0.33
Nodes (6): ADAMA implementation backlog, External blockers, P0 — usable now, P1 — required before live publishing, P2 — growth loop, Readiness verdict

### Community 70 - "checkLanggraphPaths.js"
Cohesion: 0.83
Nodes (3): checkLanggraphPaths(), fileExists(), isObjectExported()

### Community 71 - "validate-images/inputs.ts"
Cohesion: 0.50
Nodes (3): INPUTS, OUTPUTS, TEST_EACH_INPUTS_OUTPUTS

### Community 74 - "upload-post/index.ts"
Cohesion: 0.24
Nodes (10): ensureSignature(), getMediaFromImage(), TODO: Refactor the post/complexPost state interfaces to use a single shared inte, reshareFromMainLinkedInAccount(), retweetFromMainAccount(), uploadPost(), UploadPostAnnotation, uploadPostGraph (+2 more)

### Community 84 - "Repository selection for the ADAMA social media agent"
Cohesion: 0.15
Nodes (12): Comparison, Decision, Exact next Codex steps, First implementation roadmap, From GPT-Instagram, From LangChain, From social-agent, From the scheduler (+4 more)

### Community 91 - "agents/utils.ts"
Cohesion: 0.21
Nodes (7): BLACKLISTED_GENERAL_URLS, BLACKLISTED_IMAGE_URL_ENDINGS, BLACKLISTED_IMAGE_URLS, filterUnwantedImageUrls(), isUpdatedSupabaseUrl(), RetryWithTimeoutOptions, UrlType

### Community 92 - "extractUrls"
Cohesion: 0.29
Nodes (6): getAllUsedLinks(), getCurrentInterrupts(), getScheduledPosts(), extractMimeTypeFromBase64(), extractUrls(), getExternalUrls()

### Community 95 - "Local vault import — Downloads and work"
Cohesion: 0.29
Nodes (5): ADAMA content corpus, Recommended retrieval layers, Source, Strong graph relationships, ADAMA

### Community 98 - "auth-socials.ts"
Cohesion: 0.42
Nodes (7): authSocialsPassthrough(), getArcadeLinkedInAuthOrInterrupt(), getBasicLinkedInAuthOrInterrupt(), getLinkedInAuthOrInterrupt(), getBasicTwitterAuthOrInterrupt(), getTwitterAuthOrInterrupt(), useArcadeAuth()

### Community 150 - "Knowledge Base Index"
Cohesion: 0.33
Nodes (6): Automation relationship, Current-page evidence, Figma — CBA.young sandbox, Incorrect cross-brand foundations — rollback pending, Reuse decision, Scope

### Community 152 - "repurposer/nodes/validate-images.ts"
Cohesion: 0.38
Nodes (8): extractIndicesFromText, filterImageUrls(), getProtectedUrls(), parseResult(), removeProtectedUrls(), validateImages(), imageUrlToBuffer(), isValidUrl()

### Community 153 - "verify-github.ts"
Cohesion: 0.33
Nodes (8): getDependencies(), getGitHubContentsAndTypeFromUrl(), getOctokit(), RELEVANCY_SCHEMA, verifyGitHubContent(), verifyGitHubContentIsRelevant(), VerifyGitHubContentParams, VerifyGitHubContentReturn

### Community 154 - "ADAMA mock MVP"
Cohesion: 0.40
Nodes (4): ADAMA mock MVP, Implemented flow, Safety invariant, Verification

### Community 155 - "latent-space.ts"
Cohesion: 0.50
Nodes (5): latentSpaceLoader, latentSpaceLoaderFunc(), getLatentSpaceLinks(), NAMESPACE, putLatentSpaceLinks()

### Community 156 - "Separate ADAMA and CBA Young design audit"
Cohesion: 0.33
Nodes (6): Evidence reviewed, Observed system, Production rules, Required preparation for automated design, Risks, Separate ADAMA and CBA Young design audit

### Community 158 - "ADAMA social media agent — project brief"
Cohesion: 0.33
Nodes (5): ADAMA social media agent — project brief, Content and brand, Current phase constraint, Goal, Required flow

### Community 159 - "Local vault import — Downloads and work"
Cohesion: 0.33
Nodes (6): Evidence-backed thematic clusters, Guardrails, Indexing result, Local vault import — Downloads and work, Scope, Technical artifacts

### Community 160 - "ADAMA + CBA Young shadow-mode runbook"
Cohesion: 0.40
Nodes (4): ADAMA + CBA Young shadow-mode runbook, Generate a weekly batch, Review and approve, Safety

### Community 161 - "chunkArray"
Cohesion: 0.60
Nodes (4): answerSchema, formatTweets(), validateBulkTweets(), chunkArray()

### Community 162 - "youtube/index.ts"
Cohesion: 0.60
Nodes (4): evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 163 - "Knowledge Base Index"
Cohesion: 0.40
Nodes (5): Concepts, Entities, Knowledge Base Index, Overview, Sources

## Knowledge Gaps
- **502 isolated node(s):** `Requirements`, `Run`, `Safety invariant`, `Evidence reviewed`, `Observed system` (+497 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SlackClient` connect `loop-visual-regression.md` to `Universal Autonomous-Agent Operating Framework — **Claude edition**`, `Execution plan (in order; stop and ask if anything is ambiguous)`, `find-and-generate-images-graph.ts`, `verify-general.ts`, `upload-post/index.ts`, `agent-env-setup — one-button new-environment install`, `adama-profile.mjs`, `GeneratePostAnnotation`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `dependencies` connect `express` to `HANDOVER — universal autonomous-agent framework (Codex, portable)`, `loop-de-sloppify.md`, `express-session`, `graph.py`, `google-auth-library`, `cheerio`, `date-fns-tz`, `@langchain/langgraph`, `express-session`, `file-type`, `@googleapis/youtube`, `@langchain/community`, `@langchain/google-vertexai-web`, `@langchain/openai`, `langsmith`, `moment`, `chunkArray`, `passport-twitter`, `playwright`, `sharp`, `@slack/web-api`, `snoowrap`, `@supabase/supabase-js`, `@types/snoowrap`, `xml2js`, `zod`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `HANDOVER — universal autonomous-agent framework (Codex, portable)`, `eslint-config-prettier`, `@eslint/eslintrc`, `@eslint/js`, `eslint-plugin-import`, `eslint-plugin-no-instanceof`, `eslint-plugin-prettier`, `jest`, `@jest/globals`, `prettier`, `timezone-mock`, `ts-jest`, `@tsconfig/recommended`, `tsx`, `@types/express`, `@types/express-session`, `@types/jest`, `@types/passport`, `@types/passport-twitter`, `@types/xml2js`, `typescript`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `Requirements`, `Run`, `Safety invariant` to the rest of the system?**
  _502 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Universal Autonomous-Agent Operating Framework — **Claude edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.08710801393728224 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Codex edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.05134575569358178 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Claude edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._