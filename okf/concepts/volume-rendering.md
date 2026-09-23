---
okf_version: "0.2"
type: Class
title: Volume Rendering
resource: urn:ngm:class:volume-rendering
domain: spatial-computing
description: Volume rendering produces images directly from three-dimensional scalar or density fields by integrating colour and opacity along view rays, rather than rendering explicit surfaces.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:transfer-function
  - urn:ngm:class:ray-casting
requires:
  - urn:ngm:class:graphics-pipeline
  - urn:ngm:class:gpu-compute
enables:
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:volumetric-video
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:scientific-visualisation
contrastsWith:
  - urn:ngm:class:rasterization
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:volumetric-video
  - urn:ngm:class:real-time-rendering
uses:
  - urn:ngm:class:ray-marching
  - urn:ngm:class:shader
  - urn:ngm:class:texture-sampling
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:augmented-reality
relatedTo:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:voxel
---

# Volume Rendering

Volume rendering produces images directly from three-dimensional scalar or density fields by integrating colour and opacity along view rays, rather than rendering explicit surfaces.
