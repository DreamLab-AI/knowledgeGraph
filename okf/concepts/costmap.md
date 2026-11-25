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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Costmap

A costmap is a grid-based spatial data structure used in robot navigation that assigns a traversal cost to each cell of the environment, encoding obstacles, inflation zones, and free space. Local and global costmaps fuse sensor data and static maps so that planners can compute collision-free, low-cost paths. It is a core component of navigation stacks such as Nav2, where it underpins both global path planning and local trajectory control.
