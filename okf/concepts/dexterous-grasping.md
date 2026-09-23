---
okf_version: "0.2"
type: Class
title: Dexterous Grasping
resource: urn:ngm:class:dexterous-grasping
domain: robotics
description: Dexterous grasping is the capability of a robotic hand with multiple independently actuated fingers to acquire and reposition objects using coordinated, in-hand manipulation rather than a simple two-jaw pinch. It requires fine control over contact forces and finger placement, often informed by tactile sensing to detect slip and adjust grip in real time without relying solely on vision. Reinforceme
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robotic-grasping
---

# Dexterous Grasping

Dexterous grasping is the capability of a robotic hand with multiple independently actuated fingers to acquire and reposition objects using coordinated, in-hand manipulation rather than a simple two-jaw pinch. It requires fine control over contact forces and finger placement, often informed by tactile sensing to detect slip and adjust grip in real time without relying solely on vision. Reinforcement learning has become a dominant approach for training dexterous grasping policies, since the high dimensionality of multi-fingered hand kinematics and contact dynamics is difficult to model and plan for analytically. It is a prerequisite for robots handling irregular, deformable, or fragile objects that a rigid parallel gripper cannot reliably grip.
