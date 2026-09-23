---
okf_version: "0.2"
type: Class
title: Autonomous Vehicle
resource: urn:ngm:class:autonomous-vehicle
domain: robotics
description: An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:autonomous-robot
hasPart:
  - urn:ngm:class:perception-system
  - urn:ngm:class:motion-planning
  - urn:ngm:class:decision-making
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
  - urn:ngm:class:perception-system
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:robotaxi
  - urn:ngm:class:last-mile-delivery
implements:
  - urn:ngm:class:path-planning
  - urn:ngm:class:adas
contrastsWith:
  - urn:ngm:class:remotely-operated-vehicle-rov
bridgesTo:
  - urn:ngm:class:smart-city-infrastructure
  - urn:ngm:class:v2x-communication
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:lidar
  - urn:ngm:class:slam
  - urn:ngm:class:motion-planning
standardizedBy:
  - urn:ngm:class:sae-j-3016
  - urn:ngm:class:iso-26262
  - urn:ngm:class:iso-21448
relatedTo:
  - urn:ngm:class:path-planning
  - urn:ngm:class:self-driving-car
  - urn:ngm:class:ground-robot
---

# Autonomous Vehicle

An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation).
