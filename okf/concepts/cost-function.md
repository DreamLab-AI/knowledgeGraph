---
okf_version: "0.2"
type: Class
title: Cost Function
resource: urn:ngm:class:cost-function
domain: machine-learning
description: A cost function is a scalar-valued mathematical function that maps a model's parameters or a system's state to a real number representing the magnitude of error, resource expenditure, or divergence from a desired outcome. In supervised machine learning, the cost function (also called a loss function) measures the aggregate discrepancy between predicted and ground-truth outputs across a training se
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:objective-function
  - urn:ngm:class:mathematical-function
hasPart:
  - urn:ngm:class:regularisation
  - urn:ngm:class:penalty-term
  - urn:ngm:class:data-fidelity-term
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:differentiability
  - urn:ngm:class:parametric-model
enables:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:optimal-control
  - urn:ngm:class:motion-planning
  - urn:ngm:class:model-training
  - urn:ngm:class:neural-architecture-search
  - urn:ngm:class:inverse-reinforcement-learning
dependsOn:
  - urn:ngm:class:loss-landscape
  - urn:ngm:class:parametric-model
  - urn:ngm:class:activation-function
  - urn:ngm:class:covariance-matrix
implements:
  - urn:ngm:class:maximum-likelihood-estimation
  - urn:ngm:class:bayesian-inference
contrastsWith:
  - urn:ngm:class:reward-function
  - urn:ngm:class:utility-function
bridgesTo:
  - urn:ngm:class:inverse-reinforcement-learning
  - urn:ngm:class:mechanism-design
uses:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:backpropagation
  - urn:ngm:class:automatic-differentiation
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer-architecture
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
relatedTo:
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:overfitting
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:neural-network
  - urn:ngm:class:covariance-matrix
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:kullback-leibler-divergence
  - urn:ngm:class:variational-inference
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:rlhf
---

# Cost Function

A cost function is a scalar-valued mathematical function that maps a model's parameters or a system's state to a real number representing the magnitude of error, resource expenditure, or divergence from a desired outcome. In supervised machine learning, the cost function (also called a loss function) measures the aggregate discrepancy between predicted and ground-truth outputs across a training set, providing the objective that optimisation algorithms such as gradient descent minimise. In control theory and robotics, cost functions encode trajectory quality criteria including path length, energy consumption, and collision risk, enabling optimal control policies via formulations such as LQR and model predictive control. The design of the cost function is one of the most consequential decisions in any learning or optimisation system, as misspecified objectives lead to reward hacking, degenerate solutions, or physically unrealisable behaviours.
