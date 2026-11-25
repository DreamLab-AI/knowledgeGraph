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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Contextual Embedding

A contextual embedding is a vector representation of a token or span whose value depends on the surrounding context in which it appears, in contrast to static embeddings that assign a fixed vector to each word regardless of usage. Contextual embeddings are produced by encoder models such as BERT, typically via masked language modelling objectives, and allow the same word to be represented differently depending on its sense in a given sentence. They substantially improved performance on downstream natural language understanding tasks by resolving ambiguity that static embeddings could not capture.
