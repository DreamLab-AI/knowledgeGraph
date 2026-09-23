---
okf_version: "0.2"
type: Class
title: Model Performance
resource: urn:ngm:class:model-performance
domain: artificial-intelligence
description: The quantitative and qualitative measure of how effectively an artificial intelligence model accomplishes its designated tasks, typically assessed through statistical metrics evaluating prediction accuracy, reliability, generalisability, computational efficiency, and robustness, considered across different data distributions, operational conditions, and stakeholder requirements, serving as a criti
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:accuracy
  - urn:ngm:class:f1-score
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:precision
  - urn:ngm:class:recall
  - urn:ngm:class:roc-curve
requires:
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:model-training
  - urn:ngm:class:test-dataset
  - urn:ngm:class:evaluation-metric
enables:
  - urn:ngm:class:model-selection
  - urn:ngm:class:hyperparameter-tuning
dependsOn:
  - urn:ngm:class:training-data
  - urn:ngm:class:data-drift
contrastsWith:
  - urn:ngm:class:overfitting
  - urn:ngm:class:underfitting
bridgesTo:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:ai-model-card
partOf:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-lifecycle
relatedTo:
  - urn:ngm:class:fairness
  - urn:ngm:class:robustness
  - urn:ngm:class:ai-monitoring
  - urn:ngm:class:calibration
  - urn:ngm:class:explainability
---

# Model Performance

The quantitative and qualitative measure of how effectively an artificial intelligence model accomplishes its designated tasks, typically assessed through statistical metrics evaluating prediction accuracy, reliability, generalisability, computational efficiency, and robustness, considered across different data distributions, operational conditions, and stakeholder requirements, serving as a critical basis for model selection, deployment decisions, ongoing monitoring, and continuous improvement throughout the AI lifecycle.
