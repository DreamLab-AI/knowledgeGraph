---
okf_version: "0.2"
type: Class
title: Data Warehousing
resource: urn:ngm:class:data-warehousing
domain: data
description: Data warehousing is the practice of consolidating data from multiple operational and external sources into a central, integrated, subject-oriented repository optimised for query and analysis rather than transaction processing. A data warehouse stores historical, cleansed and conformed data structured for reporting and decision support, typically populated through extract-transform-load pipelines a
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-engineering
hasPart:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-integration
requires:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-governance
  - urn:ngm:class:master-data-management
enables:
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:predictive-analytics
contrastsWith:
  - urn:ngm:class:data-lake
uses:
  - urn:ngm:class:sql
  - urn:ngm:class:relational-database
supports:
  - urn:ngm:class:data-catalog
partOf:
  - urn:ngm:class:data-engineering
relatedTo:
  - urn:ngm:class:metadata
  - urn:ngm:class:data-management
---

# Data Warehousing

Data warehousing is the practice of consolidating data from multiple operational and external sources into a central, integrated, subject-oriented repository optimised for query and analysis rather than transaction processing. A data warehouse stores historical, cleansed and conformed data structured for reporting and decision support, typically populated through extract-transform-load pipelines and queried using online analytical processing. It provides the persistent analytical substrate on which business intelligence, dashboards and downstream analytics are built.
