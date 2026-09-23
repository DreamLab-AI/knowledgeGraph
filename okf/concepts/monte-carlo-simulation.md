---
okf_version: "0.2"
type: Class
title: Monte Carlo Simulation
resource: urn:ngm:class:monte-carlo-simulation
domain: infrastructure
description: Monte Carlo simulation is a computational technique that estimates the behaviour of a system or the value of a quantity by repeatedly sampling random inputs from probability distributions and aggregating the resulting outcomes. By running many random trials it approximates expectations, distributions and tail risks that are difficult to derive analytically. It is widely used for numerical integrat
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:simulation
requires:
  - urn:ngm:class:random-sampling
  - urn:ngm:class:probability-distribution
enables:
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:risk-assessment-methodology
dependsOn:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:central-limit-theorem
contrastsWith:
  - urn:ngm:class:numerical-methods
bridgesTo:
  - urn:ngm:class:risk-assessment-methodology
uses:
  - urn:ngm:class:random-sampling
  - urn:ngm:class:variance-reduction
supports:
  - urn:ngm:class:sensitivity-analysis
  - urn:ngm:class:financial-modelling
partOf:
  - urn:ngm:class:simulation
  - urn:ngm:class:numerical-methods
relatedTo:
  - urn:ngm:class:simulation
  - urn:ngm:class:sensitivity-analysis
  - urn:ngm:class:bayesian-inference
---

# Monte Carlo Simulation

Monte Carlo simulation is a computational technique that estimates the behaviour of a system or the value of a quantity by repeatedly sampling random inputs from probability distributions and aggregating the resulting outcomes. By running many random trials it approximates expectations, distributions and tail risks that are difficult to derive analytically. It is widely used for numerical integration, risk analysis and uncertainty quantification.
