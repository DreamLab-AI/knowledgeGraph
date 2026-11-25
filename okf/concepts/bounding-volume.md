---
okf_version: "0.2"
type: Class
title: Bounding Volume
resource: urn:ngm:class:bounding-volume
domain: spatial-computing
description: A Bounding Volume is a simple geometric shape—typically a sphere, axis-aligned bounding box (AABB), oriented bounding box (OBB), or convex hull—that encloses a more complex geometric object or set of objects. By testing intersections or containment against the bounding volume rather than the full geometry, real-time rendering engines, physics simulators, and spatial query systems achieve orders-of
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:spatial-data-structure
hasPart:
  - urn:ngm:class:bounding-volume-hierarchy
enables:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:frustum-culling
  - urn:ngm:class:occlusion-culling
uses:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:physics-simulation
relatedTo:
  - urn:ngm:class:spatial-index
  - urn:ngm:class:scene-graph
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Bounding Volume

A Bounding Volume is a simple geometric shape—typically a sphere, axis-aligned bounding box (AABB), oriented bounding box (OBB), or convex hull—that encloses a more complex geometric object or set of objects. By testing intersections or containment against the bounding volume rather than the full geometry, real-time rendering engines, physics simulators, and spatial query systems achieve orders-of-magnitude speedups during broad-phase culling and collision detection.
