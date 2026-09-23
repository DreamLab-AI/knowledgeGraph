---
okf_version: "0.2"
type: Class
title: Class Imbalance
resource: urn:ngm:class:class-imbalance
domain: machine-learning
description: Class imbalance is the condition in a classification dataset where the number of examples in one class greatly exceeds that of another, causing learning algorithms to favour the majority class. It is common in problems such as fraud detection, medical diagnosis, and anomaly detection, where the events of interest are rare. Class imbalance undermines naive accuracy as an evaluation metric and motiv
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:classification
  - urn:ngm:class:ai-technique
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:resampling
  - urn:ngm:class:cost-sensitive-learning
  - urn:ngm:class:smote
  - urn:ngm:class:focal-loss
  - urn:ngm:class:ensemble-methods
requires:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:f1-score
  - urn:ngm:class:data-preprocessing
enables:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:medical-diagnosis-ai
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:intrusion-detection-system
dependsOn:
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:loss-function
  - urn:ngm:class:classification
implements:
  - urn:ngm:class:smote
  - urn:ngm:class:resampling
  - urn:ngm:class:cost-sensitive-learning
  - urn:ngm:class:focal-loss
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:balanced-dataset
  - urn:ngm:class:accuracy-metric
uses:
  - urn:ngm:class:resampling
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:deep-learning
  - urn:ngm:class:random-forest
  - urn:ngm:class:boosting
  - urn:ngm:class:loss-function
supports:
  - urn:ngm:class:model-performance
  - urn:ngm:class:recall
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:roc-curve
standardizedBy:
  - urn:ngm:class:imbalanced-learn
  - urn:ngm:class:scikit-learn
  - urn:ngm:class:neurips-benchmarks
partOf:
  - urn:ngm:class:classification
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:f1-score
  - urn:ngm:class:roc-curve
  - urn:ngm:class:recall
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:long-tail-distribution
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:active-learning
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:concept-drift
---

# Class Imbalance

Class imbalance is the condition in a classification dataset where the number of examples in one class greatly exceeds that of another, causing learning algorithms to favour the majority class. It is common in problems such as fraud detection, medical diagnosis, and anomaly detection, where the events of interest are rare. Class imbalance undermines naive accuracy as an evaluation metric and motivates remedies such as resampling, cost-sensitive learning, and the use of precision-recall-oriented metrics.
