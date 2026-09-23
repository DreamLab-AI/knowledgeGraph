---
okf_version: "0.2"
type: Class
title: Vector Database
resource: urn:ngm:class:vector-database
domain: artificial-intelligence
description: A vector database is a specialised data storage and retrieval system optimised for indexing and querying high-dimensional dense vectors (embeddings) using approximate nearest-neighbour (ANN) search algorithms such as HNSW, IVF-PQ, and ScaNN. Unlike traditional relational databases, vector databases solve the problem of finding the k most similar vectors to a query in Euclidean or cosine space over
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:inverted-index
  - urn:ngm:class:product-quantisation
  - urn:ngm:class:inverted-index
  - urn:ngm:class:metadata-filter
requires:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:nearest-neighbor-search
enables:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:semantic-search
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:multimodal-search
  - urn:ngm:class:anomaly-detection
contrastsWith:
  - urn:ngm:class:relational-database
  - urn:ngm:class:search-engine
  - urn:ngm:class:document-database
bridgesTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:data-pipeline
uses:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:bm25
  - urn:ngm:class:hybrid-search
relatedTo:
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:search-index
  - urn:ngm:class:large-language-model
  - urn:ngm:class:knowledge-graph
---

# Vector Database

A vector database is a specialised data storage and retrieval system optimised for indexing and querying high-dimensional dense vectors (embeddings) using approximate nearest-neighbour (ANN) search algorithms such as HNSW, IVF-PQ, and ScaNN. Unlike traditional relational databases, vector databases solve the problem of finding the k most similar vectors to a query in Euclidean or cosine space over millions to billions of embeddings representing text, images, audio, or multimodal content. They combine ANN indexing with structured metadata filtering, persistence, CRUD operations, and access control, enabling retrieval-augmented generation, semantic search, and large-scale recommendation at production quality. The category encompasses dedicated systems (Pinecone, Qdrant, Weaviate, Milvus, Chroma) and vector-search extensions added to existing databases (pgvector for PostgreSQL, Redis Stack).
