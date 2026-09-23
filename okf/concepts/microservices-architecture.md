---
okf_version: "0.2"
type: Class
title: Microservices Architecture
resource: urn:ngm:class:microservices-architecture
domain: distributed-systems
description: A distributed software architecture pattern that decomposes applications into independent, loosely coupled services communicating via APIs, enabling high concurrency, scalability, and resilience through containerisation technologies like Docker and orchestration platforms like Kubernetes.
maturity: draft
quality: 0.7
is-a:
  - urn:ngm:class:system-architecture
hasPart:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:service-mesh
  - urn:ngm:class:container
  - urn:ngm:class:message-broker
requires:
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:distributed-tracing
enables:
  - urn:ngm:class:scalable-applications
dependsOn:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:docker-containerisation-platform
implements:
  - urn:ngm:class:domain-driven-design
  - urn:ngm:class:event-driven-architecture
contrastsWith:
  - urn:ngm:class:monolithic-architecture
  - urn:ngm:class:service-oriented-architecture
bridgesTo:
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:g-rpc
  - urn:ngm:class:saga-pattern
supports:
  - urn:ngm:class:devops
  - urn:ngm:class:observability
partOf:
  - urn:ngm:class:cloud-native
relatedTo:
  - urn:ngm:class:twelve-factor-app
  - urn:ngm:class:circuit-breaker-pattern
---

# Microservices Architecture

A distributed software architecture pattern that decomposes applications into independent, loosely coupled services communicating via APIs, enabling high concurrency, scalability, and resilience through containerisation technologies like Docker and orchestration platforms like Kubernetes.
