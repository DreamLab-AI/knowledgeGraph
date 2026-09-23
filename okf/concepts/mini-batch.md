---
okf_version: "0.2"
type: Class
title: Mini-Batch
resource: urn:ngm:class:mini-batch
domain: machine-learning
description: A mini-batch is a small, fixed-size subset of a training dataset processed together in a single forward and backward pass when training a machine learning model. Mini-batch gradient descent computes the gradient over the mini-batch rather than over a single example (stochastic) or the entire dataset (full batch), balancing the noise-reduction benefits of larger batches against the computational an
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:stochastic-gradient-descent
hasPart:
  - urn:ngm:class:loss-function
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:optimisation-algorithm
enables:
  - urn:ngm:class:data-parallelism
contrastsWith:
  - urn:ngm:class:epoch
uses:
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:gpu-acceleration
supports:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:convolutional-neural-network
---

# Mini-Batch

A mini-batch is a small, fixed-size subset of a training dataset processed together in a single forward and backward pass when training a machine learning model. Mini-batch gradient descent computes the gradient over the mini-batch rather than over a single example (stochastic) or the entire dataset (full batch), balancing the noise-reduction benefits of larger batches against the computational and memory cost. The mini-batch size is a key hyperparameter that influences convergence behaviour, gradient variance, hardware utilisation and generalisation.
