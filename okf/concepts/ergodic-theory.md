---
okf_version: "0.2"
type: Class
title: Ergodic Theory
resource: urn:ngm:class:ergodic-theory
domain: machine-learning
description: Ergodic theory is the branch of mathematics that studies the long-term statistical behaviour of dynamical systems that preserve a measure. Its central result, the ergodic theorem, gives conditions under which the time average of a quantity along a single trajectory equals its average over the whole state space. The theory provides the foundations for understanding when sampling a process over time
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:dynamical-systems
  - urn:ngm:class:mathematics
  - urn:ngm:class:probability-theory
hasPart:
  - urn:ngm:class:birkhoff-ergodic-theorem
  - urn:ngm:class:kolmogorov-sinai-entropy
  - urn:ngm:class:mixing
  - urn:ngm:class:invariant-measure
  - urn:ngm:class:poincare-recurrence-theorem
requires:
  - urn:ngm:class:measure-theory
  - urn:ngm:class:probability-theory
  - urn:ngm:class:functional-analysis
  - urn:ngm:class:real-analysis
enables:
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:sampling
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:statistical-mechanics
  - urn:ngm:class:stochastic-optimisation
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:measure-theory
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:sigma-algebra
implements:
  - urn:ngm:class:ergodic-hypothesis
  - urn:ngm:class:stationary-process-theory
contrastsWith:
  - urn:ngm:class:transient-dynamical-systems
  - urn:ngm:class:non-stationary-processes
  - urn:ngm:class:deterministic-chaos
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:stochastic-process
  - urn:ngm:class:markov-chain
  - urn:ngm:class:lebesgue-integral
  - urn:ngm:class:information-theory
supports:
  - urn:ngm:class:statistical-inference
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:bayesian-deep-learning
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:uncertainty-quantification
standardizedBy:
  - urn:ngm:class:cambridge-university-press-ergodic-theory-and-dynamical-systems-journal
relatedTo:
  - urn:ngm:class:entropy
  - urn:ngm:class:density-estimation
  - urn:ngm:class:probabilistic-programming
  - urn:ngm:class:chaos-theory
  - urn:ngm:class:lyapunov-exponent
  - urn:ngm:class:hamiltonian-monte-carlo
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:thermodynamics
---

# Ergodic Theory

Ergodic theory is the branch of mathematics that studies the long-term statistical behaviour of dynamical systems that preserve a measure. Its central result, the ergodic theorem, gives conditions under which the time average of a quantity along a single trajectory equals its average over the whole state space. The theory provides the foundations for understanding when sampling a process over time yields the same information as sampling its underlying distribution, which is essential for Monte Carlo methods and statistical learning.
