---
okf_version: "0.2"
type: Class
title: RB-1007-trajectory-generation
resource: urn:ngm:class:rb-1007-trajectory-generation
domain: robotics
description: "RB-1007 Trajectory Generation is a robotics knowledge-base entry cataloguing the algorithms, mathematical representations, and computational methods used to synthesise smooth, dynamically feasible motion trajectories for robotic systems, specifying how a robot must move through configuration space or task space from an initial to a goal state while satisfying kinematic, dynamic, and environmental "
maturity: established
quality: 0.8
requires:
  - urn:ngm:class:kinematics
  - urn:ngm:class:inverse-kinematics
enables:
  - urn:ngm:class:autonomous-navigation
supports:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:motion-control
relatedTo:
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:trajectory-control
  - urn:ngm:class:rb-0051-trajectory-planning
---

# RB-1007-trajectory-generation

RB-1007 Trajectory Generation is a robotics knowledge-base entry cataloguing the algorithms, mathematical representations, and computational methods used to synthesise smooth, dynamically feasible motion trajectories for robotic systems, specifying how a robot must move through configuration space or task space from an initial to a goal state while satisfying kinematic, dynamic, and environmental constraints. It covers polynomial spline interpolation, time-optimal trajectory planning, jerk-limited profiles, and learned trajectory generation approaches, forming the bridge between high-level task planning and low-level joint control execution.
