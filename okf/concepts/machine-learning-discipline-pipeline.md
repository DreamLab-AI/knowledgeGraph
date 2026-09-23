---
okf_version: "0.2"
type: Class
title: Machine Learning Pipeline
resource: urn:ngm:class:machine-learning-discipline-pipeline
domain: machine-learning
description: A Machine Learning Pipeline is the end-to-end automated workflow for developing, training, validating, deploying, and monitoring ML models. It encompasses data ingestion, preprocessing, feature engineering, model selection, hyperparameter tuning, training, evaluation, deployment, and continuous monitoring, and typically adopts MLOps practices with automated orchestration, versioning, and experimen
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-monitoring
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:data-versioning
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:inference
  - urn:ngm:class:continuous-training
  - urn:ngm:class:reproducibility
dependsOn:
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:workflow-orchestration
implements:
  - urn:ngm:class:mlops
  - urn:ngm:class:continuous-integration
contrastsWith:
  - urn:ngm:class:ad-hoc-experimentation
bridgesTo:
  - urn:ngm:class:data-engineering
  - urn:ngm:class:software-engineering
uses:
  - urn:ngm:class:performance-metrics
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:model-registry
  - urn:ngm:class:training-data
supports:
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:model-governance
relatedTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:auto-ml
---

# Machine Learning Pipeline

A Machine Learning Pipeline is the end-to-end automated workflow for developing, training, validating, deploying, and monitoring ML models. It encompasses data ingestion, preprocessing, feature engineering, model selection, hyperparameter tuning, training, evaluation, deployment, and continuous monitoring, and typically adopts MLOps practices with automated orchestration, versioning, and experiment tracking to ensure reproducibility, scalability, and maintainability of ML systems in production environments.
