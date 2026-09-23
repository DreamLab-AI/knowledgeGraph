---
okf_version: "0.2"
type: Class
title: Real-Time Rendering
resource: urn:ngm:class:real-time-rendering
domain: spatial-computing
description: "Real-time rendering is the sub-field of computer graphics focused on producing and analyzing images at interactive frame rates, typically using a graphics processing unit (GPU) to transform 3D scene data into 2D display output within milliseconds. The graphics pipeline processes geometry, applies textures and lighting, and rasterizes the final image fast enough to support interactive applications "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:three-dimensional-graphics
hasPart:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:rasterization
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:occlusion-culling
requires:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:shader
  - urn:ngm:class:graphics-api
enables:
  - urn:ngm:class:interactive-visualization
  - urn:ngm:class:video-games
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:extended-reality
  - urn:ngm:class:digital-twin
dependsOn:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:spatial-data-structure
contrastsWith:
  - urn:ngm:class:offline-rendering
bridgesTo:
  - urn:ngm:class:inference
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:global-illumination
  - urn:ngm:class:anti-aliasing
relatedTo:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:metaverse
---

# Real-Time Rendering

Real-time rendering is the sub-field of computer graphics focused on producing and analyzing images at interactive frame rates, typically using a graphics processing unit (GPU) to transform 3D scene data into 2D display output within milliseconds. The graphics pipeline processes geometry, applies textures and lighting, and rasterizes the final image fast enough to support interactive applications such as video games, simulations, and virtual reality.
