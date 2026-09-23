---
okf_version: "0.2"
type: Class
title: Odometry
resource: urn:ngm:class:odometry
domain: robotics
description: The estimation of a mobile robot's position and orientation (pose) over time by integrating motion measurements from wheel encoders, IMUs, or visual sensors. It provides relative position estimates based on incremental motion and is subject to cumulative drift without correction.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:state-estimation
hasPart:
  - urn:ngm:class:wheel-odometry
  - urn:ngm:class:visual-odometry
requires:
  - urn:ngm:class:sensors
  - urn:ngm:class:encoder
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:sensors
enables:
  - urn:ngm:class:navigation
  - urn:ngm:class:rb-1013-localization
  - urn:ngm:class:robot-pose
dependsOn:
  - urn:ngm:class:sensor-calibration
  - urn:ngm:class:dead-reckoning
contrastsWith:
  - urn:ngm:class:gps
bridgesTo:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:imu
  - urn:ngm:class:sensors
  - urn:ngm:class:camera
  - urn:ngm:class:lidar
  - urn:ngm:class:encoder
  - urn:ngm:class:sensors
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:path-planning
partOf:
  - urn:ngm:class:mobile-robotics
  - urn:ngm:class:autonomous-navigation
relatedTo:
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:slam
---

# Odometry

The estimation of a mobile robot's position and orientation (pose) over time by integrating motion measurements from wheel encoders, IMUs, or visual sensors. It provides relative position estimates based on incremental motion and is subject to cumulative drift without correction.
