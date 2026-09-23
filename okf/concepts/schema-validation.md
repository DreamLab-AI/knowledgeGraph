---
okf_version: "0.2"
type: Class
title: Schema Validation
resource: urn:ngm:class:schema-validation
domain: standards
description: Schema validation is the process of checking that a data instance conforms to a formally declared structure, asserting required fields, types, value constraints and relationships before the data is accepted or processed. It uses a schema language such as JSON Schema or XML Schema to define the contract and a validator to report conformance and errors. Schema validation enforces data integrity at s
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-validation
  - urn:ngm:class:json-data-interchange-format-schema
hasPart:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:data-contracts
  - urn:ngm:class:data-contracts
requires:
  - urn:ngm:class:data-schema
  - urn:ngm:class:json-data-interchange-format-schema
enables:
  - urn:ngm:class:data-quality
  - urn:ngm:class:interoperability-standard
dependsOn:
  - urn:ngm:class:data-schema
implements:
  - urn:ngm:class:data-validation
contrastsWith:
  - urn:ngm:class:asyncapi
uses:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:open-api-specification
supports:
  - urn:ngm:class:api-specification
  - urn:ngm:class:data-contracts
  - urn:ngm:class:data-contracts
standardizedBy:
  - urn:ngm:class:json-data-interchange-format-schema
relatedTo:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:data-quality
---

# Schema Validation

Schema validation is the process of checking that a data instance conforms to a formally declared structure, asserting required fields, types, value constraints and relationships before the data is accepted or processed. It uses a schema language such as JSON Schema or XML Schema to define the contract and a validator to report conformance and errors. Schema validation enforces data integrity at system boundaries and underpins reliable interoperability.
