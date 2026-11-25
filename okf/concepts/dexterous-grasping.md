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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Dexterous Grasping

Dexterous grasping is the capability of a robotic hand with multiple independently actuated fingers to acquire and reposition objects using coordinated, in-hand manipulation rather than a simple two-jaw pinch. It requires fine control over contact forces and finger placement, often informed by tactile sensing to detect slip and adjust grip in real time without relying solely on vision. Reinforcement learning has become a dominant approach for training dexterous grasping policies, since the high dimensionality of multi-fingered hand kinematics and contact dynamics is difficult to model and plan for analytically. It is a prerequisite for robots handling irregular, deformable, or fragile objects that a rigid parallel gripper cannot reliably grip.
