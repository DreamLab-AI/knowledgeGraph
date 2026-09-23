---
okf_version: "0.2"
type: Class
title: Api Contract
resource: urn:ngm:class:api-contract
domain: data
description: An API contract is the agreed, machine-readable specification of how a service may be called and what it will return, covering endpoints, request and response schemas, data types, status codes and error semantics. It functions as a formal agreement between the provider and consumers of an interface, allowing each side to develop and test independently against a shared definition. Expressed in form
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-schema
hasPart:
  - urn:ngm:class:schema
  - urn:ngm:class:api-versioning
requires:
  - urn:ngm:class:data-schema
  - urn:ngm:class:schema
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:backward-compatibility
  - urn:ngm:class:data-validation
implements:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:rest-api
uses:
  - urn:ngm:class:semantic-versioning
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:api-gateway
standardizedBy:
  - urn:ngm:class:open-api-specification
partOf:
  - urn:ngm:class:api-design
relatedTo:
  - urn:ngm:class:graph-ql
  - urn:ngm:class:api
---

# Api Contract

An API contract is the agreed, machine-readable specification of how a service may be called and what it will return, covering endpoints, request and response schemas, data types, status codes and error semantics. It functions as a formal agreement between the provider and consumers of an interface, allowing each side to develop and test independently against a shared definition. Expressed in formats such as OpenAPI or GraphQL schemas, the contract enables tooling for validation, mocking, code generation and compatibility checking across versions.
