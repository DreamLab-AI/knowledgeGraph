---
okf_version: "0.2"
type: Class
title: Acquisition Function
resource: urn:ngm:class:acquisition-function
domain: ai
description: An acquisition function is a utility function used in Bayesian optimisation that determines which point in the input space to evaluate next by balancing exploration of uncertain regions against exploitation of known promising areas. It transforms the surrogate model's posterior distribution into a scalar score, guiding the sequential selection of experiments or evaluations. Common forms include Ex
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:black-box-optimisation
hasPart:
  - urn:ngm:class:expected-improvement
  - urn:ngm:class:upper-confidence-bound
  - urn:ngm:class:thompson-sampling
requires:
  - urn:ngm:class:surrogate-model
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:kernel-function
enables:
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:multi-objective-optimisation
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:experimental-design
  - urn:ngm:class:auto-ml
dependsOn:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:monte-carlo
implements:
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:regret-minimisation
contrastsWith:
  - urn:ngm:class:grid-search
  - urn:ngm:class:random-search
  - urn:ngm:class:gradient-descent
uses:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:monte-carlo
  - urn:ngm:class:kernel-function
  - urn:ngm:class:deep-kernel-learning
  - urn:ngm:class:variance-reduction
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:auto-ml
  - urn:ngm:class:material-science
  - urn:ngm:class:material-science
  - urn:ngm:class:protein-engineering
  - urn:ngm:class:robotics
standardizedBy:
  - urn:ngm:class:botorch
relatedTo:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:active-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:information-theory
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:bandit-algorithm
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:trust-region-method
  - urn:ngm:class:optimality
---

# Acquisition Function

An acquisition function is a utility function used in Bayesian optimisation that determines which point in the input space to evaluate next by balancing exploration of uncertain regions against exploitation of known promising areas. It transforms the surrogate model's posterior distribution into a scalar score, guiding the sequential selection of experiments or evaluations. Common forms include Expected Improvement, Upper Confidence Bound, and Probability of Improvement.
