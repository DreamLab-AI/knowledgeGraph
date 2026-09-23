---
okf_version: "0.2"
type: Class
title: Occlusion Culling
resource: urn:ngm:class:occlusion-culling
domain: spatial-computing
description: Occlusion culling is a real-time rendering optimisation technique that determines which scene objects are hidden (occluded) by other geometry from the viewer's current viewpoint and discards them before issuing GPU draw calls. By preventing invisible geometry from traversing the vertex, rasterisation, and fragment shader stages, occlusion culling reduces overdraw and GPU workload, enabling complex
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:real-time-rendering
hasPart:
  - urn:ngm:class:portal-culling
  - urn:ngm:class:bounding-volume-hierarchy
  - urn:ngm:class:hierarchical-z-buffer
  - urn:ngm:class:occlusion-query
requires:
  - urn:ngm:class:depth-buffer
  - urn:ngm:class:spatial-data-structure
  - urn:ngm:class:scene-graph
enables:
  - urn:ngm:class:virtual-environment
  - urn:ngm:class:extended-reality
  - urn:ngm:class:open-world-game
  - urn:ngm:class:digital-twin
dependsOn:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:rasterization
  - urn:ngm:class:rasterization
contrastsWith:
  - urn:ngm:class:frustum-culling
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:back-face-culling
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:metaverse-infrastructure
uses:
  - urn:ngm:class:bounding-volume
  - urn:ngm:class:frustum-culling
  - urn:ngm:class:potential-visibility-set
partOf:
  - urn:ngm:class:render-pipeline
  - urn:ngm:class:visibility-determination
relatedTo:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:spatial-partitioning
  - urn:ngm:class:draw-call-batching
  - urn:ngm:class:indirect-rendering
---

# Occlusion Culling

Occlusion culling is a real-time rendering optimisation technique that determines which scene objects are hidden (occluded) by other geometry from the viewer's current viewpoint and discards them before issuing GPU draw calls. By preventing invisible geometry from traversing the vertex, rasterisation, and fragment shader stages, occlusion culling reduces overdraw and GPU workload, enabling complex scenes with high polygon counts to maintain interactive frame rates. It is a complementary technique to frustum culling, level-of-detail selection, and back-face culling within the broader visibility determination subsystem of a render pipeline. Implementations range from CPU-driven portal and cell systems, to hardware occlusion queries, to GPU-driven indirect rendering with hierarchical Z-buffer occlusion.
