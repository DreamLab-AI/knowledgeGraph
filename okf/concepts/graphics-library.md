---
okf_version: "0.2"
type: Class
title: Graphics Library
resource: urn:ngm:class:graphics-library
domain: spatial-computing
description: A software library that provides a standardised API for issuing draw calls, managing GPU resources, and configuring the graphics pipeline, abstracting hardware differences from application code. Canonical graphics libraries—OpenGL, Vulkan, Metal, DirectX, WebGL—enable portable, high-performance 2D and 3D rendering across diverse hardware platforms and are foundational to real-time spatial computin
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-display-and-rendering
enables:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:computer-graphics
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:gpu-compute
supports:
  - urn:ngm:class:game-engine
  - urn:ngm:class:rendering-engine
standardizedBy:
  - urn:ngm:class:3-d-graphics-standard
---

# Graphics Library

A software library that provides a standardised API for issuing draw calls, managing GPU resources, and configuring the graphics pipeline, abstracting hardware differences from application code. Canonical graphics libraries—OpenGL, Vulkan, Metal, DirectX, WebGL—enable portable, high-performance 2D and 3D rendering across diverse hardware platforms and are foundational to real-time spatial computing applications.
