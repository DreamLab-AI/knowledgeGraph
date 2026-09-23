---
okf_version: "0.2"
type: Class
title: Render Target
resource: urn:ngm:class:render-target
domain: spatial-computing
description: A memory buffer or texture surface to which a GPU writes the output of a rendering pass, including the default framebuffer displayed on screen and off-screen targets used for post-processing effects, shadow maps, reflections, and multi-pass rendering in real-time graphics pipelines.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:render-pipeline
uses:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:compute-shader
partOf:
  - urn:ngm:class:real-time-rendering-pipeline
relatedTo:
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:shader
---

# Render Target

A memory buffer or texture surface to which a GPU writes the output of a rendering pass, including the default framebuffer displayed on screen and off-screen targets used for post-processing effects, shadow maps, reflections, and multi-pass rendering in real-time graphics pipelines.
