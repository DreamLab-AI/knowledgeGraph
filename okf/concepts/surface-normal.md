---
okf_version: "0.2"
type: Class
title: Surface Normal
resource: urn:ngm:class:surface-normal
domain: spatial-computing
description: A surface normal is a vector perpendicular to a surface at a given point, indicating the orientation of that surface in space. Normals are fundamental to lighting and shading calculations, because the angle between a normal and a light direction governs how much illumination a surface receives. In computer graphics and 3D reconstruction, surface normals drive realistic shading, normal mapping, and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:scene-geometry
hasPart:
  - urn:ngm:class:normal-mapping
  - urn:ngm:class:point-cloud
requires:
  - urn:ngm:class:scene-geometry
  - urn:ngm:class:depth-estimation
enables:
  - urn:ngm:class:rendering
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:physically-based-rendering
dependsOn:
  - urn:ngm:class:scene-geometry
bridgesTo:
  - urn:ngm:class:normal-mapping
uses:
  - urn:ngm:class:normal-mapping
  - urn:ngm:class:photogrammetry
supports:
  - urn:ngm:class:rendering
  - urn:ngm:class:physically-based-rendering
partOf:
  - urn:ngm:class:scene-geometry
relatedTo:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:point-cloud
---

# Surface Normal

A surface normal is a vector perpendicular to a surface at a given point, indicating the orientation of that surface in space. Normals are fundamental to lighting and shading calculations, because the angle between a normal and a light direction governs how much illumination a surface receives. In computer graphics and 3D reconstruction, surface normals drive realistic shading, normal mapping, and the recovery of fine geometric detail.
