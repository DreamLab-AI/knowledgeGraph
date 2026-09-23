---
okf_version: "0.2"
type: Class
title: Tensor
resource: urn:ngm:class:tensor
domain: machine-learning
description: A tensor is a multidimensional array of numerical values characterised by a rank, a shape and a data type, generalising scalars, vectors and matrices to arbitrary dimensions. In machine learning it is the fundamental data structure that holds inputs, parameters, activations and gradients as they flow through a model. Tensor operations such as contraction, broadcasting and elementwise functions are
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:linear-algebra
hasPart:
  - urn:ngm:class:computation-graph
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:backpropagation
  - urn:ngm:class:automatic-differentiation
dependsOn:
  - urn:ngm:class:linear-algebra
implements:
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:py-torch
uses:
  - urn:ngm:class:gpu
  - urn:ngm:class:tensor-processing-unit
supports:
  - urn:ngm:class:neural-network
  - urn:ngm:class:computation-graph
partOf:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:tensor-processing-unit
---

# Tensor

A tensor is a multidimensional array of numerical values characterised by a rank, a shape and a data type, generalising scalars, vectors and matrices to arbitrary dimensions. In machine learning it is the fundamental data structure that holds inputs, parameters, activations and gradients as they flow through a model. Tensor operations such as contraction, broadcasting and elementwise functions are the computational primitives executed on accelerators during training and inference.
