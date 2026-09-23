---
okf_version: "0.2"
type: Class
title: Data Warehouse
resource: urn:ngm:class:data-warehouse
domain: data
description: A data warehouse is a centralised analytical repository that integrates cleansed, structured data from multiple operational sources into a subject-oriented, historical model optimised for querying and reporting. It supports business intelligence through schemas such as star and snowflake and columnar storage for fast aggregation. It is a core data-engineering asset enabling consistent enterprise a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:data-mart
  - urn:ngm:class:columnar-storage
requires:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-quality-management
  - urn:ngm:class:schema-management
enables:
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:olap
  - urn:ngm:class:self-service-analytics
  - urn:ngm:class:monitoring-dashboard
dependsOn:
  - urn:ngm:class:metadata-management
  - urn:ngm:class:object-storage
implements:
  - urn:ngm:class:star-schema
  - urn:ngm:class:snowflake-schema
contrastsWith:
  - urn:ngm:class:data-lake
bridgesTo:
  - urn:ngm:class:machine-learning-discipline-platform
  - urn:ngm:class:data-mesh
uses:
  - urn:ngm:class:sql
  - urn:ngm:class:data-catalog
relatedTo:
  - urn:ngm:class:data-engineering
  - urn:ngm:class:lakehouse-architecture
---

# Data Warehouse

A data warehouse is a centralised analytical repository that integrates cleansed, structured data from multiple operational sources into a subject-oriented, historical model optimised for querying and reporting. It supports business intelligence through schemas such as star and snowflake and columnar storage for fast aggregation. It is a core data-engineering asset enabling consistent enterprise analytics.
