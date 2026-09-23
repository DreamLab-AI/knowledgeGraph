---
okf_version: "0.2"
type: Class
title: Pruning
resource: urn:ngm:class:pruning
domain: artificial-intelligence
description: Pruning is a model compression technique that removes redundant or low-importance parameters from a neural network to reduce its size and computational cost while preserving accuracy. It ranges from unstructured pruning of individual weights to structured pruning of whole neurons, channels or attention heads. Pruned models are typically fine-tuned to recover any lost accuracy and can be deployed w
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-compression
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:model-weights
requires:
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:tiny-ml
contrastsWith:
  - urn:ngm:class:model-quantization
  - urn:ngm:class:knowledge-distillation
bridgesTo:
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:gpu-memory
supports:
  - urn:ngm:class:inference
  - urn:ngm:class:edge-ai
  - urn:ngm:class:on-device-ai
partOf:
  - urn:ngm:class:model-compression
relatedTo:
  - urn:ngm:class:quantisation
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:model-optimisation-and-performance
---

# Pruning

Pruning is a model compression technique that removes redundant or low-importance parameters from a neural network to reduce its size and computational cost while preserving accuracy. It ranges from unstructured pruning of individual weights to structured pruning of whole neurons, channels or attention heads. Pruned models are typically fine-tuned to recover any lost accuracy and can be deployed with lower memory and latency.
