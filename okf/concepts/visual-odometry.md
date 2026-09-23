---
okf_version: "0.2"
type: Class
title: Visual Odometry
resource: urn:ngm:class:visual-odometry
domain: artificial-intelligence
description: "Visual odometry (VO) is a technique for incrementally estimating the six-degree-of-freedom pose (position and orientation) of a camera-equipped agent by detecting and tracking salient features across consecutive image frames and computing the relative camera motion between them via geometric constraints such as the essential or fundamental matrix. It provides ego-motion estimation without relying "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:image-processing
  - urn:ngm:class:epipolar-geometry
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:robot-localisation
dependsOn:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:depth-sensing
contrastsWith:
  - urn:ngm:class:wheel-odometry
  - urn:ngm:class:odometry
  - urn:ngm:class:localisation
  - urn:ngm:class:odometry
  - urn:ngm:class:localisation
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:autonomous-vehicle
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:feature-matching
  - urn:ngm:class:ransac
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:bundle-adjustment
partOf:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:visual-slam
relatedTo:
  - urn:ngm:class:ego-motion-estimation
  - urn:ngm:class:loop-closure-detection
  - urn:ngm:class:visual-place-recognition
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:factor-graph-optimisation
  - urn:ngm:class:visual-place-recognition
---

# Visual Odometry

Visual odometry (VO) is a technique for incrementally estimating the six-degree-of-freedom pose (position and orientation) of a camera-equipped agent by detecting and tracking salient features across consecutive image frames and computing the relative camera motion between them via geometric constraints such as the essential or fundamental matrix. It provides ego-motion estimation without relying on GPS, wheel encoders, or external beacons, making it applicable in GPS-denied environments such as indoor spaces, underground tunnels, and planetary surfaces. Scale ambiguity in monocular configurations is resolved by stereo baselines or depth cameras; drift is bounded by fusing inertial measurements (visual-inertial odometry) or by applying loop-closure detection within a full SLAM pipeline.
