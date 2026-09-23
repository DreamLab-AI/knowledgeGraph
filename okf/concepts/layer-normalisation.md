---
okf_version: "0.2"
type: Class
title: Layer Normalisation
resource: urn:ngm:class:layer-normalisation
domain: artificial-intelligence
description: A normalisation technique that computes mean and variance across the feature dimension for each training example independently, then rescales activations using learnable scale and shift parameters. Unlike batch normalisation, layer normalisation is invariant to batch size, making it the standard choice for transformer and recurrent architectures where sequence lengths vary.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:deep-learning
contrastsWith:
  - urn:ngm:class:batch-normalisation
partOf:
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:residual-connection
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:attention-mechanism
---

# Layer Normalisation

A normalisation technique that computes mean and variance across the feature dimension for each training example independently, then rescales activations using learnable scale and shift parameters. Unlike batch normalisation, layer normalisation is invariant to batch size, making it the standard choice for transformer and recurrent architectures where sequence lengths vary.
