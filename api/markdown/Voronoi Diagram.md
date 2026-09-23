
A Voronoi diagram is a partition of a plane (or higher-dimensional space) into regions based on proximity to a set of seed points, where each region contains all locations closer to its seed than to any other. It is a foundational structure in computational geometry, dual to the Delaunay triangulation, and supports nearest-neighbour queries, spatial interpolation and procedural generation. Voronoi tessellations appear across spatial analysis, graphics and natural sciences.

- ### Overview
  - Each Voronoi cell is the set of all points nearer to its generating site than to any other site.
  - The diagram is the geometric dual of the Delaunay triangulation: connecting sites whose cells share an edge yields the triangulation.
  - Construction algorithms include Fortune's sweep line (O(n log n)) and incremental insertion.
  - Generalisations include weighted, higher-order and geodesic Voronoi diagrams.
- ### Key aspects
  - Cells, edges (equidistant boundaries) and vertices (equidistant to three or more sites).
  - Duality with Delaunay triangulation enabling mutual construction.
  - Sweep-line and divide-and-conquer construction algorithms.
  - Extensions to weighted (power) and Lloyd-relaxed centroidal diagrams.
  - Nearest-site query answering via point location in the cell structure.
- ### Applications
  - Nearest-neighbour and facility-location queries in geographic information systems.
  - Procedural terrain, biome and texture generation in graphics and games.
  - Spatial interpolation and natural-neighbour resampling in the sciences.
  - Mesh generation and pathfinding region decomposition.
- ### Provenance

