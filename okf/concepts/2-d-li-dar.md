---
okf_version: "0.2"
type: Class
title: 2D LiDAR
resource: urn:ngm:class:2-d-li-dar
domain: robotics
description: 2D LiDAR is a laser scanning sensor that emits a rotating beam in a single horizontal or vertical plane, producing a planar point cloud used for obstacle detection, proximity sensing, and 2D mapping. It is widely deployed on mobile robots and autonomous guided vehicles where full 3D sensing is unnecessary or cost-prohibitive.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:lidar
enables:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:localisation
  - urn:ngm:class:proximity-detection
bridgesTo:
  - urn:ngm:class:lidar
uses:
  - urn:ngm:class:lidar-scanning
partOf:
  - urn:ngm:class:robo-perception
relatedTo:
  - urn:ngm:class:3-d-li-dar
  - urn:ngm:class:slam
  - urn:ngm:class:point-cloud
  - urn:ngm:class:proximity-sensor
  - urn:ngm:class:laser-scanner
  - urn:ngm:class:ultrasonic-sensor
---

# 2D LiDAR

2D LiDAR is a laser scanning sensor that emits a rotating beam in a single horizontal or vertical plane, producing a planar point cloud used for obstacle detection, proximity sensing, and 2D mapping. It is widely deployed on mobile robots and autonomous guided vehicles where full 3D sensing is unnecessary or cost-prohibitive.
