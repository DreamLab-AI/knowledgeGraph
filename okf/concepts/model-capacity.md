---
okf_version: "0.2"
type: Class
title: Model Capacity
resource: urn:ngm:class:model-capacity
domain: artificial-intelligence
description: The measure of a machine learning model's ability to represent a wide variety of functions, determined by parameter count, architecture depth and width, and representational power. Models with insufficient capacity underfit the data; those with excessive capacity risk overfitting. Capacity is formally bounded by concepts such as the Vapnik–Chervonenkis dimension, and is managed in practice through
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:deep-learning
bridgesTo:
  - urn:ngm:class:digital-twin
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:underfitting
  - urn:ngm:class:regularisation
  - urn:ngm:class:digital-twin
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Model Capacity

The measure of a machine learning model's ability to represent a wide variety of functions, determined by parameter count, architecture depth and width, and representational power. Models with insufficient capacity underfit the data; those with excessive capacity risk overfitting. Capacity is formally bounded by concepts such as the Vapnik–Chervonenkis dimension, and is managed in practice through regularisation, pruning, and architecture search.
