---
okf_version: "0.2"
type: Class
title: Gibbs Sampling
resource: urn:ngm:class:gibbs-sampling
domain: ai
description: Gibbs sampling is a Markov chain Monte Carlo algorithm that draws samples from a multivariate distribution by iteratively sampling each variable from its full conditional distribution given the current values of all others. It is a special case of Metropolis-Hastings in which every proposal is accepted, and it requires the conditionals to be tractable. Gibbs sampling is widely used for posterior i
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:markov-chain-monte-carlo
requires:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:graphical-model
enables:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:sampling
implements:
  - urn:ngm:class:markov-chain-monte-carlo
contrastsWith:
  - urn:ngm:class:variational-inference
uses:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:probability-distribution
supports:
  - urn:ngm:class:posterior-distribution
  - urn:ngm:class:inference
partOf:
  - urn:ngm:class:markov-chain-monte-carlo
relatedTo:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:convergence
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:sampling
---

# Gibbs Sampling

Gibbs sampling is a Markov chain Monte Carlo algorithm that draws samples from a multivariate distribution by iteratively sampling each variable from its full conditional distribution given the current values of all others. It is a special case of Metropolis-Hastings in which every proposal is accepted, and it requires the conditionals to be tractable. Gibbs sampling is widely used for posterior inference in hierarchical and graphical models.
