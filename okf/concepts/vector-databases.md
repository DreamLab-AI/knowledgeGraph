---
okf_version: "0.2"
type: Class
title: Vector Databases
resource: urn:ngm:class:vector-databases
domain: artificial-intelligence
description: Database systems specialised for storing high-dimensional vector embeddings and performing similarity search over them, typically using approximate nearest neighbour indexing algorithms such as HNSW and IVF.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:vector-database
hasPart:
  - urn:ngm:class:vector-index
  - urn:ngm:class:similarity-metric
requires:
  - urn:ngm:class:embeddings
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:vector-index
enables:
  - urn:ngm:class:vector-search
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:semantic-search
  - urn:ngm:class:recommendation-systems
dependsOn:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:distributed-storage
contrastsWith:
  - urn:ngm:class:relational-database
  - urn:ngm:class:graph-databases
bridgesTo:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:data
  - urn:ngm:class:semantic-search
uses:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:euclidean-distance
  - urn:ngm:class:hnsw-index
supports:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:multimodal-ai-architecture-ai
relatedTo:
  - urn:ngm:class:knowledge-graphs
  - urn:ngm:class:feature-store
  - urn:ngm:class:neural-information-retrieval
---

# Vector Databases

Database systems specialised for storing high-dimensional vector embeddings and performing similarity search over them, typically using approximate nearest neighbour indexing algorithms such as HNSW and IVF.
