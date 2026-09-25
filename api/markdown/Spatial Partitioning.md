Spatial partitioning is the technique of subdividing a space into non-overlapping or hierarchically nested regions so that objects can be organised by location and queried efficiently. By grouping nearby objects and pruning regions that cannot contain a query result, it reduces the cost of operations such as collision detection, ray casting, nearest-neighbour search and visibility culling from quadratic toward logarithmic or linear scaling. Common structures include grids, quadtrees, octrees, k-d trees, binary space partitioning trees and bounding-volume hierarchies, each trading construction cost against query performance for particular workloads.

### Overview

- Spatial partitioning organises geometric objects by location so that proximity queries can prune large portions of space.
- Hierarchical structures recursively subdivide space, while uniform grids divide it into fixed cells.
- The choice of structure trades construction and update cost against query speed for a given workload and object distribution.

### Mechanisms

- Hierarchical subdivision: quadtrees, octrees and k-d trees recursively split regions to localise objects.
- Bounding-volume hierarchies: nested volumes group objects for efficient broad-phase rejection.
- Uniform and adaptive grids: cell-based indexing offers constant-time bucketing for evenly distributed objects.
- Query pruning: regions that cannot intersect a query are skipped, cutting average-case complexity.

### Applications

- Broad-phase collision detection in physics engines.
- Acceleration structures for ray tracing and rendering.
- View-frustum and occlusion culling in real-time graphics.
- Nearest-neighbour and range queries over spatial data.

### Provenance

