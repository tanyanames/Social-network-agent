# Social Network Agent — Overview

This project is an autonomous social-media management engine for two separate
communities and social accounts: [ADAMA](entities/adama.md) and
[CBA Young](entities/cba-young.md).

The selected engineering base is `langchain-ai/social-media-agent`, preserved
as an attributed vendor snapshot. An ADAMA-owned [mock MVP](concepts/adama-mock-mvp.md)
now implements account analysis, planning inputs, drafting, critique, revision,
mandatory human approval, and a non-publishing queue.

The current operational layer creates persistent channel adaptations for
Instagram, Facebook, and Telegram in
[multichannel shadow mode](concepts/multichannel-shadow-mode.md). The two
tenants have enforced [brand and account isolation](concepts/multi-account-brand-isolation.md).
Live platform calls remain disabled pending separate credentials, account
permissions, brand approvals, and shadow-mode validation.

The connected [CBA.young Figma sandbox](sources/figma-cba-young-sandbox.md)
belongs exclusively to CBA Young. It establishes CBA's formats, typography,
colour range, and photo treatment, but is not an ADAMA source. ADAMA-specific
palette, logo, and template authority remain pending.
