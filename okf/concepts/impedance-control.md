---
okf_version: "0.2"
type: Class
title: Impedance Control
resource: urn:ngm:class:impedance-control
domain: robotics
description: A robot control strategy that dynamically modulates mechanical compliance (stiffness, damping, and inertia) to regulate the dynamic relationship between force and motion at the robot end-effector, enabling compliant and safe interaction with objects, surfaces, and humans without requiring explicit force feedback in all configurations.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
  - urn:ngm:class:control-system
requires:
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:virtual-dynamics-model
  - urn:ngm:class:stiffness-modulation
  - urn:ngm:class:damping-control
enables:
  - urn:ngm:class:adaptive-manipulation
  - urn:ngm:class:safe-human-robot-interaction
  - urn:ngm:class:human-robot-collaboration
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:soft-contact-tasks
  - urn:ngm:class:safe-human-robot-interaction
contrastsWith:
  - urn:ngm:class:admittance-control
  - urn:ngm:class:position-control
bridgesTo:
  - urn:ngm:class:haptic-feedback
uses:
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:jacobian-matrix
standardizedBy:
  - urn:ngm:class:iso-8373
partOf:
  - urn:ngm:class:interaction-control
  - urn:ngm:class:compliant-motion-control
  - urn:ngm:class:force-regulation
relatedTo:
  - urn:ngm:class:variable-stiffness-actuator
  - urn:ngm:class:rehabilitation-robotics
  - urn:ngm:class:surgical-robotics
---

# Impedance Control

A robot control strategy that dynamically modulates mechanical compliance (stiffness, damping, and inertia) to regulate the dynamic relationship between force and motion at the robot end-effector, enabling compliant and safe interaction with objects, surfaces, and humans without requiring explicit force feedback in all configurations.
