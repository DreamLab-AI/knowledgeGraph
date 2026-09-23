---
okf_version: "0.2"
type: Class
title: Learning Rate
resource: urn:ngm:class:learning-rate
domain: machine-learning
description: "The learning rate is a hyperparameter in gradient-based optimisation that scales the size of each parameter update applied in the direction of the negative gradient. It governs the trade-off between the speed of convergence and the stability of training: too large a value can cause divergence or oscillation, while too small a value leads to slow progress or stalling in poor regions. It is one of t"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:gradient-descent
enables:
  - urn:ngm:class:convergence
dependsOn:
  - urn:ngm:class:optimiser
implements:
  - urn:ngm:class:hyperparameter-tuning
contrastsWith:
  - urn:ngm:class:stochastic-gradient-descent
bridgesTo:
  - urn:ngm:class:adam-optimiser
uses:
  - urn:ngm:class:learning-rate-schedule
supports:
  - urn:ngm:class:neural-network-training
partOf:
  - urn:ngm:class:gradient-descent
relatedTo:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:convergence
  - urn:ngm:class:loss-function
---

# Learning Rate

The learning rate is a hyperparameter in gradient-based optimisation that scales the size of each parameter update applied in the direction of the negative gradient. It governs the trade-off between the speed of convergence and the stability of training: too large a value can cause divergence or oscillation, while too small a value leads to slow progress or stalling in poor regions. It is one of the most consequential settings when training neural networks and is often varied over the course of training by a schedule or adapted per parameter.
