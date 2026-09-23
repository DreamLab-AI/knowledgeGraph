---
okf_version: "0.2"
type: Class
title: Occupancy Grid
resource: urn:ngm:class:occupancy-grid
domain: robotics
description: An occupancy grid is a probabilistic spatial representation of a robot's environment as a discretised lattice of cells, each storing a probability or log-odds value indicating the likelihood that the corresponding region of space is occupied by an obstacle. It provides a metric map suitable for collision avoidance, path planning, and SLAM by fusing noisy sensor measurements through Bayesian update
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:environment-mapping
requires:
  - urn:ngm:class:rb-0075-range-finder
  - urn:ngm:class:pose-estimation
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:path-planning
contrastsWith:
  - urn:ngm:class:topological-map
  - urn:ngm:class:feature-map
uses:
  - urn:ngm:class:lidar-sensor
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:bayesian-inference
partOf:
  - urn:ngm:class:metric-map
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:point-cloud
  - urn:ngm:class:costmap
  - urn:ngm:class:voxel-grid
---

# Occupancy Grid

An occupancy grid is a probabilistic spatial representation of a robot's environment as a discretised lattice of cells, each storing a probability or log-odds value indicating the likelihood that the corresponding region of space is occupied by an obstacle. It provides a metric map suitable for collision avoidance, path planning, and SLAM by fusing noisy sensor measurements through Bayesian updates.
