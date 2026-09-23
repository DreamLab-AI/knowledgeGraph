---
okf_version: "0.2"
type: Class
title: Pose Estimation
resource: urn:ngm:class:pose-estimation
domain: artificial-intelligence
description: Pose estimation is the computational task of inferring the spatial configuration—position, orientation, and joint angles—of a body or rigid object from image or video data, spanning 2D keypoint localisation on the image plane (pixel-coordinate skeleton graphs), 3D joint position regression in cam...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:perception
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:computer-vision
  - urn:ngm:class:spatial-computing-paradigm
  - urn:ngm:class:deep-learning
hasPart:
  - urn:ngm:class:6-do-f-estimation
  - urn:ngm:class:smpl-body-model
  - urn:ngm:class:heatmap-regression
  - urn:ngm:class:keypoint-detection
  - urn:ngm:class:mesh-recovery
  - urn:ngm:class:temporal-smoothing
  - urn:ngm:class:skeleton-graph
  - urn:ngm:class:smpl-body-model
  - urn:ngm:class:6dof-estimation
requires:
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:body-prior
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:image-features
  - urn:ngm:class:training-data
  - urn:ngm:class:convolutional-neural-network
enables:
  - urn:ngm:class:action-recognition
  - urn:ngm:class:avatar-animation
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:robotic-grasping
  - urn:ngm:class:sports-analytics
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:motion-capture
  - urn:ngm:class:rehabilitation-monitoring
dependsOn:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:body-shape-models
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:computer-vision-benchmarks
implements:
  - urn:ngm:class:4-d-humans
  - urn:ngm:class:center-pose
  - urn:ngm:class:dwpose
  - urn:ngm:class:foundation-pose
  - urn:ngm:class:gdr-net
  - urn:ngm:class:hrnet
  - urn:ngm:class:media-pipe-pose
  - urn:ngm:class:open-pose
  - urn:ngm:class:rtmpose
  - urn:ngm:class:smpl-body-model
  - urn:ngm:class:vi-tpose
  - urn:ngm:class:mediapipe-pose
  - urn:ngm:class:vitpose
  - urn:ngm:class:smpl-body-model
  - urn:ngm:class:smpl-x
  - urn:ngm:class:4d-humans
  - urn:ngm:class:foundationpose
  - urn:ngm:class:centerpose
contrastsWith:
  - urn:ngm:class:optical-motion-capture
  - urn:ngm:class:inertial-measurement-unit-mocap
  - urn:ngm:class:depth-sensor-pose
  - urn:ngm:class:marker-based-tracking
uses:
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:direct-coordinate-regression
  - urn:ngm:class:heatmap-regression
  - urn:ngm:class:perspective-n-point
  - urn:ngm:class:smpl-body-model
  - urn:ngm:class:vi-t-backbone
  - urn:ngm:class:vit-backbone
supports:
  - urn:ngm:class:animation
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:clinical-gait-analysis
  - urn:ngm:class:extended-reality
  - urn:ngm:class:sports-science
  - urn:ngm:class:robotics
  - urn:ngm:class:animation
  - urn:ngm:class:autonomous-vehicle
standardizedBy:
  - urn:ngm:class:3-dpw-benchmark
  - urn:ngm:class:bop-benchmark
  - urn:ngm:class:coco-dataset
  - urn:ngm:class:human3-6-m
  - urn:ngm:class:mpii-human-pose-dataset
  - urn:ngm:class:ycb-video-dataset
  - urn:ngm:class:3dpw-benchmark
  - urn:ngm:class:human3-6m
relatedTo:
  - urn:ngm:class:action-recognition
  - urn:ngm:class:body-segmentation
  - urn:ngm:class:gaze-estimation
  - urn:ngm:class:human-parsing
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:hand-pose-estimation
---

# Pose Estimation

Pose estimation is the computational task of inferring the spatial configuration—position, orientation, and joint angles—of a body or rigid object from image or video data, spanning 2D keypoint localisation on the image plane (pixel-coordinate skeleton graphs), 3D joint position regression in cam...
