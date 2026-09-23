---
okf_version: "0.2"
type: Class
title: Tensor Computation
resource: urn:ngm:class:tensor-computation
domain: machine-learning
description: Tensor computation is the set of mathematical operations performed on multi-dimensional arrays (tensors) that form the core numerical substrate of modern machine learning. These operations include contraction, element-wise arithmetic, broadcasting, decomposition, and automatic differentiation, typically executed on specialised hardware such as GPUs or TPUs. Tensor computation frameworks provide gr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:tensor
hasPart:
  - urn:ngm:class:fourier-transform
  - urn:ngm:class:euclidean-distance
requires:
  - urn:ngm:class:python-programming-language
  - urn:ngm:class:statistical-analysis
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:signal-processing
dependsOn:
  - urn:ngm:class:infrastructure
implements:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:numerical-methods
contrastsWith:
  - urn:ngm:class:programming-language
uses:
  - urn:ngm:class:data-schema
supports:
  - urn:ngm:class:distributed-collaboration
relatedTo:
  - urn:ngm:class:data-modelling
  - urn:ngm:class:data-management
---

# Tensor Computation

Tensor computation is the set of mathematical operations performed on multi-dimensional arrays (tensors) that form the core numerical substrate of modern machine learning. These operations include contraction, element-wise arithmetic, broadcasting, decomposition, and automatic differentiation, typically executed on specialised hardware such as GPUs or TPUs. Tensor computation frameworks provide graph-based or eager execution models that map operations to hardware acceleration primitives.
