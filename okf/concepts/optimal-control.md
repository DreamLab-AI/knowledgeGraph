---
okf_version: "0.2"
type: Class
title: Optimal Control
resource: urn:ngm:class:optimal-control
domain: robotics
description: A control strategy that determines control inputs to minimize or maximize a performance criterion (cost function) while satisfying system dynamics and constraints. It seeks the best possible control policy according to specified objectives, using mathematical frameworks such as dynamic programming, the Hamilton-Jacobi-Bellman equation, and Pontryagin's Maximum Principle.
maturity: established
quality: 0.68
is-a:
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:closed-loop-control
requires:
  - urn:ngm:class:cost-function
  - urn:ngm:class:state-space-representation
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:system-dynamics-model
enables:
  - urn:ngm:class:rb-1007-trajectory-generation
  - urn:ngm:class:motion-planning
  - urn:ngm:class:autonomous-vehicle-control
  - urn:ngm:class:rb-1007-trajectory-generation
dependsOn:
  - urn:ngm:class:control-theory
  - urn:ngm:class:optimization-theory
contrastsWith:
  - urn:ngm:class:pid-controller
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:linear-quadratic-regulator
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:dynamic-programming
  - urn:ngm:class:optimisation-algorithm
supports:
  - urn:ngm:class:adaptive-control
relatedTo:
  - urn:ngm:class:robust-control
  - urn:ngm:class:numerical-optimization
---

# Optimal Control

A control strategy that determines control inputs to minimize or maximize a performance criterion (cost function) while satisfying system dynamics and constraints. It seeks the best possible control policy according to specified objectives, using mathematical frameworks such as dynamic programming, the Hamilton-Jacobi-Bellman equation, and Pontryagin's Maximum Principle.
