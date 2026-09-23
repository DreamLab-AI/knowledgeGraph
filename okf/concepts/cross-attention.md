---
okf_version: "0.2"
type: Class
title: Cross Attention
resource: urn:ngm:class:cross-attention
domain: artificial-intelligence
description: An attention mechanism where queries come from one sequence whilst keys and values come from a different sequence, enabling information flow between the encoder and decoder in sequence-to-sequence models.
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:attention-weight
requires:
  - urn:ngm:class:query-key-value
  - urn:ngm:class:softmax-function
  - urn:ngm:class:scaled-dot-product-attention
enables:
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:multimodal-ai-architecture-understanding
  - urn:ngm:class:machine-translation
  - urn:ngm:class:image-captioning
  - urn:ngm:class:speech-recognition
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:embedding
implements:
  - urn:ngm:class:sequence-to-sequence-model
contrastsWith:
  - urn:ngm:class:self-attention
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:natural-language-processing
uses:
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:layer-normalisation
partOf:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:attention-mechanism
relatedTo:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:bert
  - urn:ngm:class:diffusion-model
---

# Cross Attention

An attention mechanism where queries come from one sequence whilst keys and values come from a different sequence, enabling information flow between the encoder and decoder in sequence-to-sequence models.
