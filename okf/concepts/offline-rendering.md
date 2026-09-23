---
okf_version: "0.2"
type: Class
title: Offline Rendering
resource: urn:ngm:class:offline-rendering
domain: spatial-computing
description: Offline rendering is the production of images or animation sequences where computation time per frame is not constrained to interactive rates, allowing each frame to take seconds, minutes, or hours to achieve maximum visual fidelity. It is the counterpart to real-time rendering and is typical of film, visual effects, and high-end visualisation, where physically based light transport such as path t
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computer-graphics
requires:
  - urn:ngm:class:parallel-computing
enables:
  - urn:ngm:class:visual-effects
  - urn:ngm:class:film-production
dependsOn:
  - urn:ngm:class:gpu
contrastsWith:
  - urn:ngm:class:real-time-rendering
uses:
  - urn:ngm:class:path-tracing
  - urn:ngm:class:global-illumination
  - urn:ngm:class:ray-tracing
supports:
  - urn:ngm:class:visual-effects
partOf:
  - urn:ngm:class:computer-graphics
relatedTo:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:anti-aliasing
  - urn:ngm:class:texture-mapping
---

# Offline Rendering

Offline rendering is the production of images or animation sequences where computation time per frame is not constrained to interactive rates, allowing each frame to take seconds, minutes, or hours to achieve maximum visual fidelity. It is the counterpart to real-time rendering and is typical of film, visual effects, and high-end visualisation, where physically based light transport such as path tracing is feasible. Offline rendering is commonly executed across render farms to parallelise the heavy computation.
