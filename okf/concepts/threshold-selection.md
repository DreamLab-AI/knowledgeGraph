---
okf_version: "0.2"
type: Class
title: Threshold Selection
resource: urn:ngm:class:threshold-selection
domain: machine-learning
description: Threshold selection is the process of choosing the decision boundary that converts a classifier's continuous scores or probabilities into discrete class labels. The chosen threshold trades off competing error types, moving along the trade-off captured by the ROC and precision-recall curves. Appropriate selection depends on the relative costs of false positives and false negatives and on class prev
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:classification
  - urn:ngm:class:inference
dependsOn:
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:specificity
bridgesTo:
  - urn:ngm:class:statistical-inference
uses:
  - urn:ngm:class:roc-curve
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:confusion-matrix
supports:
  - urn:ngm:class:supervised-learning
partOf:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:sensitivity
  - urn:ngm:class:f1-score
  - urn:ngm:class:evaluation-metric
---

# Threshold Selection

Threshold selection is the process of choosing the decision boundary that converts a classifier's continuous scores or probabilities into discrete class labels. The chosen threshold trades off competing error types, moving along the trade-off captured by the ROC and precision-recall curves. Appropriate selection depends on the relative costs of false positives and false negatives and on class prevalence in the deployment setting.
