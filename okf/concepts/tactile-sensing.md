---
okf_version: "0.2"
type: Class
title: Tactile Sensing
resource: urn:ngm:class:tactile-sensing
domain: robotics
description: Tactile sensing is the ability of a robotic or prosthetic system to detect and interpret physical contact information — including contact force magnitude, direction, distribution, texture, slip, and temperature — through sensors embedded in or on the surface of an end effector or robotic skin. It is the mechanical analogue of the human sense of touch and provides information that visual sensing al
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:perception-system
requires:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:manipulation
  - urn:ngm:class:force-control
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:dexterous-grasping
dependsOn:
  - urn:ngm:class:end-effector
  - urn:ngm:class:soft-robotics
contrastsWith:
  - urn:ngm:class:visual-perception
  - urn:ngm:class:proximity-sensing
bridgesTo:
  - urn:ngm:class:neuromorphic-computing
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:pressure-sensor
  - urn:ngm:class:piezoresistive-sensor
  - urn:ngm:class:capacitive-sensor
  - urn:ngm:class:tactile-sensor
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:teleoperation
  - urn:ngm:class:prosthetics
partOf:
  - urn:ngm:class:robotic-system
relatedTo:
  - urn:ngm:class:grasp-planning
---

# Tactile Sensing

Tactile sensing is the ability of a robotic or prosthetic system to detect and interpret physical contact information — including contact force magnitude, direction, distribution, texture, slip, and temperature — through sensors embedded in or on the surface of an end effector or robotic skin. It is the mechanical analogue of the human sense of touch and provides information that visual sensing alone cannot supply, such as the internal stress distribution of a grasped object or the onset of slippage. Tactile sensing is fundamental to dexterous manipulation, safe human-robot interaction, and feedback-controlled assembly, and has become a defining capability differentiating next-generation robotic systems from conventional industrial manipulators.
