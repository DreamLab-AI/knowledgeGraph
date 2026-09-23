---
okf_version: "0.2"
type: Class
title: rb 0053 force control
resource: urn:ngm:class:rb-0053-force-control
domain: robotics
description: Force control is a robot control paradigm in which the controller regulates the interaction force between the end-effector and its environment, rather than purely tracking a desired position trajectory. By closing the loop on measured contact forces from a force-torque sensor, the robot can perform compliant tasks such as surface grinding, peg-in-hole insertion, and human-robot handover without re
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-system
requires:
  - urn:ngm:class:rb-0067-force-torque-sensor
  - urn:ngm:class:rb-0047-feedback-control
contrastsWith:
  - urn:ngm:class:rb-0054-position-control
relatedTo:
  - urn:ngm:class:rb-0056-impedance-control
  - urn:ngm:class:rb-0057-admittance-control
  - urn:ngm:class:rb-0038-compliance
  - urn:ngm:class:rb-0094-power-and-force-limiting
---

# rb 0053 force control

Force control is a robot control paradigm in which the controller regulates the interaction force between the end-effector and its environment, rather than purely tracking a desired position trajectory. By closing the loop on measured contact forces from a force-torque sensor, the robot can perform compliant tasks such as surface grinding, peg-in-hole insertion, and human-robot handover without requiring precise environmental models. The main architectures are impedance control, admittance control, and hybrid position/force control, each suited to different environment stiffness regimes.
