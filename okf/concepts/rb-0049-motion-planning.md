---
okf_version: "0.2"
type: Class
title: rb 0049 motion planning
resource: urn:ngm:class:rb-0049-motion-planning
domain: robotics
description: Motion planning is the computational process of determining a sequence of valid robot configurations or control inputs that moves a robot from an initial state to a goal state while satisfying constraints such as obstacle avoidance, joint limits, and dynamic feasibility. It bridges high-level task specification and low-level actuation, encompassing path planning, trajectory optimisation, and task-
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:robotics
hasPart:
  - urn:ngm:class:rb-0051-trajectory-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:rb-0052-collision-avoidance
enables:
  - urn:ngm:class:rb-0103-collaborative-operation
uses:
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:rb-0021-robot-kinematics
relatedTo:
  - urn:ngm:class:task-planning
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:autonomous-navigation
---

# rb 0049 motion planning

Motion planning is the computational process of determining a sequence of valid robot configurations or control inputs that moves a robot from an initial state to a goal state while satisfying constraints such as obstacle avoidance, joint limits, and dynamic feasibility. It bridges high-level task specification and low-level actuation, encompassing path planning, trajectory optimisation, and task-and-motion planning (TAMP). Sampling-based methods (RRT, PRM) and optimisation-based approaches are the dominant paradigms, increasingly augmented by learning-based techniques for dynamic and uncertain environments.
