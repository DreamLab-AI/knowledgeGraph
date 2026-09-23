---
okf_version: "0.2"
type: Class
title: Document Store
resource: urn:ngm:class:document-store
domain: infrastructure
description: A document store is a category of NoSQL database that persists, retrieves, and manages data as self-describing documents, typically encoded as JSON, BSON, or XML. Each document is a flexible, schema-optional aggregate that groups related data together, allowing nested structures and varying fields across records. Document stores favour horizontal scalability and developer-friendly data modelling o
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:database
  - urn:ngm:class:nosql-database
hasPart:
  - urn:ngm:class:data-model
  - urn:ngm:class:query-engine
requires:
  - urn:ngm:class:persistence
enables:
  - urn:ngm:class:query-engine
dependsOn:
  - urn:ngm:class:data-format
contrastsWith:
  - urn:ngm:class:relational-database
uses:
  - urn:ngm:class:data-format
  - urn:ngm:class:persistence
supports:
  - urn:ngm:class:data-integration
partOf:
  - urn:ngm:class:database
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:data-schema
  - urn:ngm:class:schema-registry
  - urn:ngm:class:xml
---

# Document Store

A document store is a category of NoSQL database that persists, retrieves, and manages data as self-describing documents, typically encoded as JSON, BSON, or XML. Each document is a flexible, schema-optional aggregate that groups related data together, allowing nested structures and varying fields across records. Document stores favour horizontal scalability and developer-friendly data modelling over the rigid tabular schema of relational databases.
