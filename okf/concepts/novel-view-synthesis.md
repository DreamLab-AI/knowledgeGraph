---
okf_version: "0.2"
type: Class
title: Novel View Synthesis
resource: urn:ngm:class:novel-view-synthesis
domain: spatial-computing
description: "Novel view synthesis (NVS) is a computer vision and computer graphics task that involves generating photorealistic images of a scene from camera viewpoints not present in the original set of captured images, given a collection of reference photographs and their corresponding camera poses. The task requires learning an implicit or explicit representation of the scene's geometry and appearance that "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:computer-vision-task
requires:
  - urn:ngm:class:camera-pose-estimation
  - urn:ngm:class:multi-view-images
enables:
  - urn:ngm:class:volumetric-capture
  - urn:ngm:class:virtual-reality-telepresence
  - urn:ngm:class:free-viewpoint-video
  - urn:ngm:class:media-production
  - urn:ngm:class:synthetic-data-generation
dependsOn:
  - urn:ngm:class:scene-representation
  - urn:ngm:class:ray-casting
contrastsWith:
  - urn:ngm:class:3-d-reconstruction
bridgesTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:autonomous-driving-simulation
  - urn:ngm:class:generative-ai
uses:
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:volume-rendering
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:multilayer-perceptron
relatedTo:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:3-d-scene-reconstruction
---

# Novel View Synthesis

Novel view synthesis (NVS) is a computer vision and computer graphics task that involves generating photorealistic images of a scene from camera viewpoints not present in the original set of captured images, given a collection of reference photographs and their corresponding camera poses. The task requires learning an implicit or explicit representation of the scene's geometry and appearance that supports free-viewpoint rendering with high fidelity. It is a foundational capability for immersive media, telepresence, and spatial computing applications, and has been dramatically advanced by neural scene representations such as Neural Radiance Fields and 3D Gaussian Splatting.
