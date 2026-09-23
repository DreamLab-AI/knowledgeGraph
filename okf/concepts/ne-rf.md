---
okf_version: "0.2"
type: Class
title: NeRF
resource: urn:ngm:class:ne-rf
domain: spatial-computing
description: Neural Radiance Field (NeRF) is a neural scene representation technique that encodes a continuous volumetric scene as a multi-layer perceptron mapping 3D coordinates and viewing directions to colour and density values, enabling photorealistic novel view synthesis from a sparse set of calibrated input images. Introduced by Mildenhall et al. at ECCV 2020, NeRF employs volumetric ray marching and dif
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:sc-display-and-rendering
requires:
  - urn:ngm:class:multi-view-stereo
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:multi-view-stereo
enables:
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:digital-twin
  - urn:ngm:class:scene-understanding
contrastsWith:
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:point-cloud
  - urn:ngm:class:polygon-mesh
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:metaverse
  - urn:ngm:class:navigation
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:navigation
uses:
  - urn:ngm:class:multilayer-perceptron
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:ray-marching
  - urn:ngm:class:positional-encoding
  - urn:ngm:class:deep-learning
  - urn:ngm:class:ray-marching
relatedTo:
  - urn:ngm:class:volumetric-capture
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:structure-from-motion
---

# NeRF

Neural Radiance Field (NeRF) is a neural scene representation technique that encodes a continuous volumetric scene as a multi-layer perceptron mapping 3D coordinates and viewing directions to colour and density values, enabling photorealistic novel view synthesis from a sparse set of calibrated input images. Introduced by Mildenhall et al. at ECCV 2020, NeRF employs volumetric ray marching and differentiable rendering to optimise network weights via photometric loss against held-out views, without requiring explicit mesh or voxel geometry. The technique catalysed a broad family of neural rendering methods spanning real-time variants, dynamic scenes, large-scale outdoor capture, and hybrid neural-explicit representations such as 3D Gaussian Splatting.
