---
okf_version: "0.2"
type: Class
title: Robot Manipulation
resource: urn:ngm:class:robot-manipulation
domain: robotics
description: Robot manipulation is the sub-field of robotics concerned with the planning and execution of purposeful physical interactions between robotic systems and objects in the world, encompassing grasping, assembly, in-hand manipulation, and tool use. It integrates kinematics, dynamics, perception, and motion planning to move objects from one configuration to another while adapting to uncertainty in obje
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:manipulation
hasPart:
  - urn:ngm:class:grasp-planning
  - urn:ngm:class:motion-planning
  - urn:ngm:class:end-effector
  - urn:ngm:class:in-hand-manipulation
requires:
  - urn:ngm:class:robot-perception
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:contact-mechanics
enables:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:robot-learning
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:warehouse-automation
dependsOn:
  - urn:ngm:class:robotic-arm
  - urn:ngm:class:depth-sensing
contrastsWith:
  - urn:ngm:class:robot-locomotion
bridgesTo:
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:reinforcement-learning
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:force-control
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:impedance-control
relatedTo:
  - urn:ngm:class:object-manipulation
  - urn:ngm:class:industrial-manipulation
  - urn:ngm:class:teleoperation
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:bimanual-manipulation
---

# Robot Manipulation

Robot manipulation is the sub-field of robotics concerned with the planning and execution of purposeful physical interactions between robotic systems and objects in the world, encompassing grasping, assembly, in-hand manipulation, and tool use. It integrates kinematics, dynamics, perception, and motion planning to move objects from one configuration to another while adapting to uncertainty in object shape, pose, surface properties, and environmental dynamics. Robust manipulation requires coordinating end-effectors, force-torque sensing, and real-time control loops to achieve reliable contact-rich behaviour. The field bridges classical planning and modern machine learning, increasingly leveraging deep visuomotor policies and foundation models trained on large-scale demonstration data.
