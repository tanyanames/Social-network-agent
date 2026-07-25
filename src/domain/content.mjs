export const CONTENT_FORMATS = Object.freeze([
  "reel",
  "carousel",
  "meme",
  "story",
  "event_announcement",
  "photo_report",
  "shabbat_post",
  "educational_post",
  "landing_page",
  "ad_copy",
]);

export const CONTENT_STATES = Object.freeze([
  "idea",
  "researched",
  "drafted",
  "critiqued",
  "revision_needed",
  "approval_pending",
  "approved",
  "scheduled",
  "published",
  "failed",
]);

const transitions = Object.freeze({
  idea: ["researched"],
  researched: ["drafted"],
  drafted: ["critiqued"],
  critiqued: ["revision_needed", "approval_pending"],
  revision_needed: ["drafted"],
  approval_pending: ["approved", "revision_needed"],
  approved: ["scheduled"],
  scheduled: ["published", "failed"],
  published: [],
  failed: ["scheduled"],
});

export function assertFormat(format) {
  if (!CONTENT_FORMATS.includes(format)) {
    throw new Error(`Unsupported content format: ${format}`);
  }
}

export function transition(item, nextState, actor = "agent") {
  if (!transitions[item.state]?.includes(nextState)) {
    throw new Error(`Invalid transition: ${item.state} -> ${nextState}`);
  }
  if (nextState === "approved" && actor !== "human") {
    throw new Error("Only a human can approve content");
  }

  const now = new Date().toISOString();
  return {
    ...item,
    state: nextState,
    updatedAt: now,
    audit: [
      ...item.audit,
      { from: item.state, to: nextState, actor, at: now },
    ],
  };
}

export function createContentItem({ id, format, topic, objective }) {
  assertFormat(format);
  const now = new Date().toISOString();
  return {
    id,
    format,
    topic,
    objective,
    state: "idea",
    createdAt: now,
    updatedAt: now,
    research: null,
    draft: null,
    critique: null,
    revisionCount: 0,
    approval: null,
    schedule: null,
    audit: [],
  };
}
