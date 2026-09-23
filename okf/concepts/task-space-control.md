---
okf_version: "0.2"
type: Class
title: Task Space Control
resource: urn:ngm:class:task-space-control
domain: robotics
description: Task space control, also called operational space control, regulates a robot's end-effector directly in Cartesian task coordinates rather than in joint space. Control laws are formulated in terms of end-effector position, orientation and force, with the manipulator Jacobian mapping task-space commands to joint actuation. This approach simplifies specification of interaction tasks such as following
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robot-control
requires:
  - urn:ngm:class:kinematics-model
enables:
  - urn:ngm:class:force-control
  - urn:ngm:class:compliance-control
dependsOn:
  - urn:ngm:class:feedback-control
implements:
  - urn:ngm:class:closed-loop-control
contrastsWith:
  - urn:ngm:class:trajectory-control
bridgesTo:
  - urn:ngm:class:impedance-control
uses:
  - urn:ngm:class:jacobian-matrix
  - urn:ngm:class:inverse-kinematics
supports:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:end-effector
partOf:
  - urn:ngm:class:robot-control
relatedTo:
  - urn:ngm:class:trajectory-control
  - urn:ngm:class:robot-control
---

# Task Space Control

Task space control, also called operational space control, regulates a robot's end-effector directly in Cartesian task coordinates rather than in joint space. Control laws are formulated in terms of end-effector position, orientation and force, with the manipulator Jacobian mapping task-space commands to joint actuation. This approach simplifies specification of interaction tasks such as following a path, applying a force or maintaining compliance against the environment.
