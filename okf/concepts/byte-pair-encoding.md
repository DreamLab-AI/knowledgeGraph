---
okf_version: "0.2"
type: Class
title: Byte Pair Encoding
resource: urn:ngm:class:byte-pair-encoding
domain: machine-learning
description: A subword tokenisation algorithm that iteratively merges the most frequent pairs of characters or character sequences to build a vocabulary, originally developed for data compression and widely adopted in neural language models.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:vocabulary
requires:
  - urn:ngm:class:training-corpus
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:text-generation
  - urn:ngm:class:neural-machine-translation
implements:
  - urn:ngm:class:data-compression
contrastsWith:
  - urn:ngm:class:word-piece
  - urn:ngm:class:sentence-piece
bridgesTo:
  - urn:ngm:class:data-compression
  - urn:ngm:class:information-theory
uses:
  - urn:ngm:class:transformer
supports:
  - urn:ngm:class:natural-language-processing
partOf:
  - urn:ngm:class:neural-network-text-tokenisation
  - urn:ngm:class:subword-tokenisation
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:tokenization
  - urn:ngm:class:gpt
  - urn:ngm:class:ro-berta
---

# Byte Pair Encoding

A subword tokenisation algorithm that iteratively merges the most frequent pairs of characters or character sequences to build a vocabulary, originally developed for data compression and widely adopted in neural language models.
