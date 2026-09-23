---
okf_version: "0.2"
type: Class
title: Multi-Head Attention
resource: urn:ngm:class:multi-head-attention
domain: machine-learning
description: An extension of scaled dot-product attention that runs multiple attention operations in parallel over distinct learned projection subspaces, then concatenates and linearly projects the results. Multi-head attention enables Transformer models to capture diverse dependency patterns across positions and representation subspaces simultaneously, and is foundational to modern large language models.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:attention-mechanism
hasPart:
  - urn:ngm:class:attention-head
  - urn:ngm:class:scaled-dot-product-attention
  - urn:ngm:class:attention-weight
  - urn:ngm:class:query-key-value
requires:
  - urn:ngm:class:softmax-function
  - urn:ngm:class:linear-projection
  - urn:ngm:class:matrix-multiplication
enables:
  - urn:ngm:class:long-range-dependency-modelling
  - urn:ngm:class:representation-learning
dependsOn:
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:layer-normalisation
implements:
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:convolutional-neural-network
bridgesTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:graph-attention-network
uses:
  - urn:ngm:class:residual-connection
  - urn:ngm:class:feed-forward-network
partOf:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:encoder-decoder-architecture
relatedTo:
  - urn:ngm:class:self-attention
  - urn:ngm:class:cross-attention
  - urn:ngm:class:grouped-query-attention
  - urn:ngm:class:flash-attention
  - urn:ngm:class:large-language-model
  - urn:ngm:class:bert
  - urn:ngm:class:vision-transformer
---

# Multi-Head Attention

An extension of scaled dot-product attention that runs multiple attention operations in parallel over distinct learned projection subspaces, then concatenates and linearly projects the results. Multi-head attention enables Transformer models to capture diverse dependency patterns across positions and representation subspaces simultaneously, and is foundational to modern large language models.
