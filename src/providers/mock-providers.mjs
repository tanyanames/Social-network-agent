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
    const hook = `${item.topic}: то, что хотелось бы знать в первый месяц в Израиле`;
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
        designBrief: "Lime background, black oversized type, one emotional photo.",
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
      designBrief: "Fast cuts, lime captions, bold black type, warm community footage.",
    };
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
  async schedule(item, date) {
    if (item.state !== "approved") {
      throw new Error("Publishing queue accepts approved content only");
    }
    return {
      provider: "mock",
      scheduledFor: date,
      externalCallMade: false,
    };
  }
}
