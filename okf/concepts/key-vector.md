---
okf_version: "0.2"
type: Class
title: Key Vector
resource: urn:ngm:class:key-vector
domain: artificial-intelligence
description: "In transformer-based neural networks, a Key Vector is one of three learned linear projections of an input token embedding—alongside the Query Vector and Value Vector—that together implement the scaled dot-product attention mechanism. The key vector represents what a given token has to offer: each query–key dot product measures the compatibility or relevance between a querying token and every other"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:neural-network-component
requires:
  - urn:ngm:class:token-embedding
  - urn:ngm:class:transformer
enables:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:vector-database
uses:
  - urn:ngm:class:embedding-model
partOf:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:multi-head-attention
relatedTo:
  - urn:ngm:class:query-vector
  - urn:ngm:class:value-vector
  - urn:ngm:class:query-key-value
  - urn:ngm:class:self-attention
  - urn:ngm:class:positional-encoding
---

# Key Vector

In transformer-based neural networks, a Key Vector is one of three learned linear projections of an input token embedding—alongside the Query Vector and Value Vector—that together implement the scaled dot-product attention mechanism. The key vector represents what a given token has to offer: each query–key dot product measures the compatibility or relevance between a querying token and every other token in the sequence, with the resulting attention weights determining how much each value vector contributes to the output representation.
