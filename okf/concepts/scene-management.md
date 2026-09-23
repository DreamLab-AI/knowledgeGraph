---
okf_version: "0.2"
type: Class
title: Scene Management
resource: urn:ngm:class:scene-management
domain: spatial-computing
description: Scene Management encompasses the runtime systems and data structures responsible for organising, loading, and unloading 3D scene content in real-time environments. It coordinates scene graph traversal, hierarchical object relationships, asset streaming, and spatial partitioning to ensure that only geometrically and logically relevant content is active at any moment, enabling scalable and performan
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:ar-scene-graph
enables:
  - urn:ngm:class:scene-optimization
  - urn:ngm:class:occlusion-culling
uses:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:asset-management
partOf:
  - urn:ngm:class:render-pipeline
---

# Scene Management

Scene Management encompasses the runtime systems and data structures responsible for organising, loading, and unloading 3D scene content in real-time environments. It coordinates scene graph traversal, hierarchical object relationships, asset streaming, and spatial partitioning to ensure that only geometrically and logically relevant content is active at any moment, enabling scalable and performant virtual worlds.
