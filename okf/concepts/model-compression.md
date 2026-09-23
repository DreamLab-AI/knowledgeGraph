---
okf_version: "0.2"
type: Class
title: Model Compression
resource: urn:ngm:class:model-compression
domain: machine-learning
description: "Model compression is the family of techniques that reduce the size, memory footprint, and computational cost of a machine learning model while preserving as much of its predictive accuracy as possible. Common methods include quantisation of weights to lower precision, pruning of redundant parameters, knowledge distillation into a smaller student model, and weight sharing. Compression is essential "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-optimization
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:quantisation
  - urn:ngm:class:pruning
  - urn:ngm:class:weight-sharing
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:training
enables:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:ai-inference
  - urn:ngm:class:latency
  - urn:ngm:class:ai-inference
  - urn:ngm:class:latency
dependsOn:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:low-rank-adaptation
  - urn:ngm:class:tensor
supports:
  - urn:ngm:class:inference
  - urn:ngm:class:model-deployment
  - urn:ngm:class:inference
partOf:
  - urn:ngm:class:model-optimization
  - urn:ngm:class:model-deployment
relatedTo:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer
---

# Model Compression

Model compression is the family of techniques that reduce the size, memory footprint, and computational cost of a machine learning model while preserving as much of its predictive accuracy as possible. Common methods include quantisation of weights to lower precision, pruning of redundant parameters, knowledge distillation into a smaller student model, and weight sharing. Compression is essential for deploying large neural networks on resource-constrained hardware and for reducing inference latency and energy use.
