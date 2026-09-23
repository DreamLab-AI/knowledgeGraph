---
okf_version: "0.2"
type: Class
title: Middleware
resource: urn:ngm:class:middleware
domain: infrastructure
description: Software layer that mediates between applications and underlying services or infrastructure to enable communication, resource access, and interoperability.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:digital-infrastructure
hasPart:
  - urn:ngm:class:message-queue
  - urn:ngm:class:service-registry
  - urn:ngm:class:api-gateway
  - urn:ngm:class:communication-protocol
requires:
  - urn:ngm:class:compute-infrastructure
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:operating-system
enables:
  - urn:ngm:class:distributed-communication
  - urn:ngm:class:service-integration
  - urn:ngm:class:interoperability
  - urn:ngm:class:resource-abstraction
dependsOn:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:data-format
  - urn:ngm:class:service-discovery
partOf:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:software-architecture
---

# Middleware

Software layer that mediates between applications and underlying services or infrastructure to enable communication, resource access, and interoperability.
