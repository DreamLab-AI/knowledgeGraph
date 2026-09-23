---
okf_version: "0.2"
type: Class
title: rb 0028 forward kinematics
resource: urn:ngm:class:rb-0028-forward-kinematics
domain: robotics
description: Forward kinematics (FK) is the mathematical process of computing the position and orientation of a robot's end effector in Cartesian space given a known set of joint angles or displacements. Using a chain of homogeneous transformation matrices (typically expressed using Denavit-Hartenberg parameters), FK provides a unique, computationally deterministic mapping from joint space to task space. It is
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:kinematics
requires:
  - urn:ngm:class:rb-0026-robot-joint
  - urn:ngm:class:rb-0072-encoder
enables:
  - urn:ngm:class:rb-0049-motion-planning
  - urn:ngm:class:rb-0052-collision-avoidance
contrastsWith:
  - urn:ngm:class:rb-0029-inverse-kinematics
relatedTo:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0030-jacobian-matrix
  - urn:ngm:class:rb-0031-singularity
  - urn:ngm:class:rb-0024-workspace
---

# rb 0028 forward kinematics

Forward kinematics (FK) is the mathematical process of computing the position and orientation of a robot's end effector in Cartesian space given a known set of joint angles or displacements. Using a chain of homogeneous transformation matrices (typically expressed using Denavit-Hartenberg parameters), FK provides a unique, computationally deterministic mapping from joint space to task space. It is used in motion planning, visualisation, and safety monitoring to determine where the robot tool tip is at any instant, and underpins workspace analysis, collision checking, and trajectory verification.
