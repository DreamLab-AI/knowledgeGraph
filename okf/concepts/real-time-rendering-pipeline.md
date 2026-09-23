---
okf_version: "0.2"
type: Class
title: Real-Time Rendering Pipeline
resource: urn:ngm:class:real-time-rendering-pipeline
domain: spatial-computing
description: Sequence of GPU processes converting 3D scene data into visual frames at interactive rates (typically 30-120+ FPS).
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:render-pipeline
hasPart:
  - urn:ngm:class:fragment-shading
  - urn:ngm:class:geometry-processing
  - urn:ngm:class:vertex-processing
  - urn:ngm:class:physics-based-animation
  - urn:ngm:class:post-processing
  - urn:ngm:class:rasterization
  - urn:ngm:class:frame-buffer-operations
requires:
  - urn:ngm:class:3-d-model
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:shader
  - urn:ngm:class:scene-graph
  - urn:ngm:class:3d-models
  - urn:ngm:class:shaders
  - urn:ngm:class:textures
enables:
  - urn:ngm:class:dynamic-lighting
  - urn:ngm:class:immersive-experiences
  - urn:ngm:class:interactive-3d-graphics
  - urn:ngm:class:real-time-visualization
dependsOn:
  - urn:ngm:class:graphics-api
  - urn:ngm:class:gpu-driver
  - urn:ngm:class:memory-management
partOf:
  - urn:ngm:class:game-engine
  - urn:ngm:class:graphics-rendering-system
---

# Real-Time Rendering Pipeline

Sequence of GPU processes converting 3D scene data into visual frames at interactive rates (typically 30-120+ FPS).
