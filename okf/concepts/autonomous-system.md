---
okf_version: "0.2"
type: Class
title: Autonomous System
resource: urn:ngm:class:autonomous-system
domain: robotics
description: An Autonomous System is a computational or physical entity capable of perceiving its environment through sensors, reasoning over that perception, and executing goal-directed actions without continuous human intervention, forming closed-loop sense-plan-act cycles. Architecturally, autonomous systems combine perception pipelines, world-model maintenance, deliberative or reactive planning, and actuat
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-robot-type
hasPart:
  - urn:ngm:class:perception-module
  - urn:ngm:class:world-model
  - urn:ngm:class:planning-module
  - urn:ngm:class:sensor
  - urn:ngm:class:actuation-system
requires:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:state-estimation
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:real-time-computing
enables:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:unmanned-aerial-vehicle
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:autonomous-warehouse-robot
dependsOn:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:control-theory
contrastsWith:
  - urn:ngm:class:teleoperated-robot
  - urn:ngm:class:teleoperated-robot
  - urn:ngm:class:semi-autonomous-system
bridgesTo:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:deep-learning
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:multi-robot-systems
standardizedBy:
  - urn:ngm:class:iso-iec-42010
  - urn:ngm:class:sae-j-3016
  - urn:ngm:class:sae-j-3016
relatedTo:
  - urn:ngm:class:robot-safety
  - urn:ngm:class:functional-safety
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:cyber-physical-systems
---

# Autonomous System

An Autonomous System is a computational or physical entity capable of perceiving its environment through sensors, reasoning over that perception, and executing goal-directed actions without continuous human intervention, forming closed-loop sense-plan-act cycles. Architecturally, autonomous systems combine perception pipelines, world-model maintenance, deliberative or reactive planning, and actuator control, often augmented by machine learning to handle environmental uncertainty. They operate across a spectrum from fully automated (no human input required) to conditionally autonomous (human on the loop), and encompass platforms as diverse as self-driving vehicles, unmanned aerial systems, autonomous underwater vehicles, industrial robotic cells, and intelligent software agents.
