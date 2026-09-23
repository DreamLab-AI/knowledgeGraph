---
okf_version: "0.2"
type: Class
title: Differential Kinematics
resource: urn:ngm:class:differential-kinematics
domain: robotics
description: Differential kinematics maps velocities between Robot Joint space and task-space (Cartesian) coordinates using the Jacobian matrix, enabling velocity-level analysis and control of robot manipulators.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:motion-mathematics
hasPart:
  - urn:ngm:class:jacobian-matrix
  - urn:ngm:class:velocity-transformation
  - urn:ngm:class:singularity-condition
requires:
  - urn:ngm:class:joint-configuration
  - urn:ngm:class:position-kinematics
  - urn:ngm:class:velocity-inputs
enables:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:end-effector-velocity-control
  - urn:ngm:class:singularity-detection
  - urn:ngm:class:force-torque-transformation
dependsOn:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:geometric-relationships
bridgesTo:
  - urn:ngm:class:spatial-computing-paradigm
---

# Differential Kinematics

Differential kinematics maps velocities between Robot Joint space and task-space (Cartesian) coordinates using the Jacobian matrix, enabling velocity-level analysis and control of robot manipulators.
