---
okf_version: "0.2"
type: Class
title: SentencePiece
resource: urn:ngm:class:sentence-piece
domain: artificial-intelligence
description: SentencePiece is a language-independent subword tokenisation library that processes raw Unicode text without language-specific pre-tokenisation, learning vocabulary units via Byte-Pair Encoding or the Unigram Language Model directly from corpora. It produces fully reversible, fixed-vocabulary tokenisations widely used in multilingual large language models such as T5, mT5, and ALBERT, and is partic
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:neural-network-text-tokenisation
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
contrastsWith:
  - urn:ngm:class:word-piece
uses:
  - urn:ngm:class:byte-pair-encoding
  - urn:ngm:class:subword-tokenisation
partOf:
  - urn:ngm:class:neural-network-text-tokenisation
---

# SentencePiece

SentencePiece is a language-independent subword tokenisation library that processes raw Unicode text without language-specific pre-tokenisation, learning vocabulary units via Byte-Pair Encoding or the Unigram Language Model directly from corpora. It produces fully reversible, fixed-vocabulary tokenisations widely used in multilingual large language models such as T5, mT5, and ALBERT, and is particularly valuable for languages lacking explicit word boundaries.
