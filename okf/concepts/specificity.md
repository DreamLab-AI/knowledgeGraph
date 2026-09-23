---
okf_version: "0.2"
type: Class
title: Specificity
resource: urn:ngm:class:specificity
domain: artificial-intelligence
description: Specificity (also called the True Negative Rate or TNR) is the proportion of actual negative instances that a binary classifier or diagnostic test correctly identifies as negative, computed as TN / (TN + FP). It quantifies a model's ability to avoid false positives, complementing sensitivity (recall) in characterising the full operating behaviour of a classifier. Together with sensitivity, specifi
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:classification
  - urn:ngm:class:classification
enables:
  - urn:ngm:class:threshold-selection
  - urn:ngm:class:roc-curve
  - urn:ngm:class:anomaly-detection
contrastsWith:
  - urn:ngm:class:sensitivity
  - urn:ngm:class:precision
  - urn:ngm:class:false-positive-rate
bridgesTo:
  - urn:ngm:class:medical-diagnosis-ai
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:medical-diagnosis-ai
uses:
  - urn:ngm:class:true-negative
  - urn:ngm:class:false-positive
partOf:
  - urn:ngm:class:classifier-evaluation
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:classification-metric
  - urn:ngm:class:recall
  - urn:ngm:class:roc-curve
  - urn:ngm:class:auc-roc
  - urn:ngm:class:f1-score
  - urn:ngm:class:youden-index
  - urn:ngm:class:negative-predictive-value
  - urn:ngm:class:likelihood-ratio
---

# Specificity

Specificity (also called the True Negative Rate or TNR) is the proportion of actual negative instances that a binary classifier or diagnostic test correctly identifies as negative, computed as TN / (TN + FP). It quantifies a model's ability to avoid false positives, complementing sensitivity (recall) in characterising the full operating behaviour of a classifier. Together with sensitivity, specificity defines the two axes of the Receiver Operating Characteristic (ROC) curve, enabling principled threshold selection across tasks ranging from medical diagnostics to spam filtering and anomaly detection.
