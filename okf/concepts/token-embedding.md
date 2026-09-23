---
okf_version: "0.2"
type: Class
title: Token Embedding
resource: urn:ngm:class:token-embedding
domain: artificial-intelligence
description: A learnable lookup table that maps each discrete token in a vocabulary to a dense continuous vector, providing the initial semantic encoding fed into transformer model layers. Embeddings are trained end-to-end and combined with positional encodings; they may be tied with the output un-embedding matrix to reduce parameter count and improve training stability.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:vocabulary
requires:
  - urn:ngm:class:tokenization
  - urn:ngm:class:vocabulary
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:semantic-search
  - urn:ngm:class:text-classification
dependsOn:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
contrastsWith:
  - urn:ngm:class:one-hot-encoding
  - urn:ngm:class:positional-encoding
bridgesTo:
  - urn:ngm:class:vector-database
  - urn:ngm:class:retrieval-augmented-generation
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:vector-space-model
supports:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
partOf:
  - urn:ngm:class:transformer
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:large-language-model
relatedTo:
  - urn:ngm:class:self-attention
  - urn:ngm:class:neural-network-layer
  - urn:ngm:class:contextual-embedding
  - urn:ngm:class:hidden-state
---

# Token Embedding

A learnable lookup table that maps each discrete token in a vocabulary to a dense continuous vector, providing the initial semantic encoding fed into transformer model layers. Embeddings are trained end-to-end and combined with positional encodings; they may be tied with the output un-embedding matrix to reduce parameter count and improve training stability.
