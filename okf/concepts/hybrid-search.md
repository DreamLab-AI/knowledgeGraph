---
okf_version: "0.2"
type: Class
title: Hybrid Search
resource: urn:ngm:class:hybrid-search
domain: machine-learning
description: "Hybrid search is an information retrieval approach that combines sparse lexical retrieval — typically BM25 or TF-IDF — with dense vector search over neural embeddings, fusing their complementary strengths: precise keyword matching and semantic understanding respectively. Score fusion via Reciprocal Rank Fusion or learned weighting combines ranked lists from both systems. The combination consistent"
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:information-retrieval
hasPart:
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:sparse-retrieval
  - urn:ngm:class:rank-fusion
requires:
  - urn:ngm:class:vector-database
  - urn:ngm:class:text-encoder
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:cross-encoder-reranking
  - urn:ngm:class:question-answering
  - urn:ngm:class:enterprise-search
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer
contrastsWith:
  - urn:ngm:class:keyword-search
  - urn:ngm:class:pure-vector-search
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:data
uses:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:bm25
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:reciprocal-rank-fusion
  - urn:ngm:class:inverted-index
  - urn:ngm:class:nearest-neighbor-search
relatedTo:
  - urn:ngm:class:retrieval-augmented-generation-rag
  - urn:ngm:class:neural-network
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:colbert
---

# Hybrid Search

Hybrid search is an information retrieval approach that combines sparse lexical retrieval — typically BM25 or TF-IDF — with dense vector search over neural embeddings, fusing their complementary strengths: precise keyword matching and semantic understanding respectively. Score fusion via Reciprocal Rank Fusion or learned weighting combines ranked lists from both systems. The combination consistently outperforms either method alone across diverse query types, and has become the dominant retrieval pattern underpinning Retrieval-Augmented Generation pipelines.
