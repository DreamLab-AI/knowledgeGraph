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
  - urn:ngm:class:neural-network
requires:
  - urn:ngm:class:activation-function
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer-architecture
contrastsWith:
  - urn:ngm:class:batch-normalisation
bridgesTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:backpropagation
partOf:
  - urn:ngm:class:transformer-architecture
relatedTo:
  - urn:ngm:class:residual-connection
  - urn:ngm:class:feed-forward-network
  - urn:ngm:class:attention-mechanism
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Layer Normalisation

A normalisation technique that computes mean and variance across the feature dimension for each training example independently, then rescales activations using learnable scale and shift parameters. Unlike batch normalisation, layer normalisation is invariant to batch size, making it the standard choice for transformer and recurrent architectures where sequence lengths vary.
