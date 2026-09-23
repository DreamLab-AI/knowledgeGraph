---
okf_version: "0.2"
type: Class
title: Contextual Embedding
resource: urn:ngm:class:contextual-embedding
domain: machine-learning
description: A contextual embedding is a vector representation of a token or span whose value depends on the surrounding context in which it appears, in contrast to static embeddings that assign a fixed vector to each word regardless of usage. Contextual embeddings are produced by encoder models such as BERT, typically via masked language modelling objectives, and allow the same word to be represented differen
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:embedding
partOf:
  - urn:ngm:class:embedding
relatedTo:
  - urn:ngm:class:encoder
  - urn:ngm:class:masked-language-modelling
---

# Contextual Embedding

A contextual embedding is a vector representation of a token or span whose value depends on the surrounding context in which it appears, in contrast to static embeddings that assign a fixed vector to each word regardless of usage. Contextual embeddings are produced by encoder models such as BERT, typically via masked language modelling objectives, and allow the same word to be represented differently depending on its sense in a given sentence. They substantially improved performance on downstream natural language understanding tasks by resolving ambiguity that static embeddings could not capture.
