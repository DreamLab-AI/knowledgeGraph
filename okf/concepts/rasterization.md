---
okf_version: "0.2"
type: Class
title: Rasterization
resource: urn:ngm:class:rasterization
domain: spatial-computing
description: The dominant real-time rendering technique that converts 3D geometric primitives — predominantly triangles — into a 2D pixel representation by determining per-pixel coverage, depth, and colour through a GPU-accelerated pipeline of vertex processing, primitive assembly, scan conversion, fragment shading, and output merging. Rasterization trades photorealistic accuracy for deterministic, high-throug
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:metaverse
hasPart:
  - urn:ngm:class:vertex-processing
  - urn:ngm:class:primitive-assembly
  - urn:ngm:class:fragment-shading
requires:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:depth-buffer
enables:
  - urn:ngm:class:real-time-3d-graphics
contrastsWith:
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:path-tracing
bridgesTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:vertex-shader
  - urn:ngm:class:pixel-shader
  - urn:ngm:class:geometry-shader
supports:
  - urn:ngm:class:rendering-technique
  - urn:ngm:class:post-processing
  - urn:ngm:class:shadow-mapping
partOf:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:real-time-rendering
relatedTo:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:texture-mapping
  - urn:ngm:class:anti-aliasing
---

# Rasterization

The dominant real-time rendering technique that converts 3D geometric primitives — predominantly triangles — into a 2D pixel representation by determining per-pixel coverage, depth, and colour through a GPU-accelerated pipeline of vertex processing, primitive assembly, scan conversion, fragment shading, and output merging. Rasterization trades photorealistic accuracy for deterministic, high-throughput performance suitable for interactive applications.
