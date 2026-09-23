---
okf_version: "0.2"
type: Class
title: Markov Chain Monte Carlo
resource: urn:ngm:class:markov-chain-monte-carlo
domain: ai
description: Markov Chain Monte Carlo (MCMC) is a family of computational algorithms that generate samples from an arbitrary target probability distribution by constructing a Markov chain whose stationary distribution equals the target, enabling tractable approximate Bayesian inference and numerical integration over high-dimensional parameter spaces that are intractable by exact analytical methods. Foundationa
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:monte-carlo-methods
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:ergodicity
  - urn:ngm:class:detailed-balance
enables:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:posterior-inference
implements:
  - urn:ngm:class:metropolis-hastings
  - urn:ngm:class:gibbs-sampling
  - urn:ngm:class:no-u-turn-sampler
contrastsWith:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:normalising-flows
  - urn:ngm:class:sequential-monte-carlo
bridgesTo:
  - urn:ngm:class:statistical-physics
  - urn:ngm:class:computational-biology
uses:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:sampling
  - urn:ngm:class:hamiltonian-dynamics
  - urn:ngm:class:gradient-descent
relatedTo:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:neural-network
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:convergence
  - urn:ngm:class:neural-network
  - urn:ngm:class:convergence
---

# Markov Chain Monte Carlo

Markov Chain Monte Carlo (MCMC) is a family of computational algorithms that generate samples from an arbitrary target probability distribution by constructing a Markov chain whose stationary distribution equals the target, enabling tractable approximate Bayesian inference and numerical integration over high-dimensional parameter spaces that are intractable by exact analytical methods. Foundational algorithms include Metropolis-Hastings, Gibbs sampling, Hamiltonian Monte Carlo (HMC), and the No-U-Turn Sampler (NUTS). MCMC is the standard tool for posterior inference in probabilistic programming and Bayesian statistical modelling across science, engineering, and machine learning.
