---
okf_version: "0.2"
type: Class
title: Gaussian Mixture Model
resource: urn:ngm:class:gaussian-mixture-model
domain: machine-learning
description: A Gaussian mixture model is a probabilistic model that represents a population as a weighted combination of several Gaussian distributions, each describing a latent subpopulation or cluster. Its parameters — the mixing weights, means, and covariance matrices — are typically estimated by the expectation-maximisation algorithm, which iteratively assigns soft responsibilities to data points and updat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:latent-variable-model
hasPart:
  - urn:ngm:class:gaussian-distribution
enables:
  - urn:ngm:class:clustering
  - urn:ngm:class:density-estimation
implements:
  - urn:ngm:class:clustering
  - urn:ngm:class:density-estimation
contrastsWith:
  - urn:ngm:class:clustering
uses:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:probability-distribution
supports:
  - urn:ngm:class:unsupervised-learning
partOf:
  - urn:ngm:class:latent-variable-model
relatedTo:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:statistics
---

# Gaussian Mixture Model

A Gaussian mixture model is a probabilistic model that represents a population as a weighted combination of several Gaussian distributions, each describing a latent subpopulation or cluster. Its parameters — the mixing weights, means, and covariance matrices — are typically estimated by the expectation-maximisation algorithm, which iteratively assigns soft responsibilities to data points and updates the component parameters. As a generative latent-variable model, it supports soft clustering, density estimation, and probabilistic classification.
