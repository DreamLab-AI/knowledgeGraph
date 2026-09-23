---
okf_version: "0.2"
type: Class
title: Parallel Robot
resource: urn:ngm:class:parallel-robot
domain: robotics
description: A robot whose end-effector is connected to the base by multiple independent, simultaneously actuated kinematic chains (limbs), giving it a closed-loop structure. Parallel robots achieve high rigidity, speed, and accuracy with low moving mass; canonical examples include the Delta robot and Stewart platform used in pick-and-place, machining, and flight simulation applications.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:manipulator-robot
hasPart:
  - urn:ngm:class:delta-robot
  - urn:ngm:class:stewart-platform
contrastsWith:
  - urn:ngm:class:cylindrical-robot
uses:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:robot-joint
  - urn:ngm:class:electric-linear-actuator
relatedTo:
  - urn:ngm:class:scara-robot
  - urn:ngm:class:kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:end-effector
---

# Parallel Robot

A robot whose end-effector is connected to the base by multiple independent, simultaneously actuated kinematic chains (limbs), giving it a closed-loop structure. Parallel robots achieve high rigidity, speed, and accuracy with low moving mass; canonical examples include the Delta robot and Stewart platform used in pick-and-place, machining, and flight simulation applications.
