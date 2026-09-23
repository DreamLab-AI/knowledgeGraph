---
okf_version: "0.2"
type: Class
title: Second Order Optimisation
resource: urn:ngm:class:second-order-optimisation
domain: machine-learning
description: Second-order optimisation is a family of optimisation methods that use second-derivative (curvature) information, typically the Hessian matrix or its approximations, to determine search directions and step sizes. By accounting for the curvature of the objective, these methods can converge in far fewer iterations than first-order methods near a minimum, at the cost of higher per-iteration computati
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:convex-optimisation
requires:
  - urn:ngm:class:convex-optimisation
enables:
  - urn:ngm:class:convergence
dependsOn:
  - urn:ngm:class:machine-learning-discipline
implements:
  - urn:ngm:class:optimiser
contrastsWith:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:stochastic-gradient-descent
uses:
  - urn:ngm:class:loss-function
supports:
  - urn:ngm:class:optimiser
  - urn:ngm:class:machine-learning-discipline
partOf:
  - urn:ngm:class:convex-optimisation
relatedTo:
  - urn:ngm:class:optimiser
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:convergence
---

# Second Order Optimisation

Second-order optimisation is a family of optimisation methods that use second-derivative (curvature) information, typically the Hessian matrix or its approximations, to determine search directions and step sizes. By accounting for the curvature of the objective, these methods can converge in far fewer iterations than first-order methods near a minimum, at the cost of higher per-iteration computation and memory. Examples include Newton's method, quasi-Newton methods such as L-BFGS, and conjugate-gradient approaches.
