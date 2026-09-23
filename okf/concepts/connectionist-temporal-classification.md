---
okf_version: "0.2"
type: Class
title: Connectionist Temporal Classification
resource: urn:ngm:class:connectionist-temporal-classification
domain: distributed-collaboration
description: Connectionist Temporal Classification (CTC) is a sequence-modelling loss function and decoding scheme that trains neural networks to map unsegmented input sequences to output label sequences without requiring pre-aligned data. It introduces a blank symbol and marginalises over all valid alignments, allowing a network to learn the alignment implicitly during training. CTC is widely used in speech r
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:speech-recognition
hasPart:
  - urn:ngm:class:loss-function
  - urn:ngm:class:alignment
requires:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:real-time-translation
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-discipline
implements:
  - urn:ngm:class:sequence-to-sequence
  - urn:ngm:class:speech-to-text
contrastsWith:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer
uses:
  - urn:ngm:class:lstm
  - urn:ngm:class:beam-search
  - urn:ngm:class:loss-function
partOf:
  - urn:ngm:class:speech-recognition
relatedTo:
  - urn:ngm:class:acoustic-model
  - urn:ngm:class:language-model
---

# Connectionist Temporal Classification

Connectionist Temporal Classification (CTC) is a sequence-modelling loss function and decoding scheme that trains neural networks to map unsegmented input sequences to output label sequences without requiring pre-aligned data. It introduces a blank symbol and marginalises over all valid alignments, allowing a network to learn the alignment implicitly during training. CTC is widely used in speech recognition and handwriting recognition where input and output lengths differ and frame-level labels are unavailable.
