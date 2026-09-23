---
okf_version: "0.2"
type: Class
title: Neural Network Layer
resource: urn:ngm:class:neural-network-layer
domain: machine-learning
description: A Neural Network Layer is a discrete computational stage in a neural network that applies a parameterised transformation to its input tensor, including operations such as linear projection, convolution, normalisation, or attention. Layers are composed sequentially or in parallel to form a complete neural network architecture.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:neural-network-component
hasPart:
  - urn:ngm:class:weight-matrix
  - urn:ngm:class:bias-vector
  - urn:ngm:class:activation-function
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:representation-learning
dependsOn:
  - urn:ngm:class:training-data
  - urn:ngm:class:hyperparameter
contrastsWith:
  - urn:ngm:class:convolutional-layer
bridgesTo:
  - urn:ngm:class:neuromorphic-computing
uses:
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:dropout
  - urn:ngm:class:tensor-operation
supports:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
partOf:
  - urn:ngm:class:neural-network
  - urn:ngm:class:neural-network-architecture
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:residual-connection
  - urn:ngm:class:layer-normalisation
---

# Neural Network Layer

A Neural Network Layer is a discrete computational stage in a neural network that applies a parameterised transformation to its input tensor, including operations such as linear projection, convolution, normalisation, or attention. Layers are composed sequentially or in parallel to form a complete neural network architecture.
