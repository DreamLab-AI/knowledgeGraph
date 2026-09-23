---
okf_version: "0.2"
type: Class
title: Control Interface
resource: urn:ngm:class:control-interface
domain: robotics
description: A control interface is the defined boundary through which commands and feedback are exchanged between a controller and a controlled device such as an actuator, end-effector, or robot subsystem. It specifies the signals, protocols, data rates, and timing required for deterministic command of the hardware. A well-defined control interface is what allows higher-level planners and digital twins to act
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-actuation-and-control
relatedTo:
  - urn:ngm:class:end-effector
  - urn:ngm:class:digital-twin
---

# Control Interface

A control interface is the defined boundary through which commands and feedback are exchanged between a controller and a controlled device such as an actuator, end-effector, or robot subsystem. It specifies the signals, protocols, data rates, and timing required for deterministic command of the hardware. A well-defined control interface is what allows higher-level planners and digital twins to actuate physical systems reliably.
