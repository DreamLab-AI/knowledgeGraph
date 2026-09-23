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
---

# Sparse Autoencoders

Sparse autoencoders are neural networks trained to reconstruct their input through a wide hidden layer subject to a sparsity penalty, so that only a small number of latent units activate for any given input. In mechanistic interpretability they are applied to the activations of large language models to decompose dense, polysemantic representations into more monosemantic, human-interpretable features. They have become a leading tool for understanding what concepts a model internally represents.
