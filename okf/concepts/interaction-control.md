---
okf_version: "0.2"
type: Class
title: Interaction Control
resource: urn:ngm:class:interaction-control
domain: robotics
description: A robotics control paradigm that explicitly manages contact forces and compliant behaviour when a robot interacts with its environment or human collaborators. Interaction control encompasses impedance control, admittance control, and force control strategies that allow robots to operate safely during physical contact, adapting stiffness, damping, and inertia in response to sensed forces.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:human-robot-interaction
hasPart:
  - urn:ngm:class:impedance-control
  - urn:ngm:class:force-control
requires:
  - urn:ngm:class:control-system
  - urn:ngm:class:robot-sensor
enables:
  - urn:ngm:class:human-robot-interaction
relatedTo:
  - urn:ngm:class:motion-control
  - urn:ngm:class:robot-safety
---

# Interaction Control

A robotics control paradigm that explicitly manages contact forces and compliant behaviour when a robot interacts with its environment or human collaborators. Interaction control encompasses impedance control, admittance control, and force control strategies that allow robots to operate safely during physical contact, adapting stiffness, damping, and inertia in response to sensed forces.
