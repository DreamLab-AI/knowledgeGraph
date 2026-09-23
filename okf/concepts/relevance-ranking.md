---
okf_version: "0.2"
type: Class
title: Relevance Ranking
resource: urn:ngm:class:relevance-ranking
domain: ai
description: Relevance Ranking is the process of ordering a set of candidate documents, passages or items by their estimated usefulness to a given query or context. It combines lexical, semantic and behavioural signals into a score that determines the sequence in which results are presented. Ranking quality directly governs the perceived effectiveness of search, recommendation and retrieval-augmented generatio
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:information-retrieval
enables:
  - urn:ngm:class:search-engine
  - urn:ngm:class:recommendation-systems
dependsOn:
  - urn:ngm:class:embedding
contrastsWith:
  - urn:ngm:class:beam-search
bridgesTo:
  - urn:ngm:class:discovery-layer
uses:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:vector-search
  - urn:ngm:class:dense-retrieval
supports:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:retrieval-augmented-generation
partOf:
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:reranker
  - urn:ngm:class:context-engineering
  - urn:ngm:class:recommendation-systems
---

# Relevance Ranking

Relevance Ranking is the process of ordering a set of candidate documents, passages or items by their estimated usefulness to a given query or context. It combines lexical, semantic and behavioural signals into a score that determines the sequence in which results are presented. Ranking quality directly governs the perceived effectiveness of search, recommendation and retrieval-augmented generation systems.
