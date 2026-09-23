---
okf_version: "0.2"
type: Class
title: Accuracy
resource: urn:ngm:class:accuracy
domain: artificial-intelligence
description: A classification performance metric representing the proportion of correct predictions made by an artificial intelligence model across all instances in a dataset, calculated as the ratio of the sum of true positives and true negatives to the total number of predictions, providing an aggregate measure of overall model correctness but potentially obscuring performance disparities across classes, par
maturity: draft
quality: 0.68
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:true-positive
  - urn:ngm:class:true-negative
requires:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:ground-truth-labels
enables:
  - urn:ngm:class:model-selection
  - urn:ngm:class:performance-monitoring
dependsOn:
  - urn:ngm:class:classification-threshold
contrastsWith:
  - urn:ngm:class:f1-score
  - urn:ngm:class:matthews-correlation-coefficient
bridgesTo:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:roc-curve
standardizedBy:
  - urn:ngm:class:iso-iec-25059
  - urn:ngm:class:nist-ai-rmf
partOf:
  - urn:ngm:class:model-performance
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:sensitivity
  - urn:ngm:class:specificity
  - urn:ngm:class:fairness
---

# Accuracy

A classification performance metric representing the proportion of correct predictions made by an artificial intelligence model across all instances in a dataset, calculated as the ratio of the sum of true positives and true negatives to the total number of predictions, providing an aggregate measure of overall model correctness but potentially obscuring performance disparities across classes, particularly in datasets with imbalanced class distributions or asymmetric misclassification costs.
