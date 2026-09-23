---
okf_version: "0.2"
type: Class
title: Grid Search
resource: urn:ngm:class:grid-search
domain: machine-learning
description: "Grid search is a hyperparameter-optimisation method that exhaustively evaluates every combination of values drawn from a predefined discrete grid over the hyperparameter space. Each candidate configuration is trained and scored, typically using cross-validation, and the best-performing combination is selected. Grid search is simple and fully parallelisable but scales exponentially with the number "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:model-selection
dependsOn:
  - urn:ngm:class:search-space
  - urn:ngm:class:machine-learning-discipline
implements:
  - urn:ngm:class:hyperparameter-tuning
contrastsWith:
  - urn:ngm:class:random-search
  - urn:ngm:class:bayesian-optimisation
uses:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:search-space
supports:
  - urn:ngm:class:model-selection
partOf:
  - urn:ngm:class:hyperparameter-optimisation
relatedTo:
  - urn:ngm:class:random-search
  - urn:ngm:class:parallel-computing
---

# Grid Search

Grid search is a hyperparameter-optimisation method that exhaustively evaluates every combination of values drawn from a predefined discrete grid over the hyperparameter space. Each candidate configuration is trained and scored, typically using cross-validation, and the best-performing combination is selected. Grid search is simple and fully parallelisable but scales exponentially with the number of hyperparameters.
