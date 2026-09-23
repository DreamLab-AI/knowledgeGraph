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
enables:
  - urn:ngm:class:machine-translation
  - urn:ngm:class:speech-recognition
uses:
  - urn:ngm:class:attention-mechanism
partOf:
  - urn:ngm:class:acoustic-model
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:recurrent-neural-network
---

# Encoder-Decoder

The encoder-decoder is a neural network architecture pattern in which an encoder maps a variable-length input into an intermediate representation and a decoder generates a variable-length output conditioned on that representation. It underpins sequence-to-sequence learning for machine translation, speech recognition, and speech synthesis, and appears in both recurrent and transformer instantiations, usually augmented with an attention mechanism so the decoder can consult the full encoded input at every generation step rather than a single fixed-size vector.
