---
okf_version: "0.2"
type: Class
title: DVC
resource: urn:ngm:class:dvc
domain: artificial-intelligence
description: DVC (Data Version Control) is an open-source, Git-integrated data and model versioning tool that applies version control semantics to machine learning datasets, trained model artefacts, and reproducible ML pipelines. It stores large binary artefacts in external object storage while committing hash-based pointer files to Git, enabling deterministic experiment replay, collaborative data science, and
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:mlops
  - urn:ngm:class:data-versioning
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:data-versioning
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:experiment-tracking
  - urn:ngm:class:artifact-metadata
  - urn:ngm:class:data-lineage
  - urn:ngm:class:empirical-experimental-design-tracking
requires:
  - urn:ngm:class:git
  - urn:ngm:class:remote-storage
  - urn:ngm:class:model-training
  - urn:ngm:class:reproducibility
enables:
  - urn:ngm:class:reproducibility
  - urn:ngm:class:model-versioning
  - urn:ngm:class:checkpoints
  - urn:ngm:class:ci-cd-pipeline
  - urn:ngm:class:data-lineage
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:hyperparameter-tuning
dependsOn:
  - urn:ngm:class:git
  - urn:ngm:class:amazon-s3
  - urn:ngm:class:google-cloud-storage
  - urn:ngm:class:azure-blob-storage
  - urn:ngm:class:docker-containerisation-platform
implements:
  - urn:ngm:class:mlops
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:continuous-integration
contrastsWith:
  - urn:ngm:class:mlflow
  - urn:ngm:class:pachyderm
  - urn:ngm:class:kubeflow
  - urn:ngm:class:apache-airflow
uses:
  - urn:ngm:class:amazon-s3
  - urn:ngm:class:google-cloud-storage
  - urn:ngm:class:azure-blob-storage
  - urn:ngm:class:git
  - urn:ngm:class:jupyter
  - urn:ngm:class:git-hub-actions
supports:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:model-serving
  - urn:ngm:class:feature-store
  - urn:ngm:class:model-registry
  - urn:ngm:class:fine-tuning
standardizedBy:
  - urn:ngm:class:lakefs
relatedTo:
  - urn:ngm:class:mlflow
  - urn:ngm:class:weights-and-biases
  - urn:ngm:class:model-registry
  - urn:ngm:class:checkpoints
  - urn:ngm:class:experiment-tracking
  - urn:ngm:class:pachyderm
  - urn:ngm:class:kubeflow
  - urn:ngm:class:lakefs
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:neptune-ai
  - urn:ngm:class:comet-ml
  - urn:ngm:class:kubernetes
---

# DVC

DVC (Data Version Control) is an open-source, Git-integrated data and model versioning tool that applies version control semantics to machine learning datasets, trained model artefacts, and reproducible ML pipelines. It stores large binary artefacts in external object storage while committing hash-based pointer files to Git, enabling deterministic experiment replay, collaborative data science, and automated CI/CD-driven ML pipelines.
