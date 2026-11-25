---
okf_version: "0.2"
type: Class
title: Large-Scale Corpus
resource: urn:ngm:class:large-scale-corpus
domain: machine-learning
description: A large-scale corpus is a training dataset comprising an extremely large volume of text or other sequential data, typically gathered from web crawls, digitised books, or code repositories, and used to pretrain large neural language models. Its scale is a primary determinant of model capability under empirically observed scaling laws, alongside model parameter count and compute budget. Curation and
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:training-data
partOf:
  - urn:ngm:class:training-data
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Large-Scale Corpus

A large-scale corpus is a training dataset comprising an extremely large volume of text or other sequential data, typically gathered from web crawls, digitised books, or code repositories, and used to pretrain large neural language models. Its scale is a primary determinant of model capability under empirically observed scaling laws, alongside model parameter count and compute budget. Curation and deduplication of a large-scale corpus materially affect downstream model quality and the presence of memorised content.
