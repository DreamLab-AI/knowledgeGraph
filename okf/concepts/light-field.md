---
okf_version: "0.2"
type: Class
title: Light field
resource: urn:ngm:class:light-field
domain: spatial-computing
description: Light field is a foundational concept in computational optics and computer graphics describing the complete distribution of light rays travelling through free space in all directions at all points, formalised by Adelson and Bergen (1991) as the 7-dimensional plenoptic function P(Vx, Vy, Vz, θ, φ,...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:image-based-rendering
  - urn:ngm:class:computational-photography
  - urn:ngm:class:radiance-field
  - urn:ngm:class:volumetric-display
  - urn:ngm:class:optical-representation
hasPart:
  - urn:ngm:class:light-field-display
  - urn:ngm:class:plenoptic-function
  - urn:ngm:class:epipolar-plane-image
  - urn:ngm:class:sub-aperture-image
  - urn:ngm:class:microlens-array
  - urn:ngm:class:light-field-camera
  - urn:ngm:class:hogel
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:sampling-theory
  - urn:ngm:class:lens-and-camera-calibration
  - urn:ngm:class:multi-view-geometry
  - urn:ngm:class:ray-parameterisation
enables:
  - urn:ngm:class:holographic-display
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:6-dof-vr
  - urn:ngm:class:refocusing-post-capture
  - urn:ngm:class:parallax-rendering
  - urn:ngm:class:spatial-computing-paradigm
dependsOn:
  - urn:ngm:class:optics
  - urn:ngm:class:fourier-analysis
  - urn:ngm:class:computational-geometry
  - urn:ngm:class:camera-array
  - urn:ngm:class:deep-learning
  - urn:ngm:class:cuda
implements:
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:4d-parameterisation
  - urn:ngm:class:ray-plane-intersection
  - urn:ngm:class:fourier-slice-theorem
  - urn:ngm:class:microlens-multiplexing
contrastsWith:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:monocular-depth-estimation
  - urn:ngm:class:traditional-photography
  - urn:ngm:class:2d-display
  - urn:ngm:class:point-cloud
bridgesTo:
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:structured-light
  - urn:ngm:class:volume-rendering
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:lenticular-lens
  - urn:ngm:class:wave-optics
supports:
  - urn:ngm:class:broadcast-production
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:industrial-metrology
  - urn:ngm:class:museum-digitalisation
standardizedBy:
  - urn:ngm:class:cvpr
  - urn:ngm:class:iccv
  - urn:ngm:class:siggraph
  - urn:ngm:class:ieee-tvcg
  - urn:ngm:class:acm-tog
relatedTo:
  - urn:ngm:class:holography
  - urn:ngm:class:neural-radiance-fields
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:spatial-computing-paradigm
  - urn:ngm:class:holography
  - urn:ngm:class:integral-imaging
  - urn:ngm:class:plenoptic-camera
---

# Light field

Light field is a foundational concept in computational optics and computer graphics describing the complete distribution of light rays travelling through free space in all directions at all points, formalised by Adelson and Bergen (1991) as the 7-dimensional plenoptic function P(Vx, Vy, Vz, θ, φ,...
