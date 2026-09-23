---
okf_version: "0.2"
type: Class
title: Control System
resource: urn:ngm:class:control-system
domain: robotics
description: Control system encompasses the computational and hardware subsystems that sense environmental state, evaluate performance against desired objectives, and generate actuation commands to regulate robot behaviour toward goals.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotic-system
  - urn:ngm:class:feedback-systems
hasPart:
  - urn:ngm:class:controller
  - urn:ngm:class:sensor-interface
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:actuator-driver
requires:
  - urn:ngm:class:actuator
  - urn:ngm:class:real-time-computation
  - urn:ngm:class:sensor-input
  - urn:ngm:class:time-synchronisation
  - urn:ngm:class:actuator
  - urn:ngm:class:time-synchronisation
enables:
  - urn:ngm:class:adaptive-behaviour
  - urn:ngm:class:task-execution
  - urn:ngm:class:motion-control
  - urn:ngm:class:stabilisation
dependsOn:
  - urn:ngm:class:control-algorithm
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:power-supply
bridgesTo:
  - urn:ngm:class:robotic-system
  - urn:ngm:class:ai-agent-system
---

# Control System

Control system encompasses the computational and hardware subsystems that sense environmental state, evaluate performance against desired objectives, and generate actuation commands to regulate robot behaviour toward goals.
