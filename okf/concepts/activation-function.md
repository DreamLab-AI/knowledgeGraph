---
okf_version: "0.2"
type: Class
title: Activation Function
resource: urn:ngm:class:activation-function
domain: machine-learning
description: An Activation Function is a non-linear mathematical transformation applied to a neuron's weighted input sum, enabling neural networks to learn complex, non-linear mappings. Common variants include Sigmoid, Tanh, ReLU, Leaky ReLU, and GELU; the choice of activation function critically affects gradient flow, convergence speed, and model expressivity.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:neural-network-component
hasPart:
  - urn:ngm:class:nonlinearity
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:differentiability
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:universal-approximation
  - urn:ngm:class:feature-learning
dependsOn:
  - urn:ngm:class:neuron
bridgesTo:
  - urn:ngm:class:neuromorphic-computing
  - urn:ngm:class:quantum-neural-network
uses:
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:recurrent-neural-network
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:onnx
partOf:
  - urn:ngm:class:neural-network
  - urn:ngm:class:feedforward-neural-network
relatedTo:
  - urn:ngm:class:neural-network-layer
  - urn:ngm:class:vanishing-gradient
  - urn:ngm:class:weight-initialisation
  - urn:ngm:class:batch-normalisation
---

# Activation Function

An Activation Function is a non-linear mathematical transformation applied to a neuron's weighted input sum, enabling neural networks to learn complex, non-linear mappings. Common variants include Sigmoid, Tanh, ReLU, Leaky ReLU, and GELU; the choice of activation function critically affects gradient flow, convergence speed, and model expressivity.
