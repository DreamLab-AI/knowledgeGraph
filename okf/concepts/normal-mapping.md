---
okf_version: "0.2"
type: Class
title: Normal Mapping
resource: urn:ngm:class:normal-mapping
domain: spatial-computing
description: A real-time rendering technique that fakes fine surface detail by storing perturbed surface normals in a texture and using them, rather than the interpolated geometric normals, during per-pixel lighting. Detail sculpted on a high-polygon model is baked into a tangent-space normal map applied to a low-polygon mesh, so bumps, scratches, and seams respond correctly to moving lights without adding geo
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:texture-mapping
requires:
  - urn:ngm:class:surface-normal
  - urn:ngm:class:uv-mapping
uses:
  - urn:ngm:class:pixel-shader
relatedTo:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:polygon-mesh
---

# Normal Mapping

A real-time rendering technique that fakes fine surface detail by storing perturbed surface normals in a texture and using them, rather than the interpolated geometric normals, during per-pixel lighting. Detail sculpted on a high-polygon model is baked into a tangent-space normal map applied to a low-polygon mesh, so bumps, scratches, and seams respond correctly to moving lights without adding geometry — a cornerstone of the game-asset pipeline and physically based rendering.
