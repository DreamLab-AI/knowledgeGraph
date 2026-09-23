---
okf_version: "0.2"
type: Class
title: Edge Computing Node
resource: urn:ngm:class:edge-computing-node
domain: spatial-computing
description: Physical computing resource deployed near data sources to reduce latency for immersive applications through localized processing.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:cooling-system
  - urn:ngm:class:gpu
  - urn:ngm:class:memory-module
  - urn:ngm:class:network-interface
  - urn:ngm:class:processor
  - urn:ngm:class:storage-unit
requires:
  - urn:ngm:class:network-connectivity
  - urn:ngm:class:power-supply
  - urn:ngm:class:physical-housing
enables:
  - urn:ngm:class:bandwidth-optimization
  - urn:ngm:class:data-processing
  - urn:ngm:class:low-latency-computing
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:low-latency-computing
  - urn:ngm:class:data-processing
partOf:
  - urn:ngm:class:edge-mesh-network
  - urn:ngm:class:edge-network
---

# Edge Computing Node

Physical computing resource deployed near data sources to reduce latency for immersive applications through localized processing.
