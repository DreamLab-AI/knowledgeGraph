---
okf_version: "0.2"
type: Class
title: Precision
resource: urn:ngm:class:precision
domain: artificial-intelligence
description: "A classification performance metric representing the proportion of positive predictions made by an artificial intelligence model that are actually correct, calculated as the ratio of true positives to all positive predictions (true positives plus false positives), measuring the model's ability to avoid false alarms and providing critical insight into prediction reliability, particularly important "
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:true-positive
  - urn:ngm:class:false-positive
requires:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:classification
enables:
  - urn:ngm:class:threshold-optimisation
dependsOn:
  - urn:ngm:class:classification-threshold
contrastsWith:
  - urn:ngm:class:recall
  - urn:ngm:class:accuracy
  - urn:ngm:class:specificity
bridgesTo:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:f1-score
  - urn:ngm:class:information-retrieval
uses:
  - urn:ngm:class:precision-recall-curve
supports:
  - urn:ngm:class:model-selection
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:fairness-assessment
standardizedBy:
  - urn:ngm:class:iso-iec-25059
  - urn:ngm:class:nist-ai-rmf
partOf:
  - urn:ngm:class:model-performance
  - urn:ngm:class:model-evaluation
relatedTo:
  - urn:ngm:class:model-performance
  - urn:ngm:class:class-imbalance
  - urn:ngm:class:ai-model-card
  - urn:ngm:class:classification-metric
---

# Precision

A classification performance metric representing the proportion of positive predictions made by an artificial intelligence model that are actually correct, calculated as the ratio of true positives to all positive predictions (true positives plus false positives), measuring the model's ability to avoid false alarms and providing critical insight into prediction reliability, particularly important in applications where the cost or consequence of false positive errors is significant.
