---
okf_version: "0.2"
type: Class
title: Central Limit Theorem
resource: urn:ngm:class:central-limit-theorem
domain: machine-learning
description: The Central Limit Theorem states that, under broad conditions, the distribution of the sum or mean of a large number of independent, identically distributed random variables approaches a normal distribution regardless of the underlying distribution's shape. It explains the ubiquity of the Gaussian distribution and provides the theoretical basis for many inferential procedures, including confidence
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:measure-theory
  - urn:ngm:class:limit-theorems
  - urn:ngm:class:statistical-theory
hasPart:
  - urn:ngm:class:inference
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:standardisation
  - urn:ngm:class:convergence-in-distribution
  - urn:ngm:class:berry-esseen-theorem
  - urn:ngm:class:characteristic-function
  - urn:ngm:class:sampling-distribution
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:measure-theory
  - urn:ngm:class:random-variable
  - urn:ngm:class:independent-and-identically-distributed
  - urn:ngm:class:finite-variance
enables:
  - urn:ngm:class:statistical-testing
  - urn:ngm:class:statistical-analysis
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:confidence-interval
  - urn:ngm:class:hypothesis-testing
  - urn:ngm:class:significance-testing
  - urn:ngm:class:error-bar-estimation
  - urn:ngm:class:a-b-testing
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:sampling
  - urn:ngm:class:random-variable
  - urn:ngm:class:measure-theory
  - urn:ngm:class:sigma-algebra
implements:
  - urn:ngm:class:gaussian-approximation
  - urn:ngm:class:normal-approximation
  - urn:ngm:class:law-of-large-numbers
contrastsWith:
  - urn:ngm:class:heavy-tailed-distribution
  - urn:ngm:class:stable-distribution
  - urn:ngm:class:alpha-stable-processes
  - urn:ngm:class:extreme-value-theory
uses:
  - urn:ngm:class:gaussian-distribution
  - urn:ngm:class:statistics
  - urn:ngm:class:characteristic-function
  - urn:ngm:class:fourier-analysis
supports:
  - urn:ngm:class:monte-carlo-simulation
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:bootstrap-resampling
standardizedBy:
  - urn:ngm:class:kolmogorov-1933
  - urn:ngm:class:l-vy-1937
  - urn:ngm:class:berry-1941
  - urn:ngm:class:esseen-1956
relatedTo:
  - urn:ngm:class:data-analysis
  - urn:ngm:class:probability-theory
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:law-of-large-numbers
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:conformal-prediction
  - urn:ngm:class:information-theory
---

# Central Limit Theorem

The Central Limit Theorem states that, under broad conditions, the distribution of the sum or mean of a large number of independent, identically distributed random variables approaches a normal distribution regardless of the underlying distribution's shape. It explains the ubiquity of the Gaussian distribution and provides the theoretical basis for many inferential procedures, including confidence intervals and significance tests. It is foundational to statistics, machine learning, and Monte Carlo estimation.
