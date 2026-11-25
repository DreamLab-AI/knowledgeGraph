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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Tensor

A tensor is a multidimensional array of numerical values characterised by a rank, a shape and a data type, generalising scalars, vectors and matrices to arbitrary dimensions. In machine learning it is the fundamental data structure that holds inputs, parameters, activations and gradients as they flow through a model. Tensor operations such as contraction, broadcasting and elementwise functions are the computational primitives executed on accelerators during training and inference.
