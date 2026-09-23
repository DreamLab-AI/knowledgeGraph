---
okf_version: "0.2"
type: Class
title: ROC Curve
resource: urn:ngm:class:roc-curve
domain: machine-learning
description: A graphical performance evaluation tool for binary classification models that plots the True Positive Rate (Recall/Sensitivity) against the False Positive Rate across all possible classification thresholds, visualising the trade-off between correctly identifying positive instances and incorrectly classifying negative instances as positive, enabling threshold selection, model comparison, and assess
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:model-performance
hasPart:
  - urn:ngm:class:true-positive-rate
  - urn:ngm:class:false-positive-rate
  - urn:ngm:class:auc
requires:
  - urn:ngm:class:classification
  - urn:ngm:class:confusion-matrix
enables:
  - urn:ngm:class:model-comparison
  - urn:ngm:class:threshold-selection
  - urn:ngm:class:classifier-evaluation
dependsOn:
  - urn:ngm:class:sensitivity
  - urn:ngm:class:specificity
  - urn:ngm:class:classification-threshold
contrastsWith:
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:accuracy
bridgesTo:
  - urn:ngm:class:medical-diagnosis-ai
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:clinical-decision-support
supports:
  - urn:ngm:class:model-selection
  - urn:ngm:class:imbalanced-classification
partOf:
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:f1-score
  - urn:ngm:class:model-calibration
  - urn:ngm:class:cross-validation
---

# ROC Curve

A graphical performance evaluation tool for binary classification models that plots the True Positive Rate (Recall/Sensitivity) against the False Positive Rate across all possible classification thresholds, visualising the trade-off between correctly identifying positive instances and incorrectly classifying negative instances as positive, enabling threshold selection, model comparison, and assessment of a classifier's discriminative ability independent of class distribution or threshold choice.
