---
okf_version: "0.2"
type: Class
title: Trajectory Control
resource: urn:ngm:class:trajectory-control
domain: robotics
description: Trajectory Control is a robotics control methodology that tracks desired time-varying position, velocity, and acceleration profiles along planned paths. It coordinates joint-space and task-space motion to ensure smooth, precise end-effector movement while respecting dynamic and kinematic constraints.
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:motion-control
hasPart:
  - urn:ngm:class:rb-1007-trajectory-generation
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:velocity-control
  - urn:ngm:class:position-control
  - urn:ngm:class:acceleration-profile
requires:
  - urn:ngm:class:kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:feedback-control
  - urn:ngm:class:state-estimation
enables:
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:human-robot-interaction
implements:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:model-predictive-control
contrastsWith:
  - urn:ngm:class:position-control
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:spatial-computing
relatedTo:
  - urn:ngm:class:path-planning
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robot-control
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:optimal-control
  - urn:ngm:class:task-space-control
---

# Trajectory Control

Trajectory Control is a robotics control methodology that tracks desired time-varying position, velocity, and acceleration profiles along planned paths. It coordinates joint-space and task-space motion to ensure smooth, precise end-effector movement while respecting dynamic and kinematic constraints.
