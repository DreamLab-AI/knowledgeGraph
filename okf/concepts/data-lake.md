---
okf_version: "0.2"
type: Class
title: Data Lake
resource: urn:ngm:class:data-lake
domain: data
description: A centralized repository that stores structured, semi-structured, and unstructured data at any scale in its native format, deferring schema enforcement to query time (schema-on-read). Data lakes enable big-data analytics, machine learning pipelines, and exploratory analysis without upfront data modelling, serving as the foundational ingestion layer for modern data architectures.
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:data-storage
  - urn:ngm:class:artificial-intelligence
hasPart:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:batch-processing
  - urn:ngm:class:metadata-catalog
  - urn:ngm:class:object-storage
requires:
  - urn:ngm:class:distributed-file-system
  - urn:ngm:class:cloud-storage
enables:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:data-analytics
  - urn:ngm:class:exploratory-data-analysis
contrastsWith:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:relational-database
bridgesTo:
  - urn:ngm:class:lakehouse-architecture
  - urn:ngm:class:knowledge-graph
uses:
  - urn:ngm:class:data-governance
  - urn:ngm:class:vector-database
  - urn:ngm:class:apache-parquet
  - urn:ngm:class:apache-iceberg
supports:
  - urn:ngm:class:stream-processing
  - urn:ngm:class:real-time-analytics
partOf:
  - urn:ngm:class:data-architecture
relatedTo:
  - urn:ngm:class:data-fabric-architecture
  - urn:ngm:class:graph-database
  - urn:ngm:class:data-mesh
---

# Data Lake

A centralized repository that stores structured, semi-structured, and unstructured data at any scale in its native format, deferring schema enforcement to query time (schema-on-read). Data lakes enable big-data analytics, machine learning pipelines, and exploratory analysis without upfront data modelling, serving as the foundational ingestion layer for modern data architectures.
