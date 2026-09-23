---
okf_version: "0.2"
type: Class
title: Continued Pre Training
resource: urn:ngm:class:continued-pre-training
domain: artificial-intelligence
description: An intermediate training phase in which a pre-trained foundation model undergoes additional unsupervised pre-training on domain-specific or task-relevant corpora before supervised fine-tuning. Continued pre-training bridges general-purpose representations and domain expertise, using the same self-supervised objectives as initial pre-training whilst employing reduced learning rates and selective da
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:domain-adaptation
contrastsWith:
  - urn:ngm:class:full-fine-tuning
bridgesTo:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:overfitting
---

# Continued Pre Training

An intermediate training phase in which a pre-trained foundation model undergoes additional unsupervised pre-training on domain-specific or task-relevant corpora before supervised fine-tuning. Continued pre-training bridges general-purpose representations and domain expertise, using the same self-supervised objectives as initial pre-training whilst employing reduced learning rates and selective data to mitigate catastrophic forgetting of general capabilities.
