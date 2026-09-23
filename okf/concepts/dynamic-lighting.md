---
okf_version: "0.2"
type: Class
title: Dynamic Lighting
resource: urn:ngm:class:dynamic-lighting
domain: spatial-computing
description: Dynamic lighting is a real-time rendering technique in which light sources, shadows, and indirect illumination are computed per-frame based on the current state of a scene, allowing lights to move, change intensity or colour, and interact with animated geometry without relying on pre-baked static lighting data. It is foundational to believable 3D environments in games, virtual production, and spat
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:rendering-technique
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:global-illumination
uses:
  - urn:ngm:class:shader
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:ray-tracing
relatedTo:
  - urn:ngm:class:rendering-pipeline
---

# Dynamic Lighting

Dynamic lighting is a real-time rendering technique in which light sources, shadows, and indirect illumination are computed per-frame based on the current state of a scene, allowing lights to move, change intensity or colour, and interact with animated geometry without relying on pre-baked static lighting data. It is foundational to believable 3D environments in games, virtual production, and spatial computing applications.
