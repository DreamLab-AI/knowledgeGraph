---
okf_version: "0.2"
type: Class
title: Batch Size
resource: urn:ngm:class:batch-size
domain: artificial-intelligence
description: Batch Size is the number of training examples processed together in a single forward and backward pass before model parameters are updated. It is a critical hyperparameter governing the trade-off between training speed, memory usage, gradient noise, and convergence stability—small batches introduce regularising noise via stochastic gradient estimates, whilst large batches enable faster hardware ut
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
dependsOn:
  - urn:ngm:class:deep-learning
contrastsWith:
  - urn:ngm:class:overfitting
partOf:
  - urn:ngm:class:gradient-descent
relatedTo:
  - urn:ngm:class:epoch
  - urn:ngm:class:hyperparameter
---

# Batch Size

Batch Size is the number of training examples processed together in a single forward and backward pass before model parameters are updated. It is a critical hyperparameter governing the trade-off between training speed, memory usage, gradient noise, and convergence stability—small batches introduce regularising noise via stochastic gradient estimates, whilst large batches enable faster hardware utilisation but may generalise less well.
