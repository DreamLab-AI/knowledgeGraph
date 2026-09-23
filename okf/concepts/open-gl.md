---
okf_version: "0.2"
type: Class
title: OpenGL
resource: urn:ngm:class:open-gl
domain: spatial-computing
description: OpenGL is a cross-platform graphics API for rendering 2D and 3D vector graphics, providing a standardised interface to the rendering capabilities of graphics hardware through a rasterisation pipeline with programmable vertex and fragment shader stages.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:graphics-api
hasPart:
  - urn:ngm:class:glsl
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:framebuffer
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:shader-language
  - urn:ngm:class:gpu-driver
enables:
  - urn:ngm:class:3-d-rendering
  - urn:ngm:class:rasterization
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:real-time-graphics
implements:
  - urn:ngm:class:rendering-pipeline
contrastsWith:
  - urn:ngm:class:vulkan
  - urn:ngm:class:direct3d
  - urn:ngm:class:metal
bridgesTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:scientific-visualisation
  - urn:ngm:class:vulkan
supports:
  - urn:ngm:class:cross-platform-development
  - urn:ngm:class:web-gl
  - urn:ngm:class:open-xr
standardizedBy:
  - urn:ngm:class:khronos-group
relatedTo:
  - urn:ngm:class:compute-shader
---

# OpenGL

OpenGL is a cross-platform graphics API for rendering 2D and 3D vector graphics, providing a standardised interface to the rendering capabilities of graphics hardware through a rasterisation pipeline with programmable vertex and fragment shader stages.
