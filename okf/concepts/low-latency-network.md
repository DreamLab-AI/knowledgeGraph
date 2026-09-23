---
okf_version: "0.2"
type: Class
title: Low-Latency Network
resource: urn:ngm:class:low-latency-network
domain: spatial-computing
description: "A low-latency network is a communications network engineered to minimise the round-trip delay experienced by data packets travelling between endpoints. It combines short physical paths, fast switching, prioritised traffic handling, and edge placement of compute so that interactive and real-time applications respond within tight, predictable time bounds. Such networks are foundational to immersive "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:network-topology
requires:
  - urn:ngm:class:bandwidth
  - urn:ngm:class:quality-of-service
enables:
  - urn:ngm:class:immersive-experience
  - urn:ngm:class:cloud-gaming
  - urn:ngm:class:telepresence
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:network-topology
contrastsWith:
  - urn:ngm:class:latency
uses:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:cdn
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:real-time-communication
relatedTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:distributed-systems
---

# Low-Latency Network

A low-latency network is a communications network engineered to minimise the round-trip delay experienced by data packets travelling between endpoints. It combines short physical paths, fast switching, prioritised traffic handling, and edge placement of compute so that interactive and real-time applications respond within tight, predictable time bounds. Such networks are foundational to immersive and time-critical experiences where perceptible delay degrades usability.
