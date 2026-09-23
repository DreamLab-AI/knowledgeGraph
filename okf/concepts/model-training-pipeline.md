---
okf_version: "0.2"
type: Class
title: Model Training Pipeline
resource: urn:ngm:class:model-training-pipeline
domain: machine-learning
description: A model training pipeline is the orchestrated sequence of stages that transforms raw data into a trained, validated machine-learning model ready for deployment. It typically chains data ingestion and preprocessing, feature engineering, model fitting, hyperparameter tuning and evaluation into a reproducible, automatable workflow. As a backbone of MLOps, the pipeline enforces consistency, versioning
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:model-training
hasPart:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:model-evaluation
requires:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:model-deployment
implements:
  - urn:ngm:class:model-evaluation
uses:
  - urn:ngm:class:loss-function
  - urn:ngm:class:data-preprocessing
supports:
  - urn:ngm:class:mlops
partOf:
  - urn:ngm:class:mlops
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:deep-learning
---

# Model Training Pipeline

A model training pipeline is the orchestrated sequence of stages that transforms raw data into a trained, validated machine-learning model ready for deployment. It typically chains data ingestion and preprocessing, feature engineering, model fitting, hyperparameter tuning and evaluation into a reproducible, automatable workflow. As a backbone of MLOps, the pipeline enforces consistency, versioning and repeatability across training runs.
