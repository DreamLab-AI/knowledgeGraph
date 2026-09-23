---
okf_version: "0.2"
type: Class
title: Robot Perception
resource: urn:ngm:class:robot-perception
domain: robotics
description: Robot perception is the process by which a robot interprets sensor data from cameras, lidar, depth sensors and inertial units to build an actionable understanding of its environment, objects and its own pose.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:object-detection
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:semantic-segmentation
requires:
  - urn:ngm:class:sensors
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:lidar
  - urn:ngm:class:camera
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:robot-navigation
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:human-robot-interaction
dependsOn:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:point-cloud-processing
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:robot-control
relatedTo:
  - urn:ngm:class:environment-mapping
  - urn:ngm:class:simultaneous-localisation-and-mapping
---

# Robot Perception

Robot perception is the process by which a robot interprets sensor data from cameras, lidar, depth sensors and inertial units to build an actionable understanding of its environment, objects and its own pose.
