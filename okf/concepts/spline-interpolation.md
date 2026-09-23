---
okf_version: "0.2"
type: Class
title: Spline Interpolation
resource: urn:ngm:class:spline-interpolation
domain: robotics
description: Spline interpolation is a numerical method for constructing a smooth curve that passes through a given set of waypoints by fitting piecewise polynomial segments, most commonly cubic splines, that join with continuous position, velocity, and acceleration at each segment boundary. In robotics it is used to convert a sparse sequence of target waypoints into a continuous, dynamically feasible trajecto
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:interpolation
enables:
  - urn:ngm:class:trajectory-planning
uses:
  - urn:ngm:class:interpolation
---

# Spline Interpolation

Spline interpolation is a numerical method for constructing a smooth curve that passes through a given set of waypoints by fitting piecewise polynomial segments, most commonly cubic splines, that join with continuous position, velocity, and acceleration at each segment boundary. In robotics it is used to convert a sparse sequence of target waypoints into a continuous, dynamically feasible trajectory that a controller can track without abrupt changes in motion. Spline interpolation is a standard building block of trajectory generation and trajectory planning pipelines.
