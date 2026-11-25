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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# rb 0023 degrees of freedom

Degrees of Freedom (DOF) in robotics denotes the number of independent parameters required to fully specify the configuration of a robot mechanism. Each revolute or prismatic joint contributes one DOF; a 6-DOF manipulator can achieve arbitrary position and orientation in three-dimensional space. The number of DOF constrains the robot's reachable workspace, its dexterity, and the complexity of its kinematic and dynamic models.
