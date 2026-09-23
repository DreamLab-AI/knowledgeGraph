---
okf_version: "0.2"
type: Class
title: Probabilistic Roadmap
resource: urn:ngm:class:probabilistic-roadmap
domain: robotics
description: A probabilistic roadmap (PRM) is a sampling-based motion-planning algorithm that constructs a graph representation of the free configuration space of a robot by randomly sampling collision-free configurations and connecting nearby configurations with local path planners. In a preprocessing phase, many random configurations are sampled and validated against the robot's collision model; valid config
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:configuration-sample
  - urn:ngm:class:local-planner
  - urn:ngm:class:roadmap-graph
enables:
  - urn:ngm:class:robot-arm-planning
  - urn:ngm:class:multi-query-planning
  - urn:ngm:class:autonomous-navigation
dependsOn:
  - urn:ngm:class:random-sampling
  - urn:ngm:class:obstacle-model
contrastsWith:
  - urn:ngm:class:grid-based-planning
  - urn:ngm:class:potential-field-planning
uses:
  - urn:ngm:class:sampling-based-planning
  - urn:ngm:class:configuration-space
  - urn:ngm:class:collision-detection
  - urn:ngm:class:graph-search
supports:
  - urn:ngm:class:robot-manipulation
  - urn:ngm:class:high-dimensional-planning
relatedTo:
  - urn:ngm:class:rapidly-exploring-random-tree
  - urn:ngm:class:motion-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:robot-kinematics
---

# Probabilistic Roadmap

A probabilistic roadmap (PRM) is a sampling-based motion-planning algorithm that constructs a graph representation of the free configuration space of a robot by randomly sampling collision-free configurations and connecting nearby configurations with local path planners. In a preprocessing phase, many random configurations are sampled and validated against the robot's collision model; valid configurations become nodes and successful local connections become edges. At query time, start and goal configurations are connected to the roadmap and a graph-search algorithm finds a path. PRMs are effective in high-dimensional configuration spaces where deterministic grid-based planners are computationally infeasible.
