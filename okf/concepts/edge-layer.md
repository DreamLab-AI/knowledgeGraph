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
  - urn:ngm:class:content-delivery-network
  - urn:ngm:class:internet-of-things
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Edge Layer

The Edge Layer is the cross-cutting stratum at the periphery of a system, where it meets external devices, users, and data sources. It sits above local hardware and network resources and below the application workloads it serves close to origin. It contains edge gateways, local caches, and the boundary logic that mediates between core and periphery.
