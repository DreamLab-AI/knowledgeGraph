---
okf_version: "0.2"
type: Class
title: ETL Pipeline
resource: urn:ngm:class:etl-pipeline
domain: artificial-intelligence
description: An Extract-Transform-Load pipeline that automates the movement of data from heterogeneous source systems, applies normalisation and enrichment transformations, and loads the results into target data stores such as data warehouses or feature stores. ETL pipelines are foundational to data engineering and AI/ML workflows.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-engineering
hasPart:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-integration
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:extract-phase
  - urn:ngm:class:transform-phase
  - urn:ngm:class:load-phase
  - urn:ngm:class:staging-area
  - urn:ngm:class:data-quality-check
  - urn:ngm:class:schema-validation
  - urn:ngm:class:data-lineage
  - urn:ngm:class:orchestration-engine
requires:
  - urn:ngm:class:source-system
  - urn:ngm:class:target-data-store
  - urn:ngm:class:data-schema
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:orchestration-engine
  - urn:ngm:class:schema-registry
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:predictive-analytics
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:feature-store
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:regulatory-reporting
  - urn:ngm:class:digital-twin
dependsOn:
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:apache-spark
  - urn:ngm:class:apache-airflow
  - urn:ngm:class:distributed-systems-domain
  - urn:ngm:class:stream-processing
implements:
  - urn:ngm:class:data-integration
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-quality-management
  - urn:ngm:class:data-lineage
  - urn:ngm:class:schema-evolution-handling
contrastsWith:
  - urn:ngm:class:elt-pipeline
  - urn:ngm:class:batch-processing
  - urn:ngm:class:manual-data-entry
  - urn:ngm:class:direct-database-integration
uses:
  - urn:ngm:class:apache-spark
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:apache-airflow
  - urn:ngm:class:dbt
  - urn:ngm:class:fivetran
  - urn:ngm:class:airbyte
  - urn:ngm:class:databricks
  - urn:ngm:class:snowflake
  - urn:ngm:class:sql
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-twin
  - urn:ngm:class:data-science
  - urn:ngm:class:operational-analytics
standardizedBy:
  - urn:ngm:class:iso-8000
  - urn:ngm:class:dama-dmbok
  - urn:ngm:class:gdpr
  - urn:ngm:class:nhs-dspt
relatedTo:
  - urn:ngm:class:data-lake
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:feature-store
  - urn:ngm:class:data-versioning
  - urn:ngm:class:database-system
  - urn:ngm:class:stream-processing
  - urn:ngm:class:data-mesh
  - urn:ngm:class:lakehouse-architecture
---

# ETL Pipeline

An Extract-Transform-Load pipeline that automates the movement of data from heterogeneous source systems, applies normalisation and enrichment transformations, and loads the results into target data stores such as data warehouses or feature stores. ETL pipelines are foundational to data engineering and AI/ML workflows.
