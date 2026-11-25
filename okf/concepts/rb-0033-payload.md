---
okf_version: "0.2"
type: Class
title: rb 0033 payload
resource: urn:ngm:class:rb-0033-payload
domain: robotics
description: Payload in robotics refers to the maximum mass that a robot can carry or manipulate while maintaining its specified performance characteristics, including accuracy, repeatability, and speed. Payload capacity is a fundamental design parameter for robot arms, mobile robots, and drones, directly constraining the tools, parts, or cargo the robot can handle. It is typically quoted at the wrist or end-e
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot
enables:
  - urn:ngm:class:end-effector
dependsOn:
  - urn:ngm:class:rb-0022-robot-dynamics
  - urn:ngm:class:rb-0039-stiffness
partOf:
  - urn:ngm:class:robot
relatedTo:
  - urn:ngm:class:rb-0034-repeatability
  - urn:ngm:class:rb-0035-accuracy
  - urn:ngm:class:rb-0041-inertia
  - urn:ngm:class:rb-0043-torque
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# rb 0033 payload

Payload in robotics refers to the maximum mass that a robot can carry or manipulate while maintaining its specified performance characteristics, including accuracy, repeatability, and speed. Payload capacity is a fundamental design parameter for robot arms, mobile robots, and drones, directly constraining the tools, parts, or cargo the robot can handle. It is typically quoted at the wrist or end-effector mounting face and may vary with configuration and speed; dynamic payload accounts for inertial forces during acceleration.
