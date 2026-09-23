---
okf_version: "0.2"
type: Class
title: Service Layer
resource: urn:ngm:class:service-layer
domain: spatial-computing
description: Collection of reusable services exposed via APIs for identity, assets, physics, and analytics that enable application functionality and interoperability in virtual environments.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
  - urn:ngm:class:spatial-computing
hasPart:
  - urn:ngm:class:analytics-service
  - urn:ngm:class:asset-service
  - urn:ngm:class:identity-service
  - urn:ngm:class:physics-service
  - urn:ngm:class:api-gateway
requires:
  - urn:ngm:class:api-management
  - urn:ngm:class:data-models
  - urn:ngm:class:service-orchestration
enables:
  - urn:ngm:class:api-integration
  - urn:ngm:class:service-composition
  - urn:ngm:class:service-discovery
  - urn:ngm:class:microservices-architecture
dependsOn:
  - urn:ngm:class:middleware-layer
  - urn:ngm:class:database-systems
  - urn:ngm:class:message-queue
partOf:
  - urn:ngm:class:data-layer
---

# Service Layer

Collection of reusable services exposed via APIs for identity, assets, physics, and analytics that enable application functionality and interoperability in virtual environments.
