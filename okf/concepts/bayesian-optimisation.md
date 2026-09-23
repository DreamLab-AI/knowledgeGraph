---
okf_version: "0.2"
type: Class
title: Bayesian Optimisation
resource: urn:ngm:class:bayesian-optimisation
domain: machine-learning
description: Bayesian Optimisation is a sequential, sample-efficient strategy for optimising expensive black-box objective functions by constructing a probabilistic surrogate model — most commonly a Gaussian Process — over the function's input space, then using an acquisition function to select the next evaluation point by trading off exploration of uncertain regions against exploitation of known optima. The m
maturity: established
quality: 0.93
is-a:
  - urn:ngm:class:optimisation
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:bayesian-inference
hasPart:
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:acquisition-function
  - urn:ngm:class:surrogate-model
  - urn:ngm:class:kernel-function
  - urn:ngm:class:expected-improvement
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:marginal-likelihood
requires:
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:kernel-function
  - urn:ngm:class:surrogate-model
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:gaussian-process
enables:
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:auto-ml
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:automated-design
  - urn:ngm:class:multi-objective-optimisation
  - urn:ngm:class:self-driving-laboratory
  - urn:ngm:class:automated-design
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:material-science
  - urn:ngm:class:protein-engineering
  - urn:ngm:class:hyperparameter-optimisation
dependsOn:
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:kernel-function
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:surrogate-model
  - urn:ngm:class:marginal-likelihood
  - urn:ngm:class:gaussian-process-regression
implements:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:experimental-design
  - urn:ngm:class:active-learning
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:uncertainty-quantification
contrastsWith:
  - urn:ngm:class:grid-search
  - urn:ngm:class:random-search
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:gradient-descent
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:experimental-design
  - urn:ngm:class:large-language-model
  - urn:ngm:class:self-driving-laboratory
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:protein-engineering
uses:
  - urn:ngm:class:gaussian-process
  - urn:ngm:class:acquisition-function
  - urn:ngm:class:surrogate-model
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:kernel-function
  - urn:ngm:class:expected-improvement
  - urn:ngm:class:variational-inference
  - urn:ngm:class:sparse-gaussian-process
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:material-science
  - urn:ngm:class:robotics
  - urn:ngm:class:material-science
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:auto-ml
  - urn:ngm:class:model-predictive-control
standardizedBy:
  - urn:ngm:class:neurips-black-box-optimisation-competition
  - urn:ngm:class:hpobench
relatedTo:
  - urn:ngm:class:active-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:kriging
  - urn:ngm:class:expected-improvement
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:exploration-exploitation-tradeoff
  - urn:ngm:class:multi-fidelity-optimisation
  - urn:ngm:class:gaussian-process-regression
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:variational-inference
  - urn:ngm:class:sparse-gaussian-process
---

# Bayesian Optimisation

Bayesian Optimisation is a sequential, sample-efficient strategy for optimising expensive black-box objective functions by constructing a probabilistic surrogate model — most commonly a Gaussian Process — over the function's input space, then using an acquisition function to select the next evaluation point by trading off exploration of uncertain regions against exploitation of known optima. The method accumulates knowledge about the objective between evaluations, making it uniquely valuable when each function evaluation is computationally or financially costly. It maintains a posterior distribution over the objective that quantifies uncertainty and guides convergence to a global optimum with far fewer evaluations than grid search or random search. Applications span hyperparameter tuning, neural architecture search, drug discovery, materials science, and robotics controller design.
