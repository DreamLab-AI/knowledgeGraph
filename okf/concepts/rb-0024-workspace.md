---
okf_version: "0.2"
type: Class
title: rb 0024 workspace
resource: urn:ngm:class:rb-0024-workspace
domain: robotics
description: The workspace of a robot manipulator is the total volume of space that the end-effector can reach, given the joint range limits of all links. The reachable workspace encompasses every point the tool-centre-point (TCP) can attain in at least one orientation, while the dexterous workspace is the subset reachable in all possible orientations. Workspace volume, shape, and dexterity distribution are pr
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
dependsOn:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0026-robot-joint
relatedTo:
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:rb-0037-dexterity
  - urn:ngm:class:rb-0031-singularity
  - urn:ngm:class:rb-0095-safety-zone
  - urn:ngm:class:rb-0033-payload
  - urn:ngm:class:manipulator-arm
---

# rb 0024 workspace

The workspace of a robot manipulator is the total volume of space that the end-effector can reach, given the joint range limits of all links. The reachable workspace encompasses every point the tool-centre-point (TCP) can attain in at least one orientation, while the dexterous workspace is the subset reachable in all possible orientations. Workspace volume, shape, and dexterity distribution are primary design criteria for robot selection and cell layout, and must account for self-collisions, payload, and safety exclusion zones.
