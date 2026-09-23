---
okf_version: "0.2"
type: Class
title: Inverse Kinematics
resource: urn:ngm:class:inverse-kinematics
domain: robotics
description: The process of determining the joint parameters (angles or displacements) required to place a robot's end-effector at a desired position and orientation in Cartesian space. It maps from task space to joint space, inverting the forward kinematic function and resolving ambiguities such as multiple solutions, singularities, and joint-limit violations.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:kinematics
requires:
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:joint-configuration
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:target-pose
enables:
  - urn:ngm:class:path-planning
  - urn:ngm:class:robot-control
  - urn:ngm:class:teleoperation
  - urn:ngm:class:computer-animation
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:path-planning
dependsOn:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:coordinate-frame
contrastsWith:
  - urn:ngm:class:forward-kinematics
bridgesTo:
  - urn:ngm:class:character-animation
uses:
  - urn:ngm:class:jacobian-matrix
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:optimisation
  - urn:ngm:class:analytical-methods
partOf:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robo-actuation-and-control
relatedTo:
  - urn:ngm:class:end-effector
  - urn:ngm:class:multiple-solutions
  - urn:ngm:class:no-solution
  - urn:ngm:class:singularities
  - urn:ngm:class:joint-limits
---

# Inverse Kinematics

The process of determining the joint parameters (angles or displacements) required to place a robot's end-effector at a desired position and orientation in Cartesian space. It maps from task space to joint space, inverting the forward kinematic function and resolving ambiguities such as multiple solutions, singularities, and joint-limit violations.
