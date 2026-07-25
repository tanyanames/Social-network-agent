const fixtureTrendMap = {
  "Hebrew and Israeli slang": [
    "short situational dialogue",
    "saveable phrase card",
    "comment with your first Hebrew mix-up",
  ],
  "new immigrant memes": [
    "expectation versus reality",
    "POV first week in Israel",
    "community in-joke with an inclusive explanation",
  ],
};

export class MockAccountAnalyzer {
  async analyze(posts) {
    const formats = posts.reduce((counts, post) => {
      counts[post.format] = (counts[post.format] ?? 0) + 1;
      return counts;
    }, {});
    return {
      postCount: posts.length,
      strongestFormats: Object.entries(formats)
        .sort((a, b) => b[1] - a[1])
        .map(([format]) => format),
      recurringThemes: [...new Set(posts.flatMap((post) => post.themes))],
      observedTone: ["warm", "community-first", "informal"],
    };
  }
}

export class MockContentPlanner {
  async plan({ cadence = "weekly", startDate }) {
    const length = cadence === "monthly" ? 12 : 4;
    const formats = ["reel", "carousel", "story", "event_announcement"];
    const topics = [
      "Hebrew and Israeli slang",
      "new immigrant memes",
      "Jewish holidays and Shabbat",
      "community events and city groups",
    ];
    const start = new Date(startDate);
    return Array.from({ length }, (_, index) => ({
      id: `${cadence}-${index + 1}`,
      date: new Date(start.getTime() + index * 2 * 86_400_000)
        .toISOString()
        .slice(0, 10),
      format: formats[index % formats.length],
      topic: topics[index % topics.length],
      objective: index % 2
        ? "Increase saves and community belonging"
        : "Increase qualified event and city-group interest",
      channels: ["instagram", "facebook", "telegram"],
      status: "planned",
    }));
  }
}

export class MockTrendResearcher {
  async research(topic) {
    return {
      topic,
      signals: fixtureTrendMap[topic] ?? [
        "strong first-second hook",
        "specific lived experience",
        "save/share CTA",
      ],
      sourceMode: "fixture",
      checkedAt: new Date().toISOString(),
    };
  }
}

export class MockContentGenerator {
  async draft(item, brand, research) {
    const hook = `${item.topic}: что хотелось бы знать в первый месяц в Израиле`;
    if (item.format === "carousel") {
      return {
        language: brand.primaryLanguage,
        hook,
        slides: [
          hook,
          "Узнаваемая ситуация из жизни нового репатрианта",
          `Практический шаг: ${research.signals[0]}`,
          "Как с этим помогает комьюнити ADAMA",
          "Сохрани и отправь тому, кому это сейчас нужно",
        ],
        caption: "Без идеальной адаптации — зато вместе и по-настоящему.",
        cta: "Напиши город в комментариях — ADAMA познакомит с ближайшей группой.",
        designBrief: "Один крупный тезис на слайд, контрастная типографика, живое фото сообщества и актуальная ADAMA-палитра.",
      };
    }
    return {
      language: brand.primaryLanguage,
      hook,
      scenes: [
        { seconds: "0-2", visual: "Большой текст-хук", voiceover: hook },
        {
          seconds: "3-9",
          visual: "Быстрая бытовая сцена",
          voiceover: research.signals[0],
        },
        {
          seconds: "10-15",
          visual: "Люди ADAMA вместе",
          voiceover: "Адаптация легче, когда рядом свои.",
        },
      ],
      caption: "Израиль становится своим не за один день. Но не обязательно проходить это одному.",
      cta: "Отправь новому репатрианту и приходи в ADAMA.",
      designBrief: "Быстрый монтаж, крупные контрастные титры, тёплые кадры сообщества и актуальная ADAMA-палитра.",
    };
  }

  async adapt(masterDraft, item) {
    return Object.fromEntries(item.channels.map((channel) => {
      const common = {
        channel,
        format: item.format,
        language: masterDraft.language,
        hook: masterDraft.hook,
        cta: masterDraft.cta,
        designBrief: masterDraft.designBrief,
      };
      if (channel === "instagram") {
        return [channel, {
          ...common,
          caption: `${masterDraft.caption}\n\n${masterDraft.cta}\n\n#ADAMA #Израиль #НовыеРепатрианты`,
          assetPlan: item.format === "carousel"
            ? "4:5 carousel + 9:16 story teaser"
            : "9:16 primary asset",
        }];
      }
      if (channel === "facebook") {
        return [channel, {
          ...common,
          caption: `${masterDraft.caption}\n\n${masterDraft.cta}\n\nПоделитесь публикацией с теми, кому сейчас особенно нужна своя компания в Израиле.`,
          assetPlan: "4:5 feed asset; preserve link-preview-safe opening",
        }];
      }
      return [channel, {
        ...common,
        caption: `**${masterDraft.hook}**\n\n${masterDraft.caption}\n\n${masterDraft.cta}`,
        assetPlan: "1:1 or 4:5 media + Telegram-formatted text",
      }];
    }));
  }
}

export class MockCritic {
  async critique(item, brand) {
    const issues = [];
    if (!item.draft?.cta?.toLowerCase().includes("adama")) {
      issues.push("CTA must connect the action to ADAMA");
    }
    if (!item.draft?.hook || item.draft.hook.length < 20) {
      issues.push("Hook is not specific enough");
    }
    if (!item.channelDrafts || Object.keys(item.channelDrafts).length !== item.channels.length) {
      issues.push("Every selected channel requires an adapted draft");
    }
    return {
      brandFit: issues.length ? 0.72 : 0.94,
      viralityPotential: 0.78,
      culturalSafety: 0.95,
      issues,
      verdict: issues.length ? "revise" : "approve_for_human_review",
      checkedAgainst: brand.reviewRules,
    };
  }
}

export class MockPublisher {
  async schedule(item, date, channels = item.channels) {
    if (item.state !== "approved") {
      throw new Error("Publishing queue accepts approved content only");
    }
    return {
      provider: "mock",
      scheduledFor: date,
      channels: channels.map((channel) => ({
        channel,
        status: "shadow_scheduled",
        externalId: null,
      })),
      externalCallMade: false,
    };
  }
}
