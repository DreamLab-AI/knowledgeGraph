---
okf_version: "0.2"
type: Class
title: Interpolation
resource: urn:ngm:class:interpolation
domain: spatial-computing
description: Interpolation is the construction of new data points within the range of a discrete set of known points, producing a continuous function that passes through or near the samples. Methods range from simple linear and nearest-neighbour schemes to higher-order polynomial, spline and barycentric formulations, each trading smoothness against computational cost and overshoot. In spatial computing and gra
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:numerical-methods
hasPart:
  - urn:ngm:class:linear-interpolation
  - urn:ngm:class:spline
requires:
  - urn:ngm:class:numerical-analysis
enables:
  - urn:ngm:class:keyframe-animation
  - urn:ngm:class:texture-mapping
implements:
  - urn:ngm:class:curve-fitting
contrastsWith:
  - urn:ngm:class:extrapolation
bridgesTo:
  - urn:ngm:class:rasterization
uses:
  - urn:ngm:class:sampling
  - urn:ngm:class:approximation
supports:
  - urn:ngm:class:rendering
  - urn:ngm:class:animation
partOf:
  - urn:ngm:class:numerical-methods
relatedTo:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:computer-graphics
  - urn:ngm:class:shader
---

# Interpolation

Interpolation is the construction of new data points within the range of a discrete set of known points, producing a continuous function that passes through or near the samples. Methods range from simple linear and nearest-neighbour schemes to higher-order polynomial, spline and barycentric formulations, each trading smoothness against computational cost and overshoot. In spatial computing and graphics it underpins resampling, shading, animation between keyframes, and the reconstruction of continuous fields from sparse measurements.
