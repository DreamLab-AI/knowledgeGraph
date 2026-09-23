---
okf_version: "0.2"
type: Class
title: Regularisation
resource: urn:ngm:class:regularisation
domain: machine-learning
description: A family of techniques that constrain or penalise model complexity during training to prevent overfitting and improve generalisation to unseen data. Common methods include L1 (Lasso) and L2 (Ridge) weight penalties, dropout, early stopping, and data augmentation, each discouraging the model from memorising noise at the expense of learning underlying patterns.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:dropout
  - urn:ngm:class:early-stopping
requires:
  - urn:ngm:class:loss-function
  - urn:ngm:class:hyperparameter-tuning
enables:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:generalisation
  - urn:ngm:class:model-robustness
dependsOn:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:gradient-descent
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:underfitting
bridgesTo:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:explainable-ai
uses:
  - urn:ngm:class:weight-decay
supports:
  - urn:ngm:class:model-training
  - urn:ngm:class:feature-selection
partOf:
  - urn:ngm:class:model-training
relatedTo:
  - urn:ngm:class:training
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:model-complexity
  - urn:ngm:class:dropout
---

# Regularisation

A family of techniques that constrain or penalise model complexity during training to prevent overfitting and improve generalisation to unseen data. Common methods include L1 (Lasso) and L2 (Ridge) weight penalties, dropout, early stopping, and data augmentation, each discouraging the model from memorising noise at the expense of learning underlying patterns.
