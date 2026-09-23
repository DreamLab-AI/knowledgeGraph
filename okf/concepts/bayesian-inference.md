---
okf_version: "0.2"
type: Class
title: Bayesian Inference
resource: urn:ngm:class:bayesian-inference
domain: artificial-intelligence
description: Bayesian Inference is a principled statistical framework that updates the probability of a hypothesis as new evidence is observed, using Bayes' theorem to combine a prior distribution over parameters with a likelihood function derived from data to yield a posterior distribution. Unlike frequentist methods, it treats probability as a degree of belief and propagates uncertainty through every step of
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:statistical-inference
hasPart:
  - urn:ngm:class:prior-distribution
  - urn:ngm:class:likelihood-function
  - urn:ngm:class:posterior-distribution
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:variational-inference
  - urn:ngm:class:marginal-likelihood
  - urn:ngm:class:posterior-predictive-distribution
  - urn:ngm:class:conjugate-prior
  - urn:ngm:class:empirical-bayes
  - urn:ngm:class:hierarchical-bayesian-model
  - urn:ngm:class:approximate-bayesian-computation
  - urn:ngm:class:simulation-based-inference
requires:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:statistical-model
  - urn:ngm:class:conditional-probability
  - urn:ngm:class:bayes-theorem
enables:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:active-learning
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:model-selection
  - urn:ngm:class:sequential-decision-making
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:continual-learning
  - urn:ngm:class:bayesian-deep-learning
dependsOn:
  - urn:ngm:class:conditional-probability
  - urn:ngm:class:probability-theory
  - urn:ngm:class:information-theory
implements:
  - urn:ngm:class:bayes-theorem
  - urn:ngm:class:posterior-approximation
  - urn:ngm:class:probabilistic-programming
contrastsWith:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:frequentist-statistics
  - urn:ngm:class:maximum-a-posteriori-estimation
  - urn:ngm:class:deep-learning
bridgesTo:
  - urn:ngm:class:causal-inference
  - urn:ngm:class:decision-theory
  - urn:ngm:class:information-theory
  - urn:ngm:class:minimum-description-length
uses:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:variational-inference
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:hamiltonian-monte-carlo
  - urn:ngm:class:stochastic-gradient-langevin-dynamics
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:scientific-computing
  - urn:ngm:class:robotics
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
relatedTo:
  - urn:ngm:class:graphical-model
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:deep-learning
  - urn:ngm:class:information-theory
  - urn:ngm:class:graphical-model
  - urn:ngm:class:causal-inference
  - urn:ngm:class:decision-theory
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:diffusion-model
---

# Bayesian Inference

Bayesian Inference is a principled statistical framework that updates the probability of a hypothesis as new evidence is observed, using Bayes' theorem to combine a prior distribution over parameters with a likelihood function derived from data to yield a posterior distribution. Unlike frequentist methods, it treats probability as a degree of belief and propagates uncertainty through every step of reasoning, enabling calibrated predictions and natural model comparison via marginal likelihoods. In machine learning, it underpins probabilistic graphical models, Gaussian processes, Bayesian neural networks, variational inference, and Markov Chain Monte Carlo methods. Its capacity to incorporate domain knowledge through priors and to quantify epistemic uncertainty makes it foundational for safety-critical AI, active learning, and sequential decision-making.
