# ADAMA / CBA design audit

## Evidence reviewed

The audit combines local ADAMA/CBA logo exports and representative event and
Shabbat graphics from the immutable vault with a read-only inspection of the
connected Figma file `CBA.young — sandbox`. The Figma audit covered its three
pages, the complete 5,537-layer current page, top-level inventories of both
archive pages, local styles, and representative 4:5 and Story renders.

The CBA findings are verified. ADAMA-specific palette and logo rules remain
provisional until an explicit ADAMA brand source is supplied.

## Observed system

- ADAMA logo: lowercase custom wordmark with a Hebrew letterform relationship;
  one available export uses vivid orange on black.
- CBA Young logo: condensed italic display lettering, commonly white.
- The current CBA Figma page is built primarily around 1080×1350 posts,
  1080×1920 Stories, 1080×1080 squares, and 1920×1080 city/event screens.
- Its most frequent colours are black, white, electric blue `#3A39FF`, pale
  cyan `#ADE6ED`, light grey `#E8E9E7`, and orange `#FF5B23`. Lime
  `#B0CF00` is present but not dominant.
- Roboto Condensed Medium and Roboto Black dominate, followed by Roboto Medium
  and Montserrat Bold.
- Layouts favour oversized condensed statements, geometric photo masks, warm
  community photography, simple Jewish identity markers, and playful editorial
  composition.
- Russian is primary; Hebrew/English appear as identity and contextual layers.

## Risks

- The operator brief specifies a green/lime ADAMA palette, while the connected
  CBA file is a multicolour archive dominated by blue/cyan/orange. This is a
  brand relationship to resolve, not evidence that ADAMA should inherit CBA
  colours.
- The current Figma page has no components, and the legacy page has only one
  component and one component set. Inconsistent frame naming and mixed archive
  eras make direct template automation fragile.
- Some sampled layouts have crowded text, weak mobile-safe margins, inconsistent
  logo scale, or decorative typography that reduces readability.
- Archive assets may contain participant images without recorded reuse consent.

## Production rules

Use one message per frame, oversized high-contrast type, generous mobile-safe
margins, restrained geometry, warm community photography, and respectful Jewish
symbols. Use the CBA file for hierarchy, formats, photo treatment, and tone.
Do not infer ADAMA's final palette from this CBA sandbox.

## Required preparation for automated design

Create a curated, approved template page or separate library containing:

- colour and typography tokens;
- logo components and minimum clear-space rules;
- named image, headline, details, CTA, and city slots;
- 4:5 post/carousel, 9:16 Story/Reel cover, square, event, and photo-report
  components;
- safe-area and maximum-copy constraints;
- stable node IDs recorded in the Figma source registry.

The agent may then populate approved slots and generate previews for human
approval. It must not choose arbitrary archive frames as production templates.
