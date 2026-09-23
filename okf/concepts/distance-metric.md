---
okf_version: "0.2"
type: Class
title: Distance Metric
resource: urn:ngm:class:distance-metric
domain: machine-learning
description: "A distance metric is a function that quantifies how dissimilar two data points are, satisfying non-negativity, identity, symmetry and the triangle inequality. In machine learning it defines the geometry of a feature space and thereby governs nearest-neighbour search, clustering and similarity-based retrieval. Choosing or learning an appropriate metric is often as important as the model itself for "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
  - urn:ngm:class:statistics
  - urn:ngm:class:mathematical-analysis
hasPart:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:euclidean-distance
  - urn:ngm:class:manhattan-distance
  - urn:ngm:class:mahalanobis-distance
  - urn:ngm:class:hamming-distance
  - urn:ngm:class:minkowski-distance
  - urn:ngm:class:jaccard-distance
  - urn:ngm:class:edit-distance
requires:
  - urn:ngm:class:statistics
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:feature-space
enables:
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:clustering
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:classification
  - urn:ngm:class:metric-learning
  - urn:ngm:class:semantic-search
  - urn:ngm:class:information-retrieval
dependsOn:
  - urn:ngm:class:feature-representation
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:data-normalisation
implements:
  - urn:ngm:class:metric-space
  - urn:ngm:class:similarity-function
  - urn:ngm:class:proximity-search
contrastsWith:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:kernel-function
  - urn:ngm:class:graph-distance
  - urn:ngm:class:earth-mover-distance
uses:
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:covariance-matrix
  - urn:ngm:class:inner-product
supports:
  - urn:ngm:class:vector-embedding
  - urn:ngm:class:vector-database
  - urn:ngm:class:recommendation-system
  - urn:ngm:class:k-nearest-neighbours
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:approximate-nearest-neighbor
standardizedBy:
  - urn:ngm:class:ann-benchmarks
  - urn:ngm:class:beir-benchmark
  - urn:ngm:class:faiss
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:clustering
  - urn:ngm:class:metric-learning
  - urn:ngm:class:representation-learning
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:deep-metric-learning
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:similarity-learning
  - urn:ngm:class:hyperbolic-geometry
---

# Distance Metric

A distance metric is a function that quantifies how dissimilar two data points are, satisfying non-negativity, identity, symmetry and the triangle inequality. In machine learning it defines the geometry of a feature space and thereby governs nearest-neighbour search, clustering and similarity-based retrieval. Choosing or learning an appropriate metric is often as important as the model itself for tasks driven by proximity.
