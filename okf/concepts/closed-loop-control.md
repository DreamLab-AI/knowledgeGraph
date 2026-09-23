---
okf_version: "0.2"
type: Class
title: Closed-Loop Control
resource: urn:ngm:class:closed-loop-control
domain: robotics
description: A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-system
hasPart:
  - urn:ngm:class:feedback-mechanism
  - urn:ngm:class:error-signal
  - urn:ngm:class:setpoint
requires:
  - urn:ngm:class:actuator
  - urn:ngm:class:controller
  - urn:ngm:class:sensor-system
  - urn:ngm:class:feedback-mechanism
  - urn:ngm:class:stability
enables:
  - urn:ngm:class:rb-1007-trajectory-generation
  - urn:ngm:class:rb-1013-localization
  - urn:ngm:class:disturbance-rejection
  - urn:ngm:class:accuracy
dependsOn:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:state-estimation
implements:
  - urn:ngm:class:pid-control
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:optimal-control
  - urn:ngm:class:robust-control
  - urn:ngm:class:adaptive-control
contrastsWith:
  - urn:ngm:class:open-loop-control
  - urn:ngm:class:rb-1001-open-loop-control
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:actuator
  - urn:ngm:class:controller
  - urn:ngm:class:sensor-system
  - urn:ngm:class:state-space-representation
supports:
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:industrial-automation
standardizedBy:
  - urn:ngm:class:iso-8373-2021
partOf:
  - urn:ngm:class:control-system
  - urn:ngm:class:control-theory
relatedTo:
  - urn:ngm:class:system-identification
---

# Closed-Loop Control

A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.
