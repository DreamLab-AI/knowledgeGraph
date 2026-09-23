---
okf_version: "0.2"
type: Class
title: Stereo Vision
resource: urn:ngm:class:stereo-vision
domain: spatial-computing
description: Stereo vision is a computational technique that recovers metric depth information from a scene by analysing the horizontal displacement (disparity) between corresponding points in two or more rectified images captured from laterally separated viewpoints, mimicking the binocular parallax used by human and animal visual systems. The resulting dense disparity maps are converted into 3D point clouds o
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:stereo-matching
  - urn:ngm:class:semi-global-matching
  - urn:ngm:class:cost-volume
requires:
  - urn:ngm:class:image-synchronisation
  - urn:ngm:class:lens-distortion-correction
enables:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:point-cloud-generation
  - urn:ngm:class:3-d-scene-reconstruction
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:obstacle-detection
dependsOn:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:epipolar-geometry
contrastsWith:
  - urn:ngm:class:monocular-depth-estimation
  - urn:ngm:class:structured-light
  - urn:ngm:class:lidar
bridgesTo:
  - urn:ngm:class:advanced-driver-assistance-system
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:feature-matching
  - urn:ngm:class:disparity-map
  - urn:ngm:class:convolutional-neural-network
supports:
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:robotic-grasping
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:optical-flow
  - urn:ngm:class:multi-view-stereo
---

# Stereo Vision

Stereo vision is a computational technique that recovers metric depth information from a scene by analysing the horizontal displacement (disparity) between corresponding points in two or more rectified images captured from laterally separated viewpoints, mimicking the binocular parallax used by human and animal visual systems. The resulting dense disparity maps are converted into 3D point clouds or depth maps for downstream perception tasks.
