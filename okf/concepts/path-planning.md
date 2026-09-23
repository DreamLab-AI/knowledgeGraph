---
okf_version: "0.2"
type: Class
title: Path Planning
resource: urn:ngm:class:path-planning
domain: robotics
description: The computational process of finding a feasible path for a robot or autonomous agent to move from a start configuration to a goal configuration while avoiding obstacles and satisfying kinematic and dynamic constraints. It determines a sequence of configurations connecting start to goal in the robot's configuration space, and forms the foundational planning layer for navigation, manipulation, and a
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:motion-planning
requires:
  - urn:ngm:class:environment-model
  - urn:ngm:class:goal-configuration
  - urn:ngm:class:start-configuration
  - urn:ngm:class:mapping
  - urn:ngm:class:rb-1013-localization
  - urn:ngm:class:configuration-space
enables:
  - urn:ngm:class:rb-1007-trajectory-generation
  - urn:ngm:class:navigation
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:autonomous-vehicle
dependsOn:
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:graph-search
  - urn:ngm:class:optimal-control
contrastsWith:
  - urn:ngm:class:obstacles
bridgesTo:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:probabilistic-roadmap
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:dijkstra-algorithm
supports:
  - urn:ngm:class:mobile-robot
  - urn:ngm:class:drone-navigation
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:multi-robot-coordination
---

# Path Planning

The computational process of finding a feasible path for a robot or autonomous agent to move from a start configuration to a goal configuration while avoiding obstacles and satisfying kinematic and dynamic constraints. It determines a sequence of configurations connecting start to goal in the robot's configuration space, and forms the foundational planning layer for navigation, manipulation, and autonomous systems.
