---
okf_version: "0.2"
type: Class
title: Neural Radiance Fields
resource: urn:ngm:class:neural-radiance-fields
domain: distributed-collaboration
description: A neural rendering technique that represents 3D scenes as continuous volumetric radiance functions encoded by multilayer perceptrons, mapping 5D inputs (3D spatial position plus 2D viewing direction) to colour and volume density. Novel viewpoints are synthesised by volumetric ray marching through the learned representation, enabling photorealistic view synthesis from sparse photograph sets without
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:telepresence
  - urn:ngm:class:real-time-rendering-pipeline
enables:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:volumetric-capture
  - urn:ngm:class:scene-capture-and-reconstruction
  - urn:ngm:class:telepresence
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:ray-marching
  - urn:ngm:class:machine-learning-discipline
partOf:
  - urn:ngm:class:real-time-rendering-pipeline
  - urn:ngm:class:3-d-content-generation
relatedTo:
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:point-cloud
  - urn:ngm:class:computer-vision
---

# Neural Radiance Fields

A neural rendering technique that represents 3D scenes as continuous volumetric radiance functions encoded by multilayer perceptrons, mapping 5D inputs (3D spatial position plus 2D viewing direction) to colour and volume density. Novel viewpoints are synthesised by volumetric ray marching through the learned representation, enabling photorealistic view synthesis from sparse photograph sets without explicit 3D geometry. Introduced by Mildenhall et al. (ECCV 2020), NeRF has driven a generation of implicit neural scene representations spanning telepresence, virtual production, and robotics.
