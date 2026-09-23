---
okf_version: "0.2"
type: Class
title: Manipulator
resource: urn:ngm:class:manipulator
domain: robotics
description: A manipulator is a mechanically programmable device comprising a series of rigid links connected by actuated joints arranged in a serial or parallel kinematic chain, capable of displacing objects or tools through a defined workspace. The distal end carries an end-effector that interfaces directly with the task environment, enabling grasping, welding, assembly, or other physical interactions. Manip
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:robot
hasPart:
  - urn:ngm:class:end-effector
  - urn:ngm:class:robot-joint
  - urn:ngm:class:robot-link
  - urn:ngm:class:actuator
  - urn:ngm:class:robot-joint
  - urn:ngm:class:robot-link
  - urn:ngm:class:wrist
requires:
  - urn:ngm:class:robot-controller
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:kinematic-model
enables:
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:assembly-automation
  - urn:ngm:class:teleoperation
  - urn:ngm:class:robot-welding
dependsOn:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:motion-planning
implements:
  - urn:ngm:class:iso-8373-2021
  - urn:ngm:class:denavit-hartenberg-parameters
  - urn:ngm:class:denavit-hartenberg-parameters
contrastsWith:
  - urn:ngm:class:mobile-robot
  - urn:ngm:class:mobile-manipulator
  - urn:ngm:class:mobile-manipulator
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:servo-motor
supports:
  - urn:ngm:class:human-robot-collaboration
  - urn:ngm:class:flexible-manufacturing
partOf:
  - urn:ngm:class:robot
  - urn:ngm:class:robotic-system
relatedTo:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:parallel-robot
  - urn:ngm:class:redundant-manipulator
---

# Manipulator

A manipulator is a mechanically programmable device comprising a series of rigid links connected by actuated joints arranged in a serial or parallel kinematic chain, capable of displacing objects or tools through a defined workspace. The distal end carries an end-effector that interfaces directly with the task environment, enabling grasping, welding, assembly, or other physical interactions. Manipulators are parameterised by their degrees of freedom, workspace geometry, payload capacity, and control architecture, and are the foundational actuator subsystem in industrial, collaborative, and service robots. The ISO 8373:2021 standard defines a manipulator as the machine mechanism of a robot.
