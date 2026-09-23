---
okf_version: "0.2"
type: Class
title: Asyncapi
resource: urn:ngm:class:asyncapi
domain: infrastructure
description: AsyncAPI is an open specification for describing event-driven and message-based APIs in a machine-readable document, analogous to how OpenAPI describes request-response REST APIs. It defines channels, messages, payloads and the protocols and brokers used to exchange them, enabling documentation, code generation, validation and tooling for asynchronous systems. AsyncAPI standardises contracts for p
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:api-specification
requires:
  - urn:ngm:class:message-broker
enables:
  - urn:ngm:class:streaming-data
  - urn:ngm:class:event-driven-architecture
dependsOn:
  - urn:ngm:class:json-data-interchange-format-schema
contrastsWith:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:rest-api
bridgesTo:
  - urn:ngm:class:api-gateway
uses:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:schema-validation
supports:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:asynchronous-messaging
standardizedBy:
  - urn:ngm:class:interoperability-standard
relatedTo:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:event-driven-architecture
---

# Asyncapi

AsyncAPI is an open specification for describing event-driven and message-based APIs in a machine-readable document, analogous to how OpenAPI describes request-response REST APIs. It defines channels, messages, payloads and the protocols and brokers used to exchange them, enabling documentation, code generation, validation and tooling for asynchronous systems. AsyncAPI standardises contracts for publish-subscribe and streaming architectures.
