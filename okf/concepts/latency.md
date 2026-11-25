---
okf_version: "0.2"
type: Class
title: Latency
resource: urn:ngm:class:latency
domain: infrastructure
description: Performance metric representing the time delay between a stimulus (user action, network request, or computation trigger) and the corresponding system response; a fundamental constraint in networked, real-time, and interactive systems spanning communication networks, distributed computing, and immersive environments.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-performance-metrics
hasPart:
  - urn:ngm:class:propagation-delay
  - urn:ngm:class:processing-delay
  - urn:ngm:class:transmission-delay
requires:
  - urn:ngm:class:monitoring-system
  - urn:ngm:class:measurement-tools
  - urn:ngm:class:timestamp-synchronization
enables:
  - urn:ngm:class:performance-optimization
  - urn:ngm:class:real-time-control
  - urn:ngm:class:quality-assessment
  - urn:ngm:class:sla-monitoring
  - urn:ngm:class:user-experience-tuning
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:routing-protocol
  - urn:ngm:class:bandwidth
  - urn:ngm:class:physical-layer
  - urn:ngm:class:network-layer
  - urn:ngm:class:processing-delay
  - urn:ngm:class:propagation-delay
contrastsWith:
  - urn:ngm:class:throughput
  - urn:ngm:class:jitter
bridgesTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:inference-serving
  - urn:ngm:class:delay-tolerant-space-networking
partOf:
  - urn:ngm:class:network-performance-metrics
  - urn:ngm:class:quality-of-service
relatedTo:
  - urn:ngm:class:round-trip-time
  - urn:ngm:class:edge-computing
  - urn:ngm:class:content-delivery-network
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Latency

Performance metric representing the time delay between a stimulus (user action, network request, or computation trigger) and the corresponding system response; a fundamental constraint in networked, real-time, and interactive systems spanning communication networks, distributed computing, and immersive environments.
