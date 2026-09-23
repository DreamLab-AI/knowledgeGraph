---
okf_version: "0.2"
type: Class
title: Pre-Trained Model
resource: urn:ngm:class:pre-trained-model
domain: machine-learning
description: A pre-trained model is a machine-learning model whose parameters have already been learned on a large, often general-purpose dataset, so that it can be reused as a starting point for downstream tasks. Rather than training from random initialisation, practitioners adapt the pre-trained weights through fine-tuning or use the model directly for inference, transferring learned representations to new p
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:ai-model-architecture
requires:
  - urn:ngm:class:big-data
  - urn:ngm:class:self-supervised-learning
enables:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:few-shot-learning
dependsOn:
  - urn:ngm:class:model-training
  - urn:ngm:class:representation-learning
bridgesTo:
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:embedding
supports:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:inference
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:machine-learning-discipline
---

# Pre-Trained Model

A pre-trained model is a machine-learning model whose parameters have already been learned on a large, often general-purpose dataset, so that it can be reused as a starting point for downstream tasks. Rather than training from random initialisation, practitioners adapt the pre-trained weights through fine-tuning or use the model directly for inference, transferring learned representations to new problems. Pre-trained models underpin transfer learning and are the practical foundation of modern deep learning across language, vision and multimodal tasks.
