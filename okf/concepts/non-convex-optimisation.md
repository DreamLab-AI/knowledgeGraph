---
okf_version: "0.2"
type: Class
title: Non-Convex Optimisation
resource: urn:ngm:class:non-convex-optimisation
domain: machine-learning
description: The minimisation of objective functions that are not convex, so the loss surface may contain multiple local minima, saddle points, plateaus, and ravines, and no general guarantee links a local solution to the global optimum. Non-convex optimisation is the actual setting of deep learning—neural network training landscapes are highly non-convex—and of many engineering problems, tackled in practice w
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:mathematical-optimisation
contrastsWith:
  - urn:ngm:class:convex-optimisation
uses:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:gradient-based-optimisation
relatedTo:
  - urn:ngm:class:loss-landscape
  - urn:ngm:class:deep-learning
---

# Non-Convex Optimisation

The minimisation of objective functions that are not convex, so the loss surface may contain multiple local minima, saddle points, plateaus, and ravines, and no general guarantee links a local solution to the global optimum. Non-convex optimisation is the actual setting of deep learning—neural network training landscapes are highly non-convex—and of many engineering problems, tackled in practice with stochastic gradient methods, momentum, restarts, relaxations, and problem-specific structure rather than the clean certificates available in the convex case.
