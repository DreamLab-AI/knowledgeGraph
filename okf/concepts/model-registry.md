---
okf_version: "0.2"
type: Class
title: Model Registry
resource: urn:ngm:class:model-registry
domain: machine-learning
description: A model registry is a system for cataloguing trained machine learning models with their versions, metadata and lifecycle stage. It provides a central record that links a model to its training data, metrics and deployment status, supporting governance, reproducibility and controlled promotion across staging environments.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:mlops
  - urn:ngm:class:machine-learning-operations
hasPart:
  - urn:ngm:class:metadata
requires:
  - urn:ngm:class:data-versioning
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:model-training-pipeline
enables:
  - urn:ngm:class:model-deployment
  - urn:ngm:class:model-serving
  - urn:ngm:class:model-governance
  - urn:ngm:class:reproducibility
dependsOn:
  - urn:ngm:class:metadata-repository
contrastsWith:
  - urn:ngm:class:container-registry
  - urn:ngm:class:package-repository
bridgesTo:
  - urn:ngm:class:data-catalog
  - urn:ngm:class:asset-management
  - urn:ngm:class:mlops
  - urn:ngm:class:feature-store
uses:
  - urn:ngm:class:feature-store
  - urn:ngm:class:data-lineage-tracking
  - urn:ngm:class:semantic-versioning
supports:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:lifecycle-management
  - urn:ngm:class:audit-trail
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:mlops
  - urn:ngm:class:model-monitoring
---

# Model Registry

A model registry is a system for cataloguing trained machine learning models with their versions, metadata and lifecycle stage. It provides a central record that links a model to its training data, metrics and deployment status, supporting governance, reproducibility and controlled promotion across staging environments.
