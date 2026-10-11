---
okf_version: "0.2"
type: Class
title: Data Management
resource: urn:ngm:class:data-management
domain: data
description: Data Management is the disciplined set of practices, architectures, and technologies for acquiring, validating, storing, organising, protecting, and retiring data across its full lifecycle. It encompasses data modelling, quality assurance, metadata governance, access control, and lineage tracking to ensure data assets remain accurate, discoverable, and trustworthy. In AI and distributed-systems co
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:infrastructure
hasPart:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-quality
  - urn:ngm:class:metadata-management
  - urn:ngm:class:data-lineage
  - urn:ngm:class:data-catalogue
  - urn:ngm:class:data-lake
  - urn:ngm:class:database-system
  - urn:ngm:class:vector-database
  - urn:ngm:class:graph-database
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:data-integration
  - urn:ngm:class:data-storage
requires:
  - urn:ngm:class:data-storage
  - urn:ngm:class:data-security
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:machine-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:data-analytics
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:machine-learning
contrastsWith:
  - urn:ngm:class:data-hoarding
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:metaverse-technology
supports:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:knowledge-graph
standardizedBy:
  - urn:ngm:class:dama-dmbok
  - urn:ngm:class:gdpr
relatedTo:
  - urn:ngm:class:information-management
  - urn:ngm:class:distributed-system
  - urn:ngm:class:data-architecture
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:software-engineering
---

# Data Management

Data Management is the disciplined set of practices, architectures, and technologies for acquiring, validating, storing, organising, protecting, and retiring data across its full lifecycle. It encompasses data modelling, quality assurance, metadata governance, access control, and lineage tracking to ensure data assets remain accurate, discoverable, and trustworthy. In AI and distributed-systems contexts it additionally covers ingestion pipelines, versioned feature stores, reproducible training datasets, and consent frameworks. Effective data management underpins regulatory compliance, interoperability, and the reliability of analytical and machine-learning workloads.
