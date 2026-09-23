---
okf_version: "0.2"
type: Class
title: Scaled Dot Product Attention
resource: urn:ngm:class:scaled-dot-product-attention
domain: artificial-intelligence
description: An attention mechanism that computes attention weights using the dot product of queries and keys, scaled by the square root of the key dimension, followed by a softmax normalisation.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:attention-mechanism
enables:
  - urn:ngm:class:multi-head-attention
uses:
  - urn:ngm:class:query-key-value
  - urn:ngm:class:positional-encoding
partOf:
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:self-attention
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:backpropagation
---

# Scaled Dot Product Attention

An attention mechanism that computes attention weights using the dot product of queries and keys, scaled by the square root of the key dimension, followed by a softmax normalisation.
