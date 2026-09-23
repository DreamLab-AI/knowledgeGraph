---
okf_version: "0.2"
type: Class
title: Deep Learning Framework
resource: urn:ngm:class:deep-learning-framework
domain: machine-learning
description: A software library that provides the building blocks for defining, training and deploying deep neural networks, including tensor operations, automatic differentiation and hardware acceleration.
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-software
  - urn:ngm:class:deep-learning-domain
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:tensor-operation
  - urn:ngm:class:optimiser
  - urn:ngm:class:computation-graph
  - urn:ngm:class:model-architecture
  - urn:ngm:class:loss-function
  - urn:ngm:class:activation-function
requires:
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:hardware-acceleration
  - urn:ngm:class:python
  - urn:ngm:class:cuda
enables:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:model-inference
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:distributed-training
  - urn:ngm:class:large-language-model
  - urn:ngm:class:neural-network
dependsOn:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:recurrent-neural-network
contrastsWith:
  - urn:ngm:class:symbolic-ai
bridgesTo:
  - urn:ngm:class:edge-inference
  - urn:ngm:class:model-serving
uses:
  - urn:ngm:class:python
  - urn:ngm:class:computation-graph
supports:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:mixed-precision-training
  - urn:ngm:class:federated-learning
standardizedBy:
  - urn:ngm:class:ieee
relatedTo:
  - urn:ngm:class:py-torch
  - urn:ngm:class:tensor-flow
  - urn:ngm:class:jax
  - urn:ngm:class:mlx
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
  - urn:ngm:class:activation-function
---

# Deep Learning Framework

A software library that provides the building blocks for defining, training and deploying deep neural networks, including tensor operations, automatic differentiation and hardware acceleration.
