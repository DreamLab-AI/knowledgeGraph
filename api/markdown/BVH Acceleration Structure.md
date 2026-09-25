A bounding volume hierarchy (BVH) is a tree-based spatial data structure that recursively partitions scene geometry into nested bounding volumes to accelerate ray-geometry intersection queries. By testing rays against coarse parent volumes before descending into child nodes, a BVH reduces intersection complexity from linear in primitive count to roughly logarithmic. It is the dominant acceleration structure in modern ray tracing because it supports fast rebuilds for dynamic scenes and maps efficiently to GPU hardware.

### Content

- BVH construction trades build time against traversal quality, with surface-area-heuristic (SAH) builders producing high-quality trees for static scenes and faster linear BVH (LBVH) builders favouring dynamic content. Hardware ray-tracing units in contemporary GPUs include dedicated BVH traversal logic, making the structure central to real-time path tracing.

