---
okf_version: "0.2"
type: Class
title: Sequence To Sequence Model
resource: urn:ngm:class:sequence-to-sequence-model
domain: artificial-intelligence
description: A sequence-to-sequence model is a neural architecture that maps an input sequence of arbitrary length to an output sequence of arbitrary length, classically using an encoder to compress the input into a context representation and a decoder to generate the output one element at a time. Originally built from recurrent networks such as LSTMs and GRUs and later augmented with attention to overcome the
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:machine-translation
  - urn:ngm:class:text-summarisation
  - urn:ngm:class:speech-recognition
implements:
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:recurrent-neural-network
contrastsWith:
  - urn:ngm:class:transformer
uses:
  - urn:ngm:class:lstm
  - urn:ngm:class:gru
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:beam-search
supports:
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:sequence-model
  - urn:ngm:class:language-model
---

# Sequence To Sequence Model

A sequence-to-sequence model is a neural architecture that maps an input sequence of arbitrary length to an output sequence of arbitrary length, classically using an encoder to compress the input into a context representation and a decoder to generate the output one element at a time. Originally built from recurrent networks such as LSTMs and GRUs and later augmented with attention to overcome the fixed-context bottleneck, the paradigm became the foundation for the transformer. Sequence-to-sequence models power machine translation, text summarisation, speech recognition, and other tasks where input and output structures differ.
