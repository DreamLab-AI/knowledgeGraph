---
okf_version: "0.2"
type: Class
title: Post Processing
resource: urn:ngm:class:post-processing
domain: spatial-computing
description: Post processing is the stage in a real-time or offline rendering pipeline where image-space operations are applied to the fully rasterised or ray-traced framebuffer before it is displayed or composited. Effects—such as bloom, depth of field, motion blur, tone mapping, colour grading, screen-space ambient occlusion (SSAO), temporal anti-aliasing (TAA), and chromatic aberration—are executed as one o
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:colour-grading
  - urn:ngm:class:anti-aliasing
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:bloom
  - urn:ngm:class:depth-of-field
  - urn:ngm:class:motion-blur
  - urn:ngm:class:tone-mapping
  - urn:ngm:class:ambient-occlusion
requires:
  - urn:ngm:class:shader
  - urn:ngm:class:render-target
  - urn:ngm:class:framebuffer
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:cinematic-rendering
  - urn:ngm:class:photorealism
  - urn:ngm:class:visual-fidelity
dependsOn:
  - urn:ngm:class:rendering-technique
  - urn:ngm:class:g-buffer
contrastsWith:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:forward-rendering
bridgesTo:
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:machine-learning-supersampling
uses:
  - urn:ngm:class:rasterization
  - urn:ngm:class:texture-sampling
  - urn:ngm:class:compute-shader
supports:
  - urn:ngm:class:visual-effects
  - urn:ngm:class:xr-rendering
  - urn:ngm:class:virtual-production
partOf:
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:deferred-rendering
  - urn:ngm:class:high-dynamic-range
---

# Post Processing

Post processing is the stage in a real-time or offline rendering pipeline where image-space operations are applied to the fully rasterised or ray-traced framebuffer before it is displayed or composited. Effects—such as bloom, depth of field, motion blur, tone mapping, colour grading, screen-space ambient occlusion (SSAO), temporal anti-aliasing (TAA), and chromatic aberration—are executed as one or more full-screen shader passes that read from and write back to render targets. By operating in screen space rather than on scene geometry, post processing achieves high visual fidelity at comparatively low computational cost, and has become an indispensable component of game engines, virtual production pipelines, and XR head-mounted display rendering stacks.
