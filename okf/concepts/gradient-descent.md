---
okf_version: "0.2"
type: Class
title: Gradient Descent
resource: urn:ngm:class:gradient-descent
domain: machine-learning
description: Gradient Descent is an iterative first-order optimisation algorithm that minimises a differentiable loss function by repeatedly updating model parameters in the direction of the negative gradient. It is the foundational optimisation strategy for training machine learning models, with variants including batch, stochastic, and mini-batch gradient descent, as well as adaptive-rate methods such as Ada
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:batch-gradient-descent
requires:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:loss-function
  - urn:ngm:class:differentiable-function
  - urn:ngm:class:learning-rate
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:neural-network-training
  - urn:ngm:class:convergence
dependsOn:
  - urn:ngm:class:objective-function
implements:
  - urn:ngm:class:first-order-optimisation
  - urn:ngm:class:numerical-optimisation
contrastsWith:
  - urn:ngm:class:second-order-optimisation
  - urn:ngm:class:evolutionary-algorithm
bridgesTo:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:hyperparameter
  - urn:ngm:class:gradient
  - urn:ngm:class:mini-batch
relatedTo:
  - urn:ngm:class:adam-optimiser
  - urn:ngm:class:rmsprop
  - urn:ngm:class:momentum
  - urn:ngm:class:weight-initialisation
---

# Gradient Descent

Gradient Descent is an iterative first-order optimisation algorithm that minimises a differentiable loss function by repeatedly updating model parameters in the direction of the negative gradient. It is the foundational optimisation strategy for training machine learning models, with variants including batch, stochastic, and mini-batch gradient descent, as well as adaptive-rate methods such as Adam and RMSProp.
