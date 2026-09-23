---
okf_version: "0.2"
type: Class
title: Singular Value Decomposition
resource: urn:ngm:class:singular-value-decomposition
domain: machine-learning
description: Singular value decomposition (SVD) is a matrix factorisation that expresses any real or complex matrix as the product of two orthogonal (or unitary) matrices and a diagonal matrix of non-negative singular values. It generalises eigenvalue decomposition to arbitrary, non-square matrices and reveals the rank, range, and dominant directions of variation in data. SVD is foundational across machine lea
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:dimensionality-reduction
hasPart:
  - urn:ngm:class:feature-extraction
enables:
  - urn:ngm:class:principal-component-analysis
  - urn:ngm:class:feature-extraction
dependsOn:
  - urn:ngm:class:linear-algebra
implements:
  - urn:ngm:class:dimensionality-reduction
uses:
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:principal-component-analysis
relatedTo:
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:deep-learning
---

# Singular Value Decomposition

Singular value decomposition (SVD) is a matrix factorisation that expresses any real or complex matrix as the product of two orthogonal (or unitary) matrices and a diagonal matrix of non-negative singular values. It generalises eigenvalue decomposition to arbitrary, non-square matrices and reveals the rank, range, and dominant directions of variation in data. SVD is foundational across machine learning and numerical linear algebra, underpinning dimensionality reduction, low-rank approximation, recommender systems, and the principal component analysis used to compress and denoise high-dimensional data.
