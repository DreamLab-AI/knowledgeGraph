---
okf_version: "0.2"
type: Class
title: Frustum Culling
resource: urn:ngm:class:frustum-culling
domain: spatial-computing
description: Frustum culling is a real-time rendering visibility optimisation technique that discards scene objects whose bounding volumes lie entirely outside the camera's view frustum—the truncated pyramid defined by the near and far clipping planes and the four side planes corresponding to the viewport edges. By testing object bounding spheres or axis-aligned bounding boxes against the six frustum planes be
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:rendering-technique
requires:
  - urn:ngm:class:bounding-volume
  - urn:ngm:class:camera-model
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:scene-optimization
  - urn:ngm:class:performance-optimization
  - urn:ngm:class:gpu-driven-rendering
contrastsWith:
  - urn:ngm:class:occlusion-culling
  - urn:ngm:class:portal-culling
bridgesTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:scene-graph
  - urn:ngm:class:bounding-volume-hierarchy
  - urn:ngm:class:octree-spatial-index
  - urn:ngm:class:bounding-volume
relatedTo:
  - urn:ngm:class:level-of-detail
  - urn:ngm:class:scene-management
  - urn:ngm:class:spatial-index
---

# Frustum Culling

Frustum culling is a real-time rendering visibility optimisation technique that discards scene objects whose bounding volumes lie entirely outside the camera's view frustum—the truncated pyramid defined by the near and far clipping planes and the four side planes corresponding to the viewport edges. By testing object bounding spheres or axis-aligned bounding boxes against the six frustum planes before submitting draw calls, the GPU receives only geometry that could potentially contribute to the final image, dramatically reducing vertex processing and rasterisation work. It is a foundational stage in all production scene management pipelines.
