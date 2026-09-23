---
okf_version: "0.2"
type: Class
title: Attention Mechanisms
resource: urn:ngm:class:attention-mechanisms
domain: machine-learning
description: Attention mechanisms are a family of neural network components that compute context-dependent weighted combinations of value representations by scoring the relevance of query vectors against key vectors, enabling each output position to draw selectively from any position in an input sequence — overcoming the fixed-length bottleneck of recurrent encoders. Originally introduced as additive (Bahdanau
maturity: established
quality: 0.93
is-a:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:neural-network-component
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:self-attention
  - urn:ngm:class:cross-attention
  - urn:ngm:class:causal-attention
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:scaled-dot-product-attention
  - urn:ngm:class:attention-weight
  - urn:ngm:class:attention-mask
  - urn:ngm:class:query-key-value
  - urn:ngm:class:attention-head
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:softmax-function
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:positional-encoding
enables:
  - urn:ngm:class:transformer
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-models
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:multimodal-ai-architecture
  - urn:ngm:class:graph-attention-network
  - urn:ngm:class:diffusion-transformer
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-translation
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:multimodal-ai-architecture-reasoning
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:lstm
implements:
  - urn:ngm:class:ai-model-architecture
contrastsWith:
  - urn:ngm:class:lstm
  - urn:ngm:class:recurrent-neural-network
uses:
  - urn:ngm:class:flash-attention
  - urn:ngm:class:grouped-query-attention
  - urn:ngm:class:paged-attention
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:mixture-of-experts
supports:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:attention-aware-interaction
standardizedBy:
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:flash-attention
  - urn:ngm:class:grouped-query-attention
  - urn:ngm:class:paged-attention
  - urn:ngm:class:mixture-of-experts
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:gemini-multimodal-language-model
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:multimodal-ai-architecture-understanding
  - urn:ngm:class:computer-vision
  - urn:ngm:class:backpropagation
  - urn:ngm:class:diffusion-transformer
---

# Attention Mechanisms

Attention mechanisms are a family of neural network components that compute context-dependent weighted combinations of value representations by scoring the relevance of query vectors against key vectors, enabling each output position to draw selectively from any position in an input sequence — overcoming the fixed-length bottleneck of recurrent encoders. Originally introduced as additive (Bahdanau) attention for neural machine translation in 2015, they were generalised to scaled dot-product attention and multi-head attention in the 2017 Transformer architecture, where they became the sole sequence-modelling primitive, replacing recurrence entirely. Attention mechanisms now underpin virtually all frontier deep learning systems across language, vision, speech, biology, and multimodal reasoning.
