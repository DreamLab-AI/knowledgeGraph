---
okf_version: "0.2"
type: Class
title: Six Degrees Of Freedom
resource: urn:ngm:class:six-degrees-of-freedom
domain: spatial-computing
description: "Six degrees of freedom (6DoF) describes the full set of ways a rigid body can move in three-dimensional space: translation along three perpendicular axes and rotation about each of them. In spatial computing it characterises tracking systems that capture both an object's position and its orientation. Supporting 6DoF is essential for convincing virtual and augmented reality, robotics and motion-tra"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:tracking-system
requires:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:immersion
dependsOn:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:tracking-system
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
supports:
  - urn:ngm:class:motion-tracking
  - urn:ngm:class:locomotion
  - urn:ngm:class:head-mounted-display
partOf:
  - urn:ngm:class:tracking-system
  - urn:ngm:class:spatial-tracking
relatedTo:
  - urn:ngm:class:spatial-tracking
  - urn:ngm:class:motion-tracking
---

# Six Degrees Of Freedom

Six degrees of freedom (6DoF) describes the full set of ways a rigid body can move in three-dimensional space: translation along three perpendicular axes and rotation about each of them. In spatial computing it characterises tracking systems that capture both an object's position and its orientation. Supporting 6DoF is essential for convincing virtual and augmented reality, robotics and motion-tracked interaction.
