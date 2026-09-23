---
okf_version: "0.2"
type: Class
title: Model Validation
resource: urn:ngm:class:model-validation
domain: artificial-intelligence
description: "Model validation is the process of assessing whether a trained model meets its intended requirements for accuracy, robustness, fairness and generalisation before it is trusted in practice. It uses held-out data, cross-validation and stress tests to estimate performance on unseen inputs and to detect overfitting, bias or specification gaps. Distinct from evaluation metrics alone, validation judges "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:ai-lifecycle
hasPart:
  - urn:ngm:class:cross-validation
  - urn:ngm:class:model-evaluation
requires:
  - urn:ngm:class:data-quality
  - urn:ngm:class:model-training
enables:
  - urn:ngm:class:model-selection
  - urn:ngm:class:model-deployment
uses:
  - urn:ngm:class:confusion-matrix
  - urn:ngm:class:sensitivity-analysis
supports:
  - urn:ngm:class:model-monitoring
partOf:
  - urn:ngm:class:ai-lifecycle
relatedTo:
  - urn:ngm:class:interpretability
  - urn:ngm:class:explainability
  - urn:ngm:class:hyperparameter-tuning
---

# Model Validation

Model validation is the process of assessing whether a trained model meets its intended requirements for accuracy, robustness, fairness and generalisation before it is trusted in practice. It uses held-out data, cross-validation and stress tests to estimate performance on unseen inputs and to detect overfitting, bias or specification gaps. Distinct from evaluation metrics alone, validation judges fitness for purpose within the model lifecycle.
