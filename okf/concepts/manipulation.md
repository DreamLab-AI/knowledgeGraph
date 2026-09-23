---
okf_version: "0.2"
type: Class
title: Manipulation
resource: urn:ngm:class:manipulation
domain: robotics
description: Manipulation is the capability of robotic or autonomous systems to physically interact with, grasp, reposition, and transform objects in an environment through controlled mechanical action. It integrates perception, kinematics, dynamics, and planning to enable precise, dexterous, and adaptive contact-rich tasks. Robotic manipulation encompasses the full pipeline from object detection and pose esti
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:robotics-systems
hasPart:
  - urn:ngm:class:grasp-planning
  - urn:ngm:class:end-effector
  - urn:ngm:class:force-control
  - urn:ngm:class:rb-1007-trajectory-generation
requires:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:collision-detection
  - urn:ngm:class:pose-estimation
enables:
  - urn:ngm:class:assembly-automation
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:teleoperation
dependsOn:
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:sensor-fusion
contrastsWith:
  - urn:ngm:class:locomotion
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:impedance-control
  - urn:ngm:class:tactile-sensing
  - urn:ngm:class:point-cloud
relatedTo:
  - urn:ngm:class:haptics
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:task-and-motion-planning
---

# Manipulation

Manipulation is the capability of robotic or autonomous systems to physically interact with, grasp, reposition, and transform objects in an environment through controlled mechanical action. It integrates perception, kinematics, dynamics, and planning to enable precise, dexterous, and adaptive contact-rich tasks. Robotic manipulation encompasses the full pipeline from object detection and pose estimation through grasp planning, motion execution, and force-regulated contact control. As a foundational capability in intelligent systems, it bridges physical embodiment with higher-level task reasoning and is central to industrial automation, service robotics, and human-robot collaboration.
