---
okf_version: "0.2"
type: Class
title: Random Search
resource: urn:ngm:class:random-search
domain: machine-learning
description: Random search is a hyperparameter-optimisation method that samples hyperparameter configurations at random from specified distributions over the search space, rather than evaluating a fixed grid. For a given evaluation budget it often outperforms grid search because it explores more distinct values of the most influential hyperparameters. It is simple, parallelisable, and a strong baseline for aut
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:hyperparameter-tuning
enables:
  - urn:ngm:class:model-selection
dependsOn:
  - urn:ngm:class:search-space
  - urn:ngm:class:machine-learning-discipline
implements:
  - urn:ngm:class:hyperparameter-tuning
contrastsWith:
  - urn:ngm:class:grid-search
  - urn:ngm:class:bayesian-optimisation
uses:
  - urn:ngm:class:sampling
  - urn:ngm:class:search-space
supports:
  - urn:ngm:class:model-selection
partOf:
  - urn:ngm:class:hyperparameter-optimisation
relatedTo:
  - urn:ngm:class:stochastic-optimisation
  - urn:ngm:class:monte-carlo-methods
  - urn:ngm:class:monte-carlo-methods
---

# Random Search

Random search is a hyperparameter-optimisation method that samples hyperparameter configurations at random from specified distributions over the search space, rather than evaluating a fixed grid. For a given evaluation budget it often outperforms grid search because it explores more distinct values of the most influential hyperparameters. It is simple, parallelisable, and a strong baseline for automated tuning.
