---
okf_version: "0.2"
type: Class
title: Gaussian Process
resource: urn:ngm:class:gaussian-process
domain: machine-learning
description: A Gaussian Process (GP) is a non-parametric Bayesian model that defines a probability distribution over functions, fully characterised by a mean function and a covariance (kernel) function, such that any finite collection of function evaluations follows a joint Gaussian distribution. Conditioning the GP prior on observed data yields a closed-form posterior distribution over functions that simultan
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:bayesian-inference
hasPart:
  - urn:ngm:class:kernel-function
  - urn:ngm:class:mean-function
  - urn:ngm:class:posterior-predictive-distribution
requires:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:positive-definite-matrix
  - urn:ngm:class:hyperparameter-optimisation
enables:
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:active-learning
  - urn:ngm:class:gaussian-process-regression
dependsOn:
  - urn:ngm:class:covariance-matrix
  - urn:ngm:class:hyperparameter-optimisation
contrastsWith:
  - urn:ngm:class:neural-network
  - urn:ngm:class:random-forest
  - urn:ngm:class:support-vector-machine
bridgesTo:
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:spatial-interpolation
uses:
  - urn:ngm:class:kernel-methods
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:marginal-likelihood
  - urn:ngm:class:cholesky-decomposition
relatedTo:
  - urn:ngm:class:kriging
  - urn:ngm:class:hamiltonian-monte-carlo
  - urn:ngm:class:variational-inference
  - urn:ngm:class:sparse-gaussian-process
  - urn:ngm:class:deep-kernel-learning
---

# Gaussian Process

A Gaussian Process (GP) is a non-parametric Bayesian model that defines a probability distribution over functions, fully characterised by a mean function and a covariance (kernel) function, such that any finite collection of function evaluations follows a joint Gaussian distribution. Conditioning the GP prior on observed data yields a closed-form posterior distribution over functions that simultaneously provides point predictions and principled uncertainty estimates. GPs are widely used for regression, classification, surrogate modelling, and as acquisition-function models in Bayesian optimisation, with exact inference scaling cubically in the number of observations and sparse inducing-point approximations enabling scalable variants.
