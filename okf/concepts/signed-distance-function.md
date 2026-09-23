---
okf_version: "0.2"
type: Class
title: Signed Distance Function
resource: urn:ngm:class:signed-distance-function
domain: spatial-computing
description: A signed distance function (SDF) is a scalar field that returns, for any point in space, the distance to the nearest surface of a shape, with the sign indicating whether the point is inside (negative) or outside (positive). The surface itself is the zero level set where the function equals zero. SDFs provide a compact implicit representation of geometry that supports efficient ray marching, smooth
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:computer-graphics
supports:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:neural-rendering
relatedTo:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:gpu
---

# Signed Distance Function

A signed distance function (SDF) is a scalar field that returns, for any point in space, the distance to the nearest surface of a shape, with the sign indicating whether the point is inside (negative) or outside (positive). The surface itself is the zero level set where the function equals zero. SDFs provide a compact implicit representation of geometry that supports efficient ray marching, smooth shape blending, and analytic normals, and they underpin procedural rendering, collision queries, and learned 3D reconstruction in neural networks.
