---
okf_version: "0.2"
type: Class
title: Schema
resource: urn:ngm:class:schema
domain: data
description: A schema is a formal specification of the structure, types and constraints that valid data must satisfy within a given system. It defines entities, their attributes, relationships and permissible values, acting as a contract between data producers and consumers. Schemas underpin validation, interoperability and the reliable exchange of structured data across applications.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-model
hasPart:
  - urn:ngm:class:type-system
requires:
  - urn:ngm:class:data-validation
enables:
  - urn:ngm:class:data-validation
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:type-system
implements:
  - urn:ngm:class:data-schema
contrastsWith:
  - urn:ngm:class:data-format
bridgesTo:
  - urn:ngm:class:knowledge-graph
uses:
  - urn:ngm:class:structured-data
supports:
  - urn:ngm:class:data-management
standardizedBy:
  - urn:ngm:class:xml-schema
partOf:
  - urn:ngm:class:data-model
relatedTo:
  - urn:ngm:class:metadata
  - urn:ngm:class:ontology
  - urn:ngm:class:data-format
---

# Schema

A schema is a formal specification of the structure, types and constraints that valid data must satisfy within a given system. It defines entities, their attributes, relationships and permissible values, acting as a contract between data producers and consumers. Schemas underpin validation, interoperability and the reliable exchange of structured data across applications.
