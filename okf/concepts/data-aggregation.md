---
okf_version: "0.2"
type: Class
title: Data Aggregation
resource: urn:ngm:class:data-aggregation
domain: data
description: Data aggregation is the systematic process of collecting, combining, and summarising records from multiple heterogeneous sources into a unified, reduced representation suitable for analysis, reporting, or further processing. It encompasses both batch and streaming paradigms, applying operations such as grouping, counting, summing, averaging, and deduplication to transform raw, high-volume data int
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:data-integration
hasPart:
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:stream-processing
  - urn:ngm:class:batch-processing
  - urn:ngm:class:etl-pipeline
requires:
  - urn:ngm:class:data-integration
  - urn:ngm:class:schema-mapping
  - urn:ngm:class:data-pipeline
enables:
  - urn:ngm:class:community-detection
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:olap
dependsOn:
  - urn:ngm:class:data-quality
  - urn:ngm:class:metadata-management
contrastsWith:
  - urn:ngm:class:data-replication
  - urn:ngm:class:data-disaggregation
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:semantic-web-linked-data-standard
uses:
  - urn:ngm:class:sql
  - urn:ngm:class:map-reduce
  - urn:ngm:class:apache-spark
  - urn:ngm:class:message-queue
  - urn:ngm:class:mapreduce
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:federated-learning
relatedTo:
  - urn:ngm:class:data-lake
  - urn:ngm:class:event-sourcing
---

# Data Aggregation

Data aggregation is the systematic process of collecting, combining, and summarising records from multiple heterogeneous sources into a unified, reduced representation suitable for analysis, reporting, or further processing. It encompasses both batch and streaming paradigms, applying operations such as grouping, counting, summing, averaging, and deduplication to transform raw, high-volume data into structured, lower-dimensionality outputs. Aggregation underpins analytical workflows from simple dashboards to complex federated query engines, acting as a bridge between raw data capture and actionable intelligence. It is distinct from raw data replication in that it deliberately reduces detail while preserving statistically significant structure.
