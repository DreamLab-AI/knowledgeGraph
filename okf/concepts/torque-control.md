---
okf_version: "0.2"
type: Class
title: Torque Control
resource: urn:ngm:class:torque-control
domain: robotics
description: A low-level actuation strategy that directly commands the output torque of joints or motors rather than position or velocity, enabling compliant, force-sensitive interaction between a robot and its environment. Torque control is essential for safe human-robot collaboration and dexterous manipulation tasks.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:motion-control
hasPart:
  - urn:ngm:class:torque-sensor
requires:
  - urn:ngm:class:torque-sensor
  - urn:ngm:class:feedback-control
  - urn:ngm:class:motor-driver
  - urn:ngm:class:real-time-control
enables:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:compliant-manipulation
  - urn:ngm:class:force-control
  - urn:ngm:class:impedance-control
dependsOn:
  - urn:ngm:class:actuator
  - urn:ngm:class:pid-control
  - urn:ngm:class:robot-dynamics
implements:
  - urn:ngm:class:feedback-control
contrastsWith:
  - urn:ngm:class:position-control
  - urn:ngm:class:velocity-control
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:actuator
  - urn:ngm:class:robot-actuator
  - urn:ngm:class:servo-control
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:inverse-kinematics
supports:
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:robot-safety
partOf:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:motion-control
relatedTo:
  - urn:ngm:class:pid-control
  - urn:ngm:class:servo-control
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:admittance-control
---

# Torque Control

A low-level actuation strategy that directly commands the output torque of joints or motors rather than position or velocity, enabling compliant, force-sensitive interaction between a robot and its environment. Torque control is essential for safe human-robot collaboration and dexterous manipulation tasks.
