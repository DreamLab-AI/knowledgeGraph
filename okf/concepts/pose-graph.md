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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Pose Graph

A pose graph is a graph representation used in robotics where nodes are robot poses (positions and orientations) and edges encode relative spatial constraints derived from odometry or sensor measurements. Pose-graph optimisation finds the configuration of poses that best satisfies all constraints, correcting accumulated drift. It is the backbone of modern graph-based SLAM systems.
