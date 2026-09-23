---
okf_version: "0.2"
type: Class
title: Local Planner
resource: urn:ngm:class:local-planner
domain: robotics
description: The component of a robot navigation system that converts a global route into safe, kinematically feasible velocity commands over a short horizon, reacting in real time to obstacles detected by onboard sensors. Operating at control rates of five to twenty hertz over a rolling window of a few metres, a local planner evaluates candidate trajectories against a local costmap and the robot's kinodynamic
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:motion-planning
dependsOn:
  - urn:ngm:class:localisation
implements:
  - urn:ngm:class:obstacle-avoidance
partOf:
  - urn:ngm:class:navigation
  - urn:ngm:class:ros-navigation-stack
relatedTo:
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:probabilistic-roadmap
  - urn:ngm:class:velocity-control
---

# Local Planner

The component of a robot navigation system that converts a global route into safe, kinematically feasible velocity commands over a short horizon, reacting in real time to obstacles detected by onboard sensors. Operating at control rates of five to twenty hertz over a rolling window of a few metres, a local planner evaluates candidate trajectories against a local costmap and the robot's kinodynamic limits, selecting commands that make progress along the global path while avoiding collisions. Classic realisations include the Dynamic Window Approach, Timed Elastic Bands, and sampling-based controllers such as MPPI; in sampling-based roadmap methods the same term names the routine that checks whether two configurations can be connected by a simple collision-free motion.
