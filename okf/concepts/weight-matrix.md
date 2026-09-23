---
okf_version: "0.2"
type: Class
title: Weight Matrix
resource: urn:ngm:class:weight-matrix
domain: machine-learning
description: A weight matrix is a two-dimensional array of learnable parameters that defines the linear transformation applied between two layers of a neural network. Each element encodes the strength of the connection between an input unit and an output unit, and the matrix is multiplied with the input activation vector to produce the pre-activation output. Weight matrices are initialised, then iteratively up
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:neural-network
hasPart:
  - urn:ngm:class:parameter
requires:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:training
  - urn:ngm:class:optimisation
enables:
  - urn:ngm:class:activation-function
  - urn:ngm:class:inference
dependsOn:
  - urn:ngm:class:tensor
  - urn:ngm:class:loss-function
uses:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:linear-algebra
partOf:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:model-training
---

# Weight Matrix

A weight matrix is a two-dimensional array of learnable parameters that defines the linear transformation applied between two layers of a neural network. Each element encodes the strength of the connection between an input unit and an output unit, and the matrix is multiplied with the input activation vector to produce the pre-activation output. Weight matrices are initialised, then iteratively updated during training via gradient-based optimisation to minimise a loss function.
