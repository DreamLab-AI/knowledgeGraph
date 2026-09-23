---
okf_version: "0.2"
type: Class
title: Procedural Texture
resource: urn:ngm:class:procedural-texture
domain: spatial-computing
description: Algorithmically generated pattern used to simulate surface detail without stored images, computed on-demand using mathematical functions.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:render-pipeline
hasPart:
  - urn:ngm:class:noise-function
  - urn:ngm:class:shader
  - urn:ngm:class:parameter-set
  - urn:ngm:class:pattern-generator
  - urn:ngm:class:shader
requires:
  - urn:ngm:class:shader
  - urn:ngm:class:gpu-shader
  - urn:ngm:class:texture-coordinates
  - urn:ngm:class:mathematical-functions
enables:
  - urn:ngm:class:dynamic-surface-detail
  - urn:ngm:class:memory-efficient-texturing
  - urn:ngm:class:resolution-independent-graphics
  - urn:ngm:class:procedural-materials
dependsOn:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:shader-language
partOf:
  - urn:ngm:class:material-system
  - urn:ngm:class:rendering-pipeline
---

# Procedural Texture

Algorithmically generated pattern used to simulate surface detail without stored images, computed on-demand using mathematical functions.
