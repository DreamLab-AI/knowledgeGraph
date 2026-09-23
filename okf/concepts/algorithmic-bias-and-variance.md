---
okf_version: "0.2"
type: Class
title: Algorithmic Bias and Variance
resource: urn:ngm:class:algorithmic-bias-and-variance
domain: artificial-intelligence
description: Algorithmic Bias and Variance denotes the canonical decomposition of supervised-learning generalisation error into three orthogonal components — squared bias, variance, and irreducible noise — formalised by Geman, Bienenstock & Doursat (1992) as Err(x) = E[(y − f̂(x))²] = (E[f̂(x)] − f(x))² + E[(...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:neural-network
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:statistical-learning-theory
  - urn:ngm:class:generalisation-theory
  - urn:ngm:class:supervised-learning
hasPart:
  - urn:ngm:class:bias
  - urn:ngm:class:hypothesis-class
  - urn:ngm:class:mean-squared-error
  - urn:ngm:class:bias
  - urn:ngm:class:variance-component
  - urn:ngm:class:irreducible-error
  - urn:ngm:class:validation-curve
  - urn:ngm:class:learning-curve
requires:
  - urn:ngm:class:training-data-distribution
  - urn:ngm:class:loss-function
  - urn:ngm:class:hypothesis-space
  - urn:ngm:class:training-data-distribution
  - urn:ngm:class:sample-complexity
  - urn:ngm:class:resampling-method
enables:
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:model-selection
  - urn:ngm:class:generalisation-bound
  - urn:ngm:class:capacity-control
  - urn:ngm:class:risk-minimisation
dependsOn:
  - urn:ngm:class:probability-theory
  - urn:ngm:class:measure-theory
  - urn:ngm:class:empirical-process-theory
  - urn:ngm:class:vc-dimension
  - urn:ngm:class:rademacher-complexity
  - urn:ngm:class:pac-learning
implements:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:sampling
  - urn:ngm:class:k-fold
  - urn:ngm:class:loocv
  - urn:ngm:class:sampling
  - urn:ngm:class:holdout-method
  - urn:ngm:class:bootstrap
contrastsWith:
  - urn:ngm:class:bayesian-decision-theory
  - urn:ngm:class:no-free-lunch-theorem
  - urn:ngm:class:frequentist-bayesian-divide
  - urn:ngm:class:ai-fairness
uses:
  - urn:ngm:class:concentration-inequalities
  - urn:ngm:class:expectation-operator
  - urn:ngm:class:variance-decomposition
  - urn:ngm:class:bootstrap-resampling
supports:
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:bagging
  - urn:ngm:class:boosting
  - urn:ngm:class:dropout
  - urn:ngm:class:early-stopping
  - urn:ngm:class:regularisation
  - urn:ngm:class:stacking
  - urn:ngm:class:ensemble-methods
standardizedBy:
  - urn:ngm:class:py-torch
  - urn:ngm:class:scikit-learn
  - urn:ngm:class:hastie-tibshirani-friedman-esl
  - urn:ngm:class:tensorflow-model-analysis
relatedTo:
  - urn:ngm:class:benign-overfitting
  - urn:ngm:class:grokking
  - urn:ngm:class:inductive-bias
  - urn:ngm:class:scaling-laws
  - urn:ngm:class:overfitting
  - urn:ngm:class:underfitting
  - urn:ngm:class:double-descent
  - urn:ngm:class:scaling-laws
---

# Algorithmic Bias and Variance

Algorithmic Bias and Variance denotes the canonical decomposition of supervised-learning generalisation error into three orthogonal components — squared bias, variance, and irreducible noise — formalised by Geman, Bienenstock & Doursat (1992) as Err(x) = E[(y − f̂(x))²] = (E[f̂(x)] − f(x))² + E[(...
