---
okf_version: "0.2"
type: Class
title: Robot
resource: urn:ngm:class:robot
domain: robotics
description: A robot is an actuated mechanism, programmable in two or more axes with a degree of autonomy, that moves within its environment to perform intended tasks without direct human intervention at the moment of task execution. Robots integrate mechanical structure, actuation, sensing, and control software to perceive their environment, reason about goals, and execute physical or digital actions. The con
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:robo-robot-type
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:sensor
  - urn:ngm:class:robot-controller
  - urn:ngm:class:end-effector
  - urn:ngm:class:ros
requires:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:kinematics
  - urn:ngm:class:real-time-control
enables:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:industrial-automation
dependsOn:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:power-systems
  - urn:ngm:class:embedded-system
  - urn:ngm:class:power-systems
contrastsWith:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:automated-machine
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:digital-twin
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:computer-vision
  - urn:ngm:class:simultaneous-localisation-and-mapping
standardizedBy:
  - urn:ngm:class:iso-8373
  - urn:ngm:class:iec-62061
partOf:
  - urn:ngm:class:robotic-system
  - urn:ngm:class:cyber-physical-systems
  - urn:ngm:class:cyber-physical-systems
relatedTo:
  - urn:ngm:class:drone
  - urn:ngm:class:humanoid-robot
  - urn:ngm:class:cobotic-system
---

# Robot

A robot is an actuated mechanism, programmable in two or more axes with a degree of autonomy, that moves within its environment to perform intended tasks without direct human intervention at the moment of task execution. Robots integrate mechanical structure, actuation, sensing, and control software to perceive their environment, reason about goals, and execute physical or digital actions. The concept spans a wide spectrum from fixed industrial manipulators to mobile autonomous agents, collaborative cobots, and software robots (robotic process automation). Standardised by ISO 8373:2021, the definition distinguishes robots from simple automated machines by requiring reprogrammability and environmental interaction.
