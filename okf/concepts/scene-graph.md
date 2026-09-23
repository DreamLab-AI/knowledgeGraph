---
okf_version: "0.2"
type: Class
title: Scene Graph
resource: urn:ngm:class:scene-graph
domain: spatial-computing
description: A hierarchical tree-based data structure organizing and describing the spatial, logical, and rendering relationships among objects in a 3D scene, enabling efficient traversal, culling, and rendering operations.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:light-node
  - urn:ngm:class:scene-node
  - urn:ngm:class:transform-node
  - urn:ngm:class:geometry-node
  - urn:ngm:class:camera-node
  - urn:ngm:class:group-node
requires:
  - urn:ngm:class:bounding-volume
  - urn:ngm:class:transform-matrix
  - urn:ngm:class:spatial-index
enables:
  - urn:ngm:class:frustum-culling
  - urn:ngm:class:collision-detection
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:spatial-queries
  - urn:ngm:class:scene-rendering
dependsOn:
  - urn:ngm:class:graphics-api
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:rendering-pipeline
partOf:
  - urn:ngm:class:3-d-engine
  - urn:ngm:class:game-engine
  - urn:ngm:class:gl-tf-3-d-file-format
  - urn:ngm:class:rendering-engine
  - urn:ngm:class:virtual-world
---

# Scene Graph

A hierarchical tree-based data structure organizing and describing the spatial, logical, and rendering relationships among objects in a 3D scene, enabling efficient traversal, culling, and rendering operations.
