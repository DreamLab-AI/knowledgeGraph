---
okf_version: "0.2"
type: Class
title: Dexterous Manipulation
resource: urn:ngm:class:dexterous-manipulation
domain: robotics
description: Dexterous manipulation is the capability of robotic systems to grasp, reorient, assemble, and interact with objects using multi-fingered hands or compliant end-effectors in ways that require fine motor control, contact-rich reasoning, and real-time adaptation to object geometry and physical properties. It encompasses grasp planning, in-hand manipulation, and tactile feedback integration to replica
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:manipulation
hasPart:
  - urn:ngm:class:in-hand-manipulation
  - urn:ngm:class:grasp-planning
requires:
  - urn:ngm:class:end-effector
  - urn:ngm:class:kinematics
  - urn:ngm:class:tactile-sensing
  - urn:ngm:class:force-torque-sensor
enables:
  - urn:ngm:class:robot-learning
  - urn:ngm:class:humanoid-robot
dependsOn:
  - urn:ngm:class:contact-mechanics
  - urn:ngm:class:motion-planning
contrastsWith:
  - urn:ngm:class:pick-and-place
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:foundation-model
uses:
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:domain-randomisation
partOf:
  - urn:ngm:class:robot-manipulation
relatedTo:
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:teleoperation
---

# Dexterous Manipulation

Dexterous manipulation is the capability of robotic systems to grasp, reorient, assemble, and interact with objects using multi-fingered hands or compliant end-effectors in ways that require fine motor control, contact-rich reasoning, and real-time adaptation to object geometry and physical properties. It encompasses grasp planning, in-hand manipulation, and tactile feedback integration to replicate or exceed human-hand dexterity in unstructured environments.
