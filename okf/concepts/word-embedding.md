---
okf_version: "0.2"
type: Class
title: Word Embedding
resource: urn:ngm:class:word-embedding
domain: artificial-intelligence
description: A Word Embedding is a dense, continuous vector representation of a word learned such that semantically or syntactically similar words occupy nearby positions in the vector space. Trained from large text corpora using distributional statistics, embeddings capture relationships through geometric structure, enabling analogical reasoning and similarity computation. They transformed natural language pr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:embedding
hasPart:
  - urn:ngm:class:dimensionality-reduction
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:feature-engineering
enables:
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:machine-translation
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:information-retrieval
uses:
  - urn:ngm:class:cosine-similarity
supports:
  - urn:ngm:class:natural-language-understanding
partOf:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:embedding
  - urn:ngm:class:language-model
  - urn:ngm:class:attention-mechanism
---

# Word Embedding

A Word Embedding is a dense, continuous vector representation of a word learned such that semantically or syntactically similar words occupy nearby positions in the vector space. Trained from large text corpora using distributional statistics, embeddings capture relationships through geometric structure, enabling analogical reasoning and similarity computation. They transformed natural language processing by replacing sparse one-hot encodings with low-dimensional features that generalise across vocabulary and feed downstream neural models.
