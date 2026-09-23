---
okf_version: "0.2"
type: Class
title: Data Versioning
resource: urn:ngm:class:data-versioning
domain: artificial-intelligence
description: Data Versioning is the systematic practice of tracking, storing, and managing changes to datasets, model artefacts, and derived data products over time, providing reproducibility of experiments, auditability of data lineage, and governance of the full ML data supply chain. It applies software version-control semantics — branching, tagging, diffing, commit history, and rollback — to the large binar
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:data-management
  - urn:ngm:class:artificial-intelligence
hasPart:
  - urn:ngm:class:artifact-metadata
  - urn:ngm:class:data-lineage
  - urn:ngm:class:dvc
  - urn:ngm:class:data-snapshot
  - urn:ngm:class:version-control-pointer
requires:
  - urn:ngm:class:artifact-metadata
  - urn:ngm:class:data-governance
  - urn:ngm:class:version-control
  - urn:ngm:class:object-storage
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:empirical-experimental-design
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:reproducibility
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:continuous-training
  - urn:ngm:class:ai-governance
dependsOn:
  - urn:ngm:class:data-engineering
  - urn:ngm:class:object-storage
  - urn:ngm:class:version-control
implements:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:machine-learning-discipline-pipeline
contrastsWith:
  - urn:ngm:class:static-dataset
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:mlops
uses:
  - urn:ngm:class:version-control
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:object-storage
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:empirical-experimental-design-tracking
  - urn:ngm:class:feature-store
supports:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:data-governance
  - urn:ngm:class:mlops
  - urn:ngm:class:reproducibility
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
partOf:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:data-management
  - urn:ngm:class:mlops
relatedTo:
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:feature-store
  - urn:ngm:class:model-registry
  - urn:ngm:class:blockchain
  - urn:ngm:class:ci-cd
  - urn:ngm:class:data-drift
  - urn:ngm:class:data-quality
---

# Data Versioning

Data Versioning is the systematic practice of tracking, storing, and managing changes to datasets, model artefacts, and derived data products over time, providing reproducibility of experiments, auditability of data lineage, and governance of the full ML data supply chain. It applies software version-control semantics — branching, tagging, diffing, commit history, and rollback — to the large binary assets that underpin machine learning: raw datasets, processed feature stores, trained model weights, and pipeline configuration. Tools such as DVC (Data Version Control), lakeFS, and Apache Iceberg implement data versioning at different granularities, from file-level pointers through table-level snapshots to full environment branching over petabyte-scale data lakes. Data Versioning is a required foundation for reproducible science, regulatory compliance under frameworks such as the EU AI Act, and the operationalisation of mature MLOps practice.
