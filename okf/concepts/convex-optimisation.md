---
okf_version: "0.2"
type: Class
title: Convex Optimisation
resource: urn:ngm:class:convex-optimisation
domain: machine-learning
description: Convex optimisation is the mathematical discipline concerned with minimising convex objective functions over convex feasible sets, exploiting the fundamental property that every local minimum is also a global minimum. This structural guarantee enables the design of polynomial-time algorithms — such as interior-point methods, subgradient descent, and proximal methods — that reliably find exact or n
maturity: mature
quality: 0.9
is-a:
  - urn:ngm:class:optimisation
  - urn:ngm:class:mathematical-optimisation
  - urn:ngm:class:applied-mathematics
  - urn:ngm:class:numerical-methods
hasPart:
  - urn:ngm:class:linear-programming
  - urn:ngm:class:quadratic-programming
  - urn:ngm:class:semidefinite-programming
  - urn:ngm:class:second-order-cone-programming
  - urn:ngm:class:geometric-programming
  - urn:ngm:class:convex-analysis
  - urn:ngm:class:duality-theory
  - urn:ngm:class:kkt-conditions
requires:
  - urn:ngm:class:convex-analysis
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:calculus
  - urn:ngm:class:real-analysis
  - urn:ngm:class:functional-analysis
enables:
  - urn:ngm:class:support-vector-machine
  - urn:ngm:class:lasso-regression
  - urn:ngm:class:optimal-control
  - urn:ngm:class:portfolio-optimisation
  - urn:ngm:class:compressed-sensing
  - urn:ngm:class:logistic-regression
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:sparse-coding
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:beamforming
dependsOn:
  - urn:ngm:class:duality-theory
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:real-analysis
implements:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:interior-point-method
  - urn:ngm:class:proximal-gradient-method
  - urn:ngm:class:alternating-direction-method-of-multipliers
  - urn:ngm:class:subgradient-method
  - urn:ngm:class:frank-wolfe-algorithm
  - urn:ngm:class:ellipsoid-method
  - urn:ngm:class:accelerated-gradient-descent
contrastsWith:
  - urn:ngm:class:non-convex-optimisation
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:stochastic-optimisation
  - urn:ngm:class:integer-programming
bridgesTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:signal-processing
uses:
  - urn:ngm:class:lagrange-multipliers
  - urn:ngm:class:kkt-conditions
  - urn:ngm:class:convex-function
  - urn:ngm:class:convex-set
  - urn:ngm:class:subdifferential
  - urn:ngm:class:conjugate-function
  - urn:ngm:class:epigraph
  - urn:ngm:class:slater-s-condition
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:signal-processing
  - urn:ngm:class:operations-research
  - urn:ngm:class:federated-learning
  - urn:ngm:class:robotics
standardizedBy:
  - urn:ngm:class:ieee-computational-intelligence-society
  - urn:ngm:class:siam
  - urn:ngm:class:mathematical-programming-society
partOf:
  - urn:ngm:class:optimisation
relatedTo:
  - urn:ngm:class:functional-analysis
  - urn:ngm:class:stochastic-optimisation
  - urn:ngm:class:operations-research
  - urn:ngm:class:information-theory
  - urn:ngm:class:statistics
  - urn:ngm:class:control-theory
---

# Convex Optimisation

Convex optimisation is the mathematical discipline concerned with minimising convex objective functions over convex feasible sets, exploiting the fundamental property that every local minimum is also a global minimum. This structural guarantee enables the design of polynomial-time algorithms — such as interior-point methods, subgradient descent, and proximal methods — that reliably find exact or near-exact solutions. The field is grounded in convex analysis and duality theory (Lagrangian and Fenchel duality), and underpins a vast range of applications spanning machine learning, signal processing, control systems, finance, and operations research. Canonical problem classes include linear programming, quadratic programming, second-order cone programming, and semidefinite programming.
