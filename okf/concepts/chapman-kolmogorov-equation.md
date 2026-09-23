---
okf_version: "0.2"
type: Class
title: Chapman-Kolmogorov Equation
resource: urn:ngm:class:chapman-kolmogorov-equation
domain: ai
description: The Chapman-Kolmogorov Equation is a fundamental identity in probability theory and stochastic processes that expresses the consistency condition for transition probabilities of a Markov chain or continuous stochastic process. It states that the probability of moving from state i to state j in n+m steps equals the sum over all intermediate states k of the product of the n-step and m-step transitio
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:mathematical-identity
  - urn:ngm:class:probability-theory
hasPart:
  - urn:ngm:class:fokker-planck-equation
  - urn:ngm:class:kolmogorov-backward-equation
  - urn:ngm:class:transition-matrix
  - urn:ngm:class:transition-kernel
  - urn:ngm:class:markov-semigroup
  - urn:ngm:class:stationary-distribution
  - urn:ngm:class:spectral-gap
requires:
  - urn:ngm:class:markov-property
  - urn:ngm:class:probability-theory
  - urn:ngm:class:measure-theory
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:sigma-algebra
  - urn:ngm:class:conditional-probability
enables:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:hidden-markov-model
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:value-function
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:optimal-transport
  - urn:ngm:class:variational-inference
dependsOn:
  - urn:ngm:class:markov-property
  - urn:ngm:class:probability-measure
  - urn:ngm:class:sigma-algebra
  - urn:ngm:class:ergodicity
  - urn:ngm:class:detailed-balance
implements:
  - urn:ngm:class:markov-chain
  - urn:ngm:class:stochastic-differential-equation
  - urn:ngm:class:fokker-planck-equation
  - urn:ngm:class:forward-backward-algorithm
  - urn:ngm:class:bellman-equation
contrastsWith:
  - urn:ngm:class:non-markovian-process
  - urn:ngm:class:long-range-memory-process
  - urn:ngm:class:fractional-brownian-motion
  - urn:ngm:class:path-dependent-process
  - urn:ngm:class:quantum-non-markovian-process
uses:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:integral-equation
  - urn:ngm:class:measure-theory
  - urn:ngm:class:semigroup-theory
supports:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:time-series-analysis
  - urn:ngm:class:sequential-decision-making
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:molecular-dynamics
  - urn:ngm:class:financial-mathematics
  - urn:ngm:class:climate-modelling
  - urn:ngm:class:epidemiology-modelling
  - urn:ngm:class:state-estimation
standardizedBy:
  - urn:ngm:class:kolmogorov-axioms
  - urn:ngm:class:feller-1949-semigroup-theory
  - urn:ngm:class:hille-yosida-theorem
relatedTo:
  - urn:ngm:class:stochastic-differential-equation
  - urn:ngm:class:time-series-analysis
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:hidden-markov-model
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:brownian-motion
  - urn:ngm:class:wiener-process
  - urn:ngm:class:entropy-production
  - urn:ngm:class:fluctuation-theorem
  - urn:ngm:class:mixing-time
  - urn:ngm:class:diffusion-map
  - urn:ngm:class:schr-dinger-bridge
  - urn:ngm:class:sydney-chapman
  - urn:ngm:class:andrey-kolmogorov
  - urn:ngm:class:william-feller
  - urn:ngm:class:martin-hairer
  - urn:ngm:class:terry-lyons
  - urn:ngm:class:fokker-planck-equation
  - urn:ngm:class:kolmogorov-backward-equation
  - urn:ngm:class:hamilton-jacobi-bellman-equation
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:state-estimation
  - urn:ngm:class:financial-mathematics
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:flow-matching
  - urn:ngm:class:distributional-reinforcement-learning
  - urn:ngm:class:optimal-transport
  - urn:ngm:class:stan
  - urn:ngm:class:pymc
  - urn:ngm:class:numpyro
  - urn:ngm:class:huggingface-diffusers
  - urn:ngm:class:pyemma
  - urn:ngm:class:filterpy
  - urn:ngm:class:rllib
  - urn:ngm:class:stable-baselines3
---

# Chapman-Kolmogorov Equation

The Chapman-Kolmogorov Equation is a fundamental identity in probability theory and stochastic processes that expresses the consistency condition for transition probabilities of a Markov chain or continuous stochastic process. It states that the probability of moving from state i to state j in n+m steps equals the sum over all intermediate states k of the product of the n-step and m-step transition probabilities. This equation is the cornerstone of Markov chain analysis and underlies key algorithms in machine learning, Bayesian inference, and diffusion modelling.
