---
okf_version: "0.2"
type: Class
title: Robot Singularity
resource: urn:ngm:class:robot-singularity
domain: robotics
description: "A Robot Singularity is a configuration of a serial or parallel robot manipulator at which the Jacobian matrix loses rank, causing the determinant to approach zero. At a singularity, the robot loses one or more degrees of freedom in Cartesian space: it cannot produce force or motion in certain directions, and inverse kinematics solutions become ill-conditioned or non-unique. Singularity avoidance a"
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:roboticsdomain
hasPart:
  - urn:ngm:class:kinematics
requires:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:differential-kinematics
relatedTo:
  - urn:ngm:class:path-planning
  - urn:ngm:class:control-algorithm
---

# Robot Singularity

A Robot Singularity is a configuration of a serial or parallel robot manipulator at which the Jacobian matrix loses rank, causing the determinant to approach zero. At a singularity, the robot loses one or more degrees of freedom in Cartesian space: it cannot produce force or motion in certain directions, and inverse kinematics solutions become ill-conditioned or non-unique. Singularity avoidance and detection are central problems in motion planning, trajectory generation, and real-time control of robotic arms.
