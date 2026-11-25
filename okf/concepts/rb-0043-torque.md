---
okf_version: "0.2"
type: Class
title: rb 0043 torque
resource: urn:ngm:class:rb-0043-torque
domain: robotics
description: Torque is the rotational force applied about a joint axis, expressed in Newton-metres (N·m). In robot dynamics, joint torques are the primary control inputs that drive links through desired trajectories; torque limits constrain the feasible workspace and influence payload capacity, and torque sensing enables compliant and force-controlled interaction.
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot-dynamics
dependsOn:
  - urn:ngm:class:rb-0022-robot-dynamics
  - urn:ngm:class:rb-0064-computed-torque-control
uses:
  - urn:ngm:class:actuator
  - urn:ngm:class:servo-motor
relatedTo:
  - urn:ngm:class:rb-0041-inertia
  - urn:ngm:class:rb-0044-velocity
  - urn:ngm:class:rb-0045-acceleration
  - urn:ngm:class:rb-0067-force-torque-sensor
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# rb 0043 torque

Torque is the rotational force applied about a joint axis, expressed in Newton-metres (N·m). In robot dynamics, joint torques are the primary control inputs that drive links through desired trajectories; torque limits constrain the feasible workspace and influence payload capacity, and torque sensing enables compliant and force-controlled interaction.
