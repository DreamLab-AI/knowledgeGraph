---
okf_version: "0.2"
type: Class
title: Variance Reduction
resource: urn:ngm:class:variance-reduction
domain: machine-learning
description: Variance Reduction is a family of techniques that lower the statistical variance of Monte Carlo and stochastic estimators so that fewer samples are needed to reach a target accuracy. Methods such as importance sampling, control variates, antithetic variates, and stratification reshape how samples are drawn or combined without introducing bias. In machine learning, variance reduction stabilises gra
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:monte-carlo-integration
requires:
  - urn:ngm:class:sampling
enables:
  - urn:ngm:class:simulation
implements:
  - urn:ngm:class:numerical-methods
bridgesTo:
  - urn:ngm:class:optimisation
uses:
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:sampling
supports:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:machine-learning-discipline
partOf:
  - urn:ngm:class:monte-carlo-integration
relatedTo:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:importance-sampling
---

# Variance Reduction

Variance Reduction is a family of techniques that lower the statistical variance of Monte Carlo and stochastic estimators so that fewer samples are needed to reach a target accuracy. Methods such as importance sampling, control variates, antithetic variates, and stratification reshape how samples are drawn or combined without introducing bias. In machine learning, variance reduction stabilises gradient estimates in stochastic optimisation and accelerates convergence of simulation-based methods.
