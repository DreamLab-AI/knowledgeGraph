---
okf_version: "0.2"
type: Class
title: Covariance Matrix
resource: urn:ngm:class:covariance-matrix
domain: machine-learning
description: A covariance matrix is a square symmetric positive semi-definite matrix whose (i,j) entry is the covariance between the i-th and j-th components of a multivariate random variable, with variances on the main diagonal. It completely characterises the second-order statistics and linear dependence structure of a multivariate distribution, and — together with the mean vector — fully specifies a multiva
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:multivariate-statistics
  - urn:ngm:class:statistical-object
hasPart:
  - urn:ngm:class:variance
  - urn:ngm:class:correlation-matrix
  - urn:ngm:class:eigendecomposition
requires:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:probability-theory
  - urn:ngm:class:multivariate-data
enables:
  - urn:ngm:class:principal-component-analysis
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:mahalanobis-distance
  - urn:ngm:class:whitening
  - urn:ngm:class:factor-analysis
  - urn:ngm:class:portfolio-optimisation
dependsOn:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:random-variable
implements:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:expectation-maximisation
contrastsWith:
  - urn:ngm:class:correlation-matrix
  - urn:ngm:class:precision-matrix
uses:
  - urn:ngm:class:eigendecomposition
  - urn:ngm:class:singular-value-decomposition
  - urn:ngm:class:feature-extraction
supports:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:state-estimation
  - urn:ngm:class:extended-kalman-filter
  - urn:ngm:class:slam
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
partOf:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:gaussian-distribution
relatedTo:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:random-matrix-theory
  - urn:ngm:class:cost-function
  - urn:ngm:class:regularisation
  - urn:ngm:class:vae
  - urn:ngm:class:signal-processing
  - urn:ngm:class:data-preprocessing
---

# Covariance Matrix

A covariance matrix is a square symmetric positive semi-definite matrix whose (i,j) entry is the covariance between the i-th and j-th components of a multivariate random variable, with variances on the main diagonal. It completely characterises the second-order statistics and linear dependence structure of a multivariate distribution, and — together with the mean vector — fully specifies a multivariate Gaussian. The covariance matrix is central to multivariate statistics, machine learning, state estimation, signal processing, and finance, serving as the fundamental data structure for representing and propagating uncertainty in high-dimensional systems.
