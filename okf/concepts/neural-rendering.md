---
okf_version: "0.2"
type: Class
title: Neural Rendering
resource: urn:ngm:class:neural-rendering
domain: spatial-computing
description: Neural Rendering is a class of computational techniques that train deep neural networks to represent, reconstruct, and synthesise visual appearance of 3D scenes, replacing or augmenting traditional rasterisation and ray-tracing pipelines with learned implicit representations. Methods such as Neural Radiance Fields (NeRF), Gaussian Splatting, and neural texture synthesis encode scene geometry, mate
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:neural-scene-representation
  - urn:ngm:class:neural-texture
requires:
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:implicit-neural-representation
  - urn:ngm:class:multi-view-imaging
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:avatar
  - urn:ngm:class:avatar
  - urn:ngm:class:immersive-environment
dependsOn:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:ray-marching
contrastsWith:
  - urn:ngm:class:rasterization
  - urn:ngm:class:ray-tracing
  - urn:ngm:class:rasterization
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
  - urn:ngm:class:generative-ai
uses:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:volume-rendering
  - urn:ngm:class:differentiable-rendering
relatedTo:
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:light-field
  - urn:ngm:class:point-cloud
  - urn:ngm:class:light-field
---

# Neural Rendering

Neural Rendering is a class of computational techniques that train deep neural networks to represent, reconstruct, and synthesise visual appearance of 3D scenes, replacing or augmenting traditional rasterisation and ray-tracing pipelines with learned implicit representations. Methods such as Neural Radiance Fields (NeRF), Gaussian Splatting, and neural texture synthesis encode scene geometry, material properties, and illumination into network weights, enabling photo-realistic novel view synthesis from sparse image sets. Neural Rendering bridges computer vision and computer graphics, enabling real-time rendering of photorealistic avatars, 3D asset generation, scene understanding, and immersive spatial experiences at scale.
