---
okf_version: "0.2"
type: Class
title: Jacobian Matrix
resource: urn:ngm:class:jacobian-matrix
domain: robotics
description: The Jacobian matrix is the matrix of all first-order partial derivatives of a vector-valued function, representing the best linear approximation to that function near a point and encoding how each output component changes with respect to each input variable. In robotics, the geometric and analytic Jacobian matrices map from joint velocity space to end-effector Cartesian velocity space, providing t
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:differential-kinematics
hasPart:
  - urn:ngm:class:jacobian-determinant
requires:
  - urn:ngm:class:denavit-hartenberg-parameters
enables:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:robot-control
  - urn:ngm:class:motion-planning
  - urn:ngm:class:singularity-analysis
  - urn:ngm:class:force-torque-control
  - urn:ngm:class:task-space-control
bridgesTo:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:coordinate-transformation
uses:
  - urn:ngm:class:kinematics
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:linear-algebra
partOf:
  - urn:ngm:class:robot-dynamics
relatedTo:
  - urn:ngm:class:robot-manipulation
  - urn:ngm:class:trajectory-control
  - urn:ngm:class:rb-0032-manipulability
  - urn:ngm:class:redundancy-resolution
---

# Jacobian Matrix

The Jacobian matrix is the matrix of all first-order partial derivatives of a vector-valued function, representing the best linear approximation to that function near a point and encoding how each output component changes with respect to each input variable. In robotics, the geometric and analytic Jacobian matrices map from joint velocity space to end-effector Cartesian velocity space, providing the fundamental tool for differential kinematics, inverse kinematics resolution, singularity analysis, and force-torque transmission between joint and task space. The Jacobian's rank and condition number determine the manipulability of a robot configuration and identify singular configurations where the end-effector loses degrees of freedom in certain directions.
