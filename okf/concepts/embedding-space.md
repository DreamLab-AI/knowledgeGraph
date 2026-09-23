---
okf_version: "0.2"
type: Class
title: Embedding Space
resource: urn:ngm:class:embedding-space
domain: machine-learning
description: An embedding space is a continuous vector space into which discrete or high-dimensional objects — such as words, images, or graph nodes — are mapped so that geometric relationships encode semantic similarity. Learned by models during representation learning, the space arranges related items close together and supports operations like nearest-neighbour search and analogy via vector arithmetic. It i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:representation-learning
requires:
  - urn:ngm:class:dimensionality-reduction
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:clustering
dependsOn:
  - urn:ngm:class:embedding
  - urn:ngm:class:training-data
implements:
  - urn:ngm:class:latent-space
contrastsWith:
  - urn:ngm:class:latent-space
bridgesTo:
  - urn:ngm:class:word-embedding
uses:
  - urn:ngm:class:embedding
  - urn:ngm:class:cosine-similarity
supports:
  - urn:ngm:class:vector-database
partOf:
  - urn:ngm:class:representation-learning
relatedTo:
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:deep-neural-network
---

# Embedding Space

An embedding space is a continuous vector space into which discrete or high-dimensional objects — such as words, images, or graph nodes — are mapped so that geometric relationships encode semantic similarity. Learned by models during representation learning, the space arranges related items close together and supports operations like nearest-neighbour search and analogy via vector arithmetic. It is the substrate underlying semantic search, retrieval, and many downstream machine-learning tasks.
