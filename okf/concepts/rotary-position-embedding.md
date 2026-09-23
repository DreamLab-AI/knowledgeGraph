---
okf_version: "0.2"
type: Class
title: Rotary Position Embedding
resource: urn:ngm:class:rotary-position-embedding
domain: artificial-intelligence
description: Rotary Position Embedding (RoPE) is a method for injecting positional information into transformer attention by rotating the query and key vectors by an angle proportional to each token's absolute position, so that their dot product depends only on relative position. Because the rotation is applied multiplicatively in feature pairs rather than added to the embeddings, RoPE unifies absolute and rel
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:positional-encoding
hasPart:
  - urn:ngm:class:relative-positional-encoding
enables:
  - urn:ngm:class:long-context-modelling
  - urn:ngm:class:extrapolation
  - urn:ngm:class:context-length
implements:
  - urn:ngm:class:relative-positional-encoding
  - urn:ngm:class:absolute-positional-encoding
contrastsWith:
  - urn:ngm:class:absolute-positional-encoding
uses:
  - urn:ngm:class:self-attention
  - urn:ngm:class:attention-mechanism
supports:
  - urn:ngm:class:meta-llama-model-family
  - urn:ngm:class:large-language-models
partOf:
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:sinusoidal-positional-encoding
  - urn:ngm:class:alibi
---

# Rotary Position Embedding

Rotary Position Embedding (RoPE) is a method for injecting positional information into transformer attention by rotating the query and key vectors by an angle proportional to each token's absolute position, so that their dot product depends only on relative position. Because the rotation is applied multiplicatively in feature pairs rather than added to the embeddings, RoPE unifies absolute and relative positional encoding while preserving the inner-product structure that attention relies on. It is the dominant positional scheme in modern large language models such as Llama, and its frequency basis can be rescaled to extrapolate context windows far beyond the training length.
