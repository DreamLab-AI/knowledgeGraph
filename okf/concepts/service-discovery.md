---
okf_version: "0.2"
type: Class
title: Service Discovery
resource: urn:ngm:class:service-discovery
domain: distributed-systems
description: Service discovery is the runtime mechanism by which distributed applications automatically locate the network endpoints of services they depend on, without relying on hardcoded addresses or manual configuration. It operates through a service registry that maintains a dynamic catalogue of available service instances alongside their health status, enabling clients to resolve service names to live en
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:distributed-system-architecture
hasPart:
  - urn:ngm:class:service-registry
  - urn:ngm:class:health-check
  - urn:ngm:class:service-registration
requires:
  - urn:ngm:class:service-registry
  - urn:ngm:class:network-addressing
enables:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:operational-resilience
  - urn:ngm:class:horizontal-scalability
  - urn:ngm:class:zero-downtime-deployment
  - urn:ngm:class:horizontal-scalability
dependsOn:
  - urn:ngm:class:dns
  - urn:ngm:class:load-balancing
  - urn:ngm:class:consensus-algorithm
contrastsWith:
  - urn:ngm:class:configuration
  - urn:ngm:class:monolithic-architecture
  - urn:ngm:class:configuration
bridgesTo:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:tool-use
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:api-gateway
  - urn:ngm:class:service-mesh
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:distributed-system
  - urn:ngm:class:container-orchestration
partOf:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:cloud-native
  - urn:ngm:class:cloud-native
relatedTo:
  - urn:ngm:class:orchestration
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:circuit-breaker
  - urn:ngm:class:sidecar-proxy
  - urn:ngm:class:configuration-management
---

# Service Discovery

Service discovery is the runtime mechanism by which distributed applications automatically locate the network endpoints of services they depend on, without relying on hardcoded addresses or manual configuration. It operates through a service registry that maintains a dynamic catalogue of available service instances alongside their health status, enabling clients to resolve service names to live endpoints at query time. Discovery patterns divide into client-side discovery, where the consumer queries the registry directly and selects from returned healthy instances, and server-side discovery, where a load balancer or API gateway mediates resolution transparently. It is a foundational pattern in microservices and cloud-native architectures, enabling dynamic scaling, zero-downtime rolling updates, and fault-tolerant inter-service communication.
