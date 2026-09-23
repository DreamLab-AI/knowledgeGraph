---
okf_version: "0.2"
type: Class
title: WebGL
resource: urn:ngm:class:web-gl
domain: spatial-computing
description: "WebGL (Web Graphics Library) is a royalty-free JavaScript API that exposes a subset of OpenGL ES 2.0 and 3.0 to web browsers, enabling hardware-accelerated 2D and 3D rendering directly inside an HTML canvas element without requiring browser plug-ins. It communicates directly with the GPU through the browser's graphics pipeline, exposing programmable vertex and fragment shaders written in GLSL ES. "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:graphics-api
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:glsl
  - urn:ngm:class:java-script
  - urn:ngm:class:html-canvas
  - urn:ngm:class:glsl
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:web-xr
  - urn:ngm:class:data-visualisation
  - urn:ngm:class:scientific-visualisation
  - urn:ngm:class:browser-based-games
dependsOn:
  - urn:ngm:class:opengl-es
  - urn:ngm:class:browser-graphics-pipeline
implements:
  - urn:ngm:class:opengl-es
contrastsWith:
  - urn:ngm:class:webgpu
  - urn:ngm:class:direct3d
  - urn:ngm:class:vulkan
  - urn:ngm:class:canvas-2d
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:machine-learning-in-browser
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:rasterization
  - urn:ngm:class:shader
  - urn:ngm:class:vertex-buffer-object
  - urn:ngm:class:rasterization
standardizedBy:
  - urn:ngm:class:khronos-group
relatedTo:
  - urn:ngm:class:three-js
  - urn:ngm:class:babylon-js
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:web-assembly
---

# WebGL

WebGL (Web Graphics Library) is a royalty-free JavaScript API that exposes a subset of OpenGL ES 2.0 and 3.0 to web browsers, enabling hardware-accelerated 2D and 3D rendering directly inside an HTML canvas element without requiring browser plug-ins. It communicates directly with the GPU through the browser's graphics pipeline, exposing programmable vertex and fragment shaders written in GLSL ES. Standardised by the Khronos Group and supported natively in all major browsers, WebGL underpins interactive visualisations, browser-based games, scientific data rendering, and WebXR spatial computing experiences. Its successor API, WebGPU, offers a more modern GPU abstraction while WebGL remains the dominant, battle-tested standard for cross-platform GPU-accelerated web graphics.
