---
okf_version: "0.2"
type: Class
title: rb 0022 robot dynamics
resource: urn:ngm:class:rb-0022-robot-dynamics
domain: robotics
description: Robot dynamics is the study of the relationship between the forces and torques applied to a robot's joints and links and the resulting motion of the robot. It encompasses forward dynamics (computing accelerations from applied torques), inverse dynamics (computing required torques to achieve a desired motion), and the derivation of equations of motion via Newton-Euler or Lagrangian formulations. Dy
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot-dynamics
requires:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0041-inertia
  - urn:ngm:class:rb-0043-torque
enables:
  - urn:ngm:class:rb-0064-computed-torque-control
  - urn:ngm:class:rb-0051-trajectory-planning
relatedTo:
  - urn:ngm:class:rigid-body-dynamics
  - urn:ngm:class:newton-euler-dynamics
  - urn:ngm:class:rb-0030-jacobian-matrix
---

# rb 0022 robot dynamics

Robot dynamics is the study of the relationship between the forces and torques applied to a robot's joints and links and the resulting motion of the robot. It encompasses forward dynamics (computing accelerations from applied torques), inverse dynamics (computing required torques to achieve a desired motion), and the derivation of equations of motion via Newton-Euler or Lagrangian formulations. Dynamic models are essential for model-based controllers such as computed-torque control, optimal control, and trajectory optimisation.
