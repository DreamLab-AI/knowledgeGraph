---
okf_version: "0.2"
type: Class
title: Embedding
resource: urn:ngm:class:embedding
domain: ai
description: An embedding is a learned mapping from discrete or high-dimensional objects—such as words, sentences, images, graphs, or code—into a continuous, low-dimensional vector space, such that semantically or functionally similar inputs are mapped to geometrically proximate vectors. Embeddings are fundamental to modern machine learning, enabling downstream tasks including similarity search, classification
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:representation-learning
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:machine-learning-discipline-technique
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:embedding-model
  - urn:ngm:class:latent-space
  - urn:ngm:class:vector-embedding
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:loss-function
  - urn:ngm:class:neural-network
  - urn:ngm:class:transformer-architecture
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:vector-database
  - urn:ngm:class:text-classification
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:clustering
  - urn:ngm:class:cross-modal-retrieval
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:embedding-search
  - urn:ngm:class:anomaly-detection
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:encoder
  - urn:ngm:class:loss-function
  - urn:ngm:class:contrastive-learning
implements:
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:representation-learning
  - urn:ngm:class:masked-language-modelling
contrastsWith:
  - urn:ngm:class:one-hot-encoding
  - urn:ngm:class:sparse-representation
  - urn:ngm:class:tf-idf-retrieval
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:symbolic-ai
bridgesTo:
  - urn:ngm:class:spatial-index
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:semantic-search
  - urn:ngm:class:vector-database
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:encoder
  - urn:ngm:class:transformer
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:nearest-neighbor-search
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:drug-discovery
standardizedBy:
  - urn:ngm:class:mteb-benchmark
  - urn:ngm:class:beir-benchmark
  - urn:ngm:class:sts-benchmark
relatedTo:
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:bert
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:latent-space
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:word2vec
  - urn:ngm:class:representation-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:foundation-model
---

# Embedding

An embedding is a learned mapping from discrete or high-dimensional objects—such as words, sentences, images, graphs, or code—into a continuous, low-dimensional vector space, such that semantically or functionally similar inputs are mapped to geometrically proximate vectors. Embeddings are fundamental to modern machine learning, enabling downstream tasks including similarity search, classification, clustering, and retrieval through compact, transferable representations. The quality of an embedding space is typically measured by how well geometric proximity in the vector space reflects semantic or functional similarity in the original domain.
