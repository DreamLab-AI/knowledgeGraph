---
okf_version: "0.2"
type: Class
title: Full-Text Search
resource: urn:ngm:class:full-text-search
domain: infrastructure
description: "Full-text search is a technique for locating documents or records that contain specified words or phrases by matching against an inverted index built over tokenised text content, rather than scanning raw text linearly. It supports ranking by relevance, stemming, and fuzzy matching, and is provided natively by systems such as PostgreSQL and dedicated engines such as Elasticsearch. Full-text search "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:search-index
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Full-Text Search

Full-text search is a technique for locating documents or records that contain specified words or phrases by matching against an inverted index built over tokenised text content, rather than scanning raw text linearly. It supports ranking by relevance, stemming, and fuzzy matching, and is provided natively by systems such as PostgreSQL and dedicated engines such as Elasticsearch. Full-text search underpins query engines and log aggregation systems that must retrieve relevant records from large unstructured text corpora.
