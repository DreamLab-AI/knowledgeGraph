---
okf_version: "0.2"
type: Class
title: Ground Truth Labels
resource: urn:ngm:class:ground-truth-labels
domain: machine-learning
description: Ground truth labels are the authoritative, human-verified or empirically observed target values assigned to data instances, used to train and evaluate supervised machine-learning models. They represent the correct answer against which model predictions are compared, forming the basis for loss computation during training and accuracy measurement during evaluation. The quality, consistency, and cove
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-annotation
requires:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:data-quality
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:model-training
  - urn:ngm:class:classification
  - urn:ngm:class:accuracy
uses:
  - urn:ngm:class:data-annotation
supports:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-model
partOf:
  - urn:ngm:class:training-data
relatedTo:
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:regression
---

# Ground Truth Labels

Ground truth labels are the authoritative, human-verified or empirically observed target values assigned to data instances, used to train and evaluate supervised machine-learning models. They represent the correct answer against which model predictions are compared, forming the basis for loss computation during training and accuracy measurement during evaluation. The quality, consistency, and coverage of ground truth labels directly bound the performance a learned model can achieve.
