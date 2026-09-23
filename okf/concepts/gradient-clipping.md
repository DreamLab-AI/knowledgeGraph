---
okf_version: "0.2"
type: Class
title: Gradient Clipping
resource: urn:ngm:class:gradient-clipping
domain: artificial-intelligence
description: A technique that limits the magnitude of gradients during backpropagation to prevent exploding gradients and training instability. Gradient clipping rescales gradients when their norm exceeds a threshold, enabling stable training of deep networks, especially recurrent architectures.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:loss-function
relatedTo:
  - urn:ngm:class:optimiser
  - urn:ngm:class:large-language-models
---

# Gradient Clipping

A technique that limits the magnitude of gradients during backpropagation to prevent exploding gradients and training instability. Gradient clipping rescales gradients when their norm exceeds a threshold, enabling stable training of deep networks, especially recurrent architectures.
