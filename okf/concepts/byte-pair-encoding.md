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
  - urn:ngm:class:large-language-model
  - urn:ngm:class:tokenization
  - urn:ngm:class:gpt
  - urn:ngm:class:ro-berta
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Byte Pair Encoding

A subword tokenisation algorithm that iteratively merges the most frequent pairs of characters or character sequences to build a vocabulary, originally developed for data compression and widely adopted in neural language models.
