---
okf_version: "0.2"
type: Class
title: Rendering Technique
resource: urn:ngm:class:rendering-technique
domain: spatial-computing
description: A rendering technique is a specific algorithm or computational methodology for transforming a three-dimensional geometric scene description into a two-dimensional pixel image, inherently balancing image fidelity against computational cost and latency. The fundamental paradigms are rasterization (projecting geometry to screen space via edge-walking and interpolation), ray tracing (physically simula
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:path-tracing
  - urn:ngm:class:post-processing
  - urn:ngm:class:global-illumination
requires:
  - urn:ngm:class:shader
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:scene-graph
enables:
  - urn:ngm:class:visual-effects
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:real-time-3d-graphics
dependsOn:
  - urn:ngm:class:graphics-api
  - urn:ngm:class:level-of-detail
contrastsWith:
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
bridgesTo:
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:anti-aliasing
  - urn:ngm:class:anti-aliasing
supports:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:metaverse
relatedTo:
  - urn:ngm:class:deferred-rendering
  - urn:ngm:class:ambient-occlusion
  - urn:ngm:class:screen-space-reflections
  - urn:ngm:class:temporal-antialiasing
---

# Rendering Technique

A rendering technique is a specific algorithm or computational methodology for transforming a three-dimensional geometric scene description into a two-dimensional pixel image, inherently balancing image fidelity against computational cost and latency. The fundamental paradigms are rasterization (projecting geometry to screen space via edge-walking and interpolation), ray tracing (physically simulating light transport by casting rays from the virtual camera), and path tracing (extending ray tracing with Monte Carlo sampling for unbiased global illumination). Modern systems layer shading models (forward, deferred, clustered), global illumination approximations, and screen-space post-processing into hybrid pipelines that target real-time or offline quality budgets across hardware ranging from mobile GPUs to dedicated ray-tracing silicon.
