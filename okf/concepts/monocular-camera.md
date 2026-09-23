---
okf_version: "0.2"
type: Class
title: Monocular Camera
resource: urn:ngm:class:monocular-camera
domain: robotics
description: A Monocular Camera is a single-lens imaging sensor that captures 2D intensity or colour frames from a single viewpoint, serving as a primary perceptual modality in robotics, autonomous vehicles, and computer vision systems. Unlike stereo or depth cameras, it lacks intrinsic depth measurement capability, requiring computational techniques such as structure-from-motion, visual odometry, or learned d
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:camera
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:camera-parameters
enables:
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:object-detection
  - urn:ngm:class:scene-understanding
contrastsWith:
  - urn:ngm:class:stereo-camera
  - urn:ngm:class:lidar
bridgesTo:
  - urn:ngm:class:camera
uses:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:convolutional-neural-network
relatedTo:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:autonomous-vehicle
---

# Monocular Camera

A Monocular Camera is a single-lens imaging sensor that captures 2D intensity or colour frames from a single viewpoint, serving as a primary perceptual modality in robotics, autonomous vehicles, and computer vision systems. Unlike stereo or depth cameras, it lacks intrinsic depth measurement capability, requiring computational techniques such as structure-from-motion, visual odometry, or learned depth estimation to recover 3D scene geometry.
