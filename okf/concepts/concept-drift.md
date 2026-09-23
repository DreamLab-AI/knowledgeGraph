---
okf_version: "0.2"
type: Class
title: Concept Drift
resource: urn:ngm:class:concept-drift
domain: artificial-intelligence
description: Concept Drift is the phenomenon in which the statistical properties of the target variable that a machine learning model was trained to predict change over time, causing model performance to degrade. Drift can be abrupt, gradual, or recurring, and may stem from evolving user behaviour, environmental shifts, or data collection changes. Detecting and adapting to concept drift is essential for mainta
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:machine-learning-discipline-technique
  - urn:ngm:class:distribution-shift
hasPart:
  - urn:ngm:class:adwin
  - urn:ngm:class:drift-detection-method
  - urn:ngm:class:page-hinkley-test
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:statistical-process-control
  - urn:ngm:class:population-stability-index
  - urn:ngm:class:kolmogorov-smirnov-test
requires:
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:statistics
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:data-quality
  - urn:ngm:class:observability
  - urn:ngm:class:streaming-data
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:feature-engineering
enables:
  - urn:ngm:class:retraining
  - urn:ngm:class:continual-learning
  - urn:ngm:class:online-learning
  - urn:ngm:class:domain-adaptation
  - urn:ngm:class:active-learning
  - urn:ngm:class:ai-governance
  - urn:ngm:class:mlops
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:model-training
dependsOn:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:streaming-data
  - urn:ngm:class:data-quality
  - urn:ngm:class:observability
  - urn:ngm:class:feature-store
  - urn:ngm:class:model-registry
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:data-annotation
implements:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:information-theory
  - urn:ngm:class:statistical-hypothesis-testing
contrastsWith:
  - urn:ngm:class:data-drift
  - urn:ngm:class:covariate-shift
  - urn:ngm:class:catastrophic-forgetting
  - urn:ngm:class:catastrophic-risk-assessment
uses:
  - urn:ngm:class:information-theory
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:ensemble-methods
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:feature-store
  - urn:ngm:class:model-registry
  - urn:ngm:class:machine-learning-discipline-framework
  - urn:ngm:class:bayesian-deep-learning
supports:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:observability
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-lifecycle
  - urn:ngm:class:machine-learning-operations
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:model-training-pipeline
standardizedBy:
  - urn:ngm:class:machine-learning-discipline-techniques-survey
  - urn:ngm:class:machine-learning-md
relatedTo:
  - urn:ngm:class:mlops
  - urn:ngm:class:online-learning
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:distribution-shift
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:active-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:time-series
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:large-language-models
  - urn:ngm:class:feature-store
  - urn:ngm:class:model-registry
  - urn:ngm:class:inference
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:model-degradation
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:federated-edge-learning
  - urn:ngm:class:machine-learning-accelerator
  - urn:ngm:class:bayesian-optimisation
  - urn:ngm:class:machine-learning-discipline
---

# Concept Drift

Concept Drift is the phenomenon in which the statistical properties of the target variable that a machine learning model was trained to predict change over time, causing model performance to degrade. Drift can be abrupt, gradual, or recurring, and may stem from evolving user behaviour, environmental shifts, or data collection changes. Detecting and adapting to concept drift is essential for maintaining the reliability of deployed ML systems.
