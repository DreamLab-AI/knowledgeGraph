---
okf_version: "0.2"
type: Class
title: Grasp Planning
resource: urn:ngm:class:grasp-planning
domain: robotics
description: Grasp planning is the computational problem of determining stable contact configurations between a robotic end-effector and an object, such that the resulting grasp resists external disturbances and enables the desired manipulation task. It combines geometric modelling of object shape, force-closure analysis, kinematics constraints, and task-level objectives to synthesise executable grasp poses.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:manipulation
requires:
  - urn:ngm:class:contact-model
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:perception-system
enables:
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:in-hand-manipulation
  - urn:ngm:class:task-execution
dependsOn:
  - urn:ngm:class:end-effector
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:object-recognition
implements:
  - urn:ngm:class:sampling-based-planning
  - urn:ngm:class:deep-learning
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:force-control
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:collision-detection
relatedTo:
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:motion-planning
  - urn:ngm:class:tactile-sensing
  - urn:ngm:class:sim-to-real-transfer
---

# Grasp Planning

Grasp planning is the computational problem of determining stable contact configurations between a robotic end-effector and an object, such that the resulting grasp resists external disturbances and enables the desired manipulation task. It combines geometric modelling of object shape, force-closure analysis, kinematics constraints, and task-level objectives to synthesise executable grasp poses.
