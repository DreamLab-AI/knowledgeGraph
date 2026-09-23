---
okf_version: "0.2"
type: Class
title: Autonomous Navigation
resource: urn:ngm:class:autonomous-navigation
domain: robotics
description: Autonomous Navigation encompasses the complete system capability for a robot or autonomous agent to move from one location to another without human guidance, integrating perception, localisation, mapping, path planning, obstacle avoidance, and control. Autonomous navigation systems employ SLAM, sensor fusion, and AI-based decision-making to operate safely in unknown or dynamic environments.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:autonomous-agent
hasPart:
  - urn:ngm:class:localisation
  - urn:ngm:class:obstacle-avoidance
requires:
  - urn:ngm:class:slam
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:odometry
  - urn:ngm:class:perception
enables:
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:unmanned-aerial-vehicle
  - urn:ngm:class:delivery-robot
dependsOn:
  - urn:ngm:class:real-time-computing
  - urn:ngm:class:coordinate-frame
implements:
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:pid-controller
  - urn:ngm:class:a-star-algorithm
contrastsWith:
  - urn:ngm:class:teleoperation
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:path-planning
  - urn:ngm:class:motion-planning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:lidar
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:search-and-rescue-robotics
partOf:
  - urn:ngm:class:mobile-robotics
relatedTo:
  - urn:ngm:class:kalman-filter
---

# Autonomous Navigation

Autonomous Navigation encompasses the complete system capability for a robot or autonomous agent to move from one location to another without human guidance, integrating perception, localisation, mapping, path planning, obstacle avoidance, and control. Autonomous navigation systems employ SLAM, sensor fusion, and AI-based decision-making to operate safely in unknown or dynamic environments.
