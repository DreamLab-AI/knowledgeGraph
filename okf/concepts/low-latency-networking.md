---
okf_version: "0.2"
type: Class
title: Low-Latency Networking
resource: urn:ngm:class:low-latency-networking
domain: spatial-computing
description: Low-latency networking is the design and operation of network architectures that minimise the round-trip delay between communicating endpoints, typically targeting single-digit or sub-millisecond latencies. It combines edge placement, optimised transport protocols, traffic prioritisation and predictable routing to support interactive and time-critical workloads. In spatial computing it underpins r
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-infrastructure
requires:
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:network-latency
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:cloud-rendering
  - urn:ngm:class:cloud-gaming
  - urn:ngm:class:teleoperation
  - urn:ngm:class:metaverse-infrastructure
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:network-protocol
uses:
  - urn:ngm:class:cdn
supports:
  - urn:ngm:class:spatial-computing
partOf:
  - urn:ngm:class:network-infrastructure
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:network-infrastructure
---

# Low-Latency Networking

Low-latency networking is the design and operation of network architectures that minimise the round-trip delay between communicating endpoints, typically targeting single-digit or sub-millisecond latencies. It combines edge placement, optimised transport protocols, traffic prioritisation and predictable routing to support interactive and time-critical workloads. In spatial computing it underpins responsive immersive experiences where perceptual lag must remain below human-detectable thresholds.
