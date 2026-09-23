---
okf_version: "0.2"
type: Class
title: Adapter Modules
resource: urn:ngm:class:adapter-modules
domain: artificial-intelligence
description: Adapter Modules are compact bottleneck neural network sub-networks inserted between frozen transformer layers, trained exclusively on task-specific data whilst leaving the base model unchanged. They typically comprise a down-projection, a non-linearity, and an up-projection with a residual connection, constituting under 1% of model parameters and enabling efficient multi-task deployment from a sin
maturity: emerging
quality: 0.65
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
hasPart:
  - urn:ngm:class:residual-connection
requires:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:pre-trained-model
  - urn:ngm:class:transformer-architecture
enables:
  - urn:ngm:class:multi-task-learning
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:continual-learning
dependsOn:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:attention-mechanism
implements:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:neural-network
contrastsWith:
  - urn:ngm:class:prefix-tuning
  - urn:ngm:class:prompt-tuning
  - urn:ngm:class:lo-ra
  - urn:ngm:class:full-fine-tuning
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture-learning
uses:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:neural-network-layer
supports:
  - urn:ngm:class:model-compression
partOf:
  - urn:ngm:class:parameter-efficient-fine-tuning
relatedTo:
  - urn:ngm:class:natural-language-processing
---

# Adapter Modules

Adapter Modules are compact bottleneck neural network sub-networks inserted between frozen transformer layers, trained exclusively on task-specific data whilst leaving the base model unchanged. They typically comprise a down-projection, a non-linearity, and an up-projection with a residual connection, constituting under 1% of model parameters and enabling efficient multi-task deployment from a single frozen base model.
