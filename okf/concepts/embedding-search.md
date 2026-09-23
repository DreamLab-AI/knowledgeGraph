---
okf_version: "0.2"
type: Class
title: Embedding Search
resource: urn:ngm:class:embedding-search
domain: ai
description: Embedding search is a retrieval paradigm in which queries and documents are encoded into dense vector representations in a shared semantic space, and similarity—typically measured by cosine distance or dot product—is used to rank and retrieve the most relevant items. Unlike keyword-based search, embedding search captures semantic relatedness, enabling matches on meaning rather than exact lexical o
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:neural-information-retrieval
  - urn:ngm:class:dense-retrieval
hasPart:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:vector-index
  - urn:ngm:class:query-encoder
  - urn:ngm:class:document-encoder
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:faiss
  - urn:ngm:class:vector-store
requires:
  - urn:ngm:class:vector-search
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:vector-database
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:training-data
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:document-retrieval
  - urn:ngm:class:question-answering
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:cross-modal-retrieval
  - urn:ngm:class:duplicate-detection
dependsOn:
  - urn:ngm:class:embedding
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:bert
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:embeddings
implements:
  - urn:ngm:class:bi-encoder-architecture
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:reciprocal-rank-fusion
  - urn:ngm:class:hnsw-index
contrastsWith:
  - urn:ngm:class:keyword-search
  - urn:ngm:class:bm25
  - urn:ngm:class:tf-idf-retrieval
  - urn:ngm:class:boolean-retrieval
  - urn:ngm:class:sparse-representation
  - urn:ngm:class:inverted-index-search
uses:
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:vector-store
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:inner-product
  - urn:ngm:class:faiss
  - urn:ngm:class:pinecone
  - urn:ngm:class:weaviate
  - urn:ngm:class:qdrant
  - urn:ngm:class:pgvector
  - urn:ngm:class:milvus
  - urn:ngm:class:chroma
supports:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:enterprise-search
  - urn:ngm:class:e-commerce-search
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:legal-document-retrieval
  - urn:ngm:class:code-search
  - urn:ngm:class:multimodal-search
standardizedBy:
  - urn:ngm:class:beir-benchmark
  - urn:ngm:class:mteb-benchmark
  - urn:ngm:class:ms-marco
  - urn:ngm:class:trec
relatedTo:
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:hybrid-retrieval
  - urn:ngm:class:colbert-late-interaction
  - urn:ngm:class:cross-encoder-reranking
  - urn:ngm:class:reciprocal-rank-fusion
  - urn:ngm:class:knowledge-retrieval
  - urn:ngm:class:large-language-models
  - urn:ngm:class:multimodal-ai-architecture-ai
---

# Embedding Search

Embedding search is a retrieval paradigm in which queries and documents are encoded into dense vector representations in a shared semantic space, and similarity—typically measured by cosine distance or dot product—is used to rank and retrieve the most relevant items. Unlike keyword-based search, embedding search captures semantic relatedness, enabling matches on meaning rather than exact lexical overlap.
