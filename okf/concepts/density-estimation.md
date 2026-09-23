---
okf_version: "0.2"
type: Class
title: Density Estimation
resource: urn:ngm:class:density-estimation
domain: machine-learning
description: Density estimation is the statistical problem of inferring the underlying probability density function of a random variable from a finite set of observed samples. Parametric approaches assume a fixed functional form whose parameters are fitted by maximum likelihood, while non-parametric approaches such as kernel density estimation and histograms make minimal distributional assumptions. Modern deep
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:statistics
hasPart:
  - urn:ngm:class:kernel-density-estimation
  - urn:ngm:class:maximum-likelihood-estimation
enables:
  - urn:ngm:class:generative-model
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:outlier-detection
implements:
  - urn:ngm:class:gaussian-mixture-model
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:normalising-flow
contrastsWith:
  - urn:ngm:class:supervised-learning
uses:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:sampling
  - urn:ngm:class:maximum-likelihood-estimation
partOf:
  - urn:ngm:class:unsupervised-learning
relatedTo:
  - urn:ngm:class:vae
  - urn:ngm:class:information-theory
  - urn:ngm:class:entropy
---

# Density Estimation

Density estimation is the statistical problem of inferring the underlying probability density function of a random variable from a finite set of observed samples. Parametric approaches assume a fixed functional form whose parameters are fitted by maximum likelihood, while non-parametric approaches such as kernel density estimation and histograms make minimal distributional assumptions. Modern deep density estimation uses normalizing flows, autoregressive models, and variational methods to model complex high-dimensional distributions, making it foundational to generative modelling, anomaly detection, and unsupervised learning.
