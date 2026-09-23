---
okf_version: "0.2"
type: Class
title: Load Balancing
resource: urn:ngm:class:load-balancing
domain: infrastructure
description: Load balancing is the distribution of incoming work across multiple compute resources to maximise throughput, minimise latency, and avoid overloading any single node. It operates at network layers from L4 transport to L7 application routing, using algorithms such as round-robin, least-connections, and consistent hashing. Health checking and failover make it foundational to scalable, resilient dist
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:health-check
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:health-monitoring
enables:
  - urn:ngm:class:horizontal-scalability
  - urn:ngm:class:high-availability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:zero-downtime-deployment
dependsOn:
  - urn:ngm:class:dns
  - urn:ngm:class:reverse-proxy
implements:
  - urn:ngm:class:round-robin-scheduling
  - urn:ngm:class:consistent-hashing
contrastsWith:
  - urn:ngm:class:single-point-of-failure
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:distributed-inference
uses:
  - urn:ngm:class:ssl-termination
  - urn:ngm:class:session-persistence
supports:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:cdn
partOf:
  - urn:ngm:class:distributed-architecture
  - urn:ngm:class:service-mesh
relatedTo:
  - urn:ngm:class:auto-scaling
  - urn:ngm:class:traffic-management
---

# Load Balancing

Load balancing is the distribution of incoming work across multiple compute resources to maximise throughput, minimise latency, and avoid overloading any single node. It operates at network layers from L4 transport to L7 application routing, using algorithms such as round-robin, least-connections, and consistent hashing. Health checking and failover make it foundational to scalable, resilient distributed systems.
