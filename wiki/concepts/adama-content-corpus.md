---
title: ADAMA content corpus
type: concept
date: 2026-07-25
status: active
---

# ADAMA content corpus

The local source archive is a provenance layer for the
[[../entities/adama|ADAMA]] content agent, not a publishing queue.

## Strong graph relationships

- ADAMA **has historical assets for** Jewish holidays and Shabbat.
- ADAMA **has educational context for** Hebrew learning.
- ADAMA **serves and discusses** aliyah and immigrant integration.
- ADAMA / CBA Young **organizes** meetings, trips, Shabbatons, and community
  campaigns.
- Historical exports **demonstrate** Instagram posts, Stories, Reels, promotional
  graphics, albums, print pieces, and event materials.
- Chabad and the Lubavitcher Rebbe **form part of** the Jewish context represented
  in the archive.

## Recommended retrieval layers

1. Metadata graph: source, path, format, date, event, theme, and brand entity.
2. Text chunks: PDF, DOCX, XLSX, PPTX, and plain-text extracts with provenance.
3. Visual layer: OCR, palette, typography, layout, logos, and perceptual
   deduplication.
4. Media layer: speech-to-text, scene segmentation, music rights, and reusable
   footage tags.
5. Editorial layer: approved claims, tone examples, sensitive-data rules, and
   human approval decisions.

No vector database was found in the project at ingest time. The first durable
representation is the Graphify knowledge graph plus the local derived index.
A vector store should be introduced only with an explicit embedding model,
privacy policy, deletion workflow, and chunk-level source citations.

## Source

See [[../sources/local-vault-import-2026-07-25|Local vault import — Downloads and work]].

