---
okf_version: "0.2"
type: Class
title: Vision Transformer
resource: urn:ngm:class:vision-transformer
domain: artificial-intelligence
description: The Vision Transformer (ViT) is a neural network architecture that applies the transformer self-attention mechanism directly to sequences of fixed-size image patches, treating each patch embedding as a token analogous to a word in natural-language processing. Introduced by Dosovitskiy et al. (2020), ViT demonstrated that pure attention-based models can match or exceed convolutional networks on ima
maturity: established
quality: 0.85
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:cls-token
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:layer-normalisation
requires:
  - urn:ngm:class:pre-training
enables:
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:text-to-image-generation
  - urn:ngm:class:video-understanding
contrastsWith:
  - urn:ngm:class:convolutional-neural-network
bridgesTo:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:patch-embedding
relatedTo:
  - urn:ngm:class:diffusion-transformer
  - urn:ngm:class:contrastive-learning
  - urn:ngm:class:masked-image-modelling
  - urn:ngm:class:image-segmentation
---

# Vision Transformer

The Vision Transformer (ViT) is a neural network architecture that applies the transformer self-attention mechanism directly to sequences of fixed-size image patches, treating each patch embedding as a token analogous to a word in natural-language processing. Introduced by Dosovitskiy et al. (2020), ViT demonstrated that pure attention-based models can match or exceed convolutional networks on image classification benchmarks when pre-trained on sufficiently large datasets.
