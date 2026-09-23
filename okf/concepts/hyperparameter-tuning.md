---
okf_version: "0.2"
type: Class
title: Hyperparameter Tuning
resource: urn:ngm:class:hyperparameter-tuning
domain: machine-learning
description: "Hyperparameter tuning is the systematic process of searching over the configuration space of parameters that govern the training process of a machine learning model — distinct from the learnable parameters updated during training itself. Common hyperparameters include learning rate, batch size, network depth and width, regularisation coefficients, dropout rate, optimiser choice, and architectural "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:validation-set
  - urn:ngm:class:cross-validation
  - urn:ngm:class:model-evaluation
enables:
  - urn:ngm:class:model-generalisation
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:deep-learning
dependsOn:
  - urn:ngm:class:objective-function
  - urn:ngm:class:early-stopping
  - urn:ngm:class:regularisation
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:feature-engineering
bridgesTo:
  - urn:ngm:class:mlops
  - urn:ngm:class:cloud-computing
uses:
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:random-search
  - urn:ngm:class:grid-search
  - urn:ngm:class:evolutionary-algorithm
partOf:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:auto-ml
relatedTo:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:meta-learning
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:distributed-training
---

# Hyperparameter Tuning

Hyperparameter tuning is the systematic process of searching over the configuration space of parameters that govern the training process of a machine learning model — distinct from the learnable parameters updated during training itself. Common hyperparameters include learning rate, batch size, network depth and width, regularisation coefficients, dropout rate, optimiser choice, and architectural decisions such as kernel size or number of attention heads. The tuning process employs search strategies — including grid search, random search, Bayesian optimisation, population-based methods, and evolutionary algorithms — to identify configurations that maximise model performance on a held-out validation set while controlling for overfitting. Efficient hyperparameter optimisation is critical to practical machine learning deployment because model generalisation is often highly sensitive to these configuration choices, and naive exhaustive search is computationally intractable in high-dimensional spaces.
