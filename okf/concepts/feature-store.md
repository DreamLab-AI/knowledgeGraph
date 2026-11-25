---
okf_version: "0.2"
type: Class
title: Feature Store
resource: urn:ngm:class:feature-store
domain: machine-learning
description: A centralised repository for storing, managing, versioning, and serving machine learning features at scale. It ensures point-in-time consistency between training and online inference, prevents training-serving skew, and enables cross-team feature reuse so that features computed once can be shared across multiple models and pipelines.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:artificial-intelligence
hasPart:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:training-data
requires:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-lake
  - urn:ngm:class:data-warehouse
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:machine-learning-discipline-pipeline
dependsOn:
  - urn:ngm:class:data-engineering
contrastsWith:
  - urn:ngm:class:data-mart
  - urn:ngm:class:model-registry
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:data-mesh
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:apache-spark
  - urn:ngm:class:apache-kafka
supports:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:recommendation-system
partOf:
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:vector-database
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:empirical-experimental-design-tracking
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Feature Store

A centralised repository for storing, managing, versioning, and serving machine learning features at scale. It ensures point-in-time consistency between training and online inference, prevents training-serving skew, and enables cross-team feature reuse so that features computed once can be shared across multiple models and pipelines.
