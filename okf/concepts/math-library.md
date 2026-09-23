---
okf_version: "0.2"
type: Class
title: Math Library
resource: urn:ngm:class:math-library
domain: spatial-computing
description: A Math Library is a software library providing optimised implementations of mathematical operations — including vector and matrix arithmetic, quaternion transformations, geometric queries, interpolation, and numerical methods — that underpin real-time 3D graphics, physics simulation, and spatial computing systems. These libraries abstract hardware-level SIMD optimisations and GPU-friendly data lay
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:sc-content-and-assets
  - urn:ngm:class:software-library
requires:
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:quaternion-math
enables:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:fluid-simulation
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:compute-shader
bridgesTo:
  - urn:ngm:class:software-library
relatedTo:
  - urn:ngm:class:graphics-library
  - urn:ngm:class:noise-function-library
  - urn:ngm:class:spatial-coordinates
  - urn:ngm:class:gpu-compute
---

# Math Library

A Math Library is a software library providing optimised implementations of mathematical operations — including vector and matrix arithmetic, quaternion transformations, geometric queries, interpolation, and numerical methods — that underpin real-time 3D graphics, physics simulation, and spatial computing systems. These libraries abstract hardware-level SIMD optimisations and GPU-friendly data layouts, enabling physics engines, rendering pipelines, and game engines to perform high-throughput computation at interactive frame rates.
