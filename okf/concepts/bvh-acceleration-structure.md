---
okf_version: "0.2"
type: Class
title: BVH Acceleration Structure
resource: urn:ngm:class:bvh-acceleration-structure
domain: metaverse
description: A bounding volume hierarchy (BVH) is a tree-based spatial data structure that recursively partitions scene geometry into nested bounding volumes to accelerate ray-geometry intersection queries. By testing rays against coarse parent volumes before descending into child nodes, a BVH reduces intersection complexity from linear in primitive count to roughly logarithmic. It is the dominant acceleration
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:rendering-technique
relatedTo:
  - urn:ngm:class:ray-tracing
---

# BVH Acceleration Structure

A bounding volume hierarchy (BVH) is a tree-based spatial data structure that recursively partitions scene geometry into nested bounding volumes to accelerate ray-geometry intersection queries. By testing rays against coarse parent volumes before descending into child nodes, a BVH reduces intersection complexity from linear in primitive count to roughly logarithmic. It is the dominant acceleration structure in modern ray tracing because it supports fast rebuilds for dynamic scenes and maps efficiently to GPU hardware.
