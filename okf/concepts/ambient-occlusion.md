---
okf_version: "0.2"
type: Class
title: Ambient Occlusion
resource: urn:ngm:class:ambient-occlusion
domain: spatial-computing
description: A shading and rendering technique that approximates the degree to which each point on a surface is occluded from ambient environmental light by surrounding geometry, producing soft shadows in crevices, corners, and contact areas that significantly enhance the perception of three-dimensional form and material grounding. Unlike direct illumination algorithms, ambient occlusion is view-independent an
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:rendering-technique
requires:
  - urn:ngm:class:scene-geometry
  - urn:ngm:class:surface-normal
enables:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:perception
contrastsWith:
  - urn:ngm:class:direct-illumination
  - urn:ngm:class:shadow-mapping
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:depth-buffer
  - urn:ngm:class:sampling
  - urn:ngm:class:shader
partOf:
  - urn:ngm:class:global-illumination
  - urn:ngm:class:rendering-pipeline
relatedTo:
  - urn:ngm:class:dynamic-lighting
  - urn:ngm:class:ar-occlusion
  - urn:ngm:class:occlusion-culling
  - urn:ngm:class:neural-rendering
---

# Ambient Occlusion

A shading and rendering technique that approximates the degree to which each point on a surface is occluded from ambient environmental light by surrounding geometry, producing soft shadows in crevices, corners, and contact areas that significantly enhance the perception of three-dimensional form and material grounding. Unlike direct illumination algorithms, ambient occlusion is view-independent and operates on the assumption that ambient light arrives uniformly from all directions, making it computationally tractable as either a pre-baked texture or a real-time screen-space approximation. It is a foundational element of physically plausible rendering pipelines.
