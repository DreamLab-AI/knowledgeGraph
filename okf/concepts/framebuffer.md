---
okf_version: "0.2"
type: Class
title: Framebuffer
resource: urn:ngm:class:framebuffer
domain: spatial-computing
description: A framebuffer is a region of memory that holds the pixel data representing a complete frame to be displayed or further processed, typically organised as colour, depth, and stencil buffers. In a graphics pipeline, rendering operations write their results into a framebuffer, which the display hardware then scans out to a screen or which subsequent passes read as input. Framebuffers are central to do
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:rendering-pipeline
hasPart:
  - urn:ngm:class:depth-buffer
  - urn:ngm:class:render-target
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:render-target
uses:
  - urn:ngm:class:rasterization
  - urn:ngm:class:texture-mapping
supports:
  - urn:ngm:class:vulkan
  - urn:ngm:class:direct3d
partOf:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:graphics-pipeline
relatedTo:
  - urn:ngm:class:rasterization
  - urn:ngm:class:texture-mapping
---

# Framebuffer

A framebuffer is a region of memory that holds the pixel data representing a complete frame to be displayed or further processed, typically organised as colour, depth, and stencil buffers. In a graphics pipeline, rendering operations write their results into a framebuffer, which the display hardware then scans out to a screen or which subsequent passes read as input. Framebuffers are central to double buffering, post-processing, off-screen rendering, and the multi-pass techniques that underpin modern real-time graphics.
