---
okf_version: "0.2"
type: Class
title: Pooling Layer
resource: urn:ngm:class:pooling-layer
domain: machine-learning
description: A parameter-free neural network layer that summarises local regions or whole sets of feature activations into a single value each — typically the maximum or the mean — thereby reducing spatial resolution, enlarging receptive fields, and conferring a degree of translation invariance in convolutional networks, or collapsing token sequences into fixed-length vectors in embedding models. Pooling trade
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:neural-network
contrastsWith:
  - urn:ngm:class:feature-map
partOf:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:embedding-model
---

# Pooling Layer

A parameter-free neural network layer that summarises local regions or whole sets of feature activations into a single value each — typically the maximum or the mean — thereby reducing spatial resolution, enlarging receptive fields, and conferring a degree of translation invariance in convolutional networks, or collapsing token sequences into fixed-length vectors in embedding models. Pooling trades fine positional detail for compactness and robustness, and its choice (max, average, global, attention-weighted) materially affects what a representation preserves.
