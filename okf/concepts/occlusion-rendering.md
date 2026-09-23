---
okf_version: "0.2"
type: Class
title: Occlusion Rendering
resource: urn:ngm:class:occlusion-rendering
domain: spatial-computing
description: Occlusion rendering is the set of techniques used in real-time and offline graphics pipelines to correctly determine and display which surfaces are hidden behind other geometry from a given camera viewpoint, as well as to compute the darkening of surfaces due to local geometric obstruction of ambient light. It encompasses hardware depth-buffer culling, ambient occlusion shading, screen-space occlu
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:rendering-technique
enables:
  - urn:ngm:class:ar-occlusion
  - urn:ngm:class:photorealistic-rendering
uses:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
relatedTo:
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:occlusion-culling
---

# Occlusion Rendering

Occlusion rendering is the set of techniques used in real-time and offline graphics pipelines to correctly determine and display which surfaces are hidden behind other geometry from a given camera viewpoint, as well as to compute the darkening of surfaces due to local geometric obstruction of ambient light. It encompasses hardware depth-buffer culling, ambient occlusion shading, screen-space occlusion methods, and — in augmented reality — the masking of virtual objects by real-world foreground geometry. Correct occlusion is essential for perceptual plausibility in both games and AR/VR applications.
