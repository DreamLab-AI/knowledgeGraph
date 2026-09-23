---
okf_version: "0.2"
type: Class
title: Sparse Representation
resource: urn:ngm:class:sparse-representation
domain: artificial-intelligence
description: A sparse representation expresses a signal or data point as a linear combination of a small number of basis elements drawn from a larger, often overcomplete dictionary, with most coefficients zero. Sparsity yields compact, interpretable and noise-robust encodings, and underpins compressed sensing, dictionary learning and feature selection. It contrasts with dense distributed representations such a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:representation-learning
enables:
  - urn:ngm:class:data-compression
  - urn:ngm:class:interpretability
dependsOn:
  - urn:ngm:class:embedding-model
implements:
  - urn:ngm:class:unsupervised-learning
contrastsWith:
  - urn:ngm:class:embedding
  - urn:ngm:class:autoencoder
uses:
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:feature-selection
supports:
  - urn:ngm:class:model-compression
  - urn:ngm:class:pruning
partOf:
  - urn:ngm:class:representation-learning
relatedTo:
  - urn:ngm:class:principal-component-analysis
  - urn:ngm:class:signal-processing
  - urn:ngm:class:feature-engineering
---

# Sparse Representation

A sparse representation expresses a signal or data point as a linear combination of a small number of basis elements drawn from a larger, often overcomplete dictionary, with most coefficients zero. Sparsity yields compact, interpretable and noise-robust encodings, and underpins compressed sensing, dictionary learning and feature selection. It contrasts with dense distributed representations such as neural embeddings, and is recovered using L1 regularisation or greedy pursuit algorithms.
