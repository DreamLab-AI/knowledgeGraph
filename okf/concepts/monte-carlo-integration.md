---
okf_version: "0.2"
type: Class
title: Monte Carlo Integration
resource: urn:ngm:class:monte-carlo-integration
domain: machine-learning
description: Monte Carlo integration estimates the value of an integral by averaging the integrand over randomly sampled points, with error that decreases with the square root of the sample count regardless of dimension.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:numerical-methods
hasPart:
  - urn:ngm:class:quasi-monte-carlo
  - urn:ngm:class:markov-chain-monte-carlo
requires:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:random-number-generator
enables:
  - urn:ngm:class:volume-rendering
  - urn:ngm:class:path-tracing
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:reinforcement-learning
dependsOn:
  - urn:ngm:class:central-limit-theorem
  - urn:ngm:class:sampling
contrastsWith:
  - urn:ngm:class:quadrature
  - urn:ngm:class:deterministic-integration
bridgesTo:
  - urn:ngm:class:financial-risk-modeling
  - urn:ngm:class:physical-simulation
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:sequential-monte-carlo
uses:
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:variance-reduction
  - urn:ngm:class:law-of-large-numbers
supports:
  - urn:ngm:class:sequential-monte-carlo
  - urn:ngm:class:neural-network-training
partOf:
  - urn:ngm:class:stochastic-methods
relatedTo:
  - urn:ngm:class:statistical-estimation
---

# Monte Carlo Integration

Monte Carlo integration estimates the value of an integral by averaging the integrand over randomly sampled points, with error that decreases with the square root of the sample count regardless of dimension.
