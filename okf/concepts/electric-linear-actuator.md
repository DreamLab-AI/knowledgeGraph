---
okf_version: "0.2"
type: Class
title: Electric Linear Actuator
resource: urn:ngm:class:electric-linear-actuator
domain: robotics
description: An actuator that converts rotary electrical motor output into controlled linear displacement using a mechanical transmission such as a lead screw, rack-and-pinion, or belt drive. Electric linear actuators offer precise position control, programmable stroke lengths, and clean operation, making them preferable to pneumatic or hydraulic counterparts in many robotics and automation applications.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:electric-actuator
hasPart:
  - urn:ngm:class:lead-screw-actuator
  - urn:ngm:class:rack-and-pinion-actuator
enables:
  - urn:ngm:class:parallel-robot
uses:
  - urn:ngm:class:electric-motor
  - urn:ngm:class:position-control
  - urn:ngm:class:motion-control
relatedTo:
  - urn:ngm:class:pneumatic-actuator
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:servo-motor
  - urn:ngm:class:stepper-motor
---

# Electric Linear Actuator

An actuator that converts rotary electrical motor output into controlled linear displacement using a mechanical transmission such as a lead screw, rack-and-pinion, or belt drive. Electric linear actuators offer precise position control, programmable stroke lengths, and clean operation, making them preferable to pneumatic or hydraulic counterparts in many robotics and automation applications.
