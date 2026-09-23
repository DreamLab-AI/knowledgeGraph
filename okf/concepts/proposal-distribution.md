---
okf_version: "0.2"
type: Class
title: Proposal Distribution
resource: urn:ngm:class:proposal-distribution
domain: ai
description: A proposal distribution is an auxiliary distribution used in Monte Carlo methods to generate candidate samples when sampling directly from a target distribution is infeasible. In importance sampling, Metropolis-Hastings, and particle filters it determines where samples are drawn, and its closeness to the target governs efficiency and variance. A poorly chosen proposal causes sample degeneracy or s
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:monte-carlo-methods
relatedTo:
  - urn:ngm:class:sampling
  - urn:ngm:class:monte-carlo-localization
---

# Proposal Distribution

A proposal distribution is an auxiliary distribution used in Monte Carlo methods to generate candidate samples when sampling directly from a target distribution is infeasible. In importance sampling, Metropolis-Hastings, and particle filters it determines where samples are drawn, and its closeness to the target governs efficiency and variance. A poorly chosen proposal causes sample degeneracy or slow mixing.
