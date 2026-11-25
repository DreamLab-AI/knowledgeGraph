---
okf_version: "0.2"
type: Class
title: Acceleration Structure
resource: urn:ngm:class:acceleration-structure
domain: spatial-computing
description: "An acceleration structure is a spatial data structure that organises geometric primitives in a scene to allow rapid culling of irrelevant geometry during ray intersection or visibility queries, dramatically reducing the computational complexity of rendering algorithms from O(n) per-ray to approximately O(log n). Common forms include bounding volume hierarchies, k-d trees, and octrees, each making "
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:spatial-index
enables:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:real-time-rendering
uses:
  - urn:ngm:class:bounding-volume-hierarchy
  - urn:ngm:class:gpu-acceleration
supports:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:scene-graph
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Acceleration Structure

An acceleration structure is a spatial data structure that organises geometric primitives in a scene to allow rapid culling of irrelevant geometry during ray intersection or visibility queries, dramatically reducing the computational complexity of rendering algorithms from O(n) per-ray to approximately O(log n). Common forms include bounding volume hierarchies, k-d trees, and octrees, each making different trade-offs between construction time, memory footprint, and query efficiency.
