---
okf_version: "0.2"
type: Class
title: Probabilistic Programming
resource: urn:ngm:class:probabilistic-programming
domain: machine-learning
description: Probabilistic programming is a paradigm in which statistical models are expressed as programs that include random variables and conditioning statements, with inference performed automatically by the language runtime. It lets practitioners specify generative models declaratively while delegating the mechanics of Bayesian inference, such as sampling or variational optimisation, to the system. This s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:probabilistic-model
enables:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:uncertainty-quantification
dependsOn:
  - urn:ngm:class:inference
implements:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:markov-chain-monte-carlo
bridgesTo:
  - urn:ngm:class:normalising-flows
  - urn:ngm:class:deep-learning
uses:
  - urn:ngm:class:probabilistic-model
supports:
  - urn:ngm:class:generative-model
  - urn:ngm:class:statistical-modelling
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:representation-learning
  - urn:ngm:class:gradient-descent
---

# Probabilistic Programming

Probabilistic programming is a paradigm in which statistical models are expressed as programs that include random variables and conditioning statements, with inference performed automatically by the language runtime. It lets practitioners specify generative models declaratively while delegating the mechanics of Bayesian inference, such as sampling or variational optimisation, to the system. This separation of model specification from inference enables rapid iteration on complex probabilistic models across science and machine learning.
