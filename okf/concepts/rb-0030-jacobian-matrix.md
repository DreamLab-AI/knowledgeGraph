---
okf_version: "0.2"
type: Class
title: rb 0030 jacobian matrix
resource: urn:ngm:class:rb-0030-jacobian-matrix
domain: robotics
description: The Jacobian matrix is a mathematical mapping that relates joint-space velocities to Cartesian end-effector velocities for a robotic manipulator. It is central to differential kinematics, velocity control, force-torque transformation, and singularity analysis; its pseudo-inverse enables computation of joint velocities from desired Cartesian motions in inverse kinematics.
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:kinematics
enables:
  - urn:ngm:class:rb-0060-optimal-control
  - urn:ngm:class:rb-0053-force-control
uses:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0023-degrees-of-freedom
relatedTo:
  - urn:ngm:class:rb-0029-inverse-kinematics
  - urn:ngm:class:rb-0028-forward-kinematics
  - urn:ngm:class:rb-0031-singularity
  - urn:ngm:class:rb-0032-manipulability
---

# rb 0030 jacobian matrix

The Jacobian matrix is a mathematical mapping that relates joint-space velocities to Cartesian end-effector velocities for a robotic manipulator. It is central to differential kinematics, velocity control, force-torque transformation, and singularity analysis; its pseudo-inverse enables computation of joint velocities from desired Cartesian motions in inverse kinematics.
