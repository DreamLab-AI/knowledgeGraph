---
okf_version: "0.2"
type: Class
title: Enterprise Service Bus
resource: urn:ngm:class:enterprise-service-bus
domain: infrastructure
description: An enterprise service bus is a middleware backbone that connects disparate applications by mediating, routing and transforming messages between them through a common integration layer. It centralises concerns such as protocol bridging, data transformation, message routing and orchestration so that services need not know about each other directly. The pattern is associated with service-oriented arc
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:middleware
hasPart:
  - urn:ngm:class:message-broker
  - urn:ngm:class:data-transformation
requires:
  - urn:ngm:class:message-broker
  - urn:ngm:class:middleware
enables:
  - urn:ngm:class:enterprise-integration
  - urn:ngm:class:service-oriented-architecture
contrastsWith:
  - urn:ngm:class:microservices
  - urn:ngm:class:api-gateway
bridgesTo:
  - urn:ngm:class:soap
uses:
  - urn:ngm:class:message-queue
  - urn:ngm:class:data-transformation
supports:
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:api-management
partOf:
  - urn:ngm:class:enterprise-integration
  - urn:ngm:class:service-oriented-architecture
relatedTo:
  - urn:ngm:class:message-broker
  - urn:ngm:class:event-driven-architecture
---

# Enterprise Service Bus

An enterprise service bus is a middleware backbone that connects disparate applications by mediating, routing and transforming messages between them through a common integration layer. It centralises concerns such as protocol bridging, data transformation, message routing and orchestration so that services need not know about each other directly. The pattern is associated with service-oriented architecture and contrasts with lighter, decentralised integration styles.
