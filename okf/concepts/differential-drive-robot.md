---
okf_version: "0.2"
type: Class
title: Differential Drive Robot
resource: urn:ngm:class:differential-drive-robot
domain: robotics
description: Differential drive robot uses two independently controlled wheels on opposite sides to enable both forward/backward locomotion and in-place rotation, forming the most widely deployed Mobile Robot architecture.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:wheeled-robot
  - urn:ngm:class:nonholonomic-robot
hasPart:
  - urn:ngm:class:left-drive-motor
  - urn:ngm:class:right-drive-motor
  - urn:ngm:class:wheel
  - urn:ngm:class:caster-wheel
  - urn:ngm:class:differential-drive-controller
requires:
  - urn:ngm:class:motor-driver
  - urn:ngm:class:odometry
  - urn:ngm:class:independent-wheel-motors
  - urn:ngm:class:odometry
  - urn:ngm:class:motor-drivers
  - urn:ngm:class:power-battery
enables:
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:point-turning
  - urn:ngm:class:forward-locomotion
  - urn:ngm:class:in-place-rotation
  - urn:ngm:class:trajectory-tracking
dependsOn:
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:velocity-control
bridgesTo:
  - urn:ngm:class:spatial-computing-paradigm
---

# Differential Drive Robot

Differential drive robot uses two independently controlled wheels on opposite sides to enable both forward/backward locomotion and in-place rotation, forming the most widely deployed Mobile Robot architecture.
