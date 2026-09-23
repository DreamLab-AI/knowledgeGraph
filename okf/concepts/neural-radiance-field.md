---
okf_version: "0.2"
type: Class
title: Neural Radiance Field
resource: urn:ngm:class:neural-radiance-field
domain: artificial-intelligence
description: "A continuous volumetric scene representation that uses a multilayer perceptron to map 5D coordinates (3D position plus 2D viewing direction) to colour and volume density, enabling novel view synthesis via differentiable ray marching. NeRF achieves photo-realistic rendering of complex scenes from a sparse set of calibrated images and has spawned instant variants, Gaussian Splatting successors, and "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:multilayer-perceptron
  - urn:ngm:class:positional-encoding
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:structure-from-motion
enables:
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:3-d-scene-reconstruction
  - urn:ngm:class:virtual-reality
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:implicit-neural-representation
contrastsWith:
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:point-cloud
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:ray-marching
  - urn:ngm:class:volume-rendering
  - urn:ngm:class:gradient-descent
relatedTo:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:tele-060-instant-ngp
  - urn:ngm:class:computer-vision
---

# Neural Radiance Field

A continuous volumetric scene representation that uses a multilayer perceptron to map 5D coordinates (3D position plus 2D viewing direction) to colour and volume density, enabling novel view synthesis via differentiable ray marching. NeRF achieves photo-realistic rendering of complex scenes from a sparse set of calibrated images and has spawned instant variants, Gaussian Splatting successors, and robotics perception applications.
