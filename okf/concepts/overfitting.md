---
okf_version: "0.2"
type: Class
title: Overfitting
resource: urn:ngm:class:overfitting
domain: machine-learning
description: Overfitting is a phenomenon in machine learning where a model learns the training data too precisely—including noise and spurious correlations—resulting in poor generalisation to unseen data. It corresponds to high variance and low bias in the bias-variance tradeoff, and is mitigated through regularisation, dropout, early stopping, and data augmentation.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-research-area
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:model-training
  - urn:ngm:class:model-capacity
dependsOn:
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:statistical-learning-theory
contrastsWith:
  - urn:ngm:class:underfitting
  - urn:ngm:class:generalisation
bridgesTo:
  - urn:ngm:class:model-governance
  - urn:ngm:class:ai-robustness
uses:
  - urn:ngm:class:loss-function
  - urn:ngm:class:empirical-risk-minimisation
relatedTo:
  - urn:ngm:class:dropout
  - urn:ngm:class:deep-learning
  - urn:ngm:class:regularisation
  - urn:ngm:class:cross-validation
  - urn:ngm:class:early-stopping
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:validation-data
  - urn:ngm:class:neural-network
---

# Overfitting

Overfitting is a phenomenon in machine learning where a model learns the training data too precisely—including noise and spurious correlations—resulting in poor generalisation to unseen data. It corresponds to high variance and low bias in the bias-variance tradeoff, and is mitigated through regularisation, dropout, early stopping, and data augmentation.
