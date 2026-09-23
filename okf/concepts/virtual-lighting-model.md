---
okf_version: "0.2"
type: Class
title: Virtual Lighting Model
resource: urn:ngm:class:virtual-lighting-model
domain: spatial-computing
description: Mathematical description of light behavior for rendering realistic illumination in 3D scenes, simulating light emission, transport, and surface interaction.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:photorealistic-rendering
hasPart:
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:brdf
  - urn:ngm:class:global-illumination
  - urn:ngm:class:light-source-model
  - urn:ngm:class:brdf
  - urn:ngm:class:shadow-computation
requires:
  - urn:ngm:class:shader
  - urn:ngm:class:light-parameters
  - urn:ngm:class:shader
  - urn:ngm:class:surface-normals
  - urn:ngm:class:material-properties
enables:
  - urn:ngm:class:dynamic-lighting
  - urn:ngm:class:global-illumination
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:global-illumination
  - urn:ngm:class:mood-and-atmosphere
dependsOn:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:rasterization
partOf:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:shading-system
---

# Virtual Lighting Model

Mathematical description of light behavior for rendering realistic illumination in 3D scenes, simulating light emission, transport, and surface interaction.
