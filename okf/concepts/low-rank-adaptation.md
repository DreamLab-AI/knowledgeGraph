---
okf_version: "0.2"
type: Class
title: Low-Rank Adaptation
resource: urn:ngm:class:low-rank-adaptation
domain: machine-learning
description: Low-Rank Adaptation (LoRA) is a parameter-efficient fine-tuning method that injects trainable low-rank decomposition matrices into the weight matrices of a frozen pre-trained model, enabling task adaptation with a fraction of the trainable parameters required by full fine-tuning.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
hasPart:
  - urn:ngm:class:adapter-modules
requires:
  - urn:ngm:class:neural-network
  - urn:ngm:class:pre-trained-model
  - urn:ngm:class:matrix-factorisation
enables:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:multi-task-learning
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:weight-matrix
implements:
  - urn:ngm:class:parameter-efficient-fine-tuning
contrastsWith:
  - urn:ngm:class:full-fine-tuning
  - urn:ngm:class:prompt-tuning
  - urn:ngm:class:prefix-tuning
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:gpt
uses:
  - urn:ngm:class:singular-value-decomposition
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:on-device-ai
partOf:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:model-adaptation
relatedTo:
  - urn:ngm:class:quantisation
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:model-compression
---

# Low-Rank Adaptation

Low-Rank Adaptation (LoRA) is a parameter-efficient fine-tuning method that injects trainable low-rank decomposition matrices into the weight matrices of a frozen pre-trained model, enabling task adaptation with a fraction of the trainable parameters required by full fine-tuning.
