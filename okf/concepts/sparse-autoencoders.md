---
okf_version: "0.2"
type: Class
title: Sparse Autoencoders
resource: urn:ngm:class:sparse-autoencoders
domain: ai
description: Sparse autoencoders are neural networks trained to reconstruct their input through a wide hidden layer subject to a sparsity penalty, so that only a small number of latent units activate for any given input. In mechanistic interpretability they are applied to the activations of large language models to decompose dense, polysemantic representations into more monosemantic, human-interpretable featur
maturity: experimental
quality: 0.72
is-a:
  - urn:ngm:class:neural-network
relatedTo:
  - urn:ngm:class:safety-and-alignment
  - urn:ngm:class:deep-learning
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sparse Autoencoders

Sparse autoencoders are neural networks trained to reconstruct their input through a wide hidden layer subject to a sparsity penalty, so that only a small number of latent units activate for any given input. In mechanistic interpretability they are applied to the activations of large language models to decompose dense, polysemantic representations into more monosemantic, human-interpretable features. They have become a leading tool for understanding what concepts a model internally represents.
