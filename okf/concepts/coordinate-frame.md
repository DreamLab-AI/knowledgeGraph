---
okf_version: "0.2"
type: Class
title: Coordinate Frame
resource: urn:ngm:class:coordinate-frame
domain: robotics
description: A coordinate frame is a reference system defined by an origin and a set of axes against which positions, orientations, and motions are measured. In robotics and perception, multiple frames (world, base, sensor, tool) are related by rigid-body transforms so that data from different sources can be expressed consistently. Correct frame management is essential for sensor fusion, motion planning, and c
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:origin-point
  - urn:ngm:class:axis-vector
  - urn:ngm:class:rotation-matrix
requires:
  - urn:ngm:class:rigid-body-transform
  - urn:ngm:class:homogeneous-transformation-matrix
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:motion-planning
  - urn:ngm:class:collision-detection
  - urn:ngm:class:inverse-kinematics
dependsOn:
  - urn:ngm:class:exteroceptive-sensor
  - urn:ngm:class:inertial-measurement-unit
contrastsWith:
  - urn:ngm:class:coordinate-system
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:quaternion-math
  - urn:ngm:class:euler-angles
  - urn:ngm:class:pose-estimation
supports:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:point-cloud
standardizedBy:
  - urn:ngm:class:ros
  - urn:ngm:class:denavit-hartenberg-parameters
relatedTo:
  - urn:ngm:class:exteroceptive-sensor
  - urn:ngm:class:collision-detection
  - urn:ngm:class:transform-tree
  - urn:ngm:class:odometry
---

# Coordinate Frame

A coordinate frame is a reference system defined by an origin and a set of axes against which positions, orientations, and motions are measured. In robotics and perception, multiple frames (world, base, sensor, tool) are related by rigid-body transforms so that data from different sources can be expressed consistently. Correct frame management is essential for sensor fusion, motion planning, and collision checking.
