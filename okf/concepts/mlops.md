---
okf_version: "0.2"
type: Class
title: MLOps
resource: urn:ngm:class:mlops
domain: ai
description: MLOps (Machine Learning Operations) is the set of practices, tools, and cultural norms that operationalise machine learning models at production scale by applying DevOps and Site Reliability Engineering principles to the full ML lifecycle. It covers end-to-end automation of ML pipelines — data ingestion, feature engineering, model training, evaluation, deployment, serving, and continuous retrainin
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:model-registry
  - urn:ngm:class:feature-store
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:machine-learning-discipline-pipeline
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:data-versioning
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:feature-engineering
enables:
  - urn:ngm:class:ai-deployment
  - urn:ngm:class:inference
  - urn:ngm:class:model-training
  - urn:ngm:class:continuous-training
  - urn:ngm:class:model-monitoring
dependsOn:
  - urn:ngm:class:data-governance
  - urn:ngm:class:ai-monitoring
contrastsWith:
  - urn:ngm:class:devops
bridgesTo:
  - urn:ngm:class:data-engineering
  - urn:ngm:class:platform-engineering
uses:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:kubernetes
  - urn:ngm:class:container
  - urn:ngm:class:workflow-orchestration
  - urn:ngm:class:ci-cd-automation
  - urn:ngm:class:ci-cd
supports:
  - urn:ngm:class:explainability
  - urn:ngm:class:ai-governance
  - urn:ngm:class:reproducibility
  - urn:ngm:class:explainability
partOf:
  - urn:ngm:class:ai-lifecycle
relatedTo:
  - urn:ngm:class:data-drift
  - urn:ngm:class:a-b-testing
  - urn:ngm:class:model-serving
---

# MLOps

MLOps (Machine Learning Operations) is the set of practices, tools, and cultural norms that operationalise machine learning models at production scale by applying DevOps and Site Reliability Engineering principles to the full ML lifecycle. It covers end-to-end automation of ML pipelines — data ingestion, feature engineering, model training, evaluation, deployment, serving, and continuous retraining — and addresses the unique challenge that code, data, and model weights all evolve independently and must be versioned, tested, and governed together. MLOps introduces specialised artefacts such as model registries, feature stores, and experiment trackers that have no direct analogue in traditional software delivery. The discipline bridges the organisational gap between data science teams and production engineering, enabling reliable, auditable, and scalable model delivery at the pace business demands.
