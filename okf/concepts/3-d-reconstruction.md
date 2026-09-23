---
okf_version: "0.2"
type: Class
title: 3D Reconstruction
resource: urn:ngm:class:3-d-reconstruction
domain: spatial-computing
description: 3D Reconstruction is the computational process of recovering three-dimensional geometric and structural information from multiple 2D images or sensor data (such as LiDAR or depth cameras) using techniques including Computer Vision, photogrammetry, and Structure-from-Motion (SfM), enabling digital capture of real-world objects and environments for Digital Twin creation, immersive environment mappin
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:sc-content-and-assets
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:multi-view-stereo
  - urn:ngm:class:point-cloud
  - urn:ngm:class:depth-estimation
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feature-matching
  - urn:ngm:class:image-processing
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:environmental-mapping
  - urn:ngm:class:point-cloud-generation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:real-world-digitisation
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:robotics
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:simultaneous-localisation-and-mapping
partOf:
  - urn:ngm:class:photogrammetry
relatedTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:scene-understanding
---

# 3D Reconstruction

3D Reconstruction is the computational process of recovering three-dimensional geometric and structural information from multiple 2D images or sensor data (such as LiDAR or depth cameras) using techniques including Computer Vision, photogrammetry, and Structure-from-Motion (SfM), enabling digital capture of real-world objects and environments for Digital Twin creation, immersive environment mapping, and spatial analysis.
