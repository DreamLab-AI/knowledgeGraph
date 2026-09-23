---
okf_version: "0.2"
type: Class
title: Backpropagation
resource: urn:ngm:class:backpropagation
domain: machine-learning
description: Backpropagation is the algorithm for computing gradients of the loss function with respect to each weight in a neural network by applying the chain rule of calculus in reverse through the computation graph. It enables efficient gradient calculation across all layers in a single backward pass, making large-scale neural network training computationally feasible.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:optimisation-algorithm
hasPart:
  - urn:ngm:class:forward-pass
  - urn:ngm:class:backward-pass
  - urn:ngm:class:chain-rule
requires:
  - urn:ngm:class:differentiable-function
  - urn:ngm:class:computation-graph
enables:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:model-training
  - urn:ngm:class:deep-learning
  - urn:ngm:class:weight-update
dependsOn:
  - urn:ngm:class:loss-function
  - urn:ngm:class:activation-function
contrastsWith:
  - urn:ngm:class:forward-mode-differentiation
  - urn:ngm:class:genetic-algorithm
bridgesTo:
  - urn:ngm:class:neuromorphic-computing
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:loss-function
partOf:
  - urn:ngm:class:neural-network-training
relatedTo:
  - urn:ngm:class:vanishing-gradient-problem
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:dropout
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:activation-function
---

# Backpropagation

Backpropagation is the algorithm for computing gradients of the loss function with respect to each weight in a neural network by applying the chain rule of calculus in reverse through the computation graph. It enables efficient gradient calculation across all layers in a single backward pass, making large-scale neural network training computationally feasible.
