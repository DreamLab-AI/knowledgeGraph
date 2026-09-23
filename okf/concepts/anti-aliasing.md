---
okf_version: "0.2"
type: Class
title: Anti Aliasing
resource: urn:ngm:class:anti-aliasing
domain: spatial-computing
description: Anti-aliasing is a family of rendering techniques that reduce the jagged, stair-stepped edges and shimmering artefacts that arise when continuous geometry and signals are sampled onto a discrete pixel grid. By increasing effective sampling, blending edge pixels, or reconstructing from accumulated samples, anti-aliasing produces smoother, more visually faithful images. It is a standard stage of rea
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:real-time-rendering
hasPart:
  - urn:ngm:class:sampling
  - urn:ngm:class:post-processing
requires:
  - urn:ngm:class:graphics-pipeline
enables:
  - urn:ngm:class:rasterization
dependsOn:
  - urn:ngm:class:gpu
uses:
  - urn:ngm:class:sampling
  - urn:ngm:class:gpu
supports:
  - urn:ngm:class:rasterization
partOf:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:real-time-rendering
relatedTo:
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:offline-rendering
---

# Anti Aliasing

Anti-aliasing is a family of rendering techniques that reduce the jagged, stair-stepped edges and shimmering artefacts that arise when continuous geometry and signals are sampled onto a discrete pixel grid. By increasing effective sampling, blending edge pixels, or reconstructing from accumulated samples, anti-aliasing produces smoother, more visually faithful images. It is a standard stage of real-time and offline rendering pipelines, with methods such as supersampling, multisampling, post-process filtering, and temporal accumulation.
