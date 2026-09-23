---
okf_version: "0.2"
type: Class
title: Task and Motion Planning
resource: urn:ngm:class:task-and-motion-planning
domain: robotics
description: Task and motion planning is an approach in robotics that combines high-level symbolic task planning with low-level geometric motion planning to produce fully executable robot plans. It jointly addresses what actions to perform and how to physically execute each movement, interleaving logical goal satisfaction with collision-free trajectory synthesis.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:motion-planning
hasPart:
  - urn:ngm:class:task-planning
  - urn:ngm:class:trajectory-planning
requires:
  - urn:ngm:class:planning
  - urn:ngm:class:collision-detection
  - urn:ngm:class:kinematics
  - urn:ngm:class:constraint-satisfaction
enables:
  - urn:ngm:class:robot-control
  - urn:ngm:class:autonomous-manipulation
  - urn:ngm:class:task-execution
dependsOn:
  - urn:ngm:class:robot-perception
  - urn:ngm:class:scene-representation
contrastsWith:
  - urn:ngm:class:reactive-planning
  - urn:ngm:class:classical-planning
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:pathfinding-algorithm
uses:
  - urn:ngm:class:pddl
  - urn:ngm:class:probabilistic-roadmap
  - urn:ngm:class:rapidly-exploring-random-tree
  - urn:ngm:class:pathfinding-algorithm
relatedTo:
  - urn:ngm:class:reinforcement-learning
---

# Task and Motion Planning

Task and motion planning is an approach in robotics that combines high-level symbolic task planning with low-level geometric motion planning to produce fully executable robot plans. It jointly addresses what actions to perform and how to physically execute each movement, interleaving logical goal satisfaction with collision-free trajectory synthesis.
