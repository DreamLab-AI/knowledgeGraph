---
okf_version: "0.2"
type: Class
title: Bias-Variance Tradeoff
resource: urn:ngm:class:bias-variance-tradeoff
domain: machine-learning
description: The bias-variance tradeoff is the central principle in supervised learning describing how a model's expected generalisation error decomposes into bias, variance, and irreducible noise, and how reducing one component tends to increase the other. Bias is error from overly simplistic assumptions that cause systematic underfitting, while variance is error from excessive sensitivity to the training sam
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:model-evaluation
hasPart:
  - urn:ngm:class:model-complexity
  - urn:ngm:class:overfitting
  - urn:ngm:class:underfitting
  - urn:ngm:class:generalisation-error
  - urn:ngm:class:irreducible-error
  - urn:ngm:class:bias-error-component
  - urn:ngm:class:variance-error-component
requires:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:training-data
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:model-selection
  - urn:ngm:class:learning-curve-analysis
  - urn:ngm:class:regularisation
dependsOn:
  - urn:ngm:class:model-complexity
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:training-data
  - urn:ngm:class:loss-function
implements:
  - urn:ngm:class:generalisation-error-decomposition
  - urn:ngm:class:complexity-penalisation
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:underfitting
  - urn:ngm:class:double-descent
  - urn:ngm:class:benign-overfitting
uses:
  - urn:ngm:class:regularisation
  - urn:ngm:class:cross-validation
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:regularisation
  - urn:ngm:class:l1-regularization
  - urn:ngm:class:l2-regularization
  - urn:ngm:class:dropout
  - urn:ngm:class:early-stopping
supports:
  - urn:ngm:class:model-training
  - urn:ngm:class:ensemble-learning
  - urn:ngm:class:feature-selection
  - urn:ngm:class:dimensionality-reduction
  - urn:ngm:class:hyperparameter-tuning
standardizedBy:
  - urn:ngm:class:statistical-learning-theory
relatedTo:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:regularisation
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:pac-learning
  - urn:ngm:class:vc-dimension
  - urn:ngm:class:algorithmic-bias-and-variance
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:regularisation
  - urn:ngm:class:random-forest
  - urn:ngm:class:boosting
  - urn:ngm:class:decision-tree
  - urn:ngm:class:kernel-methods
---

# Bias-Variance Tradeoff

The bias-variance tradeoff is the central principle in supervised learning describing how a model's expected generalisation error decomposes into bias, variance, and irreducible noise, and how reducing one component tends to increase the other. Bias is error from overly simplistic assumptions that cause systematic underfitting, while variance is error from excessive sensitivity to the training sample that causes overfitting. Effective model selection seeks a complexity sweet spot that minimises total expected error on unseen data, balancing these competing sources rather than eliminating either alone.
