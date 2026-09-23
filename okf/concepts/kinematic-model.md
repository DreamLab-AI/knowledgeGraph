---
okf_version: "0.2"
type: Class
title: KinematicModel
resource: urn:ngm:class:kinematic-model
domain: robotics
description: "A kinematic model is a mathematical abstraction that describes the geometry of a robot's motion by relating joint-space variables (angles and displacements) to the position and orientation of the end-effector in Cartesian space, without accounting for the forces or torques that produce that motion. Forward kinematics maps joint configurations to end-effector poses using homogeneous transformation "
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
requires:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:trajectory-planning
relatedTo:
  - urn:ngm:class:differential-kinematics
  - urn:ngm:class:sensor-fusion
---

# KinematicModel

A kinematic model is a mathematical abstraction that describes the geometry of a robot's motion by relating joint-space variables (angles and displacements) to the position and orientation of the end-effector in Cartesian space, without accounting for the forces or torques that produce that motion. Forward kinematics maps joint configurations to end-effector poses using homogeneous transformation matrices or Denavit-Hartenberg parameters, whereas inverse kinematics solves the reverse problem of finding joint configurations that achieve a desired pose. Kinematic models are foundational to trajectory generation, motion planning, and simulation in robotic systems.
