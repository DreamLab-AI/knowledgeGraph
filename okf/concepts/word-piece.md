---
okf_version: "0.2"
type: Class
title: WordPiece
resource: urn:ngm:class:word-piece
domain: spatial-computing
description: A subword tokenisation algorithm that iteratively merges character sequences by maximising the likelihood of the training corpus under a unigram language model, rather than merging the most frequent pairs. WordPiece is the default tokeniser for BERT, DistilBERT, and ELECTRA, producing vocabularies of approximately 30,000 tokens that handle rare and compound words via subword splitting.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:sc-content-and-assets
enables:
  - urn:ngm:class:natural-language-processing
contrastsWith:
  - urn:ngm:class:byte-pair-encoding
  - urn:ngm:class:sentence-piece
uses:
  - urn:ngm:class:vocabulary
partOf:
  - urn:ngm:class:subword-tokenisation
  - urn:ngm:class:neural-network-text-tokenisation
---

# WordPiece

A subword tokenisation algorithm that iteratively merges character sequences by maximising the likelihood of the training corpus under a unigram language model, rather than merging the most frequent pairs. WordPiece is the default tokeniser for BERT, DistilBERT, and ELECTRA, producing vocabularies of approximately 30,000 tokens that handle rare and compound words via subword splitting.
