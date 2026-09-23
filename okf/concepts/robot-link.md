---
okf_version: "0.2"
type: Class
title: RobotLink
resource: urn:ngm:class:robot-link
domain: robotics
description: A rigid mechanical structural component in a robotic manipulator or kinematic chain that connects two consecutive joints and transmits motion and forces between them, characterized by fixed geometric and inertial properties including length, mass, center of mass location, and inertia tensor, desc...
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:rigid-body
  - urn:ngm:class:mechanical-component
  - urn:ngm:class:kinematic-element
  - urn:ngm:class:structural-member
hasPart:
  - urn:ngm:class:mounting-interface
  - urn:ngm:class:linkgeometry
  - urn:ngm:class:massproperties
  - urn:ngm:class:inertialframe
  - urn:ngm:class:materialcomposition
  - urn:ngm:class:surfacefinish
  - urn:ngm:class:mountinginterface
requires:
  - urn:ngm:class:thermal-management
  - urn:ngm:class:materialselection
  - urn:ngm:class:structuralanalysis
  - urn:ngm:class:dynamicbalancing
  - urn:ngm:class:vibrationdamping
  - urn:ngm:class:thermal-management
enables:
  - urn:ngm:class:kinematic-chain
  - urn:ngm:class:kinematic-chain
  - urn:ngm:class:forcetransmission
  - urn:ngm:class:motionpropagation
  - urn:ngm:class:payloadsupport
  - urn:ngm:class:workspacereach
---

# RobotLink

A rigid mechanical structural component in a robotic manipulator or kinematic chain that connects two consecutive joints and transmits motion and forces between them, characterized by fixed geometric and inertial properties including length, mass, center of mass location, and inertia tensor, desc...
