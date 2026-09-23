---
okf_version: "0.2"
type: Class
title: Positional Encoding
resource: urn:ngm:class:positional-encoding
domain: machine-learning
description: A technique for injecting information about the relative or absolute position of tokens in a sequence into a neural network, essential for transformer models since self-attention mechanisms are inherently permutation-invariant and lack sequential ordering awareness.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:rotary-position-embedding
requires:
  - urn:ngm:class:token-embedding
enables:
  - urn:ngm:class:language-modeling
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:sequence-to-sequence-learning
  - urn:ngm:class:long-context-modelling
dependsOn:
  - urn:ngm:class:self-attention
  - urn:ngm:class:neural-network-architecture
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
uses:
  - urn:ngm:class:model-parameters
supports:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:time-series-forecasting
partOf:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:transformer
relatedTo:
  - urn:ngm:class:word-embedding
  - urn:ngm:class:natural-language-processing
---

# Positional Encoding

A technique for injecting information about the relative or absolute position of tokens in a sequence into a neural network, essential for transformer models since self-attention mechanisms are inherently permutation-invariant and lack sequential ordering awareness.
