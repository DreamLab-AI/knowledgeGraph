---
okf_version: "0.2"
type: Class
title: Observation Model
resource: urn:ngm:class:observation-model
domain: robotics
description: An observation model (or measurement model) is the probabilistic relationship that specifies the likelihood of a sensor measurement given the underlying state of a system. In recursive Bayesian estimation it provides the likelihood term used to correct a predicted state belief against incoming data. Its accuracy, including the noise characteristics it encodes, directly governs the quality of state
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-perception
relatedTo:
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:monte-carlo-localization
---

# Observation Model

An observation model (or measurement model) is the probabilistic relationship that specifies the likelihood of a sensor measurement given the underlying state of a system. In recursive Bayesian estimation it provides the likelihood term used to correct a predicted state belief against incoming data. Its accuracy, including the noise characteristics it encodes, directly governs the quality of state estimation.
