---
okf_version: "0.2"
type: Class
title: Mesh Data
resource: urn:ngm:class:mesh-data
domain: spatial-computing
description: Mesh data is a structured representation of a three-dimensional surface or volume as a collection of vertices, edges, and polygonal faces — most commonly triangles or quads — that together define the geometry of a shape. It encodes both topological connectivity (which vertices form which faces) and geometric attributes (positions, normals, UV coordinates, vertex colours) required for rendering, si
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:spatial-mesh
hasPart:
  - urn:ngm:class:vertex-buffer
  - urn:ngm:class:index-buffer
  - urn:ngm:class:surface-normal
requires:
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:topology
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:3-d-rendering
  - urn:ngm:class:collision-detection
  - urn:ngm:class:finite-element-analysis
  - urn:ngm:class:level-of-detail
contrastsWith:
  - urn:ngm:class:voxel-grid
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:implicit-surface
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:lidar
standardizedBy:
  - urn:ngm:class:usd
  - urn:ngm:class:khronos-group
relatedTo:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:three-dimensional-graphics
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:gaussian-splatting
---

# Mesh Data

Mesh data is a structured representation of a three-dimensional surface or volume as a collection of vertices, edges, and polygonal faces — most commonly triangles or quads — that together define the geometry of a shape. It encodes both topological connectivity (which vertices form which faces) and geometric attributes (positions, normals, UV coordinates, vertex colours) required for rendering, simulation, and analysis. Mesh data serves as the primary interchange format between 3D modelling software, real-time engines, and spatial computing pipelines. It is produced by processes such as photogrammetry, structured-light scanning, LiDAR capture, and procedural generation.
