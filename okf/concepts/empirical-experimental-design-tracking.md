---
okf_version: "0.2"
type: Class
title: Experiment Tracking
resource: urn:ngm:class:empirical-experimental-design-tracking
domain: artificial-intelligence
description: Experiment tracking is the practice of recording the configuration, code, data, and results of machine learning experiments so they can be compared and reproduced, enabling teams to audit, iterate, and roll back to prior model states. It is a core discipline within MLOps.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:scientific-method
  - urn:ngm:class:metadata-management
hasPart:
  - urn:ngm:class:hyperparameter-logging
  - urn:ngm:class:metric-logging
  - urn:ngm:class:artifact-versioning
  - urn:ngm:class:run-comparison
  - urn:ngm:class:model-registry
  - urn:ngm:class:prompt-management
requires:
  - urn:ngm:class:model-training
  - urn:ngm:class:data-versioning
  - urn:ngm:class:reproducibility
  - urn:ngm:class:version-control
  - urn:ngm:class:data-pipeline
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:model-comparison
  - urn:ngm:class:model-registry
  - urn:ngm:class:continuous-training
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:ai-governance
  - urn:ngm:class:reproducibility
  - urn:ngm:class:collaborative-research
dependsOn:
  - urn:ngm:class:version-control
  - urn:ngm:class:metadata-management
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:workflow-orchestration
implements:
  - urn:ngm:class:scientific-method
  - urn:ngm:class:audit-trail
  - urn:ngm:class:data-lineage
contrastsWith:
  - urn:ngm:class:ad-hoc-experimentation
  - urn:ngm:class:notebook-based-development
bridgesTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:software-engineering
  - urn:ngm:class:platform-engineering
uses:
  - urn:ngm:class:mlflow
  - urn:ngm:class:weights-and-biases
  - urn:ngm:class:open-source
  - urn:ngm:class:dvc
  - urn:ngm:class:kubeflow
  - urn:ngm:class:ci-cd
supports:
  - urn:ngm:class:collaborative-research
  - urn:ngm:class:model-governance
  - urn:ngm:class:ai-governance
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:model-monitoring
standardizedBy:
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:iso-iec-42001
  - urn:ngm:class:eu-ai-act-regulatory-instrument
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:hyperparameter-tuning
  - urn:ngm:class:ci-cd-automation
  - urn:ngm:class:ci-cd
  - urn:ngm:class:feature-store
  - urn:ngm:class:model-serving
---

# Experiment Tracking

Experiment tracking is the practice of recording the configuration, code, data, and results of machine learning experiments so they can be compared and reproduced, enabling teams to audit, iterate, and roll back to prior model states. It is a core discipline within MLOps.
