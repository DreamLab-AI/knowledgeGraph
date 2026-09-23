---
okf_version: "0.2"
type: Class
title: Data Quality
resource: urn:ngm:class:data-quality
domain: data
description: Data Quality is the degree to which a dataset is fit for its intended purpose, evaluated across multiple dimensions including accuracy, completeness, consistency, timeliness, uniqueness, and validity. It encompasses the processes, standards, and metrics used to assess, monitor, cleanse, and continuously improve the reliability and trustworthiness of data assets. High data quality is a foundational
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:data-validation
  - urn:ngm:class:data-lineage
  - urn:ngm:class:data-profiling
  - urn:ngm:class:data-cleansing
requires:
  - urn:ngm:class:data-governance
  - urn:ngm:class:metadata-management
  - urn:ngm:class:data-cataloguing
enables:
  - urn:ngm:class:master-data-management
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:regulatory-compliance
dependsOn:
  - urn:ngm:class:data-integration
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:etl-pipeline
contrastsWith:
  - urn:ngm:class:data-debt
  - urn:ngm:class:dark-data
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:feature-engineering
uses:
  - urn:ngm:class:statistical-process-control
  - urn:ngm:class:entity-resolution
supports:
  - urn:ngm:class:decision-support
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:decision-support
standardizedBy:
  - urn:ngm:class:iso-8000
  - urn:ngm:class:dama-dmbok
partOf:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:data-observability
  - urn:ngm:class:data-mesh
---

# Data Quality

Data Quality is the degree to which a dataset is fit for its intended purpose, evaluated across multiple dimensions including accuracy, completeness, consistency, timeliness, uniqueness, and validity. It encompasses the processes, standards, and metrics used to assess, monitor, cleanse, and continuously improve the reliability and trustworthiness of data assets. High data quality is a foundational prerequisite for sound analytics, machine learning model performance, regulatory compliance, and effective decision-making across all data-driven disciplines. Its absence propagates errors through downstream systems, undermining the value of even sophisticated analytical and AI pipelines.
