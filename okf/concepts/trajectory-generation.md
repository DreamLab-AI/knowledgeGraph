---
okf_version: "0.2"
type: Class
title: Trajectory Generation
resource: urn:ngm:class:trajectory-generation
domain: robotics
description: The process of computing a time-parameterized path that specifies the position, velocity, and acceleration of a robot's joints or end-effector as functions of time, enabling smooth motion from start to goal configurations while respecting kinematic and dynamic constraints.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:motion-planning
hasPart:
  - urn:ngm:class:acceleration-profile
  - urn:ngm:class:trajectory
requires:
  - urn:ngm:class:goal-configuration
  - urn:ngm:class:path-planning
  - urn:ngm:class:start-configuration
  - urn:ngm:class:path-planning
enables:
  - urn:ngm:class:task-execution
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:human-robot-collaboration
  - urn:ngm:class:robot-motion
dependsOn:
  - urn:ngm:class:optimal-control
  - urn:ngm:class:obstacle-avoidance
contrastsWith:
  - urn:ngm:class:path-planning
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:model-predictive-control
uses:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:spline-interpolation
  - urn:ngm:class:numerical-optimization
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
supports:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:surgical-robotics
partOf:
  - urn:ngm:class:robot-control
---

# Trajectory Generation

The process of computing a time-parameterized path that specifies the position, velocity, and acceleration of a robot's joints or end-effector as functions of time, enabling smooth motion from start to goal configurations while respecting kinematic and dynamic constraints.
