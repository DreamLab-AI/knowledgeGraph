---
okf_version: "0.2"
type: Class
title: Manipulator Robot
resource: urn:ngm:class:manipulator-robot
domain: robotics
description: A robot consisting of a kinematic chain of rigid links connected by actuated joints, terminating in an end-effector, designed to position and orient objects or tools in a workspace. Manipulator robots include serial open-chain designs (articulated, SCARA, cylindrical, Cartesian) and parallel closed-chain designs, and are the dominant platform for industrial assembly, welding, pick-and-place, and c
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:robot
hasPart:
  - urn:ngm:class:parallel-robot
  - urn:ngm:class:scara-robot
  - urn:ngm:class:cylindrical-robot
  - urn:ngm:class:manipulator-arm
  - urn:ngm:class:end-effector
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robot-joint
relatedTo:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:robot-kinematics
---

# Manipulator Robot

A robot consisting of a kinematic chain of rigid links connected by actuated joints, terminating in an end-effector, designed to position and orient objects or tools in a workspace. Manipulator robots include serial open-chain designs (articulated, SCARA, cylindrical, Cartesian) and parallel closed-chain designs, and are the dominant platform for industrial assembly, welding, pick-and-place, and collaborative tasks.
