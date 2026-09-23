---
okf_version: "0.2"
type: Class
title: Fragment Shading
resource: urn:ngm:class:fragment-shading
domain: spatial-computing
description: The programmable stage of the graphics pipeline in which per-fragment computations determine the final colour and depth of each candidate pixel produced by rasterisation. Fragment shaders evaluate lighting models, sample and filter textures, and apply material properties in parallel across thousands of GPU cores, consuming interpolated vertex attributes and producing the shaded values that are ble
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:real-time-rendering
dependsOn:
  - urn:ngm:class:vertex-processing
uses:
  - urn:ngm:class:gpu
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:shader
partOf:
  - urn:ngm:class:rasterization
  - urn:ngm:class:real-time-rendering-pipeline
---

# Fragment Shading

The programmable stage of the graphics pipeline in which per-fragment computations determine the final colour and depth of each candidate pixel produced by rasterisation. Fragment shaders evaluate lighting models, sample and filter textures, and apply material properties in parallel across thousands of GPU cores, consuming interpolated vertex attributes and producing the shaded values that are blended into the framebuffer, making this stage the dominant cost in most real-time rendering workloads.
