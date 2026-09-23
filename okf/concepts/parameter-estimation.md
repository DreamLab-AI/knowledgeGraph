---
okf_version: "0.2"
type: Class
title: Parameter Estimation
resource: urn:ngm:class:parameter-estimation
domain: robotics
description: Parameter estimation is the process of inferring the unknown parameters of a mathematical or statistical model from observed data. In robotics and control it is central to fitting dynamic models, calibrating sensors, and identifying physical constants from measurements, typically by optimising a likelihood or least-squares criterion. It provides the model coefficients that downstream estimation, c
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:system-identification
enables:
  - urn:ngm:class:kalman-filter
dependsOn:
  - urn:ngm:class:observability
implements:
  - urn:ngm:class:maximum-likelihood-estimation
bridgesTo:
  - urn:ngm:class:sensor-fusion
uses:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:bayesian-inference
supports:
  - urn:ngm:class:calibration
  - urn:ngm:class:control-theory
partOf:
  - urn:ngm:class:system-identification
relatedTo:
  - urn:ngm:class:regression
  - urn:ngm:class:state-estimation
  - urn:ngm:class:inference
  - urn:ngm:class:statistics
---

# Parameter Estimation

Parameter estimation is the process of inferring the unknown parameters of a mathematical or statistical model from observed data. In robotics and control it is central to fitting dynamic models, calibrating sensors, and identifying physical constants from measurements, typically by optimising a likelihood or least-squares criterion. It provides the model coefficients that downstream estimation, control, and prediction algorithms rely upon.
