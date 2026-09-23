---
okf_version: "0.2"
type: Class
title: Self Training
resource: urn:ngm:class:self-training
domain: artificial-intelligence
description: A semi-supervised learning technique where a model is iteratively improved by training on its own high-confidence predictions on unlabelled data. Self-training enables learning from large amounts of unlabelled data by using the model's own predictions as pseudo-labels.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:semi-supervised-learning
enables:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:active-learning
uses:
  - urn:ngm:class:transfer-learning
partOf:
  - urn:ngm:class:semi-supervised-learning
relatedTo:
  - urn:ngm:class:knowledge-distillation
---

# Self Training

A semi-supervised learning technique where a model is iteratively improved by training on its own high-confidence predictions on unlabelled data. Self-training enables learning from large amounts of unlabelled data by using the model's own predictions as pseudo-labels.
