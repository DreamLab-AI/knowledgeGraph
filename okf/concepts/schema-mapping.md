---
okf_version: "0.2"
type: Class
title: Schema Mapping
resource: urn:ngm:class:schema-mapping
domain: data
description: "Schema mapping is the specification of correspondences between the elements of two or more data schemas so that data structured under one can be translated to another. It captures how fields, types and relationships relate, including transformations, defaults and conflict resolution. Schema mapping is a core enabler of data integration, migration and semantic interoperability across heterogeneous "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-integration
requires:
  - urn:ngm:class:schema
  - urn:ngm:class:data-model
enables:
  - urn:ngm:class:data-integration
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:entity-resolution
dependsOn:
  - urn:ngm:class:schema
  - urn:ngm:class:data-quality
bridgesTo:
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:interoperability
uses:
  - urn:ngm:class:ontology-alignment
  - urn:ngm:class:data-model
  - urn:ngm:class:ontology
supports:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:master-data-management
partOf:
  - urn:ngm:class:data-integration
relatedTo:
  - urn:ngm:class:entity-resolution
  - urn:ngm:class:ontology-alignment
  - urn:ngm:class:data-governance
---

# Schema Mapping

Schema mapping is the specification of correspondences between the elements of two or more data schemas so that data structured under one can be translated to another. It captures how fields, types and relationships relate, including transformations, defaults and conflict resolution. Schema mapping is a core enabler of data integration, migration and semantic interoperability across heterogeneous systems.
