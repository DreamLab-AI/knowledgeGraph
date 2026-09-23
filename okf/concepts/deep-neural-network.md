---
okf_version: "0.2"
type: Class
title: Deep Neural Network
resource: urn:ngm:class:deep-neural-network
domain: artificial-intelligence
description: A deep neural network is an artificial neural network with multiple hidden layers between its input and output, enabling it to learn hierarchical representations of data. Each layer applies a learnable linear transformation followed by a non-linear activation, and the network is trained by gradient descent with backpropagation to minimise a loss function. Depth lets the model compose simple featur
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:neural-network
hasPart:
  - urn:ngm:class:activation-function
requires:
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:representation-learning
dependsOn:
  - urn:ngm:class:training-data
  - urn:ngm:class:supervised-learning
implements:
  - urn:ngm:class:feedforward-neural-network
contrastsWith:
  - urn:ngm:class:feedforward-neural-network
bridgesTo:
  - urn:ngm:class:transformer
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:activation-function
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:overfitting
  - urn:ngm:class:embedding
---

# Deep Neural Network

A deep neural network is an artificial neural network with multiple hidden layers between its input and output, enabling it to learn hierarchical representations of data. Each layer applies a learnable linear transformation followed by a non-linear activation, and the network is trained by gradient descent with backpropagation to minimise a loss function. Depth lets the model compose simple features into increasingly abstract ones, which underlies modern deep learning across vision, language, and audio.
