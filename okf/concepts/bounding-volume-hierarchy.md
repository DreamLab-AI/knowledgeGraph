---
okf_version: "0.2"
type: Class
title: Bounding Volume Hierarchy
resource: urn:ngm:class:bounding-volume-hierarchy
domain: spatial-computing
description: A tree-structured acceleration data structure that recursively organizes geometric objects within nested bounding volumes, enabling efficient spatial queries, collision detection, and ray-scene intersection testing by rapidly culling large portions of geometry that cannot intersect with a query.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:spatial-data-structure
hasPart:
  - urn:ngm:class:bounding-volume
  - urn:ngm:class:leaf-node
  - urn:ngm:class:internal-node
requires:
  - urn:ngm:class:bounding-volume
  - urn:ngm:class:traversal-algorithm
  - urn:ngm:class:tree-construction
enables:
  - urn:ngm:class:frustum-culling
  - urn:ngm:class:collision-detection
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:occlusion-culling
  - urn:ngm:class:global-illumination
dependsOn:
  - urn:ngm:class:scene-graph
  - urn:ngm:class:geometric-primitive
implements:
  - urn:ngm:class:spatial-partitioning
contrastsWith:
  - urn:ngm:class:kd-tree
  - urn:ngm:class:octree-spatial-index
  - urn:ngm:class:uniform-grid
bridgesTo:
  - urn:ngm:class:spatial-data-structure
  - urn:ngm:class:robotics
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:surface-area-heuristic
  - urn:ngm:class:depth-first-search
supports:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:virtual-reality
partOf:
  - urn:ngm:class:spatial-data-structure
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:neural-radiance-field
---

# Bounding Volume Hierarchy

A tree-structured acceleration data structure that recursively organizes geometric objects within nested bounding volumes, enabling efficient spatial queries, collision detection, and ray-scene intersection testing by rapidly culling large portions of geometry that cannot intersect with a query.
