---
okf_version: "0.2"
type: Class
title: Middleware Layer
resource: urn:ngm:class:middleware-layer
domain: infrastructure
description: The Middleware Layer is the stratum of software infrastructure that sits between low-level platform services or network protocols and the application-facing interfaces that consume them, providing integration, abstraction, orchestration, and interoperability services. It decouples system components by standardising communication contracts through APIs, messaging buses, and RPC frameworks, and brid
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:message-broker
  - urn:ngm:class:json-data-interchange-format-rpc
  - urn:ngm:class:price-oracle
  - urn:ngm:class:service-mesh
  - urn:ngm:class:event-bus
requires:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:application-programming-interface
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:microservices
  - urn:ngm:class:scalability
dependsOn:
  - urn:ngm:class:protocol-layer
  - urn:ngm:class:transport-layer
implements:
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:event-driven-architecture
contrastsWith:
  - urn:ngm:class:protocol-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:oracle-network
  - urn:ngm:class:inference
  - urn:ngm:class:inference
uses:
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:publish-subscribe-pattern
  - urn:ngm:class:load-balancing
supports:
  - urn:ngm:class:application-layer
  - urn:ngm:class:decentralised-application
partOf:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:software-architecture
relatedTo:
  - urn:ngm:class:abstraction-layer
  - urn:ngm:class:enterprise-service-bus
  - urn:ngm:class:integration-platform
---

# Middleware Layer

The Middleware Layer is the stratum of software infrastructure that sits between low-level platform services or network protocols and the application-facing interfaces that consume them, providing integration, abstraction, orchestration, and interoperability services. It decouples system components by standardising communication contracts through APIs, messaging buses, and RPC frameworks, and bridges heterogeneous subsystems — including on-chain protocols, off-chain data sources, and cross-network boundaries — without requiring changes to the underlying protocol or the consuming application. In distributed and blockchain architectures the layer encompasses API gateways, oracle networks, cross-chain bridges, indexing services, wallet connectors, and transaction orchestration utilities that collectively raise the abstraction level available to developers. Its maturity is well-established in enterprise computing and rapidly maturing in decentralised ecosystems.
