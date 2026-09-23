---
okf_version: "0.2"
type: Class
title: Edge Layer
resource: urn:ngm:class:edge-layer
domain: infrastructure
description: The Edge Layer is the cross-cutting stratum at the periphery of a system, where it meets external devices, users, and data sources. It sits above local hardware and network resources and below the application workloads it serves close to origin. It contains edge gateways, local caches, and the boundary logic that mediates between core and periphery.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-computing-and-cloud
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:network-layer
  - urn:ngm:class:hardware-layer
enables:
  - urn:ngm:class:edge-computing-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:cdn
  - urn:ngm:class:internet-of-things
---

# Edge Layer

The Edge Layer is the cross-cutting stratum at the periphery of a system, where it meets external devices, users, and data sources. It sits above local hardware and network resources and below the application workloads it serves close to origin. It contains edge gateways, local caches, and the boundary logic that mediates between core and periphery.
