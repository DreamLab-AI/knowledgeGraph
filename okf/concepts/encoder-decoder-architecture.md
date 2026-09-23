---
okf_version: "0.2"
type: Class
title: Encoder Decoder Architecture
resource: urn:ngm:class:encoder-decoder-architecture
domain: artificial-intelligence
description: "A neural network design pattern comprising an encoder that compresses an input sequence into a latent representation and a decoder that generates an output sequence from that representation, enabling sequence-to-sequence mappings for tasks such as machine translation, summarisation, and image captioning. The architecture underpins the original Transformer (Vaswani et al., 2017) and models such as "
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:self-attention
  - urn:ngm:class:cross-attention
  - urn:ngm:class:token-embedding
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:feed-forward-network
requires:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:backpropagation
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-translation
  - urn:ngm:class:text-summarisation
  - urn:ngm:class:image-captioning
  - urn:ngm:class:speech-recognition
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:transformer
  - urn:ngm:class:large-language-model
contrastsWith:
  - urn:ngm:class:decoder-only-architecture
  - urn:ngm:class:recurrent-neural-network
bridgesTo:
  - urn:ngm:class:multimodal-ai-architecture-ai
uses:
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:softmax-function
  - urn:ngm:class:layer-normalisation
supports:
  - urn:ngm:class:autoregressive-generation
  - urn:ngm:class:transfer-learning
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:bert
  - urn:ngm:class:t5-model
  - urn:ngm:class:bart
---

# Encoder Decoder Architecture

A neural network design pattern comprising an encoder that compresses an input sequence into a latent representation and a decoder that generates an output sequence from that representation, enabling sequence-to-sequence mappings for tasks such as machine translation, summarisation, and image captioning. The architecture underpins the original Transformer (Vaswani et al., 2017) and models such as T5 and BART.
