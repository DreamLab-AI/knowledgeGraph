---
okf_version: "0.2"
type: Class
title: Encoder-Decoder
resource: urn:ngm:class:encoder-decoder
domain: machine-learning
description: The encoder-decoder is a neural network architecture pattern in which an encoder maps a variable-length input into an intermediate representation and a decoder generates a variable-length output conditioned on that representation. It underpins sequence-to-sequence learning for machine translation, speech recognition, and speech synthesis, and appears in both recurrent and transformer instantiation
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:neural-network
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
  - urn:ngm:class:machine-translation
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:text-summarisation
  - urn:ngm:class:image-captioning
implements:
  - urn:ngm:class:transformer
  - urn:ngm:class:large-language-model
contrastsWith:
  - urn:ngm:class:decoder-only-architecture
  - urn:ngm:class:recurrent-neural-network
bridgesTo:
  - urn:ngm:class:multimodal-ai-architecture-ai
uses:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:softmax-function
  - urn:ngm:class:layer-normalisation
partOf:
  - urn:ngm:class:acoustic-model
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:bert
  - urn:ngm:class:t5-model
  - urn:ngm:class:bart
---

# Encoder-Decoder

The encoder-decoder is a neural network architecture pattern in which an encoder maps a variable-length input into an intermediate representation and a decoder generates a variable-length output conditioned on that representation. It underpins sequence-to-sequence learning for machine translation, speech recognition, and speech synthesis, and appears in both recurrent and transformer instantiations, usually augmented with an attention mechanism so the decoder can consult the full encoded input at every generation step rather than a single fixed-size vector.
