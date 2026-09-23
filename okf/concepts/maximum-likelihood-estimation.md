---
okf_version: "0.2"
type: Class
title: Maximum Likelihood Estimation
resource: urn:ngm:class:maximum-likelihood-estimation
domain: machine-learning
description: Maximum Likelihood Estimation (MLE) is a method of estimating the parameters of a statistical model by choosing the parameter values that maximise the likelihood of the observed data under the model. Equivalently it minimises the negative log-likelihood, connecting it directly to many machine-learning loss functions. As a principled, asymptotically efficient estimator it underlies a large share of
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:statistics
requires:
  - urn:ngm:class:sampling
enables:
  - urn:ngm:class:system-identification
  - urn:ngm:class:generative-model
implements:
  - urn:ngm:class:regression
contrastsWith:
  - urn:ngm:class:variational-inference
uses:
  - urn:ngm:class:optimisation
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:uncertainty-quantification
partOf:
  - urn:ngm:class:statistics
relatedTo:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:information-theory
  - urn:ngm:class:stochastic-gradient-descent
---

# Maximum Likelihood Estimation

Maximum Likelihood Estimation (MLE) is a method of estimating the parameters of a statistical model by choosing the parameter values that maximise the likelihood of the observed data under the model. Equivalently it minimises the negative log-likelihood, connecting it directly to many machine-learning loss functions. As a principled, asymptotically efficient estimator it underlies a large share of classical statistics and probabilistic machine learning.
