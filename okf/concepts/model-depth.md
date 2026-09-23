---
okf_version: "0.2"
type: Class
title: Model Depth
resource: urn:ngm:class:model-depth
domain: artificial-intelligence
description: The count of stacked transformer layers (encoder, decoder, or both) in a neural network, governing the number of sequential representation transformations. Greater depth enables more abstract hierarchical feature learning but increases training difficulty, requiring residual connections and layer normalisation to stabilise gradient flow.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:residual-connection
  - urn:ngm:class:layer-normalisation
dependsOn:
  - urn:ngm:class:transformer
  - urn:ngm:class:hyperparameter
contrastsWith:
  - urn:ngm:class:model-width
relatedTo:
  - urn:ngm:class:parameter-count
  - urn:ngm:class:deep-learning
---

# Model Depth

The count of stacked transformer layers (encoder, decoder, or both) in a neural network, governing the number of sequential representation transformations. Greater depth enables more abstract hierarchical feature learning but increases training difficulty, requiring residual connections and layer normalisation to stabilise gradient flow.
