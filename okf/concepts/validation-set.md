---
okf_version: "0.2"
type: Class
title: Validation Set
resource: urn:ngm:class:validation-set
domain: machine-learning
description: A Validation Set is a held-out partition of data, distinct from the training and test sets, used to tune hyperparameters and make model-selection decisions during machine learning development. By evaluating candidate models on data not used for fitting, it provides an unbiased signal for choices such as architecture, regularisation strength and early stopping. The test set is reserved for a final,
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:dataset
requires:
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:model-selection
  - urn:ngm:class:early-stopping
contrastsWith:
  - urn:ngm:class:cross-validation
uses:
  - urn:ngm:class:accuracy
  - urn:ngm:class:loss-function
supports:
  - urn:ngm:class:model-training
  - urn:ngm:class:bias-variance-tradeoff
partOf:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:data
---

# Validation Set

A Validation Set is a held-out partition of data, distinct from the training and test sets, used to tune hyperparameters and make model-selection decisions during machine learning development. By evaluating candidate models on data not used for fitting, it provides an unbiased signal for choices such as architecture, regularisation strength and early stopping. The test set is reserved for a final, untouched estimate of generalisation.
