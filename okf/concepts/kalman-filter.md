---
okf_version: "0.2"
type: Class
title: Kalman Filter
resource: urn:ngm:class:kalman-filter
domain: machine-learning
description: An optimal recursive Bayesian filter that estimates the state of a linear dynamic system from a series of noisy measurements. It minimizes the mean squared error of the estimated state by combining a model-based prediction step with a measurement update step, weighting each by their respective uncertainty covariances to yield the minimum-variance unbiased estimate.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:state-estimation
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:recursive-estimator
hasPart:
  - urn:ngm:class:extended-kalman-filter
  - urn:ngm:class:unscented-kalman-filter
requires:
  - urn:ngm:class:covariance-matrix
  - urn:ngm:class:state-transition-function
  - urn:ngm:class:gaussian-noise-assumption
  - urn:ngm:class:linear-system-model
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
  - urn:ngm:class:target-tracking
  - urn:ngm:class:navigation
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:linear-algebra
implements:
  - urn:ngm:class:bayes-filter
contrastsWith:
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:extended-kalman-filter
  - urn:ngm:class:unscented-kalman-filter
  - urn:ngm:class:monte-carlo-localization
bridgesTo:
  - urn:ngm:class:inertial-navigation-system
  - urn:ngm:class:gps
uses:
  - urn:ngm:class:rb-1008-odometry
  - urn:ngm:class:mean-squared-error
  - urn:ngm:class:rb-1013-localization
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:sensor-fusion
relatedTo:
  - urn:ngm:class:control-theory
  - urn:ngm:class:signal-processing
  - urn:ngm:class:rb-1013-localization
  - urn:ngm:class:closed-loop-control
---

# Kalman Filter

An optimal recursive Bayesian filter that estimates the state of a linear dynamic system from a series of noisy measurements. It minimizes the mean squared error of the estimated state by combining a model-based prediction step with a measurement update step, weighting each by their respective uncertainty covariances to yield the minimum-variance unbiased estimate.
