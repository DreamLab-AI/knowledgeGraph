---
okf_version: "0.2"
type: Class
title: Decoder
resource: urn:ngm:class:decoder
domain: artificial-intelligence
description: The component in an encoder-decoder architecture that generates the output sequence autoregressively, using masked self-attention, cross-attention to encoder outputs, and feed-forward layers.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:self-attention
  - urn:ngm:class:residual-connection
  - urn:ngm:class:layer-normalisation
requires:
  - urn:ngm:class:tokenization
  - urn:ngm:class:embedding
enables:
  - urn:ngm:class:text-generation
  - urn:ngm:class:machine-translation
contrastsWith:
  - urn:ngm:class:encoder
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:time-series-forecasting
uses:
  - urn:ngm:class:self-attention
  - urn:ngm:class:cross-attention
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:positional-encoding
partOf:
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:transformer
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:gpt
  - urn:ngm:class:speculative-decoding
  - urn:ngm:class:causal-language-modelling
---

# Decoder

The component in an encoder-decoder architecture that generates the output sequence autoregressively, using masked self-attention, cross-attention to encoder outputs, and feed-forward layers.
