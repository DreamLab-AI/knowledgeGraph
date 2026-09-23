---
okf_version: "0.2"
type: Class
title: Batch Normalisation
resource: urn:ngm:class:batch-normalisation
domain: machine-learning
description: A technique that normalises layer inputs within a mini-batch to zero mean and unit variance, stabilising training dynamics, enabling higher learning rates, and acting as a form of regularisation in deep neural networks. Introduced by Ioffe and Szegedy (2015), it reduces internal covariate shift and has become a standard component in convolutional and other deep learning architectures.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:parameter
requires:
  - urn:ngm:class:mini-batch
  - urn:ngm:class:stochastic-gradient-descent
enables:
  - urn:ngm:class:deep-learning
dependsOn:
  - urn:ngm:class:neural-network-layer
  - urn:ngm:class:backpropagation
contrastsWith:
  - urn:ngm:class:layer-normalisation
  - urn:ngm:class:instance-normalisation
  - urn:ngm:class:group-normalisation
  - urn:ngm:class:weight-normalisation
bridgesTo:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:model-deployment
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:statistics
partOf:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-neural-network
relatedTo:
  - urn:ngm:class:regularisation
  - urn:ngm:class:dropout
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:optimisation
  - urn:ngm:class:technique
---

# Batch Normalisation

A technique that normalises layer inputs within a mini-batch to zero mean and unit variance, stabilising training dynamics, enabling higher learning rates, and acting as a form of regularisation in deep neural networks. Introduced by Ioffe and Szegedy (2015), it reduces internal covariate shift and has become a standard component in convolutional and other deep learning architectures.
