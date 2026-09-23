---
okf_version: "0.2"
type: Class
title: Expectation Maximisation
resource: urn:ngm:class:expectation-maximisation
domain: ai
description: Expectation Maximisation (EM) is an iterative algorithm for finding maximum-likelihood or maximum-a-posteriori estimates of parameters in statistical models with latent (unobserved) variables. It alternates between an E-step, which computes the expected value of the complete-data log-likelihood given current parameters, and an M-step, which maximises that expectation to update the parameters. EM i
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:inference-algorithm
  - urn:ngm:class:iterative-algorithm
hasPart:
  - urn:ngm:class:e-step
  - urn:ngm:class:m-step
  - urn:ngm:class:complete-data-log-likelihood
  - urn:ngm:class:posterior-distribution
  - urn:ngm:class:prior-distribution
requires:
  - urn:ngm:class:latent-variable
  - urn:ngm:class:likelihood-function
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:probability-theory
enables:
  - urn:ngm:class:gaussian-mixture-model
  - urn:ngm:class:hidden-markov-models
  - urn:ngm:class:factor-analysis
  - urn:ngm:class:soft-clustering
  - urn:ngm:class:missing-data-imputation
  - urn:ngm:class:topic-modelling
dependsOn:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:measure-theory
  - urn:ngm:class:information-theory
  - urn:ngm:class:numerical-linear-algebra
implements:
  - urn:ngm:class:evidence-lower-bound
  - urn:ngm:class:coordinate-ascent-variational-inference
  - urn:ngm:class:baum-welch-algorithm
contrastsWith:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:markov-chain-monte-carlo
  - urn:ngm:class:variational-inference
uses:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:markov-chain-monte-carlo
supports:
  - urn:ngm:class:graphical-model
  - urn:ngm:class:vae
  - urn:ngm:class:graphical-model
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:bioinformatics
standardizedBy:
  - urn:ngm:class:journal-of-machine-learning-research
  - urn:ngm:class:annals-of-statistics
  - urn:ngm:class:journal-of-the-royal-statistical-society
relatedTo:
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:optimisation
  - urn:ngm:class:deep-learning
  - urn:ngm:class:stochastic-processes
  - urn:ngm:class:computational-statistics
---

# Expectation Maximisation

Expectation Maximisation (EM) is an iterative algorithm for finding maximum-likelihood or maximum-a-posteriori estimates of parameters in statistical models with latent (unobserved) variables. It alternates between an E-step, which computes the expected value of the complete-data log-likelihood given current parameters, and an M-step, which maximises that expectation to update the parameters. EM is guaranteed to monotonically increase the likelihood at each iteration and is widely used for Gaussian mixture models, hidden Markov models, and missing-data problems.
