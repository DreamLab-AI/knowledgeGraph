---
okf_version: "0.2"
type: Class
title: Feedforward Neural Network
resource: urn:ngm:class:feedforward-neural-network
domain: artificial-intelligence
description: A neural network architecture in which connections between nodes do not form cycles, with information flowing unidirectionally from input through hidden layers to output. The simplest and most foundational artificial neural network type, trained via backpropagation with gradient descent, and proven by the universal approximation theorem to model arbitrary continuous functions given sufficient widt
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:network-architecture
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:activation-function
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-discipline
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:transformer-architecture
partOf:
  - urn:ngm:class:convolutional-neural-network
---

# Feedforward Neural Network

A neural network architecture in which connections between nodes do not form cycles, with information flowing unidirectionally from input through hidden layers to output. The simplest and most foundational artificial neural network type, trained via backpropagation with gradient descent, and proven by the universal approximation theorem to model arbitrary continuous functions given sufficient width.
