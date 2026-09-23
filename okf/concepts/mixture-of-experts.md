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
enables:
  - urn:ngm:class:model-scaling
contrastsWith:
  - urn:ngm:class:monolithic-ai
relatedTo:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:attention-mechanisms
---

# Mixture of Experts

A sparse neural network architecture in which a learned router (gating network) dispatches each input — in modern transformers, each token at each MoE layer — to a small subset of many parallel expert sub-networks, so that total parameter count can grow enormously while per-token computation stays roughly constant; introduced by Jacobs and Jordan in 1991 and revived at scale by Shazeer's sparsely-gated MoE and the Switch Transformer, it underpins frontier models such as Mixtral and DeepSeek-V3.
