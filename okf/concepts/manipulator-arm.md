---
okf_version: "0.2"
type: Class
title: Manipulator Arm
resource: urn:ngm:class:manipulator-arm
domain: spatial-computing
description: A multi-jointed mechanical or virtual robotic arm integrated with avatars or immersive systems to enable precise object manipulation and physical interaction within virtual or mixed reality environments through control systems, haptic feedback, and inverse kinematics algorithms.
maturity: emerging
quality: 0.4
is-a:
  - urn:ngm:class:sc-interaction
  - urn:ngm:class:avatar-wearable
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:end-effector
requires:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:motion-control
enables:
  - urn:ngm:class:collision-avoidance
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:reinforcement-learning
---

# Manipulator Arm

A multi-jointed mechanical or virtual robotic arm integrated with avatars or immersive systems to enable precise object manipulation and physical interaction within virtual or mixed reality environments through control systems, haptic feedback, and inverse kinematics algorithms.
