---
okf_version: "0.2"
type: Class
title: Microservices
resource: urn:ngm:class:microservices
domain: infrastructure
description: Microservices is an architectural style in which a large application is decomposed into a suite of small, independently deployable services, each responsible for a distinct bounded business capability and communicating through well-defined lightweight APIs or message channels. Each service runs in its own process, manages its own data store, and can be developed, deployed, scaled, and retired inde
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:software-architecture
hasPart:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:service-discovery
  - urn:ngm:class:service-mesh
  - urn:ngm:class:circuit-breaker
requires:
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:observability
enables:
  - urn:ngm:class:devops
  - urn:ngm:class:scalability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:persistence
  - urn:ngm:class:persistence
contrastsWith:
  - urn:ngm:class:monolithic-architecture
  - urn:ngm:class:service-oriented-architecture
bridgesTo:
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:rest-api
  - urn:ngm:class:g-rpc
  - urn:ngm:class:message-broker
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:docker-containerisation-platform
partOf:
  - urn:ngm:class:cloud-native-applications
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:domain-driven-design
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:twelve-factor-app
---

# Microservices

Microservices is an architectural style in which a large application is decomposed into a suite of small, independently deployable services, each responsible for a distinct bounded business capability and communicating through well-defined lightweight APIs or message channels. Each service runs in its own process, manages its own data store, and can be developed, deployed, scaled, and retired independently of other services. The pattern contrasts with monolithic architectures by enabling polyglot development, fine-grained fault isolation, and organisational alignment of teams with service ownership, at the cost of increased operational and distributed-systems complexity.
