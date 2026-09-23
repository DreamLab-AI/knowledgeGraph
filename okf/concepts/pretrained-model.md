---
okf_version: "0.2"
type: Class
title: Pretrained Model
resource: urn:ngm:class:pretrained-model
domain: artificial-intelligence
description: A neural network or machine learning model that has been trained on a large dataset (often a broad corpus) before being adapted to a specific downstream task through fine-tuning or prompting. Pretrained models encode general representations—linguistic, visual, or multimodal—that can be efficiently transferred, dramatically reducing the data and compute required for specialised applications.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:model
hasPart:
  - urn:ngm:class:pretrained-weights
  - urn:ngm:class:checkpoints
enables:
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:lo-ra-fine-tuning
  - urn:ngm:class:neural-network-quantisation
uses:
  - urn:ngm:class:pre-training
relatedTo:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:domain-adaptation
---

# Pretrained Model

A neural network or machine learning model that has been trained on a large dataset (often a broad corpus) before being adapted to a specific downstream task through fine-tuning or prompting. Pretrained models encode general representations—linguistic, visual, or multimodal—that can be efficiently transferred, dramatically reducing the data and compute required for specialised applications.
