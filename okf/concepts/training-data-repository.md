---
okf_version: "0.2"
type: Class
title: Training Data Repository
resource: urn:ngm:class:training-data-repository
domain: artificial-intelligence
description: A centralized or distributed storage system for collecting, organizing, versioning, and managing datasets used to train AI and machine learning models, including data provenance tracking, quality assurance, and access control.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:training-data
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:data-versioning
requires:
  - urn:ngm:class:data-provenance
  - urn:ngm:class:data-governance
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:federated-learning
bridgesTo:
  - urn:ngm:class:data-management
---

# Training Data Repository

A centralized or distributed storage system for collecting, organizing, versioning, and managing datasets used to train AI and machine learning models, including data provenance tracking, quality assurance, and access control.
