---
okf_version: "0.2"
type: Class
title: Voxel Grid
resource: urn:ngm:class:voxel-grid
domain: spatial-computing
description: A voxel grid is a regular three-dimensional lattice that partitions space into uniformly sized cubic cells, each cell (voxel) storing occupancy, colour, density, or other attributes of the volume it covers. It provides a structured spatial representation used to discretise point clouds, build occupancy maps, and accelerate spatial queries in robotics and computer graphics. By contrast with continu
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:point-cloud
hasPart:
  - urn:ngm:class:perception
requires:
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:mapping
dependsOn:
  - urn:ngm:class:perception
implements:
  - urn:ngm:class:mapping
contrastsWith:
  - urn:ngm:class:mapping
bridgesTo:
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:lidar
supports:
  - urn:ngm:class:slam
relatedTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:lidar
  - urn:ngm:class:slam
  - urn:ngm:class:perception
  - urn:ngm:class:sensor
---

# Voxel Grid

A voxel grid is a regular three-dimensional lattice that partitions space into uniformly sized cubic cells, each cell (voxel) storing occupancy, colour, density, or other attributes of the volume it covers. It provides a structured spatial representation used to discretise point clouds, build occupancy maps, and accelerate spatial queries in robotics and computer graphics. By contrast with continuous point sets, the fixed cell structure trades fine resolution for predictable indexing and constant-time neighbourhood access.
