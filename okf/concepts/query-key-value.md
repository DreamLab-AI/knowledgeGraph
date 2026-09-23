---
okf_version: "0.2"
type: Class
title: Query Key Value
resource: urn:ngm:class:query-key-value
domain: artificial-intelligence
description: "The three fundamental components of the attention mechanism introduced by Vaswani et al. (2017): a Query vector representing the current information need, Key vectors representing available information descriptors, and Value vectors containing the content to retrieve. Attention weights are computed via scaled dot-product similarity between queries and keys, then applied to values to produce contex"
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:attention-mechanism
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:machine-learning-discipline
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:attention-mechanism
relatedTo:
  - urn:ngm:class:model-capacity
  - urn:ngm:class:neural-network-architecture
---

# Query Key Value

The three fundamental components of the attention mechanism introduced by Vaswani et al. (2017): a Query vector representing the current information need, Key vectors representing available information descriptors, and Value vectors containing the content to retrieve. Attention weights are computed via scaled dot-product similarity between queries and keys, then applied to values to produce context-aware output representations.
