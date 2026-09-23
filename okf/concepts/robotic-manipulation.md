---
okf_version: "0.2"
type: Class
title: Robotic Manipulation
resource: urn:ngm:class:robotic-manipulation
domain: robotics
description: Robotic manipulation is the field concerned with how robots physically interact with and change the state of objects in their environment — grasping, moving, assembling, and reorienting items using arms, hands, and end-effectors. It integrates perception, motion planning, control, and contact reasoning so that a robot can compute and execute the forces and trajectories needed to handle objects rel
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:manipulation
hasPart:
  - urn:ngm:class:grasp-planning
  - urn:ngm:class:end-effector
requires:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:perception
  - urn:ngm:class:inverse-kinematics
enables:
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:robotic-grasping
dependsOn:
  - urn:ngm:class:robot
bridgesTo:
  - urn:ngm:class:perception
uses:
  - urn:ngm:class:force-control
  - urn:ngm:class:tactile-sensing
supports:
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:autonomous-robot
relatedTo:
  - urn:ngm:class:reinforcement-learning
---

# Robotic Manipulation

Robotic manipulation is the field concerned with how robots physically interact with and change the state of objects in their environment — grasping, moving, assembling, and reorienting items using arms, hands, and end-effectors. It integrates perception, motion planning, control, and contact reasoning so that a robot can compute and execute the forces and trajectories needed to handle objects reliably under uncertainty. Manipulation spans rigid pick-and-place in structured factories through to dexterous, contact-rich handling of deformable or unfamiliar objects in unstructured human environments.
