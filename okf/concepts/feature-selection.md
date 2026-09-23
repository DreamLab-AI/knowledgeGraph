---
okf_version: "0.2"
type: Class
title: Feature Selection
resource: urn:ngm:class:feature-selection
domain: machine-learning
description: Feature selection is the process of identifying and retaining the subset of input variables most relevant to a predictive task while discarding redundant or uninformative ones. By reducing dimensionality it can improve model generalisation, lower computational cost, and enhance interpretability without altering the underlying feature values. Methods range from filter approaches based on statistica
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:feature-engineering
hasPart:
  - urn:ngm:class:data-preprocessing
requires:
  - urn:ngm:class:data-quality
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:overfitting
  - urn:ngm:class:accuracy
contrastsWith:
  - urn:ngm:class:dimensionality-reduction
supports:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:model-training
  - urn:ngm:class:classification
  - urn:ngm:class:machine-learning-model
relatedTo:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:regularisation
  - urn:ngm:class:supervised-learning
---

# Feature Selection

Feature selection is the process of identifying and retaining the subset of input variables most relevant to a predictive task while discarding redundant or uninformative ones. By reducing dimensionality it can improve model generalisation, lower computational cost, and enhance interpretability without altering the underlying feature values. Methods range from filter approaches based on statistical relevance, through wrapper approaches that evaluate subsets via model performance, to embedded approaches integrated into model training.
