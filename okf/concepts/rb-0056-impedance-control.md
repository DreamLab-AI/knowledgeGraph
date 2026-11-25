---
okf_version: "0.2"
type: Class
title: rb 0056 impedance control
resource: urn:ngm:class:rb-0056-impedance-control
domain: robotics
description: Impedance control is a robot interaction-control strategy that regulates the dynamic relationship between end-effector force and motion by imposing a desired mechanical impedance (mass, damping, stiffness) on the robot's behaviour at the point of contact. Rather than commanding precise positions or forces independently, impedance control allows compliant, safe physical interaction with humans or u
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:interaction-control
requires:
  - urn:ngm:class:rb-0067-force-torque-sensor
  - urn:ngm:class:rb-0072-encoder
contrastsWith:
  - urn:ngm:class:rb-0054-position-control
supports:
  - urn:ngm:class:rb-0007-collaborative-robot
  - urn:ngm:class:rb-0094-power-and-force-limiting
relatedTo:
  - urn:ngm:class:rb-0057-admittance-control
  - urn:ngm:class:rb-0053-force-control
  - urn:ngm:class:rb-0038-compliance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# rb 0056 impedance control

Impedance control is a robot interaction-control strategy that regulates the dynamic relationship between end-effector force and motion by imposing a desired mechanical impedance (mass, damping, stiffness) on the robot's behaviour at the point of contact. Rather than commanding precise positions or forces independently, impedance control allows compliant, safe physical interaction with humans or uncertain environments by shaping the robot's apparent mechanical response. It is fundamental to collaborative robotics, enabling robots to yield to external forces in a controlled manner without requiring an explicit force setpoint.
