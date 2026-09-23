---
okf_version: "0.2"
type: Class
title: Schema Management
resource: urn:ngm:class:schema-management
domain: data
description: "Schema management is the practice of defining, versioning, evolving, and enforcing the structure of data across systems and over time. It governs how data schemas change without breaking producers and consumers, using compatibility rules, schema registries, and validation to keep pipelines reliable. As a discipline within data governance, it ensures that interfaces between services and analytical "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-governance
hasPart:
  - urn:ngm:class:data-schema
  - urn:ngm:class:data-validation
requires:
  - urn:ngm:class:data-schema
  - urn:ngm:class:version-control
  - urn:ngm:class:data-validation
enables:
  - urn:ngm:class:data-integration
  - urn:ngm:class:data-quality
bridgesTo:
  - urn:ngm:class:data-architecture
uses:
  - urn:ngm:class:schema-registry
  - urn:ngm:class:data-validation
supports:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:interoperability
partOf:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:metadata-management
  - urn:ngm:class:master-data-management
  - urn:ngm:class:data-catalog
---

# Schema Management

Schema management is the practice of defining, versioning, evolving, and enforcing the structure of data across systems and over time. It governs how data schemas change without breaking producers and consumers, using compatibility rules, schema registries, and validation to keep pipelines reliable. As a discipline within data governance, it ensures that interfaces between services and analytical stores remain consistent and trustworthy as requirements evolve.
