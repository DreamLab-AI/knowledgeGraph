---
okf_version: "0.2"
type: Class
title: Hyperparameter
resource: urn:ngm:class:hyperparameter
domain: machine-learning
description: A configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, number of layers, dropout rate, and regularisation coefficients. Hyperparameter selection directly determines model capacity, convergence speed, and generalisation, making their tuning a critical step in building effective machine learning system
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:batch-size
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:dropout
requires:
  - urn:ngm:class:validation-data
  - urn:ngm:class:cross-validation
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:generalisation
dependsOn:
  - urn:ngm:class:training-dataset
  - urn:ngm:class:loss-function
contrastsWith:
  - urn:ngm:class:parameter
  - urn:ngm:class:overfitting
bridgesTo:
  - urn:ngm:class:meta-learning
  - urn:ngm:class:transfer-learning
uses:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:grid-search
  - urn:ngm:class:random-search
supports:
  - urn:ngm:class:auto-ml
  - urn:ngm:class:neural-architecture-search
partOf:
  - urn:ngm:class:model-configuration
relatedTo:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:deep-learning
  - urn:ngm:class:regularisation
  - urn:ngm:class:model-selection
---

# Hyperparameter

A configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, number of layers, dropout rate, and regularisation coefficients. Hyperparameter selection directly determines model capacity, convergence speed, and generalisation, making their tuning a critical step in building effective machine learning systems.
