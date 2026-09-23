---
okf_version: "0.2"
type: Class
title: Load Balancer
resource: urn:ngm:class:load-balancer
domain: distributed-systems
description: A component that distributes incoming network or application traffic across multiple backend servers to improve throughput, reliability, and resource utilisation, preventing any single server from becoming a bottleneck.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-architecture
hasPart:
  - urn:ngm:class:health-check
  - urn:ngm:class:session-persistence
  - urn:ngm:class:planning-and-scheduling
requires:
  - urn:ngm:class:network-architecture
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:high-availability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:horizontal-scalability
dependsOn:
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:dns
implements:
  - urn:ngm:class:round-robin-scheduling
contrastsWith:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:service-mesh
bridgesTo:
  - urn:ngm:class:cdn
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:microservices
uses:
  - urn:ngm:class:ssl-termination
  - urn:ngm:class:reverse-proxy
supports:
  - urn:ngm:class:microservices
  - urn:ngm:class:containerisation
partOf:
  - urn:ngm:class:network-architecture
  - urn:ngm:class:cloud-infrastructure
relatedTo:
  - urn:ngm:class:traffic-management
  - urn:ngm:class:ingress-controller
---

# Load Balancer

A component that distributes incoming network or application traffic across multiple backend servers to improve throughput, reliability, and resource utilisation, preventing any single server from becoming a bottleneck.
