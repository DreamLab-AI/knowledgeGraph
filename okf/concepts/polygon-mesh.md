---
okf_version: "0.2"
type: Class
title: Polygon Mesh
resource: urn:ngm:class:polygon-mesh
domain: spatial-computing
description: A polygon mesh is a collection of vertices, edges, and faces that defines the shape of a polyhedral object in three-dimensional computer graphics. Faces are usually triangles or quadrilaterals whose connectivity describes a surface, and per-vertex attributes such as normals and texture coordinates support shading and texturing. Polygon meshes are the dominant representation for real-time rendering
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:level-of-detail
requires:
  - urn:ngm:class:rendering
enables:
  - urn:ngm:class:rendering
  - urn:ngm:class:animation
implements:
  - urn:ngm:class:usd
contrastsWith:
  - urn:ngm:class:procedural-generation
bridgesTo:
  - urn:ngm:class:procedural-generation
uses:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:rasterization
supports:
  - urn:ngm:class:gpu-rendering
  - urn:ngm:class:level-of-detail
partOf:
  - urn:ngm:class:computer-graphics
relatedTo:
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:gpu-rendering
  - urn:ngm:class:spatial-computing
---

# Polygon Mesh

A polygon mesh is a collection of vertices, edges, and faces that defines the shape of a polyhedral object in three-dimensional computer graphics. Faces are usually triangles or quadrilaterals whose connectivity describes a surface, and per-vertex attributes such as normals and texture coordinates support shading and texturing. Polygon meshes are the dominant representation for real-time rendering, modelling, and animation.
