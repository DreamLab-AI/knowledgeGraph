---
okf_version: "0.2"
type: Class
title: Training Corpus
resource: urn:ngm:class:training-corpus
domain: machine-learning
description: A training corpus is the body of text or other data used to fit the parameters of a machine learning model, whose scale, diversity and quality directly shape what the resulting model can learn. It is the input from which subword vocabularies are derived by algorithms such as byte pair encoding during tokenisation, prior to any model training taking place. Curation choices around a training corpus,
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:dataset
enables:
  - urn:ngm:class:byte-pair-encoding
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Training Corpus

A training corpus is the body of text or other data used to fit the parameters of a machine learning model, whose scale, diversity and quality directly shape what the resulting model can learn. It is the input from which subword vocabularies are derived by algorithms such as byte pair encoding during tokenisation, prior to any model training taking place. Curation choices around a training corpus, including deduplication and filtering, materially affect downstream model behaviour.
