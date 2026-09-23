---
okf_version: "0.2"
type: Class
title: Pretraining
resource: urn:ngm:class:pretraining
domain: machine-learning
description: Pretraining is the initial phase of training a model on a large, broad corpus using self-supervised objectives to learn general-purpose representations before any task-specific adaptation. It produces a foundation model whose learned features can be transferred to downstream tasks through fine-tuning or prompting. For language models this typically involves predicting masked or next tokens over va
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:self-supervised-learning
requires:
  - urn:ngm:class:training-corpus
  - urn:ngm:class:unsupervised-learning
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:transfer-learning
dependsOn:
  - urn:ngm:class:representation-learning
implements:
  - urn:ngm:class:self-supervised-learning
contrastsWith:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:instruction-tuning
bridgesTo:
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:next-token-prediction
  - urn:ngm:class:representation-learning
supports:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:language-model
relatedTo:
  - urn:ngm:class:transfer-learning
---

# Pretraining

Pretraining is the initial phase of training a model on a large, broad corpus using self-supervised objectives to learn general-purpose representations before any task-specific adaptation. It produces a foundation model whose learned features can be transferred to downstream tasks through fine-tuning or prompting. For language models this typically involves predicting masked or next tokens over vast text collections.
