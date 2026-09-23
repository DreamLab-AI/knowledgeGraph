---
okf_version: "0.2"
type: Class
title: Confusion Matrix
resource: urn:ngm:class:confusion-matrix
domain: machine-learning
description: A tabular visualisation and analytical tool summarising the performance of a classification model by displaying the counts or proportions of predictions cross-tabulated against actual class labels, typically organised with predicted classes as columns and actual classes as rows (or vice versa), enabling systematic analysis of where a model succeeds and fails, calculation of various performance met
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:model-evaluation
hasPart:
  - urn:ngm:class:true-positive
  - urn:ngm:class:true-negative
  - urn:ngm:class:false-positive
  - urn:ngm:class:false-negative
requires:
  - urn:ngm:class:classification
  - urn:ngm:class:ground-truth-labels
enables:
  - urn:ngm:class:error-analysis
  - urn:ngm:class:fairness-assessment
  - urn:ngm:class:model-debugging
  - urn:ngm:class:threshold-optimisation
contrastsWith:
  - urn:ngm:class:roc-curve
bridgesTo:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:ai-audit
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:cross-validation
supports:
  - urn:ngm:class:accuracy
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:f1-score
  - urn:ngm:class:specificity
  - urn:ngm:class:sensitivity
standardizedBy:
  - urn:ngm:class:iso-iec-25059
  - urn:ngm:class:nist-ai-rmf
partOf:
  - urn:ngm:class:model-performance
relatedTo:
  - urn:ngm:class:class-imbalance
  - urn:ngm:class:ai-model-card
---

# Confusion Matrix

A tabular visualisation and analytical tool summarising the performance of a classification model by displaying the counts or proportions of predictions cross-tabulated against actual class labels, typically organised with predicted classes as columns and actual classes as rows (or vice versa), enabling systematic analysis of where a model succeeds and fails, calculation of various performance metrics, and identification of specific confusion patterns between classes.
