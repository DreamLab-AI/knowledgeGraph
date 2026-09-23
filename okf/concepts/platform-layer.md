---
okf_version: "0.2"
type: Class
title: Platform Layer
resource: urn:ngm:class:platform-layer
domain: spatial-computing
description: Architectural tier providing core platform services including identity, world state management, and asset services upon which metaverse applications are built.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:asset-service
  - urn:ngm:class:identity-service
  - urn:ngm:class:persistence
  - urn:ngm:class:platform-middleware
  - urn:ngm:class:world-state-service
  - urn:ngm:class:persistence
requires:
  - urn:ngm:class:authentication-system
  - urn:ngm:class:database-system
  - urn:ngm:class:networking-layer
enables:
  - urn:ngm:class:application-development
  - urn:ngm:class:asset-portability
  - urn:ngm:class:interoperability
  - urn:ngm:class:user-identity-management
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:api-gateway
  - urn:ngm:class:data-storage
bridgesTo:
  - urn:ngm:class:blockchain
partOf:
  - urn:ngm:class:technology-infrastructure-domain-architecture
---

# Platform Layer

Architectural tier providing core platform services including identity, world state management, and asset services upon which metaverse applications are built.
