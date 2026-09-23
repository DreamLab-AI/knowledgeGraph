---
okf_version: "0.2"
type: Class
title: Chunking
resource: urn:ngm:class:chunking
domain: ai
description: Chunking is the process of segmenting source documents into smaller, semantically coherent passages before they are embedded and indexed for retrieval-augmented generation. Strategies range from fixed-size and overlapping windows to recursive, sentence-aware, and semantic chunking that respects document structure. It matters because chunk size and boundaries directly govern retrieval precision and
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:text-segmentation
hasPart:
  - urn:ngm:class:chunk-overlap
  - urn:ngm:class:chunk-metadata
  - urn:ngm:class:chunk-boundary
  - urn:ngm:class:token-window
  - urn:ngm:class:splitting-strategy
  - urn:ngm:class:document-parser
requires:
  - urn:ngm:class:document-parser
  - urn:ngm:class:tokeniser
  - urn:ngm:class:embedding-model
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:hallucination-reduction
  - urn:ngm:class:hallucination-reduction
  - urn:ngm:class:source-attribution
  - urn:ngm:class:question-answering
  - urn:ngm:class:hybrid-retrieval
dependsOn:
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:vector-database
  - urn:ngm:class:embedding-model
implements:
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:document-indexing-pipeline
contrastsWith:
  - urn:ngm:class:full-document-indexing
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:parametric-knowledge
uses:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:sentence-transformers
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tokeniser
  - urn:ngm:class:embedding-model
  - urn:ngm:class:vector-database
supports:
  - urn:ngm:class:question-answering
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:source-attribution
  - urn:ngm:class:knowledge-grounding
  - urn:ngm:class:document-intelligence
standardizedBy:
  - urn:ngm:class:lang-chain
  - urn:ngm:class:meta-llama-model-family-index
  - urn:ngm:class:haystack
relatedTo:
  - urn:ngm:class:rag-pipeline
  - urn:ngm:class:gpts-and-custom-assistants
  - urn:ngm:class:context-window
  - urn:ngm:class:information-extraction
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:embedding-search
  - urn:ngm:class:semantic-search
  - urn:ngm:class:chatbot
---

# Chunking

Chunking is the process of segmenting source documents into smaller, semantically coherent passages before they are embedded and indexed for retrieval-augmented generation. Strategies range from fixed-size and overlapping windows to recursive, sentence-aware, and semantic chunking that respects document structure. It matters because chunk size and boundaries directly govern retrieval precision and the relevance of context supplied to a language model, making chunking a primary lever for RAG quality.
