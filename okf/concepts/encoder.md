---
okf_version: "0.2"
type: Class
title: Encoder
resource: urn:ngm:class:encoder
domain: machine-learning
description: The component in an encoder-decoder architecture that processes an input sequence and produces contextualised representations via stacked self-attention and position-wise feed-forward layers; used as the representation-learning backbone in transformer models such as BERT and T5.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:layer-normalisation
  - urn:ngm:class:residual-connection
requires:
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:language-modeling
  - urn:ngm:class:contextual-embedding
  - urn:ngm:class:transfer-learning
dependsOn:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:softmax-function
implements:
  - urn:ngm:class:representation-learning
contrastsWith:
  - urn:ngm:class:decoder
  - urn:ngm:class:recurrent-neural-network
bridgesTo:
  - urn:ngm:class:multimodal-ai-architecture-models
  - urn:ngm:class:speech-recognition
uses:
  - urn:ngm:class:self-attention
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:tokenization
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:classification
  - urn:ngm:class:named-entity-recognition
partOf:
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:bert
  - urn:ngm:class:ro-berta
  - urn:ngm:class:t5-model
---

# Encoder

The component in an encoder-decoder architecture that processes an input sequence and produces contextualised representations via stacked self-attention and position-wise feed-forward layers; used as the representation-learning backbone in transformer models such as BERT and T5.
