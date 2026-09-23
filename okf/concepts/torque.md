---
okf_version: "0.2"
type: Class
title: Torque
resource: urn:ngm:class:torque
domain: robotics
description: Torque is the rotational analogue of force, defined as the cross product of the moment arm and the applied force vector (τ = r × F), measured in newton-metres. In robotics it governs joint actuation, grip force, and dynamic loading across mechanical transmissions, and is the primary physical quantity managed by torque-controlled servos and force-torque sensors during manipulation tasks.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:robotics
requires:
  - urn:ngm:class:actuator
  - urn:ngm:class:force-torque-sensor
enables:
  - urn:ngm:class:motion-control
  - urn:ngm:class:force-control
  - urn:ngm:class:haptic-feedback
partOf:
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:robot-joint
---

# Torque

Torque is the rotational analogue of force, defined as the cross product of the moment arm and the applied force vector (τ = r × F), measured in newton-metres. In robotics it governs joint actuation, grip force, and dynamic loading across mechanical transmissions, and is the primary physical quantity managed by torque-controlled servos and force-torque sensors during manipulation tasks.
