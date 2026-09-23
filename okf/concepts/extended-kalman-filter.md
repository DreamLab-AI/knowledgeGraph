---
okf_version: "0.2"
type: Class
title: Extended Kalman Filter
resource: urn:ngm:class:extended-kalman-filter
domain: robotics
description: The Extended Kalman Filter is a recursive state estimator that applies the Kalman filter to non-linear systems by linearising the process and measurement models about the current estimate using first-order Taylor expansion via Jacobian matrices.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:kalman-filter
requires:
  - urn:ngm:class:state-estimation
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:jacobian-matrix
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:covariance-matrix
enables:
  - urn:ngm:class:localisation
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:target-tracking
contrastsWith:
  - urn:ngm:class:unscented-kalman-filter
  - urn:ngm:class:monte-carlo-localization
bridgesTo:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:augmented-reality-tracking
  - urn:ngm:class:probabilistic-robotics
uses:
  - urn:ngm:class:motion-model
  - urn:ngm:class:observation-model
relatedTo:
  - urn:ngm:class:probabilistic-robotics
---

# Extended Kalman Filter

The Extended Kalman Filter is a recursive state estimator that applies the Kalman filter to non-linear systems by linearising the process and measurement models about the current estimate using first-order Taylor expansion via Jacobian matrices.
