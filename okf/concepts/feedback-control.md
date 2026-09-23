---
okf_version: "0.2"
type: Class
title: Feedback Control
resource: urn:ngm:class:feedback-control
domain: robotics
description: Feedback Control - A closed-loop control mechanism in which Sensor measurements of actual system state are continuously compared against desired Setpoints, and control actions are adjusted in real time to minimise error and maintain stable, accurate Robot Behaviour.
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:control-theory
  - urn:ngm:class:robotics
hasPart:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:feedback-loop
requires:
  - urn:ngm:class:control-algorithm
  - urn:ngm:class:sensor
  - urn:ngm:class:error-measurement
  - urn:ngm:class:actuator-response
enables:
  - urn:ngm:class:disturbance-rejection
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:robust-operation
dependsOn:
  - urn:ngm:class:plant-model
  - urn:ngm:class:state-estimation
implements:
  - urn:ngm:class:closed-loop-control
contrastsWith:
  - urn:ngm:class:open-loop-control
  - urn:ngm:class:feedforward-control
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:transfer-function
supports:
  - urn:ngm:class:adaptive-control
standardizedBy:
  - urn:ngm:class:iso-13849
  - urn:ngm:class:iec-61508
partOf:
  - urn:ngm:class:motion-control
  - urn:ngm:class:motion-control
  - urn:ngm:class:stabilisation-architecture
relatedTo:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:optimal-control
---

# Feedback Control

Feedback Control - A closed-loop control mechanism in which Sensor measurements of actual system state are continuously compared against desired Setpoints, and control actions are adjusted in real time to minimise error and maintain stable, accurate Robot Behaviour.
