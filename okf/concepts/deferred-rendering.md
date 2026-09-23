---
okf_version: "0.2"
type: Class
title: Deferred Rendering
resource: urn:ngm:class:deferred-rendering
domain: spatial-computing
description: Deferred rendering is a real-time shading technique that separates geometry processing from lighting by first rasterising scene attributes into a set of screen-space buffers, then computing lighting in a second pass over those buffers. By storing per-pixel position, normal, albedo, and material data in a geometry buffer, lighting cost becomes independent of scene complexity and scales with the num
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:rendering-technique
requires:
  - urn:ngm:class:gpu-rendering
  - urn:ngm:class:graphics-pipeline
enables:
  - urn:ngm:class:global-illumination
implements:
  - urn:ngm:class:rendering-technique
contrastsWith:
  - urn:ngm:class:rasterization
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:rasterization
  - urn:ngm:class:gpu-rendering
supports:
  - urn:ngm:class:real-time-rendering
partOf:
  - urn:ngm:class:rendering-technique
relatedTo:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:rasterization
  - urn:ngm:class:graphics-pipeline
---

# Deferred Rendering

Deferred rendering is a real-time shading technique that separates geometry processing from lighting by first rasterising scene attributes into a set of screen-space buffers, then computing lighting in a second pass over those buffers. By storing per-pixel position, normal, albedo, and material data in a geometry buffer, lighting cost becomes independent of scene complexity and scales with the number of lights instead. This decoupling makes it efficient to render scenes with many dynamic light sources.
