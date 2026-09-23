---
okf_version: "0.2"
type: Class
title: Mixture-of-Experts Architecture
resource: urn:ngm:class:mixture-of-experts-architecture
domain: artificial-intelligence
description: An architecture that uses multiple specialised sub-networks (experts) with a gating mechanism that routes inputs to a sparse subset of experts, enabling scaling without proportional compute increases. MoE is adopted in production LLMs like GPT-4, enabling massive scale with controlled costs.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:sparse-mixture-of-experts
requires:
  - urn:ngm:class:load-balancing
  - urn:ngm:class:expert-parallelism
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:parameter-efficient-fine-tuning
dependsOn:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:neural-network
contrastsWith:
  - urn:ngm:class:deep-learning
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
supports:
  - urn:ngm:class:model-scaling
partOf:
  - urn:ngm:class:ensemble-methods
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:federated-learning
---

# Mixture-of-Experts Architecture

An architecture that uses multiple specialised sub-networks (experts) with a gating mechanism that routes inputs to a sparse subset of experts, enabling scaling without proportional compute increases. MoE is adopted in production LLMs like GPT-4, enabling massive scale with controlled costs.
