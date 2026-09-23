---
okf_version: "0.2"
type: Class
title: Resampling
resource: urn:ngm:class:resampling
domain: machine-learning
description: Resampling is a family of statistical and machine-learning techniques that repeatedly draw samples from observed data to estimate the variability of a statistic, validate a model, or rebalance a dataset. It includes methods such as bootstrapping, cross-validation, permutation testing, and over- and under-sampling for class imbalance. By substituting computation for restrictive distributional assum
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:statistical-inference
hasPart:
  - urn:ngm:class:cross-validation
requires:
  - urn:ngm:class:statistical-inference
enables:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:cross-validation
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:bagging
supports:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:bagging
partOf:
  - urn:ngm:class:statistical-inference
relatedTo:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:bagging
  - urn:ngm:class:overfitting
  - urn:ngm:class:model-evaluation
---

# Resampling

Resampling is a family of statistical and machine-learning techniques that repeatedly draw samples from observed data to estimate the variability of a statistic, validate a model, or rebalance a dataset. It includes methods such as bootstrapping, cross-validation, permutation testing, and over- and under-sampling for class imbalance. By substituting computation for restrictive distributional assumptions, resampling provides robust estimates of error, confidence and generalisation.
