---
okf_version: "0.2"
type: Class
title: QLoRA
resource: urn:ngm:class:qlo-ra
domain: artificial-intelligence
description: An extension of LoRA (Low-Rank Adaptation) that combines 4-bit NormalFloat quantisation of frozen base model weights with full-precision trainable low-rank adapter matrices. QLoRA additionally employs double quantisation and paged optimisers to achieve extreme memory efficiency, enabling fine-tuning of 65B-parameter models on a single 48GB GPU without significant performance degradation.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:parameter-efficient-fine-tuning
requires:
  - urn:ngm:class:quantisation
  - urn:ngm:class:neural-network-quantisation
enables:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:domain-adaptation
uses:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:large-language-models
relatedTo:
  - urn:ngm:class:knowledge-distillation
---

# QLoRA

An extension of LoRA (Low-Rank Adaptation) that combines 4-bit NormalFloat quantisation of frozen base model weights with full-precision trainable low-rank adapter matrices. QLoRA additionally employs double quantisation and paged optimisers to achieve extreme memory efficiency, enabling fine-tuning of 65B-parameter models on a single 48GB GPU without significant performance degradation.
