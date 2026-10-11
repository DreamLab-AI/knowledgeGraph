---
okf_version: "0.2"
type: Class
title: Trajectory Generation
resource: urn:ngm:class:trajectory-generation
domain: robotics
description: "RB-1007 Trajectory Generation is a robotics knowledge-base entry cataloguing the algorithms, mathematical representations, and computational methods used to synthesise smooth, dynamically feasible motion trajectories for robotic systems, specifying how a robot must move through configuration space or task space from an initial to a goal state while satisfying kinematic, dynamic, and environmental "
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
  - urn:ngm:class:kinematics
  - urn:ngm:class:inverse-kinematics
enables:
  - urn:ngm:class:task-execution
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:human-robot-collaboration
  - urn:ngm:class:robot-motion
  - urn:ngm:class:autonomous-navigation
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
relatedTo:
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:trajectory-control
  - urn:ngm:class:rb-0051-trajectory-planning
---

# Trajectory Generation

RB-1007 Trajectory Generation is a robotics knowledge-base entry cataloguing the algorithms, mathematical representations, and computational methods used to synthesise smooth, dynamically feasible motion trajectories for robotic systems, specifying how a robot must move through configuration space or task space from an initial to a goal state while satisfying kinematic, dynamic, and environmental constraints. It covers polynomial spline interpolation, time-optimal trajectory planning, jerk-limited profiles, and learned trajectory generation approaches, forming the bridge between high-level task planning and low-level joint control execution.
