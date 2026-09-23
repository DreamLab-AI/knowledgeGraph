---
okf_version: "0.2"
type: Class
title: Setpoint
resource: urn:ngm:class:setpoint
domain: robotics
description: A setpoint is the desired target value that a control system attempts to maintain for a measured process variable, serving as the reference against which the controller compares the actual measurement. The difference between setpoint and measured value is the error signal that drives corrective action in a feedback loop. Setpoints can be fixed, scheduled, or continuously varying, as when a control
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:closed-loop-control
hasPart:
  - urn:ngm:class:control-theory
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:feedback-loop
enables:
  - urn:ngm:class:disturbance-rejection
  - urn:ngm:class:stability
dependsOn:
  - urn:ngm:class:control-loop
implements:
  - urn:ngm:class:control-theory
contrastsWith:
  - urn:ngm:class:disturbance-rejection
bridgesTo:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:industrial-automation
uses:
  - urn:ngm:class:sensor
supports:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:process-control
partOf:
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:feedback-loop
relatedTo:
  - urn:ngm:class:actuator
  - urn:ngm:class:pid-control
  - urn:ngm:class:trajectory
---

# Setpoint

A setpoint is the desired target value that a control system attempts to maintain for a measured process variable, serving as the reference against which the controller compares the actual measurement. The difference between setpoint and measured value is the error signal that drives corrective action in a feedback loop. Setpoints can be fixed, scheduled, or continuously varying, as when a controller tracks a moving reference trajectory.
