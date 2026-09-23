---
okf_version: "0.2"
type: Class
title: Parameter-Efficient Fine-Tuning
resource: urn:ngm:class:parameter-efficient-fine-tuning
domain: artificial-intelligence
description: Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources by freezing most pre-trained weights and adding or modifying a minimal set of trainable parameters.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:adapter-modules
  - urn:ngm:class:prompt-tuning
  - urn:ngm:class:prefix-tuning
  - urn:ngm:class:qlo-ra
  - urn:ngm:class:lo-ra-do-ra-etc
requires:
  - urn:ngm:class:pre-trained-model
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:multi-task-learning
  - urn:ngm:class:continual-learning
  - urn:ngm:class:edge-deployment
dependsOn:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
contrastsWith:
  - urn:ngm:class:full-fine-tuning
  - urn:ngm:class:knowledge-distillation
bridgesTo:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:model-training
  - urn:ngm:class:low-rank-decomposition
  - urn:ngm:class:neural-network-quantisation
supports:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:reinforcement-learning-from-human-feedback
partOf:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:model-adaptation
relatedTo:
  - urn:ngm:class:model-compression
---

# Parameter-Efficient Fine-Tuning

Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources by freezing most pre-trained weights and adding or modifying a minimal set of trainable parameters.
