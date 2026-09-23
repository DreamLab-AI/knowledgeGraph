---
okf_version: "0.2"
type: Class
title: rb 0023 degrees of freedom
resource: urn:ngm:class:rb-0023-degrees-of-freedom
domain: robotics
description: "Degrees of Freedom (DOF) in robotics denotes the number of independent parameters required to fully specify the configuration of a robot mechanism. Each revolute or prismatic joint contributes one DOF; a 6-DOF manipulator can achieve arbitrary position and orientation in three-dimensional space. The number of DOF constrains the robot's reachable workspace, its dexterity, and the complexity of its "
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:rb-0026-robot-joint
supports:
  - urn:ngm:class:rb-0028-forward-kinematics
  - urn:ngm:class:rb-0029-inverse-kinematics
  - urn:ngm:class:rb-0036-resolution
relatedTo:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0024-workspace
  - urn:ngm:class:rb-0037-dexterity
  - urn:ngm:class:rb-0031-singularity
---

# rb 0023 degrees of freedom

Degrees of Freedom (DOF) in robotics denotes the number of independent parameters required to fully specify the configuration of a robot mechanism. Each revolute or prismatic joint contributes one DOF; a 6-DOF manipulator can achieve arbitrary position and orientation in three-dimensional space. The number of DOF constrains the robot's reachable workspace, its dexterity, and the complexity of its kinematic and dynamic models.
