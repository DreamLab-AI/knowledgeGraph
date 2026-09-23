---
okf_version: "0.2"
type: Class
title: Subword Tokenisation
resource: urn:ngm:class:subword-tokenisation
domain: spatial-computing
description: A tokenisation strategy that segments text into sub-word units (via algorithms such as Byte-Pair Encoding, WordPiece, or SentencePiece), balancing vocabulary size against the ability to represent rare, morphologically complex, and out-of-vocabulary words. Subword tokenisation is the de facto standard preprocessing step for large language models.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:sc-content-and-assets
requires:
  - urn:ngm:class:language-modeling
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:large-language-models
partOf:
  - urn:ngm:class:neural-network-text-tokenisation
relatedTo:
  - urn:ngm:class:natural-language-understanding
---

# Subword Tokenisation

A tokenisation strategy that segments text into sub-word units (via algorithms such as Byte-Pair Encoding, WordPiece, or SentencePiece), balancing vocabulary size against the ability to represent rare, morphologically complex, and out-of-vocabulary words. Subword tokenisation is the de facto standard preprocessing step for large language models.
