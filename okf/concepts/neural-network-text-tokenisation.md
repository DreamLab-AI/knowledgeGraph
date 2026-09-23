---
okf_version: "0.2"
type: Class
title: Neural Network Text Tokenisation
resource: urn:ngm:class:neural-network-text-tokenisation
domain: machine-learning
description: The process of segmenting text into discrete units (tokens) — characters, subwords, or words — that serve as the atomic inputs to neural network language models, directly determining vocabulary size, out-of-vocabulary handling, and downstream model performance.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:byte-pair-encoding
  - urn:ngm:class:subword-tokenisation
  - urn:ngm:class:subword-tokenisation
  - urn:ngm:class:sentencepiece-tokenisation
requires:
  - urn:ngm:class:vocabulary
  - urn:ngm:class:training-corpus
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:text-generation
  - urn:ngm:class:machine-translation
  - urn:ngm:class:text-classification
dependsOn:
  - urn:ngm:class:language-model
  - urn:ngm:class:unicode-text-encoding
implements:
  - urn:ngm:class:text-segmentation-algorithm
contrastsWith:
  - urn:ngm:class:word-level-tokenisation
  - urn:ngm:class:character-level-tokenisation
bridgesTo:
  - urn:ngm:class:computational-linguistics
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:asset-tokenisation
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:embedding-layer
  - urn:ngm:class:language-model
  - urn:ngm:class:language-model
supports:
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:question-answering
partOf:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:text-preprocessing
relatedTo:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:context-window
---

# Neural Network Text Tokenisation

The process of segmenting text into discrete units (tokens) — characters, subwords, or words — that serve as the atomic inputs to neural network language models, directly determining vocabulary size, out-of-vocabulary handling, and downstream model performance.
