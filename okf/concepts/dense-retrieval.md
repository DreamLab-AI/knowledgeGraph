---
okf_version: "0.2"
type: Class
title: Dense Retrieval
resource: urn:ngm:class:dense-retrieval
domain: ai
description: Dense retrieval is an information-retrieval method that encodes queries and documents into dense vector embeddings and ranks results by vector similarity rather than lexical term overlap. A learned bi-encoder maps text into a shared semantic space so that conceptually related items are close even without shared keywords. It underpins semantic search and retrieval-augmented generation, often paired
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:semantic-search
  - urn:ngm:class:embedding-search
  - urn:ngm:class:neural-information-retrieval
hasPart:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:vector-database
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:bi-encoder
  - urn:ngm:class:hard-negative-mining
requires:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:vector-database
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-compute
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:semantic-search
  - urn:ngm:class:question-answering
  - urn:ngm:class:agentic-rag
  - urn:ngm:class:document-retrieval
  - urn:ngm:class:cross-modal-retrieval
  - urn:ngm:class:hybrid-retrieval
  - urn:ngm:class:knowledge-retrieval
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:embedding-model
  - urn:ngm:class:vector-database
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:contrastive-learning
implements:
  - urn:ngm:class:embedding-search
  - urn:ngm:class:semantic-search
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:nearest-neighbor-search
contrastsWith:
  - urn:ngm:class:bm25
  - urn:ngm:class:tf-idf
  - urn:ngm:class:sparse-retrieval
  - urn:ngm:class:keyword-search
  - urn:ngm:class:inverted-index
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:vector-database
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:embedding-model
  - urn:ngm:class:nearest-neighbor-search
supports:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:large-language-models
  - urn:ngm:class:agentic-rag
  - urn:ngm:class:question-answering
  - urn:ngm:class:cross-encoder-reranking
  - urn:ngm:class:hybrid-retrieval
standardizedBy:
  - urn:ngm:class:beir-benchmark
  - urn:ngm:class:ms-marco
  - urn:ngm:class:trec-deep-learning-track
  - urn:ngm:class:mteb-leaderboard
relatedTo:
  - urn:ngm:class:embedding-search
  - urn:ngm:class:semantic-search
  - urn:ngm:class:dense-passage-retrieval
  - urn:ngm:class:hybrid-retrieval
  - urn:ngm:class:cross-encoder-reranking
  - urn:ngm:class:agentic-rag
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:vector-database
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:colbert
  - urn:ngm:class:splade
  - urn:ngm:class:question-answering
  - urn:ngm:class:document-retrieval
  - urn:ngm:class:embedding-model
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:bm25
---

# Dense Retrieval

Dense retrieval is an information-retrieval method that encodes queries and documents into dense vector embeddings and ranks results by vector similarity rather than lexical term overlap. A learned bi-encoder maps text into a shared semantic space so that conceptually related items are close even without shared keywords. It underpins semantic search and retrieval-augmented generation, often paired with approximate nearest-neighbour indexes for scale.
