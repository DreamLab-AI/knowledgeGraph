---
okf_version: "0.2"
type: Class
title: Continuous Training
resource: urn:ngm:class:continuous-training
domain: artificial-intelligence
description: Continuous training is an MLOps practice in which machine-learning models are automatically retrained on fresh data on a recurring or event-driven basis to maintain predictive accuracy over time. It extends continuous integration and delivery to the model lifecycle, triggering retraining when new data arrives or when monitoring detects data or model drift. The retrained model is validated and prom
maturity: emerging
quality: 0.9
is-a:
  - urn:ngm:class:mlops
  - urn:ngm:class:machine-learning-operations
  - urn:ngm:class:ai-lifecycle
hasPart:
  - urn:ngm:class:model-training-pipeline
  - urn:ngm:class:drift-detection
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:model-registry
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:feature-store
  - urn:ngm:class:labelling-pipeline
  - urn:ngm:class:retraining-trigger
requires:
  - urn:ngm:class:feature-store
  - urn:ngm:class:model-registry
  - urn:ngm:class:data-versioning
  - urn:ngm:class:labelling-pipeline
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:continuous-integration
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-serving
  - urn:ngm:class:production-ml
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:model-governance
  - urn:ngm:class:ai-lifecycle
dependsOn:
  - urn:ngm:class:data-drift
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:feature-store
  - urn:ngm:class:concept-drift
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:feature-engineering
implements:
  - urn:ngm:class:ci-cd-automation
  - urn:ngm:class:devops
  - urn:ngm:class:automation
contrastsWith:
  - urn:ngm:class:batch-training
  - urn:ngm:class:offline-learning
  - urn:ngm:class:online-learning
  - urn:ngm:class:continual-learning
uses:
  - urn:ngm:class:model-training
  - urn:ngm:class:ci-cd-automation
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:kubeflow
  - urn:ngm:class:mlflow
  - urn:ngm:class:apache-airflow
  - urn:ngm:class:vertex-ai
  - urn:ngm:class:sagemaker
  - urn:ngm:class:evidently-ai
  - urn:ngm:class:seldon-core
  - urn:ngm:class:kubernetes
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:model-governance
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:shadow-mode-deployment
  - urn:ngm:class:model-validation
standardizedBy:
  - urn:ngm:class:mlops
partOf:
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-lifecycle
relatedTo:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:online-learning
  - urn:ngm:class:continual-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:shadow-mode-deployment
  - urn:ngm:class:canary-deployment
  - urn:ngm:class:model-validation
  - urn:ngm:class:statistical-process-control
  - urn:ngm:class:model-decay
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:large-language-models
  - urn:ngm:class:reinforcement-learning-from-human-feedback
---

# Continuous Training

Continuous training is an MLOps practice in which machine-learning models are automatically retrained on fresh data on a recurring or event-driven basis to maintain predictive accuracy over time. It extends continuous integration and delivery to the model lifecycle, triggering retraining when new data arrives or when monitoring detects data or model drift. The retrained model is validated and promoted through automated pipelines before deployment.
