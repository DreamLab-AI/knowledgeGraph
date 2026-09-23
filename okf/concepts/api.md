---
okf_version: "0.2"
type: Class
title: API
resource: urn:ngm:class:api
domain: infrastructure
description: "An Application Programming Interface: a defined set of operations, inputs, and outputs through which software components or services communicate without exposing their internal implementation, enabling modular composition and system integration."
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:versioning-system
requires:
  - urn:ngm:class:communication-protocols
  - urn:ngm:class:authentication
  - urn:ngm:class:data-serialization
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:microservices
  - urn:ngm:class:service-integration
implements:
  - urn:ngm:class:rest
  - urn:ngm:class:graph-ql
  - urn:ngm:class:g-rpc
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:http
  - urn:ngm:class:interoperability-standards
uses:
  - urn:ngm:class:http
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:oauth
standardizedBy:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:interoperability-standards
relatedTo:
  - urn:ngm:class:software-architecture
  - urn:ngm:class:rate-limiting
---

# API

An Application Programming Interface: a defined set of operations, inputs, and outputs through which software components or services communicate without exposing their internal implementation, enabling modular composition and system integration.
