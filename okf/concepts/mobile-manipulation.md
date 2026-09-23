---
okf_version: "0.2"
type: Class
title: Mobile Manipulation
resource: urn:ngm:class:mobile-manipulation
domain: robotics
description: Mobile manipulation is the subfield of robotics that integrates a locomoting mobile base with one or more robotic manipulator arms, enabling a robot to traverse unstructured environments and physically interact with objects beyond the reach of a fixed-base system. It requires the coordinated control of both navigation and dexterous manipulation, necessitating joint motion planning, whole-body cont
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:manipulation
hasPart:
  - urn:ngm:class:robotic-arm
  - urn:ngm:class:end-effector
  - urn:ngm:class:mobile-base
requires:
  - urn:ngm:class:manipulator
  - urn:ngm:class:mobile-robot
  - urn:ngm:class:motion-planning
  - urn:ngm:class:perception
enables:
  - urn:ngm:class:warehouse-automation
  - urn:ngm:class:service-robotics
  - urn:ngm:class:surgical-robot
  - urn:ngm:class:domestic-robot
dependsOn:
  - urn:ngm:class:robot-perception
  - urn:ngm:class:task-and-motion-planning
  - urn:ngm:class:force-control
contrastsWith:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:fixed-base-manipulation
bridgesTo:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:whole-body-control
  - urn:ngm:class:joint-configuration
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:humanoid-robot
  - urn:ngm:class:legged-robot
  - urn:ngm:class:robot-learning
  - urn:ngm:class:reinforcement-learning
---

# Mobile Manipulation

Mobile manipulation is the subfield of robotics that integrates a locomoting mobile base with one or more robotic manipulator arms, enabling a robot to traverse unstructured environments and physically interact with objects beyond the reach of a fixed-base system. It requires the coordinated control of both navigation and dexterous manipulation, necessitating joint motion planning, whole-body control, and perception pipelines that resolve the relative pose of targets in the robot's frame. The discipline addresses challenges absent in purely fixed-arm or purely mobile systems, including base-arm kinematic coupling, dynamic stability during manipulation, and long-horizon task planning across navigation and contact phases.
