# Graph Report - Social Network Agent  (2026-07-25)

## Corpus Check
- 264 files · ~133,990 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1441 nodes · 2735 edges · 153 communities (98 shown, 55 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 50 edges (avg confidence: 0.51)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7260f951`
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
- generate-posts-subgraph.ts
- get-url-contents.ts
- graph.py
- extract-ai-newsletter-content.ts
- ingest-data-graph.ts
- verify-general.ts
- ingest-data.ts
- loaders/twitter.ts
- video-summary.ts
- prompts/index.ts
- auth-socials.ts
- agents/utils.ts
- SocialAuthServer
- langchain.ts
- upload-post/index.ts
- reddit/types.ts
- package.json
- verify-github.ts
- reflections.ts
- Detailed Feature List
- generate-post/index.ts
- latent-space.ts
- generatePostGraph
- human-node.ts
- dependencies
- src/tests/graph.int.test.ts
- date.ts
- LangGraph Application Integration with Slack
- langgraph-config.test.ts
- devDependencies
- reinterrupt.ts
- skipUsedUrlsCheck
- memory-v2/langgraph.json
- ADAMA Social Media Agent
- twitter/index.ts
- youtube/index.ts
- checkLanggraphPaths.js
- validate-images/inputs.ts
- delay-run.ts
- cheerio
- date-fns
- date-fns-tz
- eslint
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
- @langchain/langgraph
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
- ADAMA social media agent — project brief
- eslint-config-prettier
- express

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
- `generatePostsFromMessages()` --calls--> `shouldPostToLinkedInOrg()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/ingest-repurposed-data/index.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `extractContentsFunc()` --calls--> `isValidUrl()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/ingest-repurposed-data/nodes/extract.ts → vendor/langchain-social-media-agent/src/agents/utils.ts
- `startGenerateReportRuns()` --calls--> `convertPostToString()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/supervisor/supervisor-graph.ts → vendor/langchain-social-media-agent/src/agents/verify-reddit-post/utils.ts
- `generatePostOrContinue()` --calls--> `useLangChainPrompts()`  [EXTRACTED]
  vendor/langchain-social-media-agent/src/agents/curate-data/index.ts → vendor/langchain-social-media-agent/src/agents/utils.ts

## Import Cycles
- None detected.

## Communities (153 total, 55 thin omitted)

### Community 0 - "Universal Autonomous-Agent Operating Framework — **Claude edition**"
Cohesion: 0.07
Nodes (42): curateDataGraph, formatGroupsPrompt(), formatTweetsInGroup(), parseGeneration(), reGroupTweets(), splitGroups(), formatTweetsInGroup(), formatUserPrompt() (+34 more)

### Community 1 - "Universal Autonomous-Agent Operating Framework — **Codex edition**"
Cohesion: 0.07
Nodes (22): { agent }, posts, createApp(), ADAMA_BRAND_PROFILE, assertFormat(), CONTENT_FORMATS, CONTENT_STATES, createContentItem() (+14 more)

### Community 2 - "Universal Autonomous-Agent Operating Framework — **Claude edition**"
Cohesion: 0.08
Nodes (23): 0. The one-paragraph thesis, 10. The operating loop (the three habits), 10b. Autonomy & decision posture (autopilot is the default), 11. Quality-gate loops (the 13 self-pacing loops), 12. Hooks — event-driven automation glue, 13. `/ship` — one button for the whole tail, 14. CI/CD & deployment (GitHub), 15. Versioning & git conventions (+15 more)

### Community 3 - "Universal Autonomous-Agent Operating Framework — **Codex edition**"
Cohesion: 0.08
Nodes (23): 0. The one-paragraph thesis, 10. The operating loop (the three habits), 10b. Autonomy & decision posture (autopilot is the default), 11. Quality-gate loops (the 13 self-pacing loops), 12. Hooks — event-driven automation glue, 13. `/ship` — one button for the whole tail, 14. CI/CD & deployment (GitHub), 15. Versioning & git conventions (+15 more)

### Community 4 - "Execution plan (in order; stop and ask if anything is ambiguous)"
Cohesion: 0.07
Nodes (28): getScheduledRuns(), PendingRun, builder, generatePostsFromMessages(), graph, extract(), extractContents, extractContentsFunc() (+20 more)

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
Nodes (10): ADAMA mock MVP, Implemented flow, Safety invariant, Verification, Concepts, Entities, Knowledge Base Index, Overview (+2 more)

### Community 11 - "Project Guardrails"
Cohesion: 0.11
Nodes (26): EXAMPLES, generateThreadGraph, generateThreadWorkflow, generateThreadPlan(), parseTotalPosts(), TODO: Make this pass to an LLM and have the LLM extract the number., generateThreadPosts(), constructDescription() (+18 more)

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
Cohesion: 0.40
Nodes (4): [2026-07-25] ingest | ADAMA project brief and repository research, [2026-07-25] update | adopt universal agent framework, [2026-07-25] update | build ADAMA mock approval pipeline, Wiki Log

### Community 18 - "loop-changelog.md"
Cohesion: 0.14
Nodes (12): getUrlForScreenshot(), takeScreenshotAndUpload(), ALLOWED_DAYS, GITHUB_BROWSER_CONTEXT_OPTIONS, GITHUB_SCREENSHOT_OPTIONS, getGitHubContentsAndTypeFromUrl(), FileContent, getFileContents() (+4 more)

### Community 19 - "loop-de-sloppify.md"
Cohesion: 0.12
Nodes (25): dotenv, FastAPI, Request, TypedDict, uuid, dotenv, uuid, _build_contextual_message() (+17 more)

### Community 20 - "loop-debug.md"
Cohesion: 0.13
Nodes (20): curatedPostInterruptGraph, workflow, CuratedPostInterruptAnnotation, CuratedPostInterruptConfigurableAnnotation, CuratedPostInterruptState, CuratedPostInterruptUpdate, TODO: Refactor the post/complexPost state interfaces to use a single shared inte, rewritePost() (+12 more)

### Community 21 - "loop-docs-sync.md"
Cohesion: 0.27
Nodes (8): repurposerPostInterruptGraph, workflow, rewritePost(), updatePostsPrompt, RepurposerPostInterruptAnnotation, RepurposerPostInterruptConfigurableAnnotation, RepurposerPostInterruptState, RepurposerPostInterruptUpdate

### Community 22 - "loop-e2e.md"
Cohesion: 0.16
Nodes (23): answerSchema, formatTweets(), validateBulkTweets(), parseResult(), reRankImages(), filterImageUrls(), getProtectedUrls(), parseResult() (+15 more)

### Community 23 - "loop-guardrails.md"
Cohesion: 0.08
Nodes (23): RUN npx -y playwright@1.61.1 install --with-deps, dependencies, dockerfile_lines, env, graphs, curate_data, curated_post_interrupt, generate_post (+15 more)

### Community 24 - "loop-investigate.md"
Cohesion: 0.14
Nodes (16): condenseOrHumanConditionalEdge(), generatePostBuilder, routeToCuratedInterruptOrContinue(), GeneratePostAnnotation, GeneratePostConfigurableAnnotation, GeneratePostState, GeneratePostUpdate, LangChainProduct (+8 more)

### Community 25 - "loop-lint.md"
Cohesion: 0.18
Nodes (15): TODO: Type casting as any here shouldn't be required..., RELEVANCY_SCHEMA, verifyContentIsRelevant, RELEVANCY_SCHEMA, verifyYouTubeContent(), VerifyYouTubeContentReturn, skipContentRelevancyCheck, formatUserPrompt() (+7 more)

### Community 26 - "loop-migrate.md"
Cohesion: 0.13
Nodes (7): extractMimeTypeFromBase64(), useTwitterApiOnly(), BASE_FETCH_TWEET_OPTIONS, MediaIdStringArray, TwitterClient, CreateTweetRequest, TwitterClientArgs

### Community 27 - "loop-pr-babysitter.md"
Cohesion: 0.15
Nodes (8): isRedditPostUrl(), RedditClient, getRedditUserlessToken(), RedditTokenResponse, SimpleRedditComment, SimpleRedditPost, SimpleRedditPostWithComments, createDirIfNotExists()

### Community 28 - "loop-pr-review.md"
Cohesion: 0.18
Nodes (11): curateDataWorkflow, formatData(), getTweetGroupEngagement(), groupTweetsByContent(), parseGeneration(), verifyRedditWrapper(), CurateDataAnnotation, CurateDataConfigurable (+3 more)

### Community 29 - "loop-spec-ship.md"
Cohesion: 0.19
Nodes (13): getInterrupts(), redoInterrupts(), updateImageUrls(), embedImageInTemplate(), uploadImageBufferToSupabase(), GENERATE_IMAGE_PROMPT_TEMPLATE, generateImageCandidatesForPost(), generateImageWithNanoBananaPro() (+5 more)

### Community 30 - "loop-visual-regression.md"
Cohesion: 0.13
Nodes (16): getPost(), FormattedRedditPost, RedditPostChildren, RedditPostData, RedditPostData2, RedditPostGildings, RedditPostMediaEmbed, RedditPostRoot (+8 more)

### Community 31 - "Repository selection for the ADAMA social media agent"
Cohesion: 0.18
Nodes (6): CreateLinkedInImagePostRequest, LinkedInClient, LinkedInPost, MediaUploadResponse, RegisterUploadRequest, AuthorizeUserResponse

### Community 32 - "repurposer/index.ts"
Cohesion: 0.17
Nodes (16): repurposerBuilder, repurposerGraph, extractContent(), generateCampaignPlan(), formatUserPrompt(), generatePosts(), startInterruptGraphRuns(), Image (+8 more)

### Community 33 - "verify-links-graph.ts"
Cohesion: 0.19
Nodes (12): VerifyContentAnnotation, verifyLinksWorkflow, sharedLinksReducer(), VerifyLinksGraphAnnotation, VerifyLinksGraphConfigurableAnnotation, VerifyLinksGraphSharedAnnotation, VerifyLinksResultAnnotation, verifyRedditPostGraph (+4 more)

### Community 34 - "generate-posts-subgraph.ts"
Cohesion: 0.33
Nodes (9): generatePostsSubgraph(), getAfterSeconds(), saveIngestedData(), sendSlackNotification(), NAMESPACE, putRedditPostIds(), getTweetIds(), putTweetIds() (+1 more)

### Community 35 - "get-url-contents.ts"
Cohesion: 0.33
Nodes (13): getGeneralContent(), getTwitterContent(), getUrlContents(), getYouTubeContent(), shouldExcludeTweetContent(), extractAllImageUrlsFromMarkdown(), getTweetContent(), getTwitterClient() (+5 more)

### Community 36 - "graph.py"
Cohesion: 0.17
Nodes (14): Any, BaseStore, @langchain/anthropic, aget_reflections(), aput_reflections(), The reflection graph., Get reflections from the store., Put reflections in the store. (+6 more)

### Community 37 - "extract-ai-newsletter-content.ts"
Cohesion: 0.25
Nodes (12): getAllUsedLinks(), getCurrentInterrupts(), getScheduledPosts(), checkRedditURLExists(), checkTwitterURLExists(), extractAINewsletterContent(), extractTweetId(), extractUrls() (+4 more)

### Community 38 - "ingest-data-graph.ts"
Cohesion: 0.16
Nodes (16): builder, generatePostFromMessages(), graph, IngestDataAnnotation, IngestDataConfigurableAnnotation, LangChainProduct, SimpleSlackMessageWithLinks, getChannelIdFromConfig() (+8 more)

### Community 39 - "verify-general.ts"
Cohesion: 0.31
Nodes (8): getUrlContents, getUrlContentsFunc(), RELEVANCY_SCHEMA, UrlContents, verifyGeneralContent(), getUrlContentsFunc(), getPageText(), getImagesFromFireCrawlMetadata()

### Community 40 - "ingest-data.ts"
Cohesion: 0.22
Nodes (9): aiNewsBlogLoader, RSSFeed, RSSItem, langchainDependencyReposLoader, githubTrendingLoader, getLangChainRedditPosts, getRedditPosts, twitterLoaderWithLangChain (+1 more)

### Community 41 - "loaders/twitter.ts"
Cohesion: 0.22
Nodes (8): fetchListTweetsWrapper(), twitterLoader, twitterLoaderFunc(), twitterLoaderWithLangChainFunc(), createdAtAfter(), getLastIngestedTweetId(), NAMESPACE, putLastIngestedTweetId()

### Community 42 - "video-summary.ts"
Cohesion: 0.29
Nodes (12): getChannelInfo(), getVideoID(), getVideoThumbnailUrl(), getYouTubeClientFromUrl(), getYouTubeVideoDuration(), parseDuration(), TODO: Handle this better, generateVideoSummary() (+4 more)

### Community 43 - "prompts/index.ts"
Cohesion: 0.19
Nodes (12): generatePostOrContinue(), getPrompts(), NOTE: you should likely not have this set, unless you want to use the LangChain, TWEET_EXAMPLES, getUrlContents, RELEVANCY_SCHEMA, UrlContents, verifyLumaEvent() (+4 more)

### Community 44 - "auth-socials.ts"
Cohesion: 0.42
Nodes (7): authSocialsPassthrough(), getArcadeLinkedInAuthOrInterrupt(), getBasicLinkedInAuthOrInterrupt(), getLinkedInAuthOrInterrupt(), getBasicTwitterAuthOrInterrupt(), getTwitterAuthOrInterrupt(), useArcadeAuth()

### Community 45 - "agents/utils.ts"
Cohesion: 0.21
Nodes (7): BLACKLISTED_GENERAL_URLS, BLACKLISTED_IMAGE_URL_ENDINGS, BLACKLISTED_IMAGE_URLS, filterUnwantedImageUrls(), isUpdatedSupabaseUrl(), RetryWithTimeoutOptions, UrlType

### Community 46 - "SocialAuthServer"
Cohesion: 0.21
Nodes (5): express-session, main(), SessionData, SocialAuthServer, TwitterUser

### Community 47 - "langchain.ts"
Cohesion: 0.27
Nodes (10): getOctokit(), getSinceDate(), langchainDependencyReposLoaderFunc(), LIMITS, SEARCH_CONFIG, searchRepos(), githubTrendingLoaderFunc(), getGitHubRepoURLs() (+2 more)

### Community 48 - "upload-post/index.ts"
Cohesion: 0.20
Nodes (12): ensureSignature(), getMediaFromImage(), postUploadFailureToSlack(), TODO: Refactor the post/complexPost state interfaces to use a single shared inte, reshareFromMainLinkedInAccount(), retweetFromMainAccount(), uploadPost(), UploadPostAnnotation (+4 more)

### Community 49 - "reddit/types.ts"
Cohesion: 0.17
Nodes (11): Data, Gildings, Image, MediaEmbed, Preview, RedditCommentData, Resolution, Root (+3 more)

### Community 50 - "package.json"
Cohesion: 0.17
Nodes (11): engines, node, name, private, scripts, check, demo, dev (+3 more)

### Community 51 - "verify-github.ts"
Cohesion: 0.30
Nodes (10): fetchStargazersCount(), verifyGitHubWrapper(), getDependencies(), getOctokit(), RELEVANCY_SCHEMA, verifyGitHubContent(), verifyGitHubContentIsRelevant(), VerifyGitHubContentParams (+2 more)

### Community 52 - "reflections.ts"
Cohesion: 0.23
Nodes (7): reflection(), ReflectionAnnotation, reflectionGraph, reflectionWorkflow, getReflectionsPrompt(), NAMESPACE, putReflectionsPrompt()

### Community 53 - "Detailed Feature List"
Cohesion: 0.18
Nodes (10): Detailed Feature List, Exclude URLs, Generate Post, Key, Key, Main Key, Shared, Skip Content Verification (+2 more)

### Community 54 - "generate-post/index.ts"
Cohesion: 0.38
Nodes (8): ALLOWED_TIMES, condensePost(), generatePost(), formatPrompt(), parseGeneration(), filterLinksForPostContent(), removeUrls(), getNextSaturdayDate()

### Community 55 - "latent-space.ts"
Cohesion: 0.50
Nodes (5): latentSpaceLoader, latentSpaceLoaderFunc(), getLatentSpaceLinks(), NAMESPACE, putLatentSpaceLinks()

### Community 56 - "generatePostGraph"
Cohesion: 0.29
Nodes (8): generatePostGraph, evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph(), evaluatePost(), runEval(), runGraph()

### Community 57 - "human-node.ts"
Cohesion: 0.17
Nodes (17): humanNode(), routeResponse(), routeResponseSchema, constructDescription(), formatImageDescriptions(), getUnknownResponseDescription(), constructDescription(), ConstructDescriptionArgs (+9 more)

### Community 58 - "dependencies"
Cohesion: 0.22
Nodes (9): @arcadeai/arcadejs, google-auth-library, @langchain/langgraph, twitter-api-v2, dependencies, @arcadeai/arcadejs, google-auth-library, @langchain/langgraph (+1 more)

### Community 59 - "src/tests/graph.int.test.ts"
Cohesion: 0.31
Nodes (6): BASE_GENERATE_POST_CONFIG, GITHUB_MESSAGE, GITHUB_URL_STATE, TWITTER_NESTED_GENERAL_MESSAGE, TWITTER_NESTED_GITHUB_MESSAGE, TWITTER_NESTED_YOUTUBE_MESSAGE

### Community 60 - "date.ts"
Cohesion: 0.39
Nodes (5): scheduleDateSchema, updateScheduledDate(), DateType, isValidDateString(), timezoneToUtc()

### Community 61 - "LangGraph Application Integration with Slack"
Cohesion: 0.25
Nodes (7): Customizing the input and output, Flow, `From Scratch` Slack App Setup, LangGraph Application Integration with Slack, Prerequisites, Quickstart, Quickstart setup

### Community 62 - "langgraph-config.test.ts"
Cohesion: 0.36
Nodes (6): escapeRegExp(), getLanggraphConfig(), getRepoRoot(), getResolvedPlaywrightVersionFromYarnLock(), LanggraphConfig, PackageJson

### Community 63 - "devDependencies"
Cohesion: 0.29
Nodes (7): cross-env, eslint, @types/node, devDependencies, cross-env, eslint, @types/node

### Community 64 - "reinterrupt.ts"
Cohesion: 0.15
Nodes (12): Comparison, Decision, Exact next Codex steps, First implementation roadmap, From GPT-Instagram, From LangChain, From social-agent, From the scheduler (+4 more)

### Community 65 - "skipUsedUrlsCheck"
Cohesion: 0.48
Nodes (6): checkIfUrlsArePreviouslyUsed(), generateReportOrEndConditionalEdge(), getSavedUrls(), NAMESPACE, saveUsedUrls(), skipUsedUrlsCheck

### Community 66 - "memory-v2/langgraph.json"
Cohesion: 0.33
Nodes (5): dependencies, env, graphs, reflection_v2, .

### Community 67 - "ADAMA Social Media Agent"
Cohesion: 0.40
Nodes (4): ADAMA Social Media Agent, Requirements, Run, Safety invariant

### Community 68 - "twitter/index.ts"
Cohesion: 0.60
Nodes (4): evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 69 - "youtube/index.ts"
Cohesion: 0.60
Nodes (4): evaluatePost(), TODO: Implement evaluation logic, runEval(), runGraph()

### Community 70 - "checkLanggraphPaths.js"
Cohesion: 0.83
Nodes (3): checkLanggraphPaths(), fileExists(), isObjectExported()

### Community 71 - "validate-images/inputs.ts"
Cohesion: 0.50
Nodes (3): INPUTS, OUTPUTS, TEST_EACH_INPUTS_OUTPUTS

### Community 76 - "eslint"
Cohesion: 0.50
Nodes (5): filterRedditPosts(), getLangChainRedditPostsFunc(), getRedditPostsFunc(), getUniqueArrayItems(), getRedditPostIds()

### Community 91 - "@langchain/langgraph"
Cohesion: 0.36
Nodes (5): FindAndGenerateImagesAnnotation, findAndGenerateImagesGraph, findAndGenerateImagesWorkflow, checkIsGitHubImageUrl(), findImages()

### Community 150 - "ADAMA social media agent — project brief"
Cohesion: 0.25
Nodes (6): ADAMA, ADAMA social media agent — project brief, Content and brand, Current phase constraint, Goal, Required flow

## Knowledge Gaps
- **458 isolated node(s):** `Requirements`, `Run`, `Safety invariant`, `name`, `version` (+453 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **55 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `HANDOVER — universal autonomous-agent framework (Codex, portable)`, `loop-de-sloppify.md`, `express`, `graph.py`, `cheerio`, `date-fns`, `date-fns-tz`, `express-session`, `file-type`, `@google/genai`, `@googleapis/youtube`, `@langchain/community`, `@langchain/core`, `@langchain/google-vertexai-web`, `@langchain/langgraph-sdk`, `@langchain/openai`, `langsmith`, `@mendable/firecrawl-js`, `moment`, `@octokit/rest`, `passport`, `passport-twitter`, `playwright`, `sharp`, `@slack/web-api`, `snoowrap`, `@supabase/supabase-js`, `@types/snoowrap`, `xml2js`, `zod`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `getReflectionsPrompt()` connect `reflections.ts` to `loop-debug.md`, `generate-post/index.ts`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **Why does `SlackClient` connect `Execution plan (in order; stop and ask if anything is ambiguous)` to `Universal Autonomous-Agent Operating Framework — **Claude edition**`, `generate-posts-subgraph.ts`, `ingest-data-graph.ts`, `agent-env-setup — one-button new-environment install`, `upload-post/index.ts`, `loop-debug.md`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `Requirements`, `Run`, `Safety invariant` to the rest of the system?**
  _458 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Universal Autonomous-Agent Operating Framework — **Claude edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.06654567453115548 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Codex edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.06717687074829932 - nodes in this community are weakly interconnected._
- **Should `Universal Autonomous-Agent Operating Framework — **Claude edition**` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._