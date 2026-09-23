---
okf_version: "0.2"
type: Class
title: RRT Algorithm
resource: urn:ngm:class:rrt-algorithm
domain: robotics
description: A sampling-based path planning algorithm that incrementally builds a tree of collision-free configurations by randomly sampling the configuration space and connecting samples to the nearest existing tree node. It efficiently explores high-dimensional spaces and is probabilistically complete.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:sampling-based-method
  - urn:ngm:class:rrt-star
  - urn:ngm:class:rrt-connect
  - urn:ngm:class:informed-rrt-star
requires:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:configuration-space
  - urn:ngm:class:collision-detection
contrastsWith:
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:a-star-algorithm
uses:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:nearest-neighbor-search
---

# RRT Algorithm

A sampling-based path planning algorithm that incrementally builds a tree of collision-free configurations by randomly sampling the configuration space and connecting samples to the nearest existing tree node. It efficiently explores high-dimensional spaces and is probabilistically complete.
