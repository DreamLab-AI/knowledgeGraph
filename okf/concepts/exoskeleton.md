---
okf_version: "0.2"
type: Class
title: Exoskeleton
resource: urn:ngm:class:exoskeleton
domain: robotics
description: An exoskeleton is a wearable robotic structure that augments or supports human movement by applying forces in parallel with the wearer's limbs, used for assistance, rehabilitation, and load support.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:exoskeleton-robot
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:wearable-device-integration
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:motion-planning
  - urn:ngm:class:impedance-control
  - urn:ngm:class:power-electronics
  - urn:ngm:class:actuator
enables:
  - urn:ngm:class:assistive-robotics
  - urn:ngm:class:human-robot-collaboration
  - urn:ngm:class:rehabilitation-robotics
  - urn:ngm:class:occupational-safety
dependsOn:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:embedded-systems
contrastsWith:
  - urn:ngm:class:prosthetics
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:human-robot-interaction
uses:
  - urn:ngm:class:electromyography
  - urn:ngm:class:inertial-measurement-unit
relatedTo:
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:haptic-feedback
---

# Exoskeleton

An exoskeleton is a wearable robotic structure that augments or supports human movement by applying forces in parallel with the wearer's limbs, used for assistance, rehabilitation, and load support.
