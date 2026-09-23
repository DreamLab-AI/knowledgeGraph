---
okf_version: "0.2"
type: Class
title: Obstacle Detection
resource: urn:ngm:class:obstacle-detection
domain: robotics
description: Obstacle Detection is the robotics perception task of identifying and localising physical objects in a robot's surroundings that may impede or endanger its motion. It fuses data from sensors such as lidar, cameras, radar and ultrasonic rangefinders to build a representation of free and occupied space. Reliable obstacle detection is a prerequisite for safe autonomous navigation, collision avoidance
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:perception
  - urn:ngm:class:robo-perception
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:perception
enables:
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:motion-planning
dependsOn:
  - urn:ngm:class:sensor-fusion
contrastsWith:
  - urn:ngm:class:localisation
bridgesTo:
  - urn:ngm:class:autonomous-navigation
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:camera
  - urn:ngm:class:point-cloud
  - urn:ngm:class:object-detection
supports:
  - urn:ngm:class:path-planning
  - urn:ngm:class:autonomous-vehicle
partOf:
  - urn:ngm:class:perception
relatedTo:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:slam
---

# Obstacle Detection

Obstacle Detection is the robotics perception task of identifying and localising physical objects in a robot's surroundings that may impede or endanger its motion. It fuses data from sensors such as lidar, cameras, radar and ultrasonic rangefinders to build a representation of free and occupied space. Reliable obstacle detection is a prerequisite for safe autonomous navigation, collision avoidance and motion planning.
