---
okf_version: "0.2"
type: Class
title: Coordinate System
resource: urn:ngm:class:coordinate-system
domain: spatial-computing
description: "A coordinate system is a mathematical framework that assigns a unique ordered tuple of numbers to every point in a geometric space, enabling unambiguous specification of position, orientation, and scale. Coordinate systems establish reference frames — world, camera, object, and sensor frames — that must be composed via rigid-body or affine transforms to map quantities from one frame into another. "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:reference-frames
  - urn:ngm:class:reference-frames
  - urn:ngm:class:basis-vector
  - urn:ngm:class:origin
requires:
  - urn:ngm:class:spatial-mapping
  - urn:ngm:class:homogeneous-transformation
enables:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:slam
  - urn:ngm:class:spatial-anchor
  - urn:ngm:class:3-d-rendering
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:rotation-representation
contrastsWith:
  - urn:ngm:class:polar-coordinate-system
  - urn:ngm:class:curvilinear-coordinate-system
bridgesTo:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:world-model
uses:
  - urn:ngm:class:quaternion-math
  - urn:ngm:class:coordinate-transformation
  - urn:ngm:class:quaternion-math
  - urn:ngm:class:coordinate-transformation
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:scene-graph
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:geographic-information-system
standardizedBy:
  - urn:ngm:class:open-xr
  - urn:ngm:class:iso-19111
relatedTo:
  - urn:ngm:class:euclidean-geometry
  - urn:ngm:class:projection-model
---

# Coordinate System

A coordinate system is a mathematical framework that assigns a unique ordered tuple of numbers to every point in a geometric space, enabling unambiguous specification of position, orientation, and scale. Coordinate systems establish reference frames — world, camera, object, and sensor frames — that must be composed via rigid-body or affine transforms to map quantities from one frame into another. In spatial computing, robotics, and computer vision, multiple overlapping coordinate frames coexist and their consistent management is essential for rendering, navigation, and perception tasks. The choice of convention (handedness, axis orientation, unit) and the algebraic formalism used (homogeneous matrices, quaternions, dual quaternions, Lie group elements) profoundly affects numerical stability and interoperability across software stacks.
