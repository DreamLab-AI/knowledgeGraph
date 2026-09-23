---
okf_version: "0.2"
type: Class
title: Service Mesh
resource: urn:ngm:class:service-mesh
domain: infrastructure
description: A service mesh is a dedicated infrastructure layer for managing service-to-service communication within a microservices architecture, providing traffic management, mutual TLS encryption, observability, and policy enforcement transparently to application code through sidecar proxies or eBPF-based data planes. It decouples operational concerns—load balancing, retries, circuit breaking, telemetry—fro
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:microservices-architecture
hasPart:
  - urn:ngm:class:control-plane
  - urn:ngm:class:sidecar-proxy
requires:
  - urn:ngm:class:service-discovery
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:container-orchestration
enables:
  - urn:ngm:class:observability
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:canary-deployment
implements:
  - urn:ngm:class:distributed-tracing
contrastsWith:
  - urn:ngm:class:api-gateway
bridgesTo:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:web-assembly
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:load-balancing
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:envoy-proxy
supports:
  - urn:ngm:class:traffic-management
partOf:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:cloud-native
relatedTo:
  - urn:ngm:class:microservices
---

# Service Mesh

A service mesh is a dedicated infrastructure layer for managing service-to-service communication within a microservices architecture, providing traffic management, mutual TLS encryption, observability, and policy enforcement transparently to application code through sidecar proxies or eBPF-based data planes. It decouples operational concerns—load balancing, retries, circuit breaking, telemetry—from business logic, enabling consistent reliability and security across heterogeneous services.
