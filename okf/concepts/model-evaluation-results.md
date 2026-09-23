---
okf_version: "0.2"
type: Class
title: Model Evaluation Results
resource: urn:ngm:class:model-evaluation-results
domain: artificial-intelligence
description: Structured outputs produced during the assessment of a machine learning model's predictive performance, encompassing quantitative metrics such as accuracy, precision, recall, F1 score, and AUC alongside qualitative analyses. These results form the evidentiary basis for model selection, regulatory compliance disclosures, and AI model card documentation.
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:model-architecture
requires:
  - urn:ngm:class:model-training
  - urn:ngm:class:model-architecture
uses:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:f1-score
  - urn:ngm:class:accuracy
  - urn:ngm:class:auc
partOf:
  - urn:ngm:class:ai-model-card
relatedTo:
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:model-performance
  - urn:ngm:class:performance-benchmarks
  - urn:ngm:class:explainability
---

# Model Evaluation Results

Structured outputs produced during the assessment of a machine learning model's predictive performance, encompassing quantitative metrics such as accuracy, precision, recall, F1 score, and AUC alongside qualitative analyses. These results form the evidentiary basis for model selection, regulatory compliance disclosures, and AI model card documentation.
