---
okf_version: "0.2"
type: Class
title: Model Selection
resource: urn:ngm:class:model-selection
domain: machine-learning
description: Model selection is the process of choosing the most appropriate machine learning model, algorithm family, or configuration for a given task from a set of candidates. It balances predictive performance against constraints such as interpretability, inference cost, and generalisation, typically using validation data and metrics rather than the training error. Techniques include cross-validation, info
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:performance-metrics
requires:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:benchmarking
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-comparison
dependsOn:
  - urn:ngm:class:model-performance
  - urn:ngm:class:generalisation
uses:
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:accuracy
  - urn:ngm:class:auc
supports:
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:machine-learning-model
partOf:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:overfitting
  - urn:ngm:class:deep-learning
---

# Model Selection

Model selection is the process of choosing the most appropriate machine learning model, algorithm family, or configuration for a given task from a set of candidates. It balances predictive performance against constraints such as interpretability, inference cost, and generalisation, typically using validation data and metrics rather than the training error. Techniques include cross-validation, information criteria, and held-out benchmarking, with the goal of selecting the model expected to perform best on unseen data.
