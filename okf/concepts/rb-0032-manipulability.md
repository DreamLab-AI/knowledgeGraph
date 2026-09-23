---
okf_version: "0.2"
type: Class
title: rb 0032 manipulability
resource: urn:ngm:class:rb-0032-manipulability
domain: robotics
description: "Manipulability is a scalar or ellipsoid measure of a robotic manipulator's capacity to move and exert forces in arbitrary directions from a given joint configuration. Introduced by Tsuneo Yoshikawa, the manipulability measure w = sqrt(det(J·Jᵀ)) quantifies how far a configuration is from kinematic singularity: higher values indicate greater dexterity, while w = 0 indicates a singular configuration"
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot-kinematics
dependsOn:
  - urn:ngm:class:rb-0030-jacobian-matrix
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0023-degrees-of-freedom
contrastsWith:
  - urn:ngm:class:rb-0031-singularity
supports:
  - urn:ngm:class:rb-0049-motion-planning
  - urn:ngm:class:rb-0029-inverse-kinematics
relatedTo:
  - urn:ngm:class:rb-0037-dexterity
  - urn:ngm:class:rb-0024-workspace
---

# rb 0032 manipulability

Manipulability is a scalar or ellipsoid measure of a robotic manipulator's capacity to move and exert forces in arbitrary directions from a given joint configuration. Introduced by Tsuneo Yoshikawa, the manipulability measure w = sqrt(det(J·Jᵀ)) quantifies how far a configuration is from kinematic singularity: higher values indicate greater dexterity, while w = 0 indicates a singular configuration where motion in at least one direction is lost. Manipulability is used in motion planning, redundancy resolution, and task-space control to avoid singular regions.
