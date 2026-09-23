---
okf_version: "0.2"
type: Class
title: API Design
resource: urn:ngm:class:api-design
domain: infrastructure
description: "API design is the discipline of specifying the contract, structure, and behaviour of an application programming interface so that it is consistent, intuitive, evolvable, and reliable for the developers who consume it. It covers resource and operation modelling, naming and conventions, request and response schemas, error semantics, authentication, versioning, and documentation, balancing usability "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-architecture
hasPart:
  - urn:ngm:class:interface-design
  - urn:ngm:class:api-versioning
requires:
  - urn:ngm:class:backward-compatibility
  - urn:ngm:class:api-security
enables:
  - urn:ngm:class:microservices
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:software-architecture
implements:
  - urn:ngm:class:rest-api
  - urn:ngm:class:graph-ql
contrastsWith:
  - urn:ngm:class:graph-ql
bridgesTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:microservices
uses:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:http
supports:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:rate-limiting
relatedTo:
  - urn:ngm:class:rest-api
  - urn:ngm:class:interface-design
---

# API Design

API design is the discipline of specifying the contract, structure, and behaviour of an application programming interface so that it is consistent, intuitive, evolvable, and reliable for the developers who consume it. It covers resource and operation modelling, naming and conventions, request and response schemas, error semantics, authentication, versioning, and documentation, balancing usability against the constraints of the underlying system. Good API design treats the interface as a long-lived product whose contract must remain stable and backward-compatible while still allowing the implementation behind it to evolve.
