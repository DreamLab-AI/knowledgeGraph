---
okf_version: "0.2"
type: Class
title: JSON Schema
resource: urn:ngm:class:json-data-interchange-format-schema
domain: standards
description: JSON Schema is an IETF-standardised declarative vocabulary for annotating and validating the structure, data types, required fields, and value constraints of JSON documents. It defines a set of keywords — including type, properties, required, additionalProperties, format, pattern, minimum, maximum, and combiners such as allOf, anyOf, and oneOf — that together constitute a machine-readable contract
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:data-management
requires:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:schema-validation
  - urn:ngm:class:json-data-interchange-format
enables:
  - urn:ngm:class:rest-api
  - urn:ngm:class:credential-schema
  - urn:ngm:class:code-generation
  - urn:ngm:class:api-contract-testing
  - urn:ngm:class:form-generation
implements:
  - urn:ngm:class:ietf
  - urn:ngm:class:constraint-specification
  - urn:ngm:class:ietf
  - urn:ngm:class:constraint-specification
contrastsWith:
  - urn:ngm:class:xml-schema-definition
  - urn:ngm:class:apache-avro
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:protobuf
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:infrastructure-as-code
uses:
  - urn:ngm:class:controlled-vocabulary
  - urn:ngm:class:regular-expression
  - urn:ngm:class:uri-reference
supports:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:asyncapi
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:kubernetes
  - urn:ngm:class:open-api-specification
relatedTo:
  - urn:ngm:class:json-ld
  - urn:ngm:class:data-format
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:graphql-schema
---

# JSON Schema

JSON Schema is an IETF-standardised declarative vocabulary for annotating and validating the structure, data types, required fields, and value constraints of JSON documents. It defines a set of keywords — including type, properties, required, additionalProperties, format, pattern, minimum, maximum, and combiners such as allOf, anyOf, and oneOf — that together constitute a machine-readable contract between data producers and consumers. Originally developed as a series of Internet-Drafts, the 2020-12 dialect is the most widely implemented stable revision. JSON Schema underpins REST API documentation via OpenAPI, event-driven API documentation via AsyncAPI, configuration validation in Kubernetes CRDs and Helm charts, and verifiable credential subject validation in decentralised identity ecosystems.
