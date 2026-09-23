---
okf_version: "0.2"
type: Class
title: Obstacle Avoidance
resource: urn:ngm:class:obstacle-avoidance
domain: robotics
description: The capability of a mobile robot or autonomous system to detect and avoid collisions with obstacles in its environment in real-time using sensors and reactive control strategies. It enables safe navigation without requiring complete prior knowledge of the environment.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:reactive-control
requires:
  - urn:ngm:class:proximity-sensor
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:localisation
  - urn:ngm:class:proximity-sensors
enables:
  - urn:ngm:class:navigation
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:navigation
  - urn:ngm:class:collision-free-motion
dependsOn:
  - urn:ngm:class:path-planning
  - urn:ngm:class:rb-1007-trajectory-generation
contrastsWith:
  - urn:ngm:class:planning
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:radar
  - urn:ngm:class:camera
  - urn:ngm:class:lidar
  - urn:ngm:class:ultrasonic-sensor
  - urn:ngm:class:potential-field-method
supports:
  - urn:ngm:class:safety-system
  - urn:ngm:class:human-robot-interaction
partOf:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:mobile-robotics
relatedTo:
  - urn:ngm:class:mobile-robot
  - urn:ngm:class:cobot-safety-levels
  - urn:ngm:class:path-planning
---

# Obstacle Avoidance

The capability of a mobile robot or autonomous system to detect and avoid collisions with obstacles in its environment in real-time using sensors and reactive control strategies. It enables safe navigation without requiring complete prior knowledge of the environment.
