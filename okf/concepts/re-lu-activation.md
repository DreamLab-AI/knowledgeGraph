---
okf_version: "0.2"
type: Class
title: ReLU Activation
resource: urn:ngm:class:re-lu-activation
domain: ai
description: The Rectified Linear Unit (ReLU) is a nonlinear activation function defined as f(x) = max(0, x), outputting the input directly when positive and zero otherwise. Its simplicity, sparse activation, and non-saturating gradient for positive inputs make it the default activation in most deep neural networks, mitigating the vanishing-gradient problem. Variants such as Leaky ReLU and GELU address its dea
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:generative-adversarial-networks
  - urn:ngm:class:fast-ai
---

# ReLU Activation

The Rectified Linear Unit (ReLU) is a nonlinear activation function defined as f(x) = max(0, x), outputting the input directly when positive and zero otherwise. Its simplicity, sparse activation, and non-saturating gradient for positive inputs make it the default activation in most deep neural networks, mitigating the vanishing-gradient problem. Variants such as Leaky ReLU and GELU address its dead-neuron limitation.
