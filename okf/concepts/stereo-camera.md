---
okf_version: "0.2"
type: Class
title: Stereo Camera
resource: urn:ngm:class:stereo-camera
domain: robotics
description: A dual-lens imaging system that captures two horizontally offset images of a scene to compute disparity maps and recover metric 3D depth information. Stereo cameras are widely used in robotic navigation, obstacle avoidance, and spatial mapping because they provide passive depth sensing without emitting light.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:camera
hasPart:
  - urn:ngm:class:image-sensor
  - urn:ngm:class:lens
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:stereo-rectification
  - urn:ngm:class:image-synchronisation
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:object-detection
  - urn:ngm:class:spatial-mapping
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:depth-estimation
dependsOn:
  - urn:ngm:class:disparity-map
  - urn:ngm:class:epipolar-geometry
implements:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:triangulation
contrastsWith:
  - urn:ngm:class:lidar
  - urn:ngm:class:time-of-flight-sensor
bridgesTo:
  - urn:ngm:class:camera
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:camera-parameters
partOf:
  - urn:ngm:class:robot-perception
relatedTo:
  - urn:ngm:class:monocular-camera
  - urn:ngm:class:point-cloud
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:visual-odometry
---

# Stereo Camera

A dual-lens imaging system that captures two horizontally offset images of a scene to compute disparity maps and recover metric 3D depth information. Stereo cameras are widely used in robotic navigation, obstacle avoidance, and spatial mapping because they provide passive depth sensing without emitting light.
