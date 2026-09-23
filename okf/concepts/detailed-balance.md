---
okf_version: "0.2"
type: Class
title: Detailed Balance
resource: urn:ngm:class:detailed-balance
domain: ai
description: Detailed balance is a condition on a Markov chain stating that, in equilibrium, the probability flux between any two states is equal in both directions. When a transition kernel satisfies detailed balance with respect to a target distribution, that distribution is a stationary distribution of the chain. It is the central design principle behind most Markov chain Monte Carlo samplers, including Met
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:reversibility-condition
  - urn:ngm:class:markov-chain-property
  - urn:ngm:class:stochastic-process-condition
  - urn:ngm:class:equilibrium-condition
hasPart:
  - urn:ngm:class:transition-kernel
  - urn:ngm:class:stationary-distribution
  - urn:ngm:class:probability-flux
  - urn:ngm:class:acceptance-ratio
  - urn:ngm:class:microscopic-reversibility
  - urn:ngm:class:hastings-ratio
  - urn:ngm:class:acceptance-probability
  - urn:ngm:class:metropolis-hastings-acceptance-rule
  - urn:ngm:class:gibbs-conditional-updates
  - urn:ngm:class:barker-acceptance-function
  - urn:ngm:class:langevin-monte-carlo-detailed-balance
requires:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:probability-theory
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:transition-kernel
  - urn:ngm:class:ergodicity
enables:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:sampling
  - urn:ngm:class:metropolis-hastings
  - urn:ngm:class:gibbs-sampling
  - urn:ngm:class:hamiltonian-monte-carlo
  - urn:ngm:class:stationary-distribution
  - urn:ngm:class:ergodic-convergence
  - urn:ngm:class:no-u-turn-sampler
  - urn:ngm:class:slice-sampling
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:markov-chain
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:measure-theory
implements:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:microscopic-reversibility
  - urn:ngm:class:time-reversal-symmetry
  - urn:ngm:class:reversible-markov-chain
contrastsWith:
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:non-reversible-markov-chain-monte-carlo
  - urn:ngm:class:global-balance
  - urn:ngm:class:irreversible-markov-chain
  - urn:ngm:class:piecewise-deterministic-markov-process
  - urn:ngm:class:event-chain-monte-carlo
  - urn:ngm:class:zig-zag-sampler
  - urn:ngm:class:bouncy-particle-sampler
bridgesTo:
  - urn:ngm:class:statistical-physics
  - urn:ngm:class:quantum-thermodynamics
  - urn:ngm:class:non-equilibrium-thermodynamics
  - urn:ngm:class:computational-biology
  - urn:ngm:class:active-matter-physics
  - urn:ngm:class:lattice-qcd
uses:
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:transition-kernel
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:acceptance-probability
  - urn:ngm:class:boltzmann-distribution
  - urn:ngm:class:hastings-ratio
supports:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:statistical-physics
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:posterior-inference
  - urn:ngm:class:energy-based-model
  - urn:ngm:class:ising-model-simulation
standardizedBy:
  - urn:ngm:class:no-formal-standard-community-best-practice-via-stan-documentation
partOf:
  - urn:ngm:class:markov-chain-monte-carlo
relatedTo:
  - urn:ngm:class:convergence
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:posterior-distribution
  - urn:ngm:class:sampling
  - urn:ngm:class:ergodicity
  - urn:ngm:class:mixing-time
  - urn:ngm:class:statistical-mechanics
  - urn:ngm:class:boltzmann-distribution
  - urn:ngm:class:quantum-detailed-balance
  - urn:ngm:class:spectral-gap
  - urn:ngm:class:integrated-autocorrelation-time
  - urn:ngm:class:monte-carlo-methods
---

# Detailed Balance

Detailed balance is a condition on a Markov chain stating that, in equilibrium, the probability flux between any two states is equal in both directions. When a transition kernel satisfies detailed balance with respect to a target distribution, that distribution is a stationary distribution of the chain. It is the central design principle behind most Markov chain Monte Carlo samplers, including Metropolis-Hastings.
