---
okf_version: "0.2"
type: Class
title: Lo RA
resource: urn:ngm:class:lo-ra
domain: artificial-intelligence
description: A parameter-efficient fine-tuning mod that freezes pre-trained weights and injects trainable low-rank decomposition matrices into each layer of the transformer, dramatically reducing trainable parameters whilst maintaining performance.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:parameter-efficient-fine-tuning
requires:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:large-language-models
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:instruction-tuning
contrastsWith:
  - urn:ngm:class:knowledge-distillation
partOf:
  - urn:ngm:class:parameter-efficient-fine-tuning
---

# Lo RA

A parameter-efficient fine-tuning mod that freezes pre-trained weights and injects trainable low-rank decomposition matrices into each layer of the transformer, dramatically reducing trainable parameters whilst maintaining performance.
