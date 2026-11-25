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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Normal Mapping

A real-time rendering technique that fakes fine surface detail by storing perturbed surface normals in a texture and using them, rather than the interpolated geometric normals, during per-pixel lighting. Detail sculpted on a high-polygon model is baked into a tangent-space normal map applied to a low-polygon mesh, so bumps, scratches, and seams respond correctly to moving lights without adding geometry — a cornerstone of the game-asset pipeline and physically based rendering.
