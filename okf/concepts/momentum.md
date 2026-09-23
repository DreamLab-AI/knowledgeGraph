---
okf_version: "0.2"
type: Class
title: Momentum
resource: urn:ngm:class:momentum
domain: machine-learning
description: Momentum is an optimisation technique that accelerates gradient descent by accumulating an exponentially weighted moving average of past gradients and using it to update parameters. By carrying velocity from prior steps, it damps oscillations across steep directions and speeds progress along consistent ones, improving convergence on ill-conditioned loss surfaces. Momentum underlies many modern opt
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:optimisation-algorithm
hasPart:
  - urn:ngm:class:gradient
requires:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:convergence
  - urn:ngm:class:neural-network-training
contrastsWith:
  - urn:ngm:class:gradient-descent
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:gradient
  - urn:ngm:class:learning-rate
supports:
  - urn:ngm:class:stochastic-gradient-descent
partOf:
  - urn:ngm:class:optimisation-algorithm
relatedTo:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:weight-decay
  - urn:ngm:class:backpropagation
---

# Momentum

Momentum is an optimisation technique that accelerates gradient descent by accumulating an exponentially weighted moving average of past gradients and using it to update parameters. By carrying velocity from prior steps, it damps oscillations across steep directions and speeds progress along consistent ones, improving convergence on ill-conditioned loss surfaces. Momentum underlies many modern optimisers, with Nesterov's variant and adaptive methods such as Adam building directly on its formulation.
