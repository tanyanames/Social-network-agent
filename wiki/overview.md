# Social Network Agent — Overview

This project is an autonomous social-media management agent for
[ADAMA](entities/adama.md), a Jewish youth community serving young
Russian-speaking new immigrants in Israel.

The selected engineering base is `langchain-ai/social-media-agent`, preserved
as an attributed vendor snapshot. An ADAMA-owned [mock MVP](concepts/adama-mock-mvp.md)
now implements account analysis, planning inputs, drafting, critique, revision,
mandatory human approval, and a non-publishing queue.

The current operational layer creates persistent channel adaptations for
Instagram, Facebook, and Telegram in
[multichannel shadow mode](concepts/multichannel-shadow-mode.md). Live platform
calls remain disabled pending credentials, account permissions, brand approval,
and shadow-mode validation.

The connected [CBA.young Figma sandbox](sources/figma-cba-young-sandbox.md) is
now a verified visual-reference source. It establishes CBA's real social
formats, typography, colour range, and photo treatment, but it is an archive
rather than an automation-ready component library. ADAMA-specific palette and
logo authority remain pending.
