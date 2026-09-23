---
okf_version: "0.2"
type: Class
title: Parameter Count
resource: urn:ngm:class:parameter-count
domain: artificial-intelligence
description: The total number of trainable weights and biases in a neural network, serving as the primary measure of model size and capacity. Parameter count typically ranges from millions to hundreds of billions in modern language models, and governs memory requirements, inference cost, and the upper bound on information that can be encoded; scaling law research relates it to training compute and dataset size
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-content-and-assets
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:transfer-learning
dependsOn:
  - urn:ngm:class:neural-network-architecture
partOf:
  - urn:ngm:class:neural-network
  - urn:ngm:class:large-language-models
relatedTo:
  - urn:ngm:class:machine-learning-discipline-infrastructure
---

# Parameter Count

The total number of trainable weights and biases in a neural network, serving as the primary measure of model size and capacity. Parameter count typically ranges from millions to hundreds of billions in modern language models, and governs memory requirements, inference cost, and the upper bound on information that can be encoded; scaling law research relates it to training compute and dataset size.
