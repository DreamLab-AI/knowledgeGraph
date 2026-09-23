---
okf_version: "0.2"
type: Class
title: Self Attention
resource: urn:ngm:class:self-attention
domain: machine-learning
description: An attention mechanism where every token in a sequence attends to every other token in the same sequence, computing query-key compatibility scores to produce context-aware weighted value representations that capture intra-sequence dependencies without recurrence.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:attention-mechanism
hasPart:
  - urn:ngm:class:scaled-dot-product-attention
  - urn:ngm:class:query-key-value
requires:
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:embeddings
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:sequence-to-sequence-learning
dependsOn:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:softmax-function
implements:
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:state-space-model
  - urn:ngm:class:cross-attention
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:bioinformatics
uses:
  - urn:ngm:class:weight-matrix
  - urn:ngm:class:feedforward-neural-network
supports:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:long-range-dependency-modelling
partOf:
  - urn:ngm:class:transformer
  - urn:ngm:class:multi-head-attention
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:graph-attention-network
---

# Self Attention

An attention mechanism where every token in a sequence attends to every other token in the same sequence, computing query-key compatibility scores to produce context-aware weighted value representations that capture intra-sequence dependencies without recurrence.
