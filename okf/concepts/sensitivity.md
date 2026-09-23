---
okf_version: "0.2"
type: Class
title: Sensitivity
resource: urn:ngm:class:sensitivity
domain: machine-learning
description: Sensitivity quantifies the degree to which the output of a model, classifier, or system changes in response to variation in its inputs, parameters, or underlying assumptions. In binary classification, sensitivity (also called recall or true positive rate) measures the proportion of actual positive instances correctly identified by a model. In sensitivity analysis, the concept is generalised to any
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-evaluation
requires:
  - urn:ngm:class:parameter
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:classification
  - urn:ngm:class:ground-truth-labels
enables:
  - urn:ngm:class:robustness
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:model-validation
  - urn:ngm:class:feature-importance
dependsOn:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:threshold
contrastsWith:
  - urn:ngm:class:specificity
  - urn:ngm:class:precision
bridgesTo:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:decision-support
uses:
  - urn:ngm:class:sensitivity-analysis
  - urn:ngm:class:monte-carlo-simulation
supports:
  - urn:ngm:class:explainability
  - urn:ngm:class:fairness
relatedTo:
  - urn:ngm:class:f1-score
  - urn:ngm:class:roc-curve
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:reproducibility
  - urn:ngm:class:hyperparameter
---

# Sensitivity

Sensitivity quantifies the degree to which the output of a model, classifier, or system changes in response to variation in its inputs, parameters, or underlying assumptions. In binary classification, sensitivity (also called recall or true positive rate) measures the proportion of actual positive instances correctly identified by a model. In sensitivity analysis, the concept is generalised to any computational or physical system to identify which input factors most strongly drive output variance, thereby guiding uncertainty quantification and model validation.
