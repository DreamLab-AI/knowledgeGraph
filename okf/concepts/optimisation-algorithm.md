---
okf_version: "0.2"
type: Class
title: Optimisation Algorithm
resource: urn:ngm:class:optimisation-algorithm
domain: machine-learning
description: An optimisation algorithm is a systematic procedure for finding the values of decision variables that minimise or maximise an objective function, optionally subject to constraints. It spans first-order gradient methods, second-order Newton-type methods, derivative-free and metaheuristic search, and convex programming solvers, each trading convergence speed, robustness, and assumptions about the ob
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:mathematical-optimisation
hasPart:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:learning-rate-schedule
  - urn:ngm:class:momentum
  - urn:ngm:class:weight-decay
requires:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
  - urn:ngm:class:objective-function
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:hyperparameter-optimisation
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:neural-network-architecture
  - urn:ngm:class:reinforcement-learning
dependsOn:
  - urn:ngm:class:loss-function
  - urn:ngm:class:objective-function
  - urn:ngm:class:gradient
  - urn:ngm:class:automatic-differentiation
implements:
  - urn:ngm:class:convex-optimisation
contrastsWith:
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:bayesian-optimisation
bridgesTo:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:operations-research
uses:
  - urn:ngm:class:statistics
  - urn:ngm:class:mini-batch
  - urn:ngm:class:regularisation
partOf:
  - urn:ngm:class:mathematical-optimisation
relatedTo:
  - urn:ngm:class:simulated-annealing
  - urn:ngm:class:genetic-algorithm
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:convergence
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:generalisation
  - urn:ngm:class:overfitting
---

# Optimisation Algorithm

An optimisation algorithm is a systematic procedure for finding the values of decision variables that minimise or maximise an objective function, optionally subject to constraints. It spans first-order gradient methods, second-order Newton-type methods, derivative-free and metaheuristic search, and convex programming solvers, each trading convergence speed, robustness, and assumptions about the objective. In machine learning, optimisation algorithms drive model training by iteratively reducing a loss function, making them the engine that turns data and architecture into fitted parameters.
