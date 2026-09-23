---
okf_version: "0.2"
type: Class
title: 3D Rendering Engine
resource: urn:ngm:class:3-d-rendering-engine
domain: spatial-computing
description: A 3D rendering engine is software that converts three-dimensional geometric data into two-dimensional images through processes including geometry processing, lighting calculation, texture mapping, and rasterisation or ray tracing. In real-time contexts it targets interactive frame rates (90 Hz+) and must minimise motion-to-photon latency for XR presence.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:shader-pipeline
  - urn:ngm:class:scene-graph
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:level-of-detail
requires:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:graphics-api
enables:
  - urn:ngm:class:real-time-visualisation
  - urn:ngm:class:xr-applications
  - urn:ngm:class:immersive-experiences
  - urn:ngm:class:digital-twin
  - urn:ngm:class:foveated-rendering
dependsOn:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:spatial-audio
implements:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:rasterization
contrastsWith:
  - urn:ngm:class:offline-rendering
bridgesTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:inference
uses:
  - urn:ngm:class:vulkan
  - urn:ngm:class:open-gl
  - urn:ngm:class:directx
supports:
  - urn:ngm:class:stereoscopic-display
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
standardizedBy:
  - urn:ngm:class:khronos-group
partOf:
  - urn:ngm:class:game-engine
relatedTo:
  - urn:ngm:class:spatial-computing
---

# 3D Rendering Engine

A 3D rendering engine is software that converts three-dimensional geometric data into two-dimensional images through processes including geometry processing, lighting calculation, texture mapping, and rasterisation or ray tracing. In real-time contexts it targets interactive frame rates (90 Hz+) and must minimise motion-to-photon latency for XR presence.
