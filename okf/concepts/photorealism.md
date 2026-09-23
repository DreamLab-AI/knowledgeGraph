---
okf_version: "0.2"
type: Class
title: Photorealism
resource: urn:ngm:class:photorealism
domain: spatial-computing
description: Photorealism is the goal and quality of producing synthetic imagery that is visually indistinguishable from a photograph of a real scene. In computer graphics it is pursued through physically based rendering, accurate light transport such as global illumination and ray tracing, high-fidelity material models, and careful post-processing including tone mapping and colour grading. Achieving photoreal
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:rendering
requires:
  - urn:ngm:class:global-illumination
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:ray-tracing
enables:
  - urn:ngm:class:visual-effects
  - urn:ngm:class:virtual-production
dependsOn:
  - urn:ngm:class:gpu-rendering
uses:
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:shader
  - urn:ngm:class:hdr
supports:
  - urn:ngm:class:film-production
partOf:
  - urn:ngm:class:computer-graphics
relatedTo:
  - urn:ngm:class:colour-grading
  - urn:ngm:class:post-processing
  - urn:ngm:class:tone-mapping
---

# Photorealism

Photorealism is the goal and quality of producing synthetic imagery that is visually indistinguishable from a photograph of a real scene. In computer graphics it is pursued through physically based rendering, accurate light transport such as global illumination and ray tracing, high-fidelity material models, and careful post-processing including tone mapping and colour grading. Achieving photorealism requires faithful simulation of how light interacts with surfaces, volumes, and the camera, and it underpins applications from visual effects and architectural visualisation to immersive virtual environments and synthetic training data.
