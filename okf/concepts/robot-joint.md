---
okf_version: "0.2"
type: Class
title: Robot Joint
resource: urn:ngm:class:robot-joint
domain: robotics
description: A Robot Joint is a mechanical articulation between two robot links that permits controlled relative motion — rotational, translational, or compound — enabling the full kinematic range of a robotic arm or manipulator. Joint types include revolute, prismatic, and spherical, each characterised by degrees of freedom and load capacity.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:joint-encoder
  - urn:ngm:class:torque-sensor
requires:
  - urn:ngm:class:control-system
  - urn:ngm:class:robot-sensor
  - urn:ngm:class:motor-driver
enables:
  - urn:ngm:class:rb-0023-degrees-of-freedom
  - urn:ngm:class:human-robot-collaboration
dependsOn:
  - urn:ngm:class:bearing
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:surgical-robotics
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:pid-control
  - urn:ngm:class:forward-kinematics
standardizedBy:
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iso-8373
partOf:
  - urn:ngm:class:robotics
  - urn:ngm:class:robotic-arm
  - urn:ngm:class:kinematic-chain
relatedTo:
  - urn:ngm:class:path-planning
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:impedance-control
---

# Robot Joint

A Robot Joint is a mechanical articulation between two robot links that permits controlled relative motion — rotational, translational, or compound — enabling the full kinematic range of a robotic arm or manipulator. Joint types include revolute, prismatic, and spherical, each characterised by degrees of freedom and load capacity.
