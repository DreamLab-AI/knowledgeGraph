---
okf_version: "0.2"
type: Class
title: Data Infrastructure
resource: urn:ngm:class:data-infrastructure
domain: data
description: Data infrastructure is the integrated set of systems, platforms, and pipelines that ingest, store, process, govern, and serve data across an organisation. It encompasses storage layers such as data warehouses and data lakes, processing and integration pipelines, cataloguing and governance, and the compute fabric that supports analytics and machine learning. Data infrastructure provides the reliabl
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-lake
  - urn:ngm:class:data-pipeline
requires:
  - urn:ngm:class:data-engineering
  - urn:ngm:class:data-integration
enables:
  - urn:ngm:class:data-architecture
dependsOn:
  - urn:ngm:class:networking
  - urn:ngm:class:scalability
bridgesTo:
  - urn:ngm:class:data-governance
  - urn:ngm:class:observability
uses:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:database
supports:
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:data-catalog
  - urn:ngm:class:reliability
---

# Data Infrastructure

Data infrastructure is the integrated set of systems, platforms, and pipelines that ingest, store, process, govern, and serve data across an organisation. It encompasses storage layers such as data warehouses and data lakes, processing and integration pipelines, cataloguing and governance, and the compute fabric that supports analytics and machine learning. Data infrastructure provides the reliable, scalable foundation on which data products and decision-making depend.
