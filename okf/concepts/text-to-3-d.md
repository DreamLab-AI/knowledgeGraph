---
okf_version: "0.2"
type: Class
title: Text-to-3D
resource: urn:ngm:class:text-to-3-d
domain: artificial-intelligence
description: Text-to-3D is a generative AI capability that synthesises three-dimensional geometry, texture, and material properties from natural-language descriptions, bridging the gap between linguistic intent and spatial representation. Dominant technical approaches include score-distillation sampling (SDS) that distils a 2D diffusion prior into a NeRF or 3D Gaussian Splatting field, multi-view diffusion mod
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ai-application
  - urn:ngm:class:generative-ai
requires:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:neural-radiance-field
enables:
  - urn:ngm:class:3-d-asset
  - urn:ngm:class:3-d-model
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:text-to-image
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:computer-vision
  - urn:ngm:class:prompt-engineering
relatedTo:
  - urn:ngm:class:image-generation
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:3-d-content-generation
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
---

# Text-to-3D

Text-to-3D is a generative AI capability that synthesises three-dimensional geometry, texture, and material properties from natural-language descriptions, bridging the gap between linguistic intent and spatial representation. Dominant technical approaches include score-distillation sampling (SDS) that distils a 2D diffusion prior into a NeRF or 3D Gaussian Splatting field, multi-view diffusion models that jointly generate consistent images from multiple viewpoints before reconstructing a mesh, and image-conditioned 3D reconstruction pipelines. Text-to-3D has transformative applications in game asset creation, virtual production, digital twins, augmented-reality content authoring, and e-commerce visualisation, dramatically reducing the time and expertise required to populate 3D environments.
