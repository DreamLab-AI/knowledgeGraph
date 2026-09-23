---
okf_version: "0.2"
type: Class
title: Proportional Control
resource: urn:ngm:class:proportional-control
domain: robotics
description: Proportional Control is a feedback control strategy in which the corrective output applied to an actuator is directly proportional to the current error—the difference between the desired setpoint and the measured process variable. It is the foundational component of PID controllers, providing immediate, scaled response to deviations but typically leaving a steady-state offset that requires integra
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:feedback-control
hasPart:
  - urn:ngm:class:control-algorithm
requires:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:actuator
enables:
  - urn:ngm:class:motion-control
  - urn:ngm:class:position-control
  - urn:ngm:class:velocity-control
contrastsWith:
  - urn:ngm:class:derivative-control
  - urn:ngm:class:adaptive-control
partOf:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:closed-loop-control
relatedTo:
  - urn:ngm:class:control-system
  - urn:ngm:class:control-theory
---

# Proportional Control

Proportional Control is a feedback control strategy in which the corrective output applied to an actuator is directly proportional to the current error—the difference between the desired setpoint and the measured process variable. It is the foundational component of PID controllers, providing immediate, scaled response to deviations but typically leaving a steady-state offset that requires integral or derivative terms to eliminate.
