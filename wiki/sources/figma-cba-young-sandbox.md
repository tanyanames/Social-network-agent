---
type: source
created: 2026-07-25
updated: 2026-07-26
sources:
  - https://www.figma.com/design/Envd72gDVa15z27IGN5p3w/CBA.young-%E2%80%94-sandbox
confidence: high
status: active
verified_by: Figma connector read-only audit
staleness_window: 30 days
relates_to:
  - "[[ADAMA]]"
  - "[[Multichannel shadow mode]]"
tags:
  - figma
  - design-system
  - cba-young
---

# Figma — CBA.young sandbox

## Scope

The connected Figma file was inspected read-only on 2026-07-25. It contains
three pages:

- `5786` (`2075:1579`) — current working page, 190 top-level objects;
- `2023-2024 NEW DESIGNS` (`0:1`) — recent archive, 112 top-level objects;
- `sandbox OLD` (`2:81`) — legacy archive, 361 top-level objects.

The file is a large production archive, not a clean component library. The
current page contains 5,537 descendant layers and no component or component-set
nodes. The legacy page contains one component and one component set.

## Current-page evidence

The dominant social formats are:

- 78 frames at 1080×1350;
- 35 frames at 1080×1920;
- 18 frames at 1080×1080;
- 14 frames at 1920×1080.

The most frequent visible solid fills are black `#000000`, white `#FFFFFF`,
electric blue `#3A39FF`, pale cyan `#ADE6ED`, light grey `#E8E9E7`, and orange
`#FF5B23`. Lime `#B0CF00` is present but is not the dominant file colour.
Frequently used type includes Roboto Condensed Medium, Roboto Black, Roboto
Medium, and Montserrat Bold. The local paint-style catalog explicitly separates
several entries under `старые цвета/` from named current colours such as
`синий`, `голубой`, `оранжевый`, `желтый`, `розовый`, `салатовый`, and
`зеленый`.

Two representative renders confirm the repeated visual grammar:

- oversized condensed black display type over warm community photography;
- bold colour fields, circular or polygonal photo masks, white display type,
  and a small CBA Young mark;
- Russian as the primary message layer with small Hebrew identity markers;
- one dominant message per frame and an editorial, energetic composition.

## Reuse decision

Use this file as a visual-reference corpus for format, hierarchy, photo
treatment, and CBA tone. Do not treat it as an automation-ready design system:
frame naming is inconsistent, reusable components are almost absent, and the
archive mixes current work with explicitly old colours and legacy layouts.

Before automatic design generation, create a curated template page or separate
library with approved tokens, named slots, safe areas, and components for Reel
cover, 4:5 post/carousel, Story, event announcement, and photo report. ADAMA's
final logo and palette still require an explicit ADAMA source of truth; CBA
visual evidence must not silently override the ADAMA brief.

## Automation relationship

The file is registered in `config/figma-sources.json` by immutable file key and
page IDs. A future sync can compare page metadata and selected template nodes,
but should ingest only approved templates rather than every experimental frame.

## Automation foundations — 2026-07-26

With operator approval, an isolated automation foundation was added without
changing the legacy collection:

- `ADAMA Primitives`: 8 colour variables;
- `ADAMA Semantic`: 9 aliased colour roles;
- `ADAMA Layout`: 13 spacing, radius, and safe-area variables;
- 5 `ADAMA/Automation/*` text styles;
- 1 `ADAMA/Automation/Photo Lift` effect style.

All 30 variables have WEB code syntax and none use `ALL_SCOPES`. The semantic
layer contains the temporary verified CBA values, allowing a future approved
ADAMA palette to replace primitives without rebuilding components.

The Figma connector accepted variables and styles but rejected the design-mode
`createPage()` operation atomically with `INVALID_ARGUMENT`. No partial page or
canvas node was created. The operator must add one blank page named
`ADAMA — Automation Library v1`; the agent can then resume on that stable page
and create the five approved component families.
