---
okf_version: "0.2"
type: Class
title: Layer Normalization
resource: urn:ngm:class:layer-normalization
domain: machine-learning
description: A neural network technique that normalises the activations across the features of a single training example, stabilising and accelerating training. It is widely used in transformer architectures where it normalises each token's representation independently of the batch.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:neural-network
requires:
  - urn:ngm:class:activation-function
enables:
  - urn:ngm:class:transformer-architecture
bridgesTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:backpropagation
---

# Layer Normalization

A neural network technique that normalises the activations across the features of a single training example, stabilising and accelerating training. It is widely used in transformer architectures where it normalises each token's representation independently of the batch.
