---
okf_version: "0.2"
type: Class
title: rb 0045 acceleration
resource: urn:ngm:class:rb-0045-acceleration
domain: robotics
description: In robotics, acceleration is the rate of change of velocity with respect to time, expressed for each joint (joint-space acceleration) or for the robot's end-effector (task-space acceleration), measured in rad/s² or m/s² respectively. Acceleration profiles govern the dynamic forces and torques that a manipulator must generate, coupling directly into Newton-Euler equations of motion. Limiting accele
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:newton-euler-dynamics
dependsOn:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0030-jacobian-matrix
supports:
  - urn:ngm:class:rb-0051-trajectory-planning
  - urn:ngm:class:rb-0094-power-and-force-limiting
relatedTo:
  - urn:ngm:class:rb-0044-velocity
  - urn:ngm:class:rb-0043-torque
  - urn:ngm:class:rb-0041-inertia
  - urn:ngm:class:rb-0022-robot-dynamics
---

# rb 0045 acceleration

In robotics, acceleration is the rate of change of velocity with respect to time, expressed for each joint (joint-space acceleration) or for the robot's end-effector (task-space acceleration), measured in rad/s² or m/s² respectively. Acceleration profiles govern the dynamic forces and torques that a manipulator must generate, coupling directly into Newton-Euler equations of motion. Limiting acceleration is central to safety (reducing impact forces) and to trajectory smoothness in collaborative applications.
