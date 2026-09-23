---
okf_version: "0.2"
type: Class
title: Scene Geometry
resource: urn:ngm:class:scene-geometry
domain: spatial-computing
description: Scene geometry is the structured description of the spatial shape, surfaces, and arrangement of objects within a three-dimensional environment. It captures positions, depths, surface orientations, and connectivity needed to render, simulate, or reason about a scene. Accurate scene geometry underpins realistic lighting, occlusion, collision, and interaction in spatial computing and computer graphic
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:scene-representation
hasPart:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:geometry
requires:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:spatial-mapping
enables:
  - urn:ngm:class:rendering
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:scene-understanding
dependsOn:
  - urn:ngm:class:spatial-mapping
contrastsWith:
  - urn:ngm:class:scene-understanding
bridgesTo:
  - urn:ngm:class:photogrammetry
uses:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:slam
supports:
  - urn:ngm:class:rendering
  - urn:ngm:class:scene-understanding
partOf:
  - urn:ngm:class:scene-representation
relatedTo:
  - urn:ngm:class:geometry
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:ambient-occlusion
---

# Scene Geometry

Scene geometry is the structured description of the spatial shape, surfaces, and arrangement of objects within a three-dimensional environment. It captures positions, depths, surface orientations, and connectivity needed to render, simulate, or reason about a scene. Accurate scene geometry underpins realistic lighting, occlusion, collision, and interaction in spatial computing and computer graphics applications.
