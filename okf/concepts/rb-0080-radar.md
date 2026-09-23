---
okf_version: "0.2"
type: Class
title: rb 0080 radar
resource: urn:ngm:class:rb-0080-radar
domain: robotics
description: Radar (Radio Detection and Ranging) is an active sensing technology that emits radio-frequency electromagnetic pulses and detects reflected returns to measure the range, velocity, and bearing of objects in the environment. In robotics, radar sensors provide reliable obstacle detection and velocity estimation across diverse weather and lighting conditions where cameras and LiDAR may degrade, making
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:rb-0066-robot-sensor
enables:
  - urn:ngm:class:rb-0052-collision-avoidance
  - urn:ngm:class:proximity-detection
  - urn:ngm:class:object-detection
contrastsWith:
  - urn:ngm:class:rb-0077-depth-camera
bridgesTo:
  - urn:ngm:class:sensor
relatedTo:
  - urn:ngm:class:rb-0069-lidar
  - urn:ngm:class:rb-0075-range-finder
  - urn:ngm:class:rb-0066-robot-sensor
  - urn:ngm:class:sensor-fusion
---

# rb 0080 radar

Radar (Radio Detection and Ranging) is an active sensing technology that emits radio-frequency electromagnetic pulses and detects reflected returns to measure the range, velocity, and bearing of objects in the environment. In robotics, radar sensors provide reliable obstacle detection and velocity estimation across diverse weather and lighting conditions where cameras and LiDAR may degrade, making them particularly valuable for autonomous ground vehicles, drones, and safety-critical proximity monitoring in industrial settings.
