---
okf_version: "0.2"
type: Class
title: Data Quality Management
resource: urn:ngm:class:data-quality-management
domain: data
description: Data quality management is the discipline of measuring, monitoring, and improving the accuracy, completeness, consistency, and timeliness of data across its lifecycle. It combines profiling, validation, cleansing, and continuous monitoring with governance policies that define quality expectations. Reliable data quality is a precondition for trustworthy analytics, machine learning, and regulatory r
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-quality
hasPart:
  - urn:ngm:class:data-cleaning
  - urn:ngm:class:data-integrity
requires:
  - urn:ngm:class:metadata-management
  - urn:ngm:class:data-lineage
enables:
  - urn:ngm:class:data-integrity
  - urn:ngm:class:master-data-management
dependsOn:
  - urn:ngm:class:data-governance
implements:
  - urn:ngm:class:data-governance
bridgesTo:
  - urn:ngm:class:data-observability
uses:
  - urn:ngm:class:data-observability
  - urn:ngm:class:data-catalog
supports:
  - urn:ngm:class:data-analytics
  - urn:ngm:class:machine-learning-discipline
partOf:
  - urn:ngm:class:data-governance
relatedTo:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-management
---

# Data Quality Management

Data quality management is the discipline of measuring, monitoring, and improving the accuracy, completeness, consistency, and timeliness of data across its lifecycle. It combines profiling, validation, cleansing, and continuous monitoring with governance policies that define quality expectations. Reliable data quality is a precondition for trustworthy analytics, machine learning, and regulatory reporting.
