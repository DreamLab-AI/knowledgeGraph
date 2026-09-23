---
okf_version: "0.2"
type: Class
title: Fine Tuning
resource: urn:ngm:class:fine-tuning
domain: machine-learning
description: The process of adapting a pre-trained model to a specific downstream task by continuing training on task-specific data, typically with a lower learning rate. Fine-tuning leverages knowledge acquired during pre-training whilst specialising the model for particular applications.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:full-fine-tuning
  - urn:ngm:class:supervised-fine-tuning
requires:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:task-specific-dataset
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:image-generation
  - urn:ngm:class:instruction-following
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:reinforcement-learning-from-human-feedback
dependsOn:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:training-data
  - urn:ngm:class:pre-trained-model
  - urn:ngm:class:labelled-dataset
contrastsWith:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:training-from-scratch
bridgesTo:
  - urn:ngm:class:style-transfer
  - urn:ngm:class:multimodal-ai-architecture-models
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:low-rank-adaptation
partOf:
  - urn:ngm:class:model-training-pipeline
relatedTo:
  - urn:ngm:class:ai-alignment
  - urn:ngm:class:overfitting
  - urn:ngm:class:knowledge-distillation
---

# Fine Tuning

The process of adapting a pre-trained model to a specific downstream task by continuing training on task-specific data, typically with a lower learning rate. Fine-tuning leverages knowledge acquired during pre-training whilst specialising the model for particular applications.
