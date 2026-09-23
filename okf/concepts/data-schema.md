---
okf_version: "0.2"
type: Class
title: Data Schema
resource: urn:ngm:class:data-schema
domain: data
description: "A Data Schema is a formal specification that defines the structure, types, constraints, and semantics of data within a system or exchange protocol. It enumerates fields, their data types, cardinality rules, allowed values, and relationships between entities, enabling machines to validate conformance and enabling humans to understand data contracts. Data schemas are expressed in formalisms such as "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:schema-definition
hasPart:
  - urn:ngm:class:constraint
requires:
  - urn:ngm:class:data-type
  - urn:ngm:class:namespace
enables:
  - urn:ngm:class:knowledge-representation
  - urn:ngm:class:schema-registry
  - urn:ngm:class:data-validation
  - urn:ngm:class:api-contract
  - urn:ngm:class:data-interoperability
contrastsWith:
  - urn:ngm:class:database-system
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:rdf
  - urn:ngm:class:json-ld
  - urn:ngm:class:xml-schema-definition
  - urn:ngm:class:shacl
  - urn:ngm:class:owl
supports:
  - urn:ngm:class:schema-versioning
  - urn:ngm:class:data-governance
  - urn:ngm:class:linked-data
relatedTo:
  - urn:ngm:class:ontology
  - urn:ngm:class:metadata-schema
  - urn:ngm:class:credential-schema
  - urn:ngm:class:knowledge-graph
---

# Data Schema

A Data Schema is a formal specification that defines the structure, types, constraints, and semantics of data within a system or exchange protocol. It enumerates fields, their data types, cardinality rules, allowed values, and relationships between entities, enabling machines to validate conformance and enabling humans to understand data contracts. Data schemas are expressed in formalisms such as JSON Schema, XML Schema Definition, RDF SHACL, or OWL, and are versioned to manage evolution over time. They underpin interoperability between systems, database design, API contracts, and linked-data publishing.
