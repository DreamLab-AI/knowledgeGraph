---
okf_version: "0.2"
type: Class
title: Robotic Arm
resource: urn:ngm:class:robotic-arm
domain: robotics
description: A robotic arm is a programmable mechanical manipulator, typically composed of rigid links connected by actuated joints, that positions and orients an end-effector within a workspace. Its degrees of freedom allow it to reach and manipulate objects under the control of motion-planning and kinematics algorithms. Robotic arms range from industrial units performing repetitive high-precision tasks to co
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:manipulator
hasPart:
  - urn:ngm:class:end-effector
  - urn:ngm:class:actuator
  - urn:ngm:class:servo-motor
requires:
  - urn:ngm:class:degrees-of-freedom
enables:
  - urn:ngm:class:robotic-grasping
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:grasping
dependsOn:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:control-system
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:forward-kinematics
supports:
  - urn:ngm:class:manufacturing-automation
partOf:
  - urn:ngm:class:industrial-robot
relatedTo:
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:robotics
---

# Robotic Arm

A robotic arm is a programmable mechanical manipulator, typically composed of rigid links connected by actuated joints, that positions and orients an end-effector within a workspace. Its degrees of freedom allow it to reach and manipulate objects under the control of motion-planning and kinematics algorithms. Robotic arms range from industrial units performing repetitive high-precision tasks to collaborative arms designed to work safely alongside people. They are a foundational platform across manufacturing, surgery, logistics and research.
