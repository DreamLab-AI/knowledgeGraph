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
---

# rb 0033 payload

Payload in robotics refers to the maximum mass that a robot can carry or manipulate while maintaining its specified performance characteristics, including accuracy, repeatability, and speed. Payload capacity is a fundamental design parameter for robot arms, mobile robots, and drones, directly constraining the tools, parts, or cargo the robot can handle. It is typically quoted at the wrist or end-effector mounting face and may vary with configuration and speed; dynamic payload accounts for inertial forces during acceleration.
