---
title: Local vault import — Downloads and work
type: source
date: 2026-07-25
status: indexed
confidence: medium
---

# Local vault import — Downloads and work

## Scope

An immutable local vault was assembled from:

- `C:\Users\Alyki\Downloads`
- `C:\Users\Alyki\Desktop\work`

The imported semantic/media subset contains 4,710 files and 15.27 GiB:

| Source | Files | Size |
|---|---:|---:|
| Downloads | 3,731 | 12.35 GiB |
| work | 979 | 2.92 GiB |

Archives, installers, disk images, applications, and shortcuts were excluded from
the copied vault. The original source directories were not modified.

## Indexing result

- Every imported file has a metadata record.
- Text was extracted from 530 files: 605 PDFs were attempted, along with 68
  workbooks, 38 DOCX files, 21 text-like files, and 2 presentations.
- The derived index contains 3,023,260 extracted characters.
- 35 files above 40 MiB were metadata-indexed only.
- Four files could not be parsed: one encrypted PDF and three temporary Office
  lock files.
- Images, audio, video, design-source files, scanned PDF pages, and legacy binary
  Office files require later OCR, transcription, or specialist parsing for
  content-level analysis.

The local raw vault, full filename manifest, and extracted text index are excluded
from Git because they can contain personal or operational data.

## Evidence-backed thematic clusters

Theme matching used both paths and extracted text. Counts overlap because a file
may belong to several themes.

| Theme | Matching files |
|---|---:|
| ADAMA / CBA identity and brand assets | 402 |
| Community events, meetings, trips, and fundraising | 391 |
| Social/promo content formats | 363 |
| Jewish calendar and holidays | 253 |
| Hebrew learning | 136 |
| Rebbe / Chabad context | 132 |
| Aliyah and immigrant integration | 118 |

The corpus therefore supplies substantial historical context for
[[../entities/adama|ADAMA]], especially for brand continuity, holiday programming,
Hebrew education, immigrant integration, community events, and reusable social
formats. These are discovery signals rather than final editorial conclusions:
duplicate exports and unrelated personal Downloads can inflate counts.

## Technical artifacts

- Local manifest: `Context/vault-manifest.csv`
- Local derived index: `Context/vault-index/extracted.ndjson`
- Local extraction summary: `Context/vault-index/summary.json`
- Reproducible importer: `scripts/index-local-vault.py`

## Guardrails

This ingest does not authorize publishing, contacting participants, or using
personal information in generated content. Any future retrieval layer should
apply provenance, access control, deduplication, and a human approval gate.

