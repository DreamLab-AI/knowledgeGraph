---
okf_version: "0.2"
type: Class
title: rb 0037 dexterity
resource: urn:ngm:class:rb-0037-dexterity
domain: robotics
description: Dexterity, in robotics, is the ability of a manipulator to achieve a broad range of end-effector orientations and positions within its workspace, particularly in the vicinity of a given point, without encountering kinematic singularities. It is quantified by measures such as the Jacobian condition number, manipulability ellipsoid volume, or isotropy index. High dexterity enables a robot arm to app
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
dependsOn:
  - urn:ngm:class:rb-0030-jacobian-matrix
  - urn:ngm:class:rb-0029-inverse-kinematics
supports:
  - urn:ngm:class:manipulation
  - urn:ngm:class:end-effector
relatedTo:
  - urn:ngm:class:rb-0032-manipulability
  - urn:ngm:class:rb-0031-singularity
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:rb-0024-workspace
---

# rb 0037 dexterity

Dexterity, in robotics, is the ability of a manipulator to achieve a broad range of end-effector orientations and positions within its workspace, particularly in the vicinity of a given point, without encountering kinematic singularities. It is quantified by measures such as the Jacobian condition number, manipulability ellipsoid volume, or isotropy index. High dexterity enables a robot arm to approach objects from many angles, reconfigure during a task, and avoid joint limits — properties critical for assembly, surgery, and unstructured manipulation tasks.
