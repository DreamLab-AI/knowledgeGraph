---
okf_version: "0.2"
type: Class
title: Sensor Technology
resource: urn:ngm:class:sensor-technology
domain: robotics
description: Sensor Technology encompasses the diverse hardware devices and fusion algorithms that capture physical-world data for use in robotics, spatial computing, and XR systems. This includes inertial measurement units, LiDAR scanners, depth cameras, eye-tracking, haptic sensors, and biometric devices, combined with fusion techniques such as visual-inertial odometry and Kalman filtering to produce accurat
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:imu
  - urn:ngm:class:lidar
  - urn:ngm:class:camera
  - urn:ngm:class:eye-tracking
  - urn:ngm:class:haptic-feedback
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:perception-system
uses:
  - urn:ngm:class:depth-sensing
---

# Sensor Technology

Sensor Technology encompasses the diverse hardware devices and fusion algorithms that capture physical-world data for use in robotics, spatial computing, and XR systems. This includes inertial measurement units, LiDAR scanners, depth cameras, eye-tracking, haptic sensors, and biometric devices, combined with fusion techniques such as visual-inertial odometry and Kalman filtering to produce accurate, robust state estimates for autonomous systems and immersive experiences.
