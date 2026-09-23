---
okf_version: "0.2"
type: Class
title: Real Time Graphics
resource: urn:ngm:class:real-time-graphics
domain: spatial-computing
description: "Real-time graphics is the field of computer graphics concerned with generating and displaying images fast enough to produce interactive, continuously updating visuals, typically at frame rates of sixty frames per second or higher. It prioritises low and predictable latency over photorealistic fidelity, relying on hardware acceleration and approximate rendering techniques. It is the foundation for "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:real-time-rendering
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:latency
implements:
  - urn:ngm:class:rendering
contrastsWith:
  - urn:ngm:class:ray-tracing
bridgesTo:
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:graphics-processing-unit
supports:
  - urn:ngm:class:game-engine
  - urn:ngm:class:interactive-rendering
standardizedBy:
  - urn:ngm:class:vulkan
relatedTo:
  - urn:ngm:class:graphics-pipeline
---

# Real Time Graphics

Real-time graphics is the field of computer graphics concerned with generating and displaying images fast enough to produce interactive, continuously updating visuals, typically at frame rates of sixty frames per second or higher. It prioritises low and predictable latency over photorealistic fidelity, relying on hardware acceleration and approximate rendering techniques. It is the foundation for games, simulations and immersive spatial computing experiences.
