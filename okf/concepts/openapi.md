---
okf_version: "0.2"
type: Class
title: OpenAPI
resource: urn:ngm:class:openapi
domain: infrastructure
description: OpenAPI is a language-agnostic, machine-readable specification for describing HTTP-based RESTful APIs. An OpenAPI document defines available endpoints, operations, parameters, request and response schemas, and authentication mechanisms in a single structured file written in YAML or JSON. It enables automated generation of documentation, client SDKs, server stubs, and validation logic, decoupling a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:api
  - urn:ngm:class:api-standard
hasPart:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:yaml
requires:
  - urn:ngm:class:http-protocol
  - urn:ngm:class:rest
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:software-development
  - urn:ngm:class:api-integration
  - urn:ngm:class:documentation-generation
  - urn:ngm:class:microservices
  - urn:ngm:class:contract-testing
  - urn:ngm:class:code-generation
implements:
  - urn:ngm:class:api-specification
contrastsWith:
  - urn:ngm:class:graph-ql
  - urn:ngm:class:g-rpc
  - urn:ngm:class:asyncapi
bridgesTo:
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:yaml
  - urn:ngm:class:data-format
  - urn:ngm:class:api
  - urn:ngm:class:rest-api
  - urn:ngm:class:json
  - urn:ngm:class:data-schema
supports:
  - urn:ngm:class:api-design
  - urn:ngm:class:documentation
  - urn:ngm:class:software-development
standardizedBy:
  - urn:ngm:class:standards
  - urn:ngm:class:interoperability
partOf:
  - urn:ngm:class:openapi-initiative
  - urn:ngm:class:linux-foundation
relatedTo:
  - urn:ngm:class:rest
  - urn:ngm:class:rest-api
  - urn:ngm:class:graph-ql
  - urn:ngm:class:api-gateway
  - urn:ngm:class:api-versioning
  - urn:ngm:class:api-management
---

# OpenAPI

OpenAPI is a language-agnostic, machine-readable specification for describing HTTP-based RESTful APIs. An OpenAPI document defines available endpoints, operations, parameters, request and response schemas, and authentication mechanisms in a single structured file written in YAML or JSON. It enables automated generation of documentation, client SDKs, server stubs, and validation logic, decoupling an API's contract from its implementation.
