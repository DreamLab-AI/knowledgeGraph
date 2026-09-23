---
okf_version: "0.2"
type: Class
title: Attention Mechanism
resource: urn:ngm:class:attention-mechanism
domain: artificial-intelligence
description: An Attention Mechanism is a neural network component that enables models to dynamically weight the relevance of different input positions when producing each output element, computing weighted combinations based on learned similarity scores. Originally introduced for sequence-to-sequence machine translation, self-attention and multi-head attention are now the core computational primitives of trans
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:neural-network-component
hasPart:
  - urn:ngm:class:self-attention
  - urn:ngm:class:multi-head-attention
  - urn:ngm:class:query-key-value
  - urn:ngm:class:softmax-function
requires:
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:matrix-multiplication
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-translation
  - urn:ngm:class:long-range-dependency-modelling
dependsOn:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:sequence-to-sequence-learning
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:long-short-term-memory
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:telecollaboration
uses:
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:image-captioning
  - urn:ngm:class:speech-recognition
partOf:
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:graph-neural-network
---

# Attention Mechanism

An Attention Mechanism is a neural network component that enables models to dynamically weight the relevance of different input positions when producing each output element, computing weighted combinations based on learned similarity scores. Originally introduced for sequence-to-sequence machine translation, self-attention and multi-head attention are now the core computational primitives of transformer architectures, enabling parallel processing of sequences and capturing long-range dependencies that recurrent models struggle with.
