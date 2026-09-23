---
okf_version: "0.2"
type: Class
title: F1 Score
resource: urn:ngm:class:f1-score
domain: machine-learning
description: A classification performance metric representing the harmonic mean of precision and recall, providing a single score that balances a model's ability to avoid false positives (precision) with its ability to avoid false negatives (recall), calculated to give equal weight to both metrics whilst penalising extreme imbalances, particularly useful for comparing models or setting decision thresholds when
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:evaluation-metric
hasPart:
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:true-positive
  - urn:ngm:class:false-positive
requires:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:classification
enables:
  - urn:ngm:class:model-selection
  - urn:ngm:class:threshold-optimisation
dependsOn:
  - urn:ngm:class:supervised-learning
contrastsWith:
  - urn:ngm:class:accuracy
  - urn:ngm:class:auc
  - urn:ngm:class:matthews-correlation-coefficient
bridgesTo:
  - urn:ngm:class:evaluation-metric
  - urn:ngm:class:information-retrieval
uses:
  - urn:ngm:class:precision-recall-curve
partOf:
  - urn:ngm:class:model-performance
  - urn:ngm:class:classification-evaluation
relatedTo:
  - urn:ngm:class:mlops
  - urn:ngm:class:model-governance
  - urn:ngm:class:algorithmic-fairness
---

# F1 Score

A classification performance metric representing the harmonic mean of precision and recall, providing a single score that balances a model's ability to avoid false positives (precision) with its ability to avoid false negatives (recall), calculated to give equal weight to both metrics whilst penalising extreme imbalances, particularly useful for comparing models or setting decision thresholds when both prediction reliability and completeness are important and when class distributions are imbalanced.
