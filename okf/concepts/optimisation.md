---
okf_version: "0.2"
type: Class
title: Optimisation
resource: urn:ngm:class:optimisation
domain: machine-learning
description: Optimisation is the mathematical and computational discipline concerned with finding the best solution — maximum or minimum — of an objective function subject to given constraints, across a search space of possible decisions or parameter configurations. It encompasses deterministic methods (linear programming, convex optimisation, gradient-based search), stochastic methods (simulated annealing, ev
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:mathematical-foundations
hasPart:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:evolutionary-algorithm
  - urn:ngm:class:linear-programming
requires:
  - urn:ngm:class:loss-function
  - urn:ngm:class:objective-function
  - urn:ngm:class:constraint
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
  - urn:ngm:class:optimal-control
  - urn:ngm:class:operations-research
  - urn:ngm:class:hyperparameter-tuning
contrastsWith:
  - urn:ngm:class:satisfiability
  - urn:ngm:class:simulation
bridgesTo:
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:quantum-computation-paradigm
  - urn:ngm:class:distributed-computing
uses:
  - urn:ngm:class:calculus
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:probability-theory
supports:
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:portfolio-optimisation
  - urn:ngm:class:supply-chain-management
partOf:
  - urn:ngm:class:mathematical-foundations
relatedTo:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:game-theory
  - urn:ngm:class:information-theory
---

# Optimisation

Optimisation is the mathematical and computational discipline concerned with finding the best solution — maximum or minimum — of an objective function subject to given constraints, across a search space of possible decisions or parameter configurations. It encompasses deterministic methods (linear programming, convex optimisation, gradient-based search), stochastic methods (simulated annealing, evolutionary algorithms, Monte Carlo sampling), and learned methods (differentiable optimisation, meta-learning, neural combinatorial solvers). Optimisation is the theoretical core of machine learning training, operations research, control engineering, signal processing, and resource scheduling. The choice of optimisation algorithm fundamentally determines convergence speed, solution quality, and computational cost across all application domains.
