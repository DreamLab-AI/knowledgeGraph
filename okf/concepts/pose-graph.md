---
okf_version: "0.2"
type: Class
title: Pose Graph
resource: urn:ngm:class:pose-graph
domain: robotics
description: A pose graph is a graph representation used in robotics where nodes are robot poses (positions and orientations) and edges encode relative spatial constraints derived from odometry or sensor measurements. Pose-graph optimisation finds the configuration of poses that best satisfies all constraints, correcting accumulated drift. It is the backbone of modern graph-based SLAM systems.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:topological-map
---

# Pose Graph

A pose graph is a graph representation used in robotics where nodes are robot poses (positions and orientations) and edges encode relative spatial constraints derived from odometry or sensor measurements. Pose-graph optimisation finds the configuration of poses that best satisfies all constraints, correcting accumulated drift. It is the backbone of modern graph-based SLAM systems.
