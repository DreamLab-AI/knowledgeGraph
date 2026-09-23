---
okf_version: "0.2"
type: Class
title: Euclidean Distance
resource: urn:ngm:class:euclidean-distance
domain: machine-learning
description: Euclidean distance is the straight-line distance between two points in Euclidean space, computed as the square root of the sum of squared differences across all coordinate dimensions. It is the most widely used distance metric in geometry, statistics, and machine learning, serving as the default measure of dissimilarity in clustering algorithms, nearest-neighbour search, and dimensionality reducti
maturity: mature
quality: 0.88
is-a:
  - urn:ngm:class:distance-metric
  - urn:ngm:class:minkowski-distance
  - urn:ngm:class:linear-algebra
hasPart:
  - urn:ngm:class:statistical-analysis
  - urn:ngm:class:l2-norm
  - urn:ngm:class:inner-product
  - urn:ngm:class:coordinate-difference
requires:
  - urn:ngm:class:tensor-computation
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:feature-normalisation
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:clustering
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:k-nearest-neighbours
  - urn:ngm:class:data-modelling
  - urn:ngm:class:indoor-positioning
dependsOn:
  - urn:ngm:class:tensor
  - urn:ngm:class:feature-normalisation
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:data-preprocessing
implements:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:minkowski-distance
  - urn:ngm:class:metric-space
  - urn:ngm:class:similarity-function
contrastsWith:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:manhattan-distance
  - urn:ngm:class:mahalanobis-distance
  - urn:ngm:class:hamming-distance
  - urn:ngm:class:jaccard-distance
  - urn:ngm:class:earth-mover-distance
  - urn:ngm:class:edit-distance
bridgesTo:
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:statistical-analysis
  - urn:ngm:class:tensor-computation
  - urn:ngm:class:python-programming-language
  - urn:ngm:class:matrix-multiplication
supports:
  - urn:ngm:class:data-management
  - urn:ngm:class:vector-database
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:faiss
  - urn:ngm:class:hnsw-index
  - urn:ngm:class:approximate-nearest-neighbor
standardizedBy:
  - urn:ngm:class:ann-benchmarks
  - urn:ngm:class:faiss
  - urn:ngm:class:scikit-learn
relatedTo:
  - urn:ngm:class:python-programming-language
  - urn:ngm:class:ultra-wideband
  - urn:ngm:class:k-means
  - urn:ngm:class:faiss
  - urn:ngm:class:umap
  - urn:ngm:class:t-sne
  - urn:ngm:class:principal-component-analysis
  - urn:ngm:class:dbscan
  - urn:ngm:class:gaussian-mixture-model
  - urn:ngm:class:representation-learning
  - urn:ngm:class:metric-learning
---

# Euclidean Distance

Euclidean distance is the straight-line distance between two points in Euclidean space, computed as the square root of the sum of squared differences across all coordinate dimensions. It is the most widely used distance metric in geometry, statistics, and machine learning, serving as the default measure of dissimilarity in clustering algorithms, nearest-neighbour search, and dimensionality reduction methods. As a special case of the Minkowski distance (p=2), it satisfies the metric axioms of non-negativity, symmetry, and the triangle inequality.
