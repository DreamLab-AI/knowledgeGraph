---
okf_version: "0.2"
type: Class
title: Vertex Shader
resource: urn:ngm:class:vertex-shader
domain: spatial-computing
description: A mandatory, programmable GPU stage that processes individual vertices within the graphics pipeline, transforming 3D coordinates through model, view, and projection matrices into clip space whilst computing per-vertex attributes such as normals, texture coordinates, and lighting terms that are subsequently interpolated across primitives for the fragment shader.
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:metaverse
requires:
  - urn:ngm:class:vertex-buffer
  - urn:ngm:class:graphics-processing-unit
enables:
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:rasterization
  - urn:ngm:class:skeletal-animation
  - urn:ngm:class:displacement-mapping
dependsOn:
  - urn:ngm:class:vertex-attribute
contrastsWith:
  - urn:ngm:class:compute-shader
  - urn:ngm:class:geometry-shader
  - urn:ngm:class:tessellation-shader
bridgesTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:gpu-programming
  - urn:ngm:class:glsl
  - urn:ngm:class:hlsl
partOf:
  - urn:ngm:class:shader
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:visual-effects
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:level-of-detail
---

# Vertex Shader

A mandatory, programmable GPU stage that processes individual vertices within the graphics pipeline, transforming 3D coordinates through model, view, and projection matrices into clip space whilst computing per-vertex attributes such as normals, texture coordinates, and lighting terms that are subsequently interpolated across primitives for the fragment shader.
