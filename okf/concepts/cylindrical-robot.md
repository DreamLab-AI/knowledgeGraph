---
okf_version: "0.2"
type: Class
title: Cylindrical Robot
resource: urn:ngm:class:cylindrical-robot
domain: robotics
description: Cylindrical robot employs one rotary joint (azimuth) and two prismatic joints (radial and vertical) that produce a cylindrical workspace, enabling efficient reach over rectangular work envelopes.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:coordinate-robots
  - urn:ngm:class:fixed-base-manipulator
hasPart:
  - urn:ngm:class:azimuth-drive
  - urn:ngm:class:radial-actuator
  - urn:ngm:class:vertical-actuator
  - urn:ngm:class:end-effector-mount
requires:
  - urn:ngm:class:actuators
  - urn:ngm:class:rotary-joint
  - urn:ngm:class:actuators
  - urn:ngm:class:base-support
enables:
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:palletising
  - urn:ngm:class:component-assembly
  - urn:ngm:class:depalletising
bridgesTo:
  - urn:ngm:class:spatial-computing-paradigm
---

# Cylindrical Robot

Cylindrical robot employs one rotary joint (azimuth) and two prismatic joints (radial and vertical) that produce a cylindrical workspace, enabling efficient reach over rectangular work envelopes.
