---
okf_version: "0.2"
type: Class
title: Proportional Valve
resource: urn:ngm:class:proportional-valve
domain: robotics
description: A proportional valve is a fluid-power control element that modulates flow rate, pressure, or direction continuously and proportionally in response to an electrical command signal, in contrast to on/off solenoid valves that switch between two discrete states. The valve's spool or poppet position is controlled by a proportional solenoid or voice-coil actuator whose force output is linearly related t
maturity: mature
quality: 0.85
is-a:
  - urn:ngm:class:fluid-power-device
uses:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:feedback-control
partOf:
  - urn:ngm:class:industrial-automation
relatedTo:
  - urn:ngm:class:servo-valve
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:pneumatic-actuator
---

# Proportional Valve

A proportional valve is a fluid-power control element that modulates flow rate, pressure, or direction continuously and proportionally in response to an electrical command signal, in contrast to on/off solenoid valves that switch between two discrete states. The valve's spool or poppet position is controlled by a proportional solenoid or voice-coil actuator whose force output is linearly related to the applied current, enabling smooth, variable control of hydraulic or pneumatic systems.
