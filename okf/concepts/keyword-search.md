---
okf_version: "0.2"
type: Class
title: Keyword Search
resource: urn:ngm:class:keyword-search
domain: machine-learning
description: Keyword search is an information retrieval approach that matches documents to a query based on the presence and statistics of literal terms, typically using inverted indexes and term-weighting schemes. It ranks results by lexical relevance signals such as term frequency and inverse document frequency rather than semantic meaning. Fast, interpretable, and exact for known vocabulary, it is frequentl
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:information-retrieval
requires:
  - urn:ngm:class:query-processing
enables:
  - urn:ngm:class:relevance-ranking
implements:
  - urn:ngm:class:full-text-search
contrastsWith:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:vector-search
bridgesTo:
  - urn:ngm:class:hybrid-search
uses:
  - urn:ngm:class:inverted-index
  - urn:ngm:class:bm25
  - urn:ngm:class:tf-idf
supports:
  - urn:ngm:class:search-engine
  - urn:ngm:class:document-retrieval
relatedTo:
  - urn:ngm:class:full-text-search
  - urn:ngm:class:search-engine
  - urn:ngm:class:relevance-ranking
---

# Keyword Search

Keyword search is an information retrieval approach that matches documents to a query based on the presence and statistics of literal terms, typically using inverted indexes and term-weighting schemes. It ranks results by lexical relevance signals such as term frequency and inverse document frequency rather than semantic meaning. Fast, interpretable, and exact for known vocabulary, it is frequently combined with semantic methods in hybrid retrieval to balance precision and recall.
