---
okf_version: "0.2"
type: Class
title: Environment Model
resource: urn:ngm:class:environment-model
domain: robotics
description: An environment model is an internal representation maintained by a robot, autonomous agent, or AI system that encodes the geometry, semantics, dynamics, and state of its surrounding physical or virtual world, enabling planning, navigation, and interaction without direct real-time sensor observation of every aspect of the scene. It may range from metric maps and occupancy grids to rich semantic sce
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:scene-graph
hasPart:
  - urn:ngm:class:semantic-map
  - urn:ngm:class:topological-map
requires:
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:lidar
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:pose-estimation
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:task-planning
  - urn:ngm:class:collision-avoidance
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:state-estimation
contrastsWith:
  - urn:ngm:class:reactive-control
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:embodied-ai
uses:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:point-cloud
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:voxel-grid
relatedTo:
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:lidar
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:embodied-ai
  - urn:ngm:class:world-model
---

# Environment Model

An environment model is an internal representation maintained by a robot, autonomous agent, or AI system that encodes the geometry, semantics, dynamics, and state of its surrounding physical or virtual world, enabling planning, navigation, and interaction without direct real-time sensor observation of every aspect of the scene. It may range from metric maps and occupancy grids to rich semantic scene graphs and learned neural radiance fields.
