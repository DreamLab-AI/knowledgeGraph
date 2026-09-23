---
okf_version: "0.2"
type: Class
title: Pixel Shader
resource: urn:ngm:class:pixel-shader
domain: spatial-computing
description: A programmable GPU stage that executes once per rasterised fragment, determining each pixel's final colour and depth by sampling textures, computing lighting models, and applying material properties. Pixel shaders operate in a massively parallel fashion and are the primary site for physically-based rendering calculations in real-time graphics pipelines.
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:metaverse
requires:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:rasterization
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:deferred-rendering
  - urn:ngm:class:ambient-occlusion
implements:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:phong-shading
  - urn:ngm:class:normal-mapping
contrastsWith:
  - urn:ngm:class:compute-shader
  - urn:ngm:class:geometry-shader
bridgesTo:
  - urn:ngm:class:xr-rendering
uses:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:glsl
  - urn:ngm:class:hlsl
partOf:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:graphics-pipeline
relatedTo:
  - urn:ngm:class:shader
  - urn:ngm:class:framebuffer
  - urn:ngm:class:shadow-mapping
---

# Pixel Shader

A programmable GPU stage that executes once per rasterised fragment, determining each pixel's final colour and depth by sampling textures, computing lighting models, and applying material properties. Pixel shaders operate in a massively parallel fashion and are the primary site for physically-based rendering calculations in real-time graphics pipelines.
