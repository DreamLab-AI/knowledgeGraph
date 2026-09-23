---
okf_version: "0.2"
type: Class
title: Mean Squared Error
resource: urn:ngm:class:mean-squared-error
domain: machine-learning
description: A measure of the average squared difference between predicted values and observed values, widely used to quantify estimation and prediction error in regression and statistical learning.
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:loss-function
hasPart:
  - urn:ngm:class:bias-variance-tradeoff
requires:
  - urn:ngm:class:statistics
  - urn:ngm:class:probability-theory
  - urn:ngm:class:regression
enables:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:model-training
  - urn:ngm:class:hyperparameter-tuning
dependsOn:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
contrastsWith:
  - urn:ngm:class:mean-absolute-error
  - urn:ngm:class:cross-entropy-loss
bridgesTo:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:data
  - urn:ngm:class:gradient-descent
relatedTo:
  - urn:ngm:class:root-mean-square-error
  - urn:ngm:class:regularisation
  - urn:ngm:class:overfitting
  - urn:ngm:class:neural-network
---

# Mean Squared Error

A measure of the average squared difference between predicted values and observed values, widely used to quantify estimation and prediction error in regression and statistical learning.
