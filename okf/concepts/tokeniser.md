---
okf_version: "0.2"
type: Class
title: Tokeniser
resource: urn:ngm:class:tokeniser
domain: artificial-intelligence
description: A tokeniser is a preprocessing component that segments raw text into a sequence of discrete tokens — sub-words, words, or characters — and maps each token to an integer identifier in a fixed vocabulary, forming the numerical input representation consumed by language model architectures. Modern sub-word tokenisers such as Byte Pair Encoding (BPE), WordPiece, and SentencePiece balance vocabulary cov
maturity: established
quality: 0
is-a:
  - urn:ngm:class:natural-language-processing
hasPart:
  - urn:ngm:class:byte-pair-encoding
  - urn:ngm:class:word-piece
  - urn:ngm:class:sentence-piece
requires:
  - urn:ngm:class:vocabulary
  - urn:ngm:class:unicode-normalisation
  - urn:ngm:class:text-preprocessing
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:language-modeling
  - urn:ngm:class:machine-translation
  - urn:ngm:class:multimodal-ai-architecture-learning
contrastsWith:
  - urn:ngm:class:character-level-model
  - urn:ngm:class:word-level-tokenisation
bridgesTo:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:subword-tokenisation
  - urn:ngm:class:token-embedding
supports:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:multilingual-models
  - urn:ngm:class:code-generation
partOf:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:pre-training
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:pre-training
relatedTo:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:tokeniser-fertility
  - urn:ngm:class:context-window
---

# Tokeniser

A tokeniser is a preprocessing component that segments raw text into a sequence of discrete tokens — sub-words, words, or characters — and maps each token to an integer identifier in a fixed vocabulary, forming the numerical input representation consumed by language model architectures. Modern sub-word tokenisers such as Byte Pair Encoding (BPE), WordPiece, and SentencePiece balance vocabulary coverage with sequence length efficiency, enabling models to handle arbitrary Unicode text including rare words, multilingual content, and specialised domains without out-of-vocabulary failures. The tokeniser vocabulary and its associated embedding matrix are co-trained with the model and constitute a foundational design decision that governs sequence length, memory footprint, and cross-lingual fairness. Multimodal extensions of tokenisation discretise images, audio, and video frames into token sequences analogous to text tokens, enabling unified cross-modal architectures.
