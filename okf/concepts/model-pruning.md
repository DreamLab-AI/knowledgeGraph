---
okf_version: "0.2"
type: Class
title: Model Pruning
resource: urn:ngm:class:model-pruning
domain: machine-learning
description: "Model pruning is a neural-network compression technique that removes redundant or low-importance parameters, neurons, or structural components from a trained model to reduce its size and computational cost while preserving accuracy. Pruning may be unstructured, zeroing individual weights to induce sparsity, or structured, removing whole channels, filters, or layers to yield models that run faster "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-compression
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:parameter
requires:
  - urn:ngm:class:fine-tuning
enables:
  - urn:ngm:class:edge-computing
dependsOn:
  - urn:ngm:class:neural-network
contrastsWith:
  - urn:ngm:class:knowledge-distillation
uses:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:model-compression
  - urn:ngm:class:edge-computing
partOf:
  - urn:ngm:class:model-optimization
relatedTo:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:model-optimization
  - urn:ngm:class:parameter
---

# Model Pruning

Model pruning is a neural-network compression technique that removes redundant or low-importance parameters, neurons, or structural components from a trained model to reduce its size and computational cost while preserving accuracy. Pruning may be unstructured, zeroing individual weights to induce sparsity, or structured, removing whole channels, filters, or layers to yield models that run faster on standard hardware. Importance is judged by criteria such as weight magnitude or sensitivity, and pruning is typically followed by fine-tuning to recover lost accuracy. It is a core method for deploying large models on resource-constrained and edge environments.
