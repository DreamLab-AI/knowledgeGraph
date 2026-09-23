---
okf_version: "0.2"
type: Class
title: 3D Gaussian Splatting
resource: urn:ngm:class:3-d-gaussian-splatting
domain: spatial-computing
description: A neural rendering technique that represents 3D scenes as collections of millions of 3D Gaussian primitives with learnable positions, colours, opacities, and covariances, enabling photorealistic real-time rendering at 100+ frames per second through GPU-accelerated rasterisation, revolutionising telepresence and immersive collaboration with unprecedented visual fidelity.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:tele-050-neural-rendering-telepresence
hasPart:
  - urn:ngm:class:gaussian-primitive
  - urn:ngm:class:spherical-harmonics
requires:
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:differentiable-rendering
enables:
  - urn:ngm:class:photorealistic-telepresence
  - urn:ngm:class:tele-053-volumetric-video-conferencing
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:avatar
  - urn:ngm:class:photorealistictelepresence
dependsOn:
  - urn:ngm:class:multi-view-photography
  - urn:ngm:class:point-cloud
  - urn:ngm:class:adam-optimiser
implements:
  - urn:ngm:class:alpha-blending
contrastsWith:
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:tele-060-instant-ngp
bridgesTo:
  - urn:ngm:class:tele-050-neural-rendering-telepresence
  - urn:ngm:class:extended-reality
  - urn:ngm:class:web-xr
uses:
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:ssim-loss
partOf:
  - urn:ngm:class:novel-view-synthesis
relatedTo:
  - urn:ngm:class:virtual-reality-telepresence
  - urn:ngm:class:3-d-scene-reconstruction
---

# 3D Gaussian Splatting

A neural rendering technique that represents 3D scenes as collections of millions of 3D Gaussian primitives with learnable positions, colours, opacities, and covariances, enabling photorealistic real-time rendering at 100+ frames per second through GPU-accelerated rasterisation, revolutionising telepresence and immersive collaboration with unprecedented visual fidelity.
