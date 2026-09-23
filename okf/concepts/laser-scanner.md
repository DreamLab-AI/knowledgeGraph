---
okf_version: "0.2"
type: Class
title: Laser Scanner
resource: urn:ngm:class:laser-scanner
domain: robotics
description: A Laser Scanner is a sensor that emits laser pulses and measures the time-of-flight or phase-shift of the returned signal to compute precise distance measurements across a scene, generating dense point clouds. In robotics and spatial computing, laser scanners serve as primary perception instruments for environment mapping, obstacle detection, and the construction of digital twins via LiDAR-based S
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:robo-perception
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:point-cloud
  - urn:ngm:class:spatial-mapping
uses:
  - urn:ngm:class:lidar
relatedTo:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:sensor-fusion
---

# Laser Scanner

A Laser Scanner is a sensor that emits laser pulses and measures the time-of-flight or phase-shift of the returned signal to compute precise distance measurements across a scene, generating dense point clouds. In robotics and spatial computing, laser scanners serve as primary perception instruments for environment mapping, obstacle detection, and the construction of digital twins via LiDAR-based SLAM pipelines.
