---
okf_version: "0.2"
type: Class
title: Document Retrieval
resource: urn:ngm:class:document-retrieval
domain: artificial-intelligence
description: Document Retrieval is the process of identifying and returning relevant documents from a corpus in response to an information need expressed as a query. It forms the foundational layer of search engines, question-answering systems, and retrieval-augmented generation pipelines. Retrieval methods range from sparse keyword matching to dense neural embedding approaches that encode semantic similarity.
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:hybrid-retrieval
  - urn:ngm:class:bm25
  - urn:ngm:class:inverted-index
  - urn:ngm:class:embedding-search
  - urn:ngm:class:semantic-search
  - urn:ngm:class:cross-encoder-reranking
  - urn:ngm:class:reciprocal-rank-fusion
requires:
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:document-corpus
  - urn:ngm:class:evaluation-metric
enables:
  - urn:ngm:class:zero-knowledge-machine-learning
  - urn:ngm:class:embedding-search
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:question-answering
  - urn:ngm:class:search-engine
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:cross-modal-retrieval
dependsOn:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:embedding
  - urn:ngm:class:embedding-space
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer
implements:
  - urn:ngm:class:bm25
  - urn:ngm:class:dense-passage-retrieval
  - urn:ngm:class:tf-idf
  - urn:ngm:class:nearest-neighbor-search
contrastsWith:
  - urn:ngm:class:dense-passage-retrieval
  - urn:ngm:class:database-query
  - urn:ngm:class:data-mining
bridgesTo:
  - urn:ngm:class:email-corpus-retrieval-architecture
uses:
  - urn:ngm:class:embedding
  - urn:ngm:class:embedding-space
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:vector-database
  - urn:ngm:class:word-embeddings
  - urn:ngm:class:transformer
supports:
  - urn:ngm:class:cross-modal-retrieval
  - urn:ngm:class:embedding-model
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:document-summarisation
  - urn:ngm:class:semantic-search
standardizedBy:
  - urn:ngm:class:trec-evaluation-programme
  - urn:ngm:class:beir-benchmark
  - urn:ngm:class:ms-marco
  - urn:ngm:class:sigir-community
relatedTo:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:graph-embedding
  - urn:ngm:class:email-corpus-retrieval-architecture
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:natural-language-processing
---

# Document Retrieval

Document Retrieval is the process of identifying and returning relevant documents from a corpus in response to an information need expressed as a query. It forms the foundational layer of search engines, question-answering systems, and retrieval-augmented generation pipelines. Retrieval methods range from sparse keyword matching to dense neural embedding approaches that encode semantic similarity. Effectiveness is typically measured using metrics such as precision, recall, mean reciprocal rank, and normalised discounted cumulative gain.
