---
okf_version: "0.2"
type: Class
title: 3D Engine
resource: urn:ngm:class:3-d-engine
domain: spatial-computing
description: A 3D engine is software that handles the representation, rendering, physics simulation, and animation of three-dimensional scenes, providing an abstraction layer over GPU hardware and platform-specific graphics APIs so developers can build interactive applications and simulations without writing low-level graphics code.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:game-engine
hasPart:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:physics-simulation-engine
  - urn:ngm:class:scene-graph
  - urn:ngm:class:animation-system
requires:
  - urn:ngm:class:computational-geometry
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:shader
  - urn:ngm:class:linear-algebra
enables:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:3-d-engine
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:robotics
  - urn:ngm:class:physics-simulation-engine
uses:
  - urn:ngm:class:vulkan
  - urn:ngm:class:open-gl
  - urn:ngm:class:directx
  - urn:ngm:class:webgpu
supports:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:metaverse
relatedTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:level-of-detail
---

# 3D Engine

A 3D engine is software that handles the representation, rendering, physics simulation, and animation of three-dimensional scenes, providing an abstraction layer over GPU hardware and platform-specific graphics APIs so developers can build interactive applications and simulations without writing low-level graphics code.
