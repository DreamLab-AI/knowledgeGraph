---
okf_version: "0.2"
type: Class
title: OpenAPI Specification
resource: urn:ngm:class:open-api-specification
domain: infrastructure
description: The OpenAPI Specification (OAS) is a language-agnostic, machine-readable standard for describing RESTful HTTP APIs using a structured JSON or YAML document that defines endpoints, request/response schemas, authentication methods, and parameter types. Governed by the OpenAPI Initiative (a Linux Foundation project), it enables automated generation of client SDKs, server stubs, interactive documentat
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:api-standard
hasPart:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:yaml
requires:
  - urn:ngm:class:http-protocol
  - urn:ngm:class:rest
enables:
  - urn:ngm:class:api-integration
  - urn:ngm:class:documentation-generation
  - urn:ngm:class:microservices
  - urn:ngm:class:contract-testing
  - urn:ngm:class:code-generation
contrastsWith:
  - urn:ngm:class:graph-ql
  - urn:ngm:class:g-rpc
  - urn:ngm:class:asyncapi
bridgesTo:
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:data-schema
standardizedBy:
  - urn:ngm:class:openapi-initiative
partOf:
  - urn:ngm:class:openapi-initiative
  - urn:ngm:class:linux-foundation
relatedTo:
  - urn:ngm:class:api-management
  - urn:ngm:class:api-gateway
  - urn:ngm:class:api-versioning
---

# OpenAPI Specification

The OpenAPI Specification (OAS) is a language-agnostic, machine-readable standard for describing RESTful HTTP APIs using a structured JSON or YAML document that defines endpoints, request/response schemas, authentication methods, and parameter types. Governed by the OpenAPI Initiative (a Linux Foundation project), it enables automated generation of client SDKs, server stubs, interactive documentation, and contract-based testing from a single source of truth. Originally derived from the Swagger specification, OAS version 3.x is now the dominant industry standard for API description. It promotes interoperability by allowing API consumers to understand a service's capabilities without access to its source code.
