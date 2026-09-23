---
okf_version: "0.2"
type: Class
title: Precision-Recall Curve
resource: urn:ngm:class:precision-recall-curve
domain: machine-learning
description: A diagnostic plot that traces the trade-off between precision and recall across the decision thresholds of a binary classifier, most informative under class imbalance where it focuses performance assessment on the minority positive class.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:model-performance
hasPart:
  - urn:ngm:class:decision-threshold
  - urn:ngm:class:area-under-the-curve
requires:
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:classification
enables:
  - urn:ngm:class:threshold-selection
  - urn:ngm:class:model-comparison
dependsOn:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:class-imbalance
contrastsWith:
  - urn:ngm:class:roc-curve
  - urn:ngm:class:accuracy
bridgesTo:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:medical-diagnosis-ai
  - urn:ngm:class:roc-curve
  - urn:ngm:class:f1-score
uses:
  - urn:ngm:class:f1-score
  - urn:ngm:class:positive-predictive-value
  - urn:ngm:class:true-positive-rate
partOf:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:average-precision
  - urn:ngm:class:object-detection
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:supervised-learning
---

# Precision-Recall Curve

A diagnostic plot that traces the trade-off between precision and recall across the decision thresholds of a binary classifier, most informative under class imbalance where it focuses performance assessment on the minority positive class.
