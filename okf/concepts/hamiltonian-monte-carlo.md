---
okf_version: "0.2"
type: Class
title: Hamiltonian Monte Carlo
resource: urn:ngm:class:hamiltonian-monte-carlo
domain: machine-learning
description: "Hamiltonian Monte Carlo (HMC) is a Markov chain Monte Carlo sampling algorithm that uses Hamiltonian dynamics to generate distant, low-autocorrelation proposals in high-dimensional parameter spaces. By treating the negative log-posterior as a potential energy and augmenting with auxiliary momentum variables, HMC can traverse the posterior landscape far more efficiently than random-walk Metropolis "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bayesian-inference
hasPart:
  - urn:ngm:class:metropolis-hastings
  - urn:ngm:class:no-u-turn-sampler
requires:
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:gradient-computation
enables:
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:uncertainty-quantification
implements:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:detailed-balance
contrastsWith:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:gibbs-sampling
bridgesTo:
  - urn:ngm:class:molecular-dynamics
uses:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:hamiltonian-dynamics
  - urn:ngm:class:phase-space
partOf:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:probabilistic-programming
relatedTo:
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:bayesian-deep-learning
  - urn:ngm:class:inference-algorithm
  - urn:ngm:class:normalising-flow
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Hamiltonian Monte Carlo

Hamiltonian Monte Carlo (HMC) is a Markov chain Monte Carlo sampling algorithm that uses Hamiltonian dynamics to generate distant, low-autocorrelation proposals in high-dimensional parameter spaces. By treating the negative log-posterior as a potential energy and augmenting with auxiliary momentum variables, HMC can traverse the posterior landscape far more efficiently than random-walk Metropolis methods.
