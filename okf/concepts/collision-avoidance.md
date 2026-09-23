---
okf_version: "0.2"
type: Class
title: Collision Avoidance
resource: urn:ngm:class:collision-avoidance
domain: robotics
description: Collision Avoidance - An active safety mechanism using Sensors (lidar, ultrasonic, vision) and path planning algorithms to detect obstacles and dynamically modify Robot Trajectories to prevent unintended contact with people, equipment, or structures.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:robotics
requires:
  - urn:ngm:class:rb-0090-emergency-stop
  - urn:ngm:class:perception-system
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:obstacle-detection
  - urn:ngm:class:rb-0090-emergency-stop
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:safe-human-robot-proximity
dependsOn:
  - urn:ngm:class:real-time-operating-system
contrastsWith:
  - urn:ngm:class:reactive-control
bridgesTo:
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:lidar
  - urn:ngm:class:path-planning
  - urn:ngm:class:machine-learning-discipline
standardizedBy:
  - urn:ngm:class:iso-26262
  - urn:ngm:class:ieee-standards
partOf:
  - urn:ngm:class:safety-system
  - urn:ngm:class:motion-control
  - urn:ngm:class:advanced-driver-assistance-system
relatedTo:
  - urn:ngm:class:functional-safety
---

# Collision Avoidance

Collision Avoidance - An active safety mechanism using Sensors (lidar, ultrasonic, vision) and path planning algorithms to detect obstacles and dynamically modify Robot Trajectories to prevent unintended contact with people, equipment, or structures.
