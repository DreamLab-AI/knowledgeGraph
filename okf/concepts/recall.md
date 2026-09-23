---
okf_version: "0.2"
type: Class
title: Recall
resource: urn:ngm:class:recall
domain: machine-learning
description: "A classification performance metric representing the proportion of actual positive instances that an artificial intelligence model correctly identifies, calculated as the ratio of true positives to all actual positives (true positives plus false negatives), measuring the model's completeness in detecting positive cases, particularly critical in applications where missing positive instances (false "
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:model-performance
hasPart:
  - urn:ngm:class:true-positive
  - urn:ngm:class:false-negative
requires:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:ground-truth-labels
enables:
  - urn:ngm:class:threshold-selection
  - urn:ngm:class:model-comparison
dependsOn:
  - urn:ngm:class:classification
contrastsWith:
  - urn:ngm:class:precision
  - urn:ngm:class:specificity
bridgesTo:
  - urn:ngm:class:evaluation-metric
uses:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:precision-recall-curve
  - urn:ngm:class:roc-curve
supports:
  - urn:ngm:class:f1-score
  - urn:ngm:class:accuracy
  - urn:ngm:class:fairness
standardizedBy:
  - urn:ngm:class:iso-iec-25059
  - urn:ngm:class:nist-ai-rmf
partOf:
  - urn:ngm:class:model-performance
  - urn:ngm:class:classification-evaluation
relatedTo:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:imbalanced-classification
---

# Recall

A classification performance metric representing the proportion of actual positive instances that an artificial intelligence model correctly identifies, calculated as the ratio of true positives to all actual positives (true positives plus false negatives), measuring the model's completeness in detecting positive cases, particularly critical in applications where missing positive instances (false negatives) carries significant cost or consequences.
