---
okf_version: "0.2"
type: Class
title: Hyperparameter Optimisation
resource: urn:ngm:class:hyperparameter-optimisation
domain: machine-learning
description: Hyperparameter optimisation is the automated search process for the configuration values — such as learning rate, regularisation strength, architecture depth, and batch size — that govern a machine learning model's training dynamics but are not learned directly from data, with the aim of maximising held-out validation performance. It encompasses grid search, random search, Bayesian optimisation, a
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:bayesian-optimisation
requires:
  - urn:ngm:class:validation-set
  - urn:ngm:class:cross-validation
  - urn:ngm:class:objective-function
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:auto-ml
  - urn:ngm:class:model-selection
dependsOn:
  - urn:ngm:class:machine-learning-discipline-framework
  - urn:ngm:class:compute-resources
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:random-search
  - urn:ngm:class:grid-search
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:regularisation
  - urn:ngm:class:early-stopping
  - urn:ngm:class:meta-learning
---

# Hyperparameter Optimisation

Hyperparameter optimisation is the automated search process for the configuration values — such as learning rate, regularisation strength, architecture depth, and batch size — that govern a machine learning model's training dynamics but are not learned directly from data, with the aim of maximising held-out validation performance. It encompasses grid search, random search, Bayesian optimisation, and gradient-based meta-learning, operating over an outer loop that wraps the inner model training procedure.
