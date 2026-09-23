---
okf_version: "0.2"
type: Class
title: rb 0051 trajectory planning
resource: urn:ngm:class:rb-0051-trajectory-planning
domain: robotics
description: Trajectory planning is the process of computing a time-parametrised path — specifying position, velocity, and acceleration profiles — that moves a robot from a start configuration to a goal while satisfying kinematic and dynamic constraints, joint limits, and task requirements. It extends path planning by assigning timing to waypoints, enabling smooth, jerk-limited motions suitable for real-time e
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:motion-planning
requires:
  - urn:ngm:class:rb-0049-motion-planning
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0022-robot-dynamics
uses:
  - urn:ngm:class:rb-0048-pid-controller
  - urn:ngm:class:optimal-control
relatedTo:
  - urn:ngm:class:rb-0044-velocity
  - urn:ngm:class:rb-0045-acceleration
  - urn:ngm:class:rb-0052-collision-avoidance
---

# rb 0051 trajectory planning

Trajectory planning is the process of computing a time-parametrised path — specifying position, velocity, and acceleration profiles — that moves a robot from a start configuration to a goal while satisfying kinematic and dynamic constraints, joint limits, and task requirements. It extends path planning by assigning timing to waypoints, enabling smooth, jerk-limited motions suitable for real-time execution by a robot controller.
