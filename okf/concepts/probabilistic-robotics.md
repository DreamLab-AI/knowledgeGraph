---
okf_version: "0.2"
type: Class
title: Probabilistic Robotics
resource: urn:ngm:class:probabilistic-robotics
domain: robotics
description: Probabilistic robotics is an approach to robot perception and control that represents uncertainty explicitly using probability distributions, and reasons about state and action through Bayesian estimation.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:robotics-domain
hasPart:
  - urn:ngm:class:state-estimation
  - urn:ngm:class:uncertainty-quantification
requires:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:probability-theory
  - urn:ngm:class:sensor-model
  - urn:ngm:class:motion-model
enables:
  - urn:ngm:class:localisation
  - urn:ngm:class:slam
  - urn:ngm:class:robot-navigation
  - urn:ngm:class:autonomous-mobile-robots
dependsOn:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:monte-carlo-methods
implements:
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:hidden-markov-model
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:monte-carlo-localization
uses:
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:extended-kalman-filter
  - urn:ngm:class:markov-decision-process
relatedTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:robot-perception
---

# Probabilistic Robotics

Probabilistic robotics is an approach to robot perception and control that represents uncertainty explicitly using probability distributions, and reasons about state and action through Bayesian estimation.
