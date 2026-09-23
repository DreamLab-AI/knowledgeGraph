---
okf_version: "0.2"
type: Class
title: Spatial Partitioning
resource: urn:ngm:class:spatial-partitioning
domain: spatial-computing
description: Spatial partitioning is the technique of subdividing a space into non-overlapping or hierarchically nested regions so that objects can be organised by location and queried efficiently. By grouping nearby objects and pruning regions that cannot contain a query result, it reduces the cost of operations such as collision detection, ray casting, nearest-neighbour search and visibility culling from qua
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:spatial-data-structure
hasPart:
  - urn:ngm:class:bounding-volume-hierarchy
  - urn:ngm:class:bounding-volume
requires:
  - urn:ngm:class:data-structure
  - urn:ngm:class:computational-geometry
enables:
  - urn:ngm:class:collision-detection
  - urn:ngm:class:frustum-culling
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:ray-tracing
implements:
  - urn:ngm:class:spatial-index
supports:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:scene-graph
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:real-time-rendering
partOf:
  - urn:ngm:class:spatial-data-structure
relatedTo:
  - urn:ngm:class:game-engine
  - urn:ngm:class:simulation
---

# Spatial Partitioning

Spatial partitioning is the technique of subdividing a space into non-overlapping or hierarchically nested regions so that objects can be organised by location and queried efficiently. By grouping nearby objects and pruning regions that cannot contain a query result, it reduces the cost of operations such as collision detection, ray casting, nearest-neighbour search and visibility culling from quadratic toward logarithmic or linear scaling. Common structures include grids, quadtrees, octrees, k-d trees, binary space partitioning trees and bounding-volume hierarchies, each trading construction cost against query performance for particular workloads.
