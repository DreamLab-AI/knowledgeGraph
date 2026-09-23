---
okf_version: "0.2"
type: Class
title: Classification Threshold
resource: urn:ngm:class:classification-threshold
domain: artificial-intelligence
description: A Classification Threshold is a decision boundary applied to the probabilistic output of a classifier to assign discrete class labels. By default set at 0.5 for binary classification, the threshold can be adjusted to trade off precision against recall, or sensitivity against specificity, depending on application requirements. Threshold selection is a critical model calibration step that directly a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:ai-technique
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:decision-system
  - urn:ngm:class:statistical-decision-theory
hasPart:
  - urn:ngm:class:roc-curve
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:youden-j-statistic
  - urn:ngm:class:operating-point
  - urn:ngm:class:cost-matrix
  - urn:ngm:class:confusion-matrix-slice
  - urn:ngm:class:f1-score
requires:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:classifier
  - urn:ngm:class:probability-calibration
  - urn:ngm:class:labelled-dataset
  - urn:ngm:class:classification
  - urn:ngm:class:classification
enables:
  - urn:ngm:class:decision-system
  - urn:ngm:class:risk-management
  - urn:ngm:class:cost-sensitive-learning
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:ai-fairness-audit
  - urn:ngm:class:credit-scoring
  - urn:ngm:class:malware-classification
  - urn:ngm:class:spam-filtering
dependsOn:
  - urn:ngm:class:classifier
  - urn:ngm:class:probability-calibration
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:classification
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:loss-function
  - urn:ngm:class:class-imbalance
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:specificity
implements:
  - urn:ngm:class:cost-sensitive-learning
  - urn:ngm:class:threshold-optimisation
  - urn:ngm:class:operating-point-selection
  - urn:ngm:class:empirical-risk-minimisation
contrastsWith:
  - urn:ngm:class:regression
  - urn:ngm:class:hard-label
  - urn:ngm:class:soft-label
  - urn:ngm:class:ranking
  - urn:ngm:class:conformal-prediction
  - urn:ngm:class:soft-classifier
bridgesTo:
  - urn:ngm:class:conformal-prediction
  - urn:ngm:class:active-learning
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:mlops
uses:
  - urn:ngm:class:auc-roc
  - urn:ngm:class:f1-score
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:matthews-correlation-coefficient
  - urn:ngm:class:specificity
  - urn:ngm:class:sensitivity
  - urn:ngm:class:true-positive-rate
  - urn:ngm:class:false-positive-rate
  - urn:ngm:class:average-precision
supports:
  - urn:ngm:class:ai-fairness
  - urn:ngm:class:ai-governance
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-audit
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:mhra-samd-guidance
  - urn:ngm:class:iso-iec-23053
relatedTo:
  - urn:ngm:class:binary-classification
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:f1-score
  - urn:ngm:class:multi-label-classification
  - urn:ngm:class:class-imbalance
  - urn:ngm:class:calibration
  - urn:ngm:class:youden-j-statistic
  - urn:ngm:class:demographic-parity
  - urn:ngm:class:equal-opportunity-fairness
  - urn:ngm:class:concept-drift
  - urn:ngm:class:covariate-shift
  - urn:ngm:class:adversarial-robustness
  - urn:ngm:class:platt-scaling
  - urn:ngm:class:temperature-scaling
---

# Classification Threshold

A Classification Threshold is a decision boundary applied to the probabilistic output of a classifier to assign discrete class labels. By default set at 0.5 for binary classification, the threshold can be adjusted to trade off precision against recall, or sensitivity against specificity, depending on application requirements. Threshold selection is a critical model calibration step that directly affects downstream decision quality and fairness properties.
