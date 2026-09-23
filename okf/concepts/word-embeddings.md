---
okf_version: "0.2"
type: Class
title: Word Embeddings
resource: urn:ngm:class:word-embeddings
domain: artificial-intelligence
description: Word embeddings are dense, real-valued vector representations of words learned so that semantic and syntactic relationships are reflected as geometric relationships in a continuous vector space. Words with similar meanings map to nearby points, and linear offsets often capture analogical structure. They are learned from large text corpora by predicting words from their contexts, and replaced spars
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:representation-learning
hasPart:
  - urn:ngm:class:embedding
requires:
  - urn:ngm:class:tokenization
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:language-model
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:representation-learning
implements:
  - urn:ngm:class:embedding
contrastsWith:
  - urn:ngm:class:bert
bridgesTo:
  - urn:ngm:class:transformer
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:tokenization
supports:
  - urn:ngm:class:natural-language-processing
relatedTo:
  - urn:ngm:class:cosine-similarity
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:language-model
---

# Word Embeddings

Word embeddings are dense, real-valued vector representations of words learned so that semantic and syntactic relationships are reflected as geometric relationships in a continuous vector space. Words with similar meanings map to nearby points, and linear offsets often capture analogical structure. They are learned from large text corpora by predicting words from their contexts, and replaced sparse one-hot encodings as the default input representation for natural language processing. Word embeddings underpin downstream tasks from classification to machine translation and serve as the conceptual precursor to contextual representations produced by transformer models.
