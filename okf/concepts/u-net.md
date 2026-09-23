---
okf_version: "0.2"
type: Class
title: U-Net
resource: urn:ngm:class:u-net
domain: machine-learning
description: A convolutional neural network architecture with a symmetric encoder-decoder structure and skip connections, originally designed for biomedical image segmentation and widely adopted for dense prediction tasks including diffusion model denoising.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:convolutional-neural-network
hasPart:
  - urn:ngm:class:encoder
  - urn:ngm:class:decoder
  - urn:ngm:class:residual-connection
requires:
  - urn:ngm:class:convolution
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:encoder
  - urn:ngm:class:decoder
enables:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:instance-segmentation
implements:
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:feature-pyramid-network
contrastsWith:
  - urn:ngm:class:feature-pyramid-network
  - urn:ngm:class:vision-transformer
bridgesTo:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:semantic-segmentation
uses:
  - urn:ngm:class:dropout
  - urn:ngm:class:cross-entropy-loss
supports:
  - urn:ngm:class:medical-image-analysis
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:data-augmentation
relatedTo:
  - urn:ngm:class:transfer-learning
---

# U-Net

A convolutional neural network architecture with a symmetric encoder-decoder structure and skip connections, originally designed for biomedical image segmentation and widely adopted for dense prediction tasks including diffusion model denoising.
