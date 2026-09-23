---
okf_version: "0.2"
type: Class
title: Residual Network
resource: urn:ngm:class:residual-network
domain: artificial-intelligence
description: A deep neural network architecture introduced by He et al. (2016) that employs skip connections to allow gradients to propagate directly through layers, expressed as H(x) = F(x) + x. This residual formulation resolves the vanishing gradient problem in very deep networks, enabling training of architectures with hundreds of layers and achieving state-of-the-art performance on image recognition bench
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:deep-learning
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:neural-network-layer
enables:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:image-classification
  - urn:ngm:class:transfer-learning
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:gpu-compute
---

# Residual Network

A deep neural network architecture introduced by He et al. (2016) that employs skip connections to allow gradients to propagate directly through layers, expressed as H(x) = F(x) + x. This residual formulation resolves the vanishing gradient problem in very deep networks, enabling training of architectures with hundreds of layers and achieving state-of-the-art performance on image recognition benchmarks.
