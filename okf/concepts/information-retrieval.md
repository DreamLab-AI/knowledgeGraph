---
okf_version: "0.2"
type: Class
title: Information Retrieval
resource: urn:ngm:class:information-retrieval
domain: ai
description: Information Retrieval (IR) is the science and engineering discipline concerned with representing, storing, organising, and providing access to items of information — typically documents, passages, or structured records — so that a user's information need, expressed as a query, can be satisfied efficiently and accurately. Classical IR models such as the Boolean model, the vector space model (TF-IDF
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:inverted-index
  - urn:ngm:class:query-processing
  - urn:ngm:class:relevance-ranking
requires:
  - urn:ngm:class:tokenization
  - urn:ngm:class:text-representation
  - urn:ngm:class:neural-network-text-tokenisation
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:search-engine
  - urn:ngm:class:question-answering
  - urn:ngm:class:recommendation-system
dependsOn:
  - urn:ngm:class:corpus
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:evaluation-metric
contrastsWith:
  - urn:ngm:class:database-query
  - urn:ngm:class:data-mining
bridgesTo:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:spatial-search
uses:
  - urn:ngm:class:vector-database
  - urn:ngm:class:semantic-search
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:transformer
  - urn:ngm:class:word-embeddings
partOf:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:large-language-model
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:nearest-neighbor-search
---

# Information Retrieval

Information Retrieval (IR) is the science and engineering discipline concerned with representing, storing, organising, and providing access to items of information — typically documents, passages, or structured records — so that a user's information need, expressed as a query, can be satisfied efficiently and accurately. Classical IR models such as the Boolean model, the vector space model (TF-IDF), and probabilistic models (BM25) underpin search engines and document ranking systems; neural IR extends these with dense vector representations derived from transformer language models, enabling semantic matching that generalises beyond exact term overlap. Modern IR encompasses sparse retrieval, dense retrieval, re-ranking, and hybrid architectures, and is the core subsystem enabling Retrieval-Augmented Generation (RAG), question answering, and knowledge-graph-grounded AI systems.
