---
okf_version: "0.2"
type: Class
title: Polar Robot
resource: urn:ngm:class:polar-robot
domain: robotics
description: A Polar Robot (also called a spherical robot) is an industrial robot configuration with a rotary base joint that provides 360-degree horizontal rotation, an elevated rotary shoulder joint that tilts the arm up and down, and a linear telescoping arm that extends and retracts radially—producing a spherical working envelope defined in spherical coordinates (radius, polar angle, azimuth). This geometr
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:industrial-robot
hasPart:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:robot-actuator
dependsOn:
  - urn:ngm:class:robot-component
contrastsWith:
  - urn:ngm:class:collaborative-systems-modality-robot
uses:
  - urn:ngm:class:robot-kinematics
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:cylindrical-robot
  - urn:ngm:class:scara-robot
  - urn:ngm:class:delta-robot
  - urn:ngm:class:robot-hardware
---

# Polar Robot

A Polar Robot (also called a spherical robot) is an industrial robot configuration with a rotary base joint that provides 360-degree horizontal rotation, an elevated rotary shoulder joint that tilts the arm up and down, and a linear telescoping arm that extends and retracts radially—producing a spherical working envelope defined in spherical coordinates (radius, polar angle, azimuth). This geometry provides a large workspace volume relative to the physical footprint of the arm and was historically common in early industrial automation for tasks such as die casting and forging, though articulated arm designs have largely supplanted it in modern applications due to superior dexterity.
