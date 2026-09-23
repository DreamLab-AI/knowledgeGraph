---
okf_version: "0.2"
type: Class
title: Nearest Neighbor Search
resource: urn:ngm:class:nearest-neighbor-search
domain: machine-learning
description: Nearest Neighbor Search (NNS) is an algorithmic problem and family of techniques for finding the point(s) in a dataset most similar to a given query point, as measured by a distance or similarity metric such as Euclidean distance, cosine similarity, or inner product. Exact NNS guarantees retrieval of the true closest point but scales poorly in high dimensions, while Approximate Nearest Neighbor (A
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:search-algorithm
hasPart:
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:locality-sensitive-hashing
  - urn:ngm:class:inverted-index
  - urn:ngm:class:approximate-nearest-neighbor
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:inverted-index
requires:
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:distance-metric
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:image-retrieval
dependsOn:
  - urn:ngm:class:vector-database
  - urn:ngm:class:embedding-model
contrastsWith:
  - urn:ngm:class:keyword-search
  - urn:ngm:class:exact-search
bridgesTo:
  - urn:ngm:class:spatial-index
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:spatial-index
uses:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:euclidean-distance
  - urn:ngm:class:kd-tree
relatedTo:
  - urn:ngm:class:faiss
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:quantisation
---

# Nearest Neighbor Search

Nearest Neighbor Search (NNS) is an algorithmic problem and family of techniques for finding the point(s) in a dataset most similar to a given query point, as measured by a distance or similarity metric such as Euclidean distance, cosine similarity, or inner product. Exact NNS guarantees retrieval of the true closest point but scales poorly in high dimensions, while Approximate Nearest Neighbor (ANN) methods trade a bounded loss in recall for dramatically faster query latency and memory efficiency. Foundational index structures — including KD-Trees, Ball Trees, Locality-Sensitive Hashing, Inverted File Indexes, and Hierarchical Navigable Small World graphs — each make different trade-offs between construction cost, query speed, recall, and support for dynamic updates. NNS is a core primitive of modern machine learning pipelines, powering vector database retrieval, recommendation systems, semantic search, image recognition, and retrieval-augmented generation.
