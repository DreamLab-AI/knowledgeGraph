---
okf_version: "0.2"
type: Class
title: Data Compression
resource: urn:ngm:class:data-compression
domain: artificial-intelligence
description: Data Compression in AI encompasses techniques for reducing the size of datasets, models, and computational representations while preserving essential information and predictive performance. Key methods include model quantisation (reducing numerical precision of weights), pruning (removing redundant parameters), knowledge distillation (training compact student models from large teachers), and neura
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:lossless-compression
  - urn:ngm:class:entropy-coding
requires:
  - urn:ngm:class:model-training
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:federated-learning
  - urn:ngm:class:on-device-inference
  - urn:ngm:class:bandwidth-efficient-communication
dependsOn:
  - urn:ngm:class:information-theory
contrastsWith:
  - urn:ngm:class:full-precision-model
bridgesTo:
  - urn:ngm:class:network-bandwidth-management
  - urn:ngm:class:storage-optimisation
uses:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:quantisation
  - urn:ngm:class:autoencoder
  - urn:ngm:class:sparse-representation
supports:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:tiny-ml
  - urn:ngm:class:ai-inference
partOf:
  - urn:ngm:class:model-optimisation-and-performance
relatedTo:
  - urn:ngm:class:model-pruning-for-edge-deployment
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:weight-sharing
---

# Data Compression

Data Compression in AI encompasses techniques for reducing the size of datasets, models, and computational representations while preserving essential information and predictive performance. Key methods include model quantisation (reducing numerical precision of weights), pruning (removing redundant parameters), knowledge distillation (training compact student models from large teachers), and neural compression via autoencoders. These techniques are critical for deploying AI on resource-constrained edge devices and for reducing storage, bandwidth, and energy costs.
