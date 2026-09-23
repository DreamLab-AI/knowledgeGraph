---
okf_version: "0.2"
type: Class
title: Data Integration
resource: urn:ngm:class:data-integration
domain: data
description: Data Integration is the set of processes, architectures, and tools that combine data from multiple heterogeneous sources — including relational databases, APIs, event streams, file systems, and third-party services — into a unified, consistent, and queryable representation suitable for analytics, machine learning, or operational workloads. It encompasses extract-transform-load (ETL) and extract-lo
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:change-data-capture
  - urn:ngm:class:identity-resolution
  - urn:ngm:class:schema-harmonisation
requires:
  - urn:ngm:class:data-governance
  - urn:ngm:class:metadata-management
enables:
  - urn:ngm:class:data-interoperability
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:lakehouse-architecture
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:lakehouse-architecture
dependsOn:
  - urn:ngm:class:data-quality
  - urn:ngm:class:interoperability
contrastsWith:
  - urn:ngm:class:data-federation
  - urn:ngm:class:data-replication
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:blockchain
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:message-broker
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-catalog
  - urn:ngm:class:data-catalogue
standardizedBy:
  - urn:ngm:class:sql
  - urn:ngm:class:open-lineage
---

# Data Integration

Data Integration is the set of processes, architectures, and tools that combine data from multiple heterogeneous sources — including relational databases, APIs, event streams, file systems, and third-party services — into a unified, consistent, and queryable representation suitable for analytics, machine learning, or operational workloads. It encompasses extract-transform-load (ETL) and extract-load-transform (ELT) pipelines, schema harmonisation, semantic mapping, identity resolution, and real-time federation patterns. Modern data integration extends beyond batch movement to include change-data capture (CDC), streaming integration via message brokers, and virtual federation through query engines, enabling organisations to maintain a single source of truth across distributed data estates. In AI and spatial-computing contexts, data integration connects sensor telemetry, digital-twin feeds, user-behaviour streams, and knowledge-graph stores into coherent data products that power downstream inference and immersive experiences.
