---
okf_version: "0.2"
type: Class
title: Test Dataset
resource: urn:ngm:class:test-dataset
domain: artificial-intelligence
description: A test dataset is a partition of data held out from model training and used exclusively to provide an unbiased estimate of a trained model's performance on unseen examples. Unlike the training and validation sets, it is touched only once final hyperparameters are fixed, preventing the leakage that would inflate reported accuracy. Its disjointness from training data is what makes it a credible meas
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:dataset
hasPart:
  - urn:ngm:class:supervised-learning
requires:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:machine-learning-discipline
enables:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:model-performance
dependsOn:
  - urn:ngm:class:training-dataset
contrastsWith:
  - urn:ngm:class:training-dataset
bridgesTo:
  - urn:ngm:class:cross-validation
uses:
  - urn:ngm:class:cross-validation
supports:
  - urn:ngm:class:model-performance
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:hyperparameter-tuning
---

# Test Dataset

A test dataset is a partition of data held out from model training and used exclusively to provide an unbiased estimate of a trained model's performance on unseen examples. Unlike the training and validation sets, it is touched only once final hyperparameters are fixed, preventing the leakage that would inflate reported accuracy. Its disjointness from training data is what makes it a credible measure of generalisation.
