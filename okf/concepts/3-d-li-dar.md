---
okf_version: "0.2"
type: Class
title: 3D LiDAR
resource: urn:ngm:class:3-d-li-dar
domain: robotics
description: 3D LiDAR is a active ranging sensor that emits pulsed laser light across multiple vertical channels to capture dense three-dimensional point clouds of the surrounding environment. Spinning or solid-state variants measure range and intensity for hundreds of thousands of points per second, enabling robots and autonomous vehicles to perform obstacle detection, SLAM, and high-fidelity scene reconstruc
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:lidar
enables:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:slam
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:autonomous-navigation
bridgesTo:
  - urn:ngm:class:lidar
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:perception-system
relatedTo:
  - urn:ngm:class:2-d-li-dar
  - urn:ngm:class:lidar-scanning
  - urn:ngm:class:stereo-camera
  - urn:ngm:class:multirotor-uav
---

# 3D LiDAR

3D LiDAR is a active ranging sensor that emits pulsed laser light across multiple vertical channels to capture dense three-dimensional point clouds of the surrounding environment. Spinning or solid-state variants measure range and intensity for hundreds of thousands of points per second, enabling robots and autonomous vehicles to perform obstacle detection, SLAM, and high-fidelity scene reconstruction in real time.
