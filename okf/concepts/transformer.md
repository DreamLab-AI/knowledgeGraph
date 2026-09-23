---
okf_version: "0.2"
type: Class
title: Transformer
resource: urn:ngm:class:transformer
domain: artificial-intelligence
description: A neural network architecture that relies entirely on self-attention mechanisms rather than recurrence or convolution to process sequential data in parallel, serving as the foundation for modern large language models, vision models, and multimodal systems including GPT, BERT, and their successors.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:self-attention
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:layer-normalisation
requires:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:parallel-computing
enables:
  - urn:ngm:class:large-scale-pretrained-foundation-model
  - urn:ngm:class:bert
  - urn:ngm:class:gpt
  - urn:ngm:class:large-language-models
  - urn:ngm:class:in-context-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:foundation-model
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:state-space-model
bridgesTo:
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:tokenization
  - urn:ngm:class:embedding
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-600-1
relatedTo:
  - urn:ngm:class:large-scale-pretrained-foundation-model
  - urn:ngm:class:large-language-models
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:self-attention
  - urn:ngm:class:neural-scaling-law
  - urn:ngm:class:large-language-model
  - urn:ngm:class:foundation-model
---

# Transformer

A neural network architecture that relies entirely on self-attention mechanisms rather than recurrence or convolution to process sequential data in parallel, serving as the foundation for modern large language models, vision models, and multimodal systems including GPT, BERT, and their successors.
