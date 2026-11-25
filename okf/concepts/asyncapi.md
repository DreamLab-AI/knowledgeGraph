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
  - urn:ngm:class:openapi
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
  - urn:ngm:class:openapi
  - urn:ngm:class:event-driven-architecture
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Asyncapi

AsyncAPI is an open specification for describing event-driven and message-based APIs in a machine-readable document, analogous to how OpenAPI describes request-response REST APIs. It defines channels, messages, payloads and the protocols and brokers used to exchange them, enabling documentation, code generation, validation and tooling for asynchronous systems. AsyncAPI standardises contracts for publish-subscribe and streaming architectures.
