---
okf_version: "0.2"
type: Class
title: Kinematic Chain
resource: urn:ngm:class:kinematic-chain
domain: robotics
description: A kinematic chain is an assembly of rigid bodies (links) connected by joints that constrain their relative motion, forming the structural and mathematical basis for analysing and controlling the motion of mechanisms and robots. Open kinematic chains (serial manipulators) have one free end and exhibit simple forward kinematics but complex inverse kinematics; closed kinematic chains (parallel manipu
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:kinematics
hasPart:
  - urn:ngm:class:kinematic-element
  - urn:ngm:class:actuator
  - urn:ngm:class:end-effector
enables:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:motion-planning
  - urn:ngm:class:trajectory-planning
relatedTo:
  - urn:ngm:class:manipulator-arm
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:differential-kinematics
---

# Kinematic Chain

A kinematic chain is an assembly of rigid bodies (links) connected by joints that constrain their relative motion, forming the structural and mathematical basis for analysing and controlling the motion of mechanisms and robots. Open kinematic chains (serial manipulators) have one free end and exhibit simple forward kinematics but complex inverse kinematics; closed kinematic chains (parallel manipulators) have all links connected in loops, offering higher stiffness and load capacity. The Denavit-Hartenberg convention provides the canonical parameterisation for representing joint geometry and computing transformations along the chain, underpinning all modern robot programming and simulation systems.
