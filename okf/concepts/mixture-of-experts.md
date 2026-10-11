---
okf_version: "0.2"
type: Class
title: Mixture of Experts
resource: urn:ngm:class:mixture-of-experts
domain: machine-learning
description: A sparse neural network architecture in which a learned router (gating network) dispatches each input — in modern transformers, each token at each MoE layer — to a small subset of many parallel expert sub-networks, so that total parameter count can grow enormously while per-token computation stays roughly constant; introduced by Jacobs and Jordan in 1991 and revived at scale by Shazeer's sparsely-
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:sparse-mixture-of-experts
requires:
  - urn:ngm:class:load-balancing
  - urn:ngm:class:expert-parallelism
enables:
  - urn:ngm:class:model-scaling
  - urn:ngm:class:large-language-model
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:parameter-efficient-fine-tuning
contrastsWith:
  - urn:ngm:class:monolithic-ai
  - urn:ngm:class:deep-learning
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
partOf:
  - urn:ngm:class:ensemble-methods
relatedTo:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:attention-mechanisms
  - urn:ngm:class:transformer
  - urn:ngm:class:federated-learning
---

# Mixture of Experts

A sparse neural network architecture in which a learned router (gating network) dispatches each input — in modern transformers, each token at each MoE layer — to a small subset of many parallel expert sub-networks, so that total parameter count can grow enormously while per-token computation stays roughly constant; introduced by Jacobs and Jordan in 1991 and revived at scale by Shazeer's sparsely-gated MoE and the Switch Transformer, it underpins frontier models such as Mixtral and DeepSeek-V3.
