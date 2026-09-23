---
okf_version: "0.2"
type: Class
title: Robotic Control
resource: urn:ngm:class:robotic-control
domain: robotics
description: Robotic control is the discipline of designing algorithms and hardware that regulate the motion, force, and behaviour of robotic systems to achieve desired trajectories or task objectives in the presence of dynamic uncertainty, environmental disturbances, and physical constraints. It spans classical feedback control strategies such as PID, computed-torque, and impedance control, through to model-p
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:control-system
requires:
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:actuator
enables:
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:multi-robot-systems
  - urn:ngm:class:robot-manipulation
  - urn:ngm:class:robot-locomotion
dependsOn:
  - urn:ngm:class:real-time-computing
implements:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:trajectory-planning
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:pid-control
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:motion-control
  - urn:ngm:class:force-control
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:model-predictive-control
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:torque-control
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:optimal-control
  - urn:ngm:class:control-theory
  - urn:ngm:class:impedance-control
  - urn:ngm:class:visual-servoing
---

# Robotic Control

Robotic control is the discipline of designing algorithms and hardware that regulate the motion, force, and behaviour of robotic systems to achieve desired trajectories or task objectives in the presence of dynamic uncertainty, environmental disturbances, and physical constraints. It spans classical feedback control strategies such as PID, computed-torque, and impedance control, through to model-predictive and learning-based controllers that adapt online. Robotic control integrates kinematics, dynamics, estimation, and optimisation to translate high-level task plans into actuator commands. It is a foundational competency enabling manipulation, locomotion, and human-robot interaction across industrial and service robot applications.
