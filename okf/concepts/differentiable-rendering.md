---
okf_version: "0.2"
type: Class
title: Differentiable Rendering
resource: urn:ngm:class:differentiable-rendering
domain: machine-learning
description: Differentiable rendering is a class of algorithms that reformulate the image-formation pipeline so that pixel values are differentiable with respect to scene parameters — including geometry, surface materials, lighting, and camera pose. By enabling backpropagation through the rendering process, these methods support gradient-based optimisation for inverse rendering, scene reconstruction from 2D ob
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:computer-vision
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:deep-learning
  - urn:ngm:class:inverse-rendering
hasPart:
  - urn:ngm:class:differentiable-rasteriser
  - urn:ngm:class:volume-rendering-equation
  - urn:ngm:class:monte-carlo-estimator
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:soft-edge-function
  - urn:ngm:class:loss-function
requires:
  - urn:ngm:class:automatic-differentiation
  - urn:ngm:class:deep-learning-framework
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:loss-function
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:inverse-rendering
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:3d-generative-model
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:neural-avatar
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-driving-simulation
dependsOn:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:numerical-methods
implements:
  - urn:ngm:class:volumetric-rendering
  - urn:ngm:class:physically-based-rendering
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:path-tracing
contrastsWith:
  - urn:ngm:class:classical-rendering
  - urn:ngm:class:rasterization
  - urn:ngm:class:mesh-based-rendering
  - urn:ngm:class:photogrammetry
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:backpropagation
  - urn:ngm:class:rasterization
  - urn:ngm:class:monte-carlo-integration
  - urn:ngm:class:rasterization
  - urn:ngm:class:spherical-harmonics
  - urn:ngm:class:bidirectional-reflectance-distribution-function
  - urn:ngm:class:structure-from-motion
supports:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:spatial-computing
standardizedBy:
  - urn:ngm:class:siggraph
  - urn:ngm:class:cvpr
  - urn:ngm:class:iccv
relatedTo:
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:computer-vision
  - urn:ngm:class:neural-scene-representation
  - urn:ngm:class:implicit-neural-representation
  - urn:ngm:class:bidirectional-reflectance-distribution-function
  - urn:ngm:class:occupancy-network
  - urn:ngm:class:signed-distance-function
  - urn:ngm:class:neural-rendering
---

# Differentiable Rendering

Differentiable rendering is a class of algorithms that reformulate the image-formation pipeline so that pixel values are differentiable with respect to scene parameters — including geometry, surface materials, lighting, and camera pose. By enabling backpropagation through the rendering process, these methods support gradient-based optimisation for inverse rendering, scene reconstruction from 2D observations, and end-to-end training of 3D-aware neural models. The field bridges classical computer graphics with deep learning, treating rendering as a learnable, differentiable module within a larger neural architecture.
