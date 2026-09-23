---
okf_version: "0.2"
type: Class
title: Implicit Neural Representation
resource: urn:ngm:class:implicit-neural-representation
domain: machine-learning
description: An Implicit Neural Representation (INR) is a method of encoding continuous signals—such as 3D shapes, scenes, or images—as the weights of a neural network rather than as discrete grids or meshes. The network acts as a function that maps spatial or temporal coordinates to signal values, enabling theoretically infinite resolution. INRs are widely used in novel-view synthesis, shape reconstruction, a
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-model-architecture
requires:
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:positional-encoding
enables:
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:3-d-reconstruction
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:coordinate-based-network
contrastsWith:
  - urn:ngm:class:voxel-grid
  - urn:ngm:class:point-cloud
uses:
  - urn:ngm:class:multilayer-perceptron
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:3-d-content-generation
relatedTo:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:signed-distance-function
  - urn:ngm:class:generative-ai
---

# Implicit Neural Representation

An Implicit Neural Representation (INR) is a method of encoding continuous signals—such as 3D shapes, scenes, or images—as the weights of a neural network rather than as discrete grids or meshes. The network acts as a function that maps spatial or temporal coordinates to signal values, enabling theoretically infinite resolution. INRs are widely used in novel-view synthesis, shape reconstruction, and physics simulation.
