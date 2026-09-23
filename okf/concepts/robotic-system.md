---
okf_version: "0.2"
type: Class
title: Robotic System
resource: urn:ngm:class:robotic-system
domain: robotics
description: An integrated assembly of mechanical, electronic, and computational subsystems — including actuators, sensors, a control architecture, and software — that perceives its environment and executes physical tasks autonomously or under remote human direction, spanning industrial, collaborative, and telepresence applications.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:motion-control
  - urn:ngm:class:end-effector
  - urn:ngm:class:robot-controller
  - urn:ngm:class:power-supply
requires:
  - urn:ngm:class:ros
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:simultaneous-localisation-and-mapping
enables:
  - urn:ngm:class:robotic-telepresence
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:autonomous-navigation
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:wireless-communication
contrastsWith:
  - urn:ngm:class:virtual-agent
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:extended-reality
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:path-planning
  - urn:ngm:class:kinematics
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:collaborative-systems-modality-robotics
relatedTo:
  - urn:ngm:class:artificial-intelligence
---

# Robotic System

An integrated assembly of mechanical, electronic, and computational subsystems — including actuators, sensors, a control architecture, and software — that perceives its environment and executes physical tasks autonomously or under remote human direction, spanning industrial, collaborative, and telepresence applications.
