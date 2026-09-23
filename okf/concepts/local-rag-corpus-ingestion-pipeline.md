---
okf_version: "0.2"
type: Class
title: Local RAG Corpus Ingestion Pipeline
resource: urn:ngm:class:local-rag-corpus-ingestion-pipeline
domain: artificial-intelligence
description: Push To Local RAG is a data-pipeline operation that extracts, cleans, and concatenates Logseq markdown pages—filtering out short or low-quality documents—then writes the result to a single corpus file consumed by a local Retrieval-Augmented Generation system. The process involves URL stripping, special-character normalisation, whitespace normalisation, and a minimum byte-length threshold, producin
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-application
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:semantic-search
dependsOn:
  - urn:ngm:class:vector-database
  - urn:ngm:class:embedding-model
uses:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:tokenization
  - urn:ngm:class:data-pipeline
---

# Local RAG Corpus Ingestion Pipeline

Push To Local RAG is a data-pipeline operation that extracts, cleans, and concatenates Logseq markdown pages—filtering out short or low-quality documents—then writes the result to a single corpus file consumed by a local Retrieval-Augmented Generation system. The process involves URL stripping, special-character normalisation, whitespace normalisation, and a minimum byte-length threshold, producing a curated text corpus that improves retrieval precision for local LLM inference without sending data to external services.
