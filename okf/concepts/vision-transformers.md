---
okf_version: "0.2"
type: Class
title: Vision Transformers
resource: urn:ngm:class:vision-transformers
domain: machine-learning
description: Transformer-based neural network architectures applied to images by splitting an image into fixed-size patches and treating those patches as a sequence of tokens for self-attention, enabling global context modelling across the full image without relying on local convolutional receptive fields.
maturity: growing
quality: 0.72
is-a:
  - urn:ngm:class:vision-transformer
hasPart:
  - urn:ngm:class:patch-embedding
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:feed-forward-network
requires:
  - urn:ngm:class:transformer
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:large-scale-pretraining
enables:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:object-detection
  - urn:ngm:class:image-classification
  - urn:ngm:class:multimodal-ai-architecture-learning
contrastsWith:
  - urn:ngm:class:convolutional-neural-network
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:layer-normalisation
relatedTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:foundation-model
  - urn:ngm:class:image-recognition
---

# Vision Transformers

Transformer-based neural network architectures applied to images by splitting an image into fixed-size patches and treating those patches as a sequence of tokens for self-attention, enabling global context modelling across the full image without relying on local convolutional receptive fields.
