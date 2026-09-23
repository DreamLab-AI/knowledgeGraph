---
okf_version: "0.2"
type: Class
title: Monte Carlo Methods
resource: urn:ngm:class:monte-carlo-methods
domain: artificial-intelligence
description: Monte Carlo methods are a broad class of computational algorithms that employ repeated random sampling to approximate numerical quantities that are analytically intractable, including high-dimensional integrals, expectations under complex probability distributions, and optimal policies in stochastic decision processes. The fundamental principle holds that averaging a function over sufficiently man
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:monte-carlo-tree-search
  - urn:ngm:class:sequential-monte-carlo
  - urn:ngm:class:importance-sampling
  - urn:ngm:class:quasi-monte-carlo
requires:
  - urn:ngm:class:random-number-generation
  - urn:ngm:class:probability-theory
  - urn:ngm:class:law-of-large-numbers
enables:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:risk-analysis
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:monte-carlo-localization
contrastsWith:
  - urn:ngm:class:deterministic-algorithms
  - urn:ngm:class:numerical-quadrature
bridgesTo:
  - urn:ngm:class:financial-modelling
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:drug-discovery
uses:
  - urn:ngm:class:sampling
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:variance-reduction
supports:
  - urn:ngm:class:numerical-integration
  - urn:ngm:class:optimisation
  - urn:ngm:class:uncertainty-quantification
relatedTo:
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:statistical-inference
  - urn:ngm:class:deep-learning
---

# Monte Carlo Methods

Monte Carlo methods are a broad class of computational algorithms that employ repeated random sampling to approximate numerical quantities that are analytically intractable, including high-dimensional integrals, expectations under complex probability distributions, and optimal policies in stochastic decision processes. The fundamental principle holds that averaging a function over sufficiently many independent samples drawn from an appropriate distribution converges, by the law of large numbers, to the true expected value at a rate of O(1/√N) independent of dimensionality. Monte Carlo methods underpin Bayesian inference, reinforcement learning, sequential Monte Carlo particle filters, and physics simulation, and are foundational to risk analysis, financial modelling, and scientific computing. Variance reduction techniques — including importance sampling, control variates, stratified sampling, and quasi-Monte Carlo sequences — substantially improve practical convergence.
