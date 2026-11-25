---
okf_version: "0.2"
type: Class
title: Spatial Anchor
resource: urn:ngm:class:spatial-anchor
domain: spatial-computing
description: Coordinate reference that binds a virtual object's pose to a stable location in physical space, enabling persistent AR placement and physical-virtual registration.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
  - urn:ngm:class:ar-scene-graph
hasPart:
  - urn:ngm:class:gps
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:visual-marker
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:gps
  - urn:ngm:class:tracking-features
requires:
  - urn:ngm:class:coordinate-transformation
  - urn:ngm:class:persistence-layer
  - urn:ngm:class:tracking-system
enables:
  - urn:ngm:class:persistent-ar-placement
  - urn:ngm:class:physical-virtual-registration
  - urn:ngm:class:shared-ar-experiences
dependsOn:
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:slam
  - urn:ngm:class:world-coordinate-frame
partOf:
  - urn:ngm:class:ar-scene-graph
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:spatial-computing-system
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Spatial Anchor

Coordinate reference that binds a virtual object's pose to a stable location in physical space, enabling persistent AR placement and physical-virtual registration.
