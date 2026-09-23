---
okf_version: "0.2"
type: Class
title: rb 0029 inverse kinematics
resource: urn:ngm:class:rb-0029-inverse-kinematics
domain: robotics
description: "Inverse kinematics (IK) is the computational process of determining the joint angles or actuator lengths required to place a robot's end-effector at a desired position and orientation in task space. Unlike forward kinematics, IK is typically under-determined or over-determined and requires iterative numerical solvers, analytical solutions, or Jacobian-based methods; it is a foundational component "
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:kinematics
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:rb-0051-trajectory-planning
contrastsWith:
  - urn:ngm:class:rb-0028-forward-kinematics
uses:
  - urn:ngm:class:rb-0030-jacobian-matrix
  - urn:ngm:class:rb-0031-singularity
relatedTo:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:end-effector
  - urn:ngm:class:manipulator-arm
---

# rb 0029 inverse kinematics

Inverse kinematics (IK) is the computational process of determining the joint angles or actuator lengths required to place a robot's end-effector at a desired position and orientation in task space. Unlike forward kinematics, IK is typically under-determined or over-determined and requires iterative numerical solvers, analytical solutions, or Jacobian-based methods; it is a foundational component of motion planning, manipulation, and trajectory execution in robotic systems.
