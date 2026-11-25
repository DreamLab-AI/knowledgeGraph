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
  - urn:ngm:class:machine-learning
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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Random Search

Random search is a hyperparameter-optimisation method that samples hyperparameter configurations at random from specified distributions over the search space, rather than evaluating a fixed grid. For a given evaluation budget it often outperforms grid search because it explores more distinct values of the most influential hyperparameters. It is simple, parallelisable, and a strong baseline for automated tuning.
