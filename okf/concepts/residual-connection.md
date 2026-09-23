---
okf_version: "0.2"
type: Class
title: Residual Connection
resource: urn:ngm:class:residual-connection
domain: artificial-intelligence
description: A neural network connection that adds the input of a layer directly to its output, forming a skip connection that enables stable gradient flow during backpropagation in very deep architectures. Residual connections mitigate the vanishing gradient problem and allow networks of hundreds of layers to be trained effectively, forming a foundational component of ResNet and Transformer architectures.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:neural-network-component
enables:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:backpropagation
partOf:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:residual-network
relatedTo:
  - urn:ngm:class:layer-normalisation
  - urn:ngm:class:activation-function
---

# Residual Connection

A neural network connection that adds the input of a layer directly to its output, forming a skip connection that enables stable gradient flow during backpropagation in very deep architectures. Residual connections mitigate the vanishing gradient problem and allow networks of hundreds of layers to be trained effectively, forming a foundational component of ResNet and Transformer architectures.
