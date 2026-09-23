---
okf_version: "0.2"
type: Class
title: Sequential Monte Carlo
resource: urn:ngm:class:sequential-monte-carlo
domain: machine-learning
description: Sequential Monte Carlo is a family of methods that approximate evolving probability distributions using a set of weighted samples updated recursively as new observations arrive.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:numerical-methods
requires:
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:resampling
enables:
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:state-estimation
  - urn:ngm:class:real-time-tracking
  - urn:ngm:class:simultaneous-localisation-and-mapping
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:stochastic-processes
implements:
  - urn:ngm:class:hidden-markov-model
  - urn:ngm:class:state-space-model
contrastsWith:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:variational-inference
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:importance-sampling
uses:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:graphical-model
supports:
  - urn:ngm:class:parameter-estimation
  - urn:ngm:class:uncertainty-quantification
relatedTo:
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:gaussian-process
---

# Sequential Monte Carlo

Sequential Monte Carlo is a family of methods that approximate evolving probability distributions using a set of weighted samples updated recursively as new observations arrive.
