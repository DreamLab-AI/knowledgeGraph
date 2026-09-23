---
okf_version: "0.2"
type: Class
title: Nav2
resource: urn:ngm:class:nav2
domain: robotics
description: Nav2 (Navigation2) is the production-ready autonomous navigation framework for ROS 2, providing a composable, lifecycle-managed stack of planners, controllers, costmap layers, and behaviour-tree-based task orchestration. It enables mobile robots to safely compute and execute collision-free paths in structured and semi-structured environments.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:navigation-stack
requires:
  - urn:ngm:class:ros-2
  - urn:ngm:class:dds-middleware
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:path-planning
  - urn:ngm:class:obstacle-avoidance
dependsOn:
  - urn:ngm:class:slam
  - urn:ngm:class:localisation
contrastsWith:
  - urn:ngm:class:move-base
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:costmap
  - urn:ngm:class:lidar
  - urn:ngm:class:occupancy-grid
supports:
  - urn:ngm:class:autonomous-mobile-robots
  - urn:ngm:class:warehouse-robotics
  - urn:ngm:class:service-robotics
relatedTo:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:autonomous-mobile-robots
  - urn:ngm:class:ros
---

# Nav2

Nav2 (Navigation2) is the production-ready autonomous navigation framework for ROS 2, providing a composable, lifecycle-managed stack of planners, controllers, costmap layers, and behaviour-tree-based task orchestration. It enables mobile robots to safely compute and execute collision-free paths in structured and semi-structured environments.
