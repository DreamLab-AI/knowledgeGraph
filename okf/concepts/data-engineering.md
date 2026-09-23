---
okf_version: "0.2"
type: Class
title: Data Engineering
resource: urn:ngm:class:data-engineering
domain: data
description: "Data Engineering is the discipline concerned with designing, building and operating the systems that collect, store, transform and serve data at scale. It covers data pipelines, storage architectures, batch and streaming processing, data modelling and the orchestration and monitoring of workflows. Its purpose is to make reliable, well-structured data available for analytics, reporting and machine "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:infrastructure-domain
hasPart:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-lake
  - urn:ngm:class:stream-processing
  - urn:ngm:class:orchestration
  - urn:ngm:class:etl-pipeline
requires:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:data-modelling
  - urn:ngm:class:schema-management
  - urn:ngm:class:distributed-systems-domain
enables:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:data-science
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:machine-learning-domain
implements:
  - urn:ngm:class:data-lineage
  - urn:ngm:class:data-quality-management
contrastsWith:
  - urn:ngm:class:data-science
bridgesTo:
  - urn:ngm:class:machine-learning-operations
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:data-science
  - urn:ngm:class:stream-processing
uses:
  - urn:ngm:class:apache-spark
  - urn:ngm:class:apache-kafka
  - urn:ngm:class:object-storage
supports:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-observability
relatedTo:
  - urn:ngm:class:data-mesh
  - urn:ngm:class:lakehouse-architecture
---

# Data Engineering

Data Engineering is the discipline concerned with designing, building and operating the systems that collect, store, transform and serve data at scale. It covers data pipelines, storage architectures, batch and streaming processing, data modelling and the orchestration and monitoring of workflows. Its purpose is to make reliable, well-structured data available for analytics, reporting and machine learning.
