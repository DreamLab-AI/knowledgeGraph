---
okf_version: "0.2"
type: Class
title: Vector Search
resource: urn:ngm:class:vector-search
domain: artificial-intelligence
description: Vector search is a retrieval paradigm that identifies the items in a corpus whose high-dimensional vector representations are most similar to a query vector, using distance or similarity metrics such as cosine similarity, dot product, or Euclidean distance. Because exhaustive pairwise comparison scales as O(n·d) and becomes intractable for large corpora, practical systems use approximate nearest n
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:information-retrieval
hasPart:
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:inverted-index
  - urn:ngm:class:product-quantisation
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:inverted-index
requires:
  - urn:ngm:class:embeddings
  - urn:ngm:class:embedding-model
  - urn:ngm:class:similarity-metric
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:cross-modal-retrieval
dependsOn:
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:vector-index
  - urn:ngm:class:nearest-neighbor-search
contrastsWith:
  - urn:ngm:class:keyword-search
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:nearest-neighbor-search
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:spatial-index
  - urn:ngm:class:spatial-index
uses:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:dot-product
  - urn:ngm:class:locality-sensitive-hashing
partOf:
  - urn:ngm:class:vector-database
relatedTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:hybrid-search
---

# Vector Search

Vector search is a retrieval paradigm that identifies the items in a corpus whose high-dimensional vector representations are most similar to a query vector, using distance or similarity metrics such as cosine similarity, dot product, or Euclidean distance. Because exhaustive pairwise comparison scales as O(n·d) and becomes intractable for large corpora, practical systems use approximate nearest neighbour (ANN) algorithms — including HNSW, IVF-PQ, and LSH — that trade a small, configurable recall loss for orders-of-magnitude latency improvement. Vectors are typically produced by embedding models that encode semantic, visual, or multimodal meaning into dense float arrays, making vector search inherently meaning-sensitive rather than lexical. The paradigm underpins semantic search, recommendation systems, retrieval-augmented generation, duplicate detection, and cross-modal retrieval across text, image, audio, and structured data.
