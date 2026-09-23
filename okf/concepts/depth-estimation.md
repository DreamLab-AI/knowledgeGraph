---
okf_version: "0.2"
type: Class
title: Depth Estimation
resource: urn:ngm:class:depth-estimation
domain: artificial-intelligence
description: Depth Estimation is the computer vision task of recovering per-pixel distance from a camera (or a virtual viewpoint) to the surfaces of a 3D scene, producing a depth map D(u,v) ∈ ℝ⁺ aligned to an image I(u,v) that encodes scene geometry needed for 3D reconstruction, robotic perception, augmented-...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:3-d-perception
  - urn:ngm:class:computer-vision
  - urn:ngm:class:dense-prediction
  - urn:ngm:class:geometric-vision
  - urn:ngm:class:scene-understanding
hasPart:
  - urn:ngm:class:camera-extrinsics
  - urn:ngm:class:camera-intrinsics
  - urn:ngm:class:cost-volume
  - urn:ngm:class:depth-map
  - urn:ngm:class:disparity-map
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:loss-function
  - urn:ngm:class:point-cloud
  - urn:ngm:class:loss-function
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feature-matching
  - urn:ngm:class:optimisation
  - urn:ngm:class:loss-function
  - urn:ngm:class:training-data
  - urn:ngm:class:image-pair
  - urn:ngm:class:optimisation
enables:
  - urn:ngm:class:ar-occlusion
  - urn:ngm:class:grasp-planning
  - urn:ngm:class:novel-view-synthesis
  - urn:ngm:class:visual-slam
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:bokeh-rendering
  - urn:ngm:class:free-space-estimation
dependsOn:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:vision-transformers
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:photometric-consistency
  - urn:ngm:class:bundle-adjustment
implements:
  - urn:ngm:class:multi-view-stereo
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:semi-global-matching
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:block-matching
  - urn:ngm:class:psmnet
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:monodepth
  - urn:ngm:class:midas
  - urn:ngm:class:dpt
  - urn:ngm:class:zoedepth
  - urn:ngm:class:depth-anything
  - urn:ngm:class:marigold
contrastsWith:
  - urn:ngm:class:surface-normal-estimation
  - urn:ngm:class:optical-flow
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:semantic-segmentation
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:rgb-d-camera
  - urn:ngm:class:structured-light
  - urn:ngm:class:time-of-flight-sensor
  - urn:ngm:class:stereo-camera
  - urn:ngm:class:time-of-flight-sensor
  - urn:ngm:class:kinect
  - urn:ngm:class:realsense
supports:
  - urn:ngm:class:arcore
  - urn:ngm:class:arkit
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:digital-twin
  - urn:ngm:class:slam
  - urn:ngm:class:telepresence
standardizedBy:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:kitti-benchmark
  - urn:ngm:class:nyu-depth-v2
  - urn:ngm:class:scannet
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:da-2k
  - urn:ngm:class:sintel
  - urn:ngm:class:eth3d
relatedTo:
  - urn:ngm:class:object-detection
  - urn:ngm:class:ne-rf
  - urn:ngm:class:visual-slam
  - urn:ngm:class:3-d-gaussian-splatting
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:object-detection
  - urn:ngm:class:depth-completion
---

# Depth Estimation

Depth Estimation is the computer vision task of recovering per-pixel distance from a camera (or a virtual viewpoint) to the surfaces of a 3D scene, producing a depth map D(u,v) ∈ ℝ⁺ aligned to an image I(u,v) that encodes scene geometry needed for 3D reconstruction, robotic perception, augmented-...
