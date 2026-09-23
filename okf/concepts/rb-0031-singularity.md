---
okf_version: "0.2"
type: Class
title: rb 0031 singularity
resource: urn:ngm:class:rb-0031-singularity
domain: robotics
description: A kinematic singularity is a robot configuration in which the Jacobian matrix loses rank, causing the manipulator to lose one or more degrees of freedom in Cartesian space. At a singularity, certain end-effector motions become unachievable regardless of joint velocity magnitudes, and inverse kinematics solutions either vanish or require unbounded joint speeds. Singularity avoidance and singularity
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
requires:
  - urn:ngm:class:rb-0030-jacobian-matrix
  - urn:ngm:class:rb-0021-robot-kinematics
dependsOn:
  - urn:ngm:class:rb-0029-inverse-kinematics
  - urn:ngm:class:differential-kinematics
contrastsWith:
  - urn:ngm:class:rb-0037-dexterity
relatedTo:
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:rb-0032-manipulability
  - urn:ngm:class:robot-singularity
  - urn:ngm:class:rb-0024-workspace
---

# rb 0031 singularity

A kinematic singularity is a robot configuration in which the Jacobian matrix loses rank, causing the manipulator to lose one or more degrees of freedom in Cartesian space. At a singularity, certain end-effector motions become unachievable regardless of joint velocity magnitudes, and inverse kinematics solutions either vanish or require unbounded joint speeds. Singularity avoidance and singularity-robust inverse kinematics (via damped least-squares) are critical for safe, continuous robot motion, particularly near workspace boundaries and for wrist configurations of six-axis arms.
