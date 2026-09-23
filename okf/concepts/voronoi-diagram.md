---
okf_version: "0.2"
type: Class
title: Voronoi Diagram
resource: urn:ngm:class:voronoi-diagram
domain: spatial-computing
description: A Voronoi diagram is a partition of a plane (or higher-dimensional space) into regions based on proximity to a set of seed points, where each region contains all locations closer to its seed than to any other. It is a foundational structure in computational geometry, dual to the Delaunay triangulation, and supports nearest-neighbour queries, spatial interpolation and procedural generation. Voronoi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:computational-geometry
hasPart:
  - urn:ngm:class:tessellation
  - urn:ngm:class:nearest-neighbour
enables:
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:procedural-generation
  - urn:ngm:class:spatial-analysis
  - urn:ngm:class:nearest-neighbor-search
implements:
  - urn:ngm:class:spatial-partitioning
contrastsWith:
  - urn:ngm:class:delaunay-triangulation
uses:
  - urn:ngm:class:geometry
supports:
  - urn:ngm:class:pathfinding
  - urn:ngm:class:geographic-information-system
partOf:
  - urn:ngm:class:computational-geometry
relatedTo:
  - urn:ngm:class:spatial-data-structure
  - urn:ngm:class:spatial-index
---

# Voronoi Diagram

A Voronoi diagram is a partition of a plane (or higher-dimensional space) into regions based on proximity to a set of seed points, where each region contains all locations closer to its seed than to any other. It is a foundational structure in computational geometry, dual to the Delaunay triangulation, and supports nearest-neighbour queries, spatial interpolation and procedural generation. Voronoi tessellations appear across spatial analysis, graphics and natural sciences.
