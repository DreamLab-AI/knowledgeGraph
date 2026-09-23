---
okf_version: "0.2"
type: Class
title: Costmap
resource: urn:ngm:class:costmap
domain: robotics
description: A costmap is a grid-based spatial data structure used in robot navigation that assigns a traversal cost to each cell of the environment, encoding obstacles, inflation zones, and free space. Local and global costmaps fuse sensor data and static maps so that planners can compute collision-free, low-cost paths. It is a core component of navigation stacks such as Nav2, where it underpins both global p
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:nav2
  - urn:ngm:class:navigation
---

# Costmap

A costmap is a grid-based spatial data structure used in robot navigation that assigns a traversal cost to each cell of the environment, encoding obstacles, inflation zones, and free space. Local and global costmaps fuse sensor data and static maps so that planners can compute collision-free, low-cost paths. It is a core component of navigation stacks such as Nav2, where it underpins both global path planning and local trajectory control.
