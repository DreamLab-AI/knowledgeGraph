---
okf_version: "0.2"
type: Class
title: API Standard
resource: urn:ngm:class:api-standard
domain: infrastructure
description: Specification defining how independent software components communicate, establishing protocols, data formats, versioning rules, and authentication mechanisms to ensure interoperability across systems and platforms.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-network-and-comms
hasPart:
  - urn:ngm:class:data-format-standard
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:api-versioning
  - urn:ngm:class:data-format-standard
  - urn:ngm:class:authentication-schema
requires:
  - urn:ngm:class:technical-documentation
  - urn:ngm:class:schema-definition
  - urn:ngm:class:technical-documentation
enables:
  - urn:ngm:class:system-interoperability
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:component-integration
dependsOn:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:identity-and-access-management
implements:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:rest
contrastsWith:
  - urn:ngm:class:proprietary-interface
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:smart-contract
  - urn:ngm:class:spatial-computing-runtime
uses:
  - urn:ngm:class:json-data-interchange-format
  - urn:ngm:class:http-protocol
supports:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:developer-portal
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:w3-c
  - urn:ngm:class:etsi
relatedTo:
  - urn:ngm:class:service-mesh
---

# API Standard

Specification defining how independent software components communicate, establishing protocols, data formats, versioning rules, and authentication mechanisms to ensure interoperability across systems and platforms.
