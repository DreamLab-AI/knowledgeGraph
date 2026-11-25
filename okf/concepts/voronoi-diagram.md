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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Voronoi Diagram

A Voronoi diagram is a partition of a plane (or higher-dimensional space) into regions based on proximity to a set of seed points, where each region contains all locations closer to its seed than to any other. It is a foundational structure in computational geometry, dual to the Delaunay triangulation, and supports nearest-neighbour queries, spatial interpolation and procedural generation. Voronoi tessellations appear across spatial analysis, graphics and natural sciences.
