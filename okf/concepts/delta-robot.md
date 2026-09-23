---
okf_version: "0.2"
type: Class
title: Delta Robot
resource: urn:ngm:class:delta-robot
domain: robotics
description: Delta robot employs parallel kinematics where three or more kinematic chains connect actuators to an end-effector platform, constraining motion through parallelogram linkages to pure translation.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:parallel-robot
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:parallel-robots
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:end-effector
  - urn:ngm:class:kinematic-chain
  - urn:ngm:class:actuator
  - urn:ngm:class:kinematic-chains
  - urn:ngm:class:parallelogram-linkages
  - urn:ngm:class:end-effector
requires:
  - urn:ngm:class:actuators
  - urn:ngm:class:synchronisation
  - urn:ngm:class:actuators
  - urn:ngm:class:stiff-support-structure
  - urn:ngm:class:coordinated-control
enables:
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:high-speed-picking
  - urn:ngm:class:rapid-sorting
  - urn:ngm:class:ultra-fast-placement
dependsOn:
  - urn:ngm:class:inverse-kinematics-computation
  - urn:ngm:class:trajectory-planning
bridgesTo:
  - urn:ngm:class:smart-contract
---

# Delta Robot

Delta robot employs parallel kinematics where three or more kinematic chains connect actuators to an end-effector platform, constraining motion through parallelogram linkages to pure translation.
