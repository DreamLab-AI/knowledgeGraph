---
okf_version: "0.2"
type: Class
title: Rendering Technology
resource: urn:ngm:class:rendering-technology
domain: spatial-computing
description: Rendering Technology comprises the algorithms, pipelines, and hardware interfaces that convert geometric scene descriptions into pixel images. It encompasses rasterisation, ray tracing, and hybrid approaches, executed on GPUs through APIs such as Vulkan, Metal, and WebGPU, and is foundational to real-time interactive graphics, spatial computing experiences, and digital twin visualisation.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:shader
  - urn:ngm:class:rendering-engine
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:scene-graph
---

# Rendering Technology

Rendering Technology comprises the algorithms, pipelines, and hardware interfaces that convert geometric scene descriptions into pixel images. It encompasses rasterisation, ray tracing, and hybrid approaches, executed on GPUs through APIs such as Vulkan, Metal, and WebGPU, and is foundational to real-time interactive graphics, spatial computing experiences, and digital twin visualisation.
