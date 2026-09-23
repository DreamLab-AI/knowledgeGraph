---
okf_version: "0.2"
type: Class
title: rb 0057 admittance control
resource: urn:ngm:class:rb-0057-admittance-control
domain: robotics
description: "Admittance control is an interaction-control strategy in which a robot measures contact forces and torques and converts them into corresponding desired motion (position or velocity) using a virtual mass-spring-damper model. It is the dual of impedance control: the robot senses force input and renders motion output, enabling compliant, safe physical human-robot interaction in collaborative tasks."
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:interaction-control
requires:
  - urn:ngm:class:rb-0067-force-torque-sensor
  - urn:ngm:class:force-control
contrastsWith:
  - urn:ngm:class:impedance-control
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:rb-0094-power-and-force-limiting
relatedTo:
  - urn:ngm:class:rb-0053-force-control
  - urn:ngm:class:rb-0056-impedance-control
  - urn:ngm:class:compliance-control
  - urn:ngm:class:rb-0041-inertia
---

# rb 0057 admittance control

Admittance control is an interaction-control strategy in which a robot measures contact forces and torques and converts them into corresponding desired motion (position or velocity) using a virtual mass-spring-damper model. It is the dual of impedance control: the robot senses force input and renders motion output, enabling compliant, safe physical human-robot interaction in collaborative tasks.
