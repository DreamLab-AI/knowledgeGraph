---
okf_version: "0.2"
type: Class
title: Graphics Processing
resource: urn:ngm:class:graphics-processing
domain: spatial-computing
description: Graphics processing is the computation that transforms scene descriptions into rendered images, covering geometry transformation, shading, rasterisation and output to a display.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:spatial-computing-domain
hasPart:
  - urn:ngm:class:vertex-processing
  - urn:ngm:class:compute-shader
requires:
  - urn:ngm:class:gpu
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:shader
enables:
  - urn:ngm:class:3-d-rendering
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
dependsOn:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:hardware-acceleration
contrastsWith:
  - urn:ngm:class:cpu-computing
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:graphics-api
uses:
  - urn:ngm:class:graphics-api
  - urn:ngm:class:rasterization
  - urn:ngm:class:texture-mapping
supports:
  - urn:ngm:class:game-engine
  - urn:ngm:class:digital-twin
standardizedBy:
  - urn:ngm:class:vulkan
  - urn:ngm:class:open-gl
  - urn:ngm:class:direct3d
relatedTo:
  - urn:ngm:class:display-technology
---

# Graphics Processing

Graphics processing is the computation that transforms scene descriptions into rendered images, covering geometry transformation, shading, rasterisation and output to a display.
