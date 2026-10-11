---
okf_version: "0.2"
type: Class
title: Spacecraft Navigation Filter
resource: urn:ngm:class:spacecraft-navigation-filter
domain: space-science-and-systems
description: A spacecraft navigation filter estimates a state by combining a propagated model with measurements and explicit uncertainty assumptions. The state can contain position and velocity, attitude and angular rate, clock terms, sensor biases, force-model parameters or a target-relative pose. The associated covariance describes uncertainty within the estimator's model. It is not measured truth and can be
maturity: draft
quality: 0
relatedTo:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:spacecraft-navigation
  - urn:ngm:class:state-estimation
---

# Spacecraft Navigation Filter

A spacecraft navigation filter estimates a state by combining a propagated model with measurements and explicit uncertainty assumptions. The state can contain position and velocity, attitude and angular rate, clock terms, sensor biases, force-model parameters or a target-relative pose. The associated covariance describes uncertainty within the estimator's model. It is not measured truth and can be badly overconfident when the dynamics, sensor errors or linearisation assumptions are wrong.[^1][^4]
