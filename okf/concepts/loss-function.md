---
okf_version: "0.2"
type: Class
title: Loss Function
resource: urn:ngm:class:loss-function
domain: machine-learning
description: A Loss Function is a mathematical function that quantifies the discrepancy between a model's predicted outputs and true target values, producing a scalar error measure that serves as the objective for optimisation algorithms during training.
maturity: stable
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:mean-squared-error
  - urn:ngm:class:cross-entropy-loss
  - urn:ngm:class:mean-absolute-error
requires:
  - urn:ngm:class:ground-truth-labels
enables:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:backpropagation
  - urn:ngm:class:convergence
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:training-data
contrastsWith:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:overfitting
bridgesTo:
  - urn:ngm:class:evaluation-metric
uses:
  - urn:ngm:class:automatic-differentiation
supports:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:generative-adversarial-network
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
partOf:
  - urn:ngm:class:model-training-pipeline
relatedTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:regularisation
  - urn:ngm:class:hyperparameter-tuning
---

# Loss Function

A Loss Function is a mathematical function that quantifies the discrepancy between a model's predicted outputs and true target values, producing a scalar error measure that serves as the objective for optimisation algorithms during training.
