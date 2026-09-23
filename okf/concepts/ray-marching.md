---
okf_version: "0.2"
type: Class
title: Ray Marching
resource: urn:ngm:class:ray-marching
domain: spatial-computing
description: Ray Marching is a rendering technique in which a ray is incrementally stepped through a scene, evaluating a signed distance field (SDF) at each step to determine proximity to geometry. The step size adapts to the SDF value (sphere tracing), enabling efficient rendering of implicit surfaces, volumetric effects, soft shadows, and ambient occlusion that are impractical with triangle-based rasterisati
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:rendering-technique
requires:
  - urn:ngm:class:shader
  - urn:ngm:class:gpu-compute
enables:
  - urn:ngm:class:global-illumination
  - urn:ngm:class:procedural-generation
  - urn:ngm:class:real-time-rendering
contrastsWith:
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
---

# Ray Marching

Ray Marching is a rendering technique in which a ray is incrementally stepped through a scene, evaluating a signed distance field (SDF) at each step to determine proximity to geometry. The step size adapts to the SDF value (sphere tracing), enabling efficient rendering of implicit surfaces, volumetric effects, soft shadows, and ambient occlusion that are impractical with triangle-based rasterisation. It is widely implemented in GPU shader programs and is foundational to procedural 3D scene generation in real-time and offline contexts.
