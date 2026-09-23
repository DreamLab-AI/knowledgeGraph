---
okf_version: "0.2"
type: Class
title: Coordinate Transformation
resource: urn:ngm:class:coordinate-transformation
domain: robotics
description: A coordinate transformation is a mathematical mapping that converts the representation of a point, vector, or geometric object from one coordinate system or reference frame to another, preserving geometric relationships while expressing them in a new basis. In robotics and computer graphics, transformations are represented as homogeneous matrices, quaternions, or dual quaternions encoding rotation
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:coordinate-system
enables:
  - urn:ngm:class:sensor-fusion
uses:
  - urn:ngm:class:quaternion-math
relatedTo:
  - urn:ngm:class:reference-frames
  - urn:ngm:class:kinematics
  - urn:ngm:class:rigid-body-dynamics
---

# Coordinate Transformation

A coordinate transformation is a mathematical mapping that converts the representation of a point, vector, or geometric object from one coordinate system or reference frame to another, preserving geometric relationships while expressing them in a new basis. In robotics and computer graphics, transformations are represented as homogeneous matrices, quaternions, or dual quaternions encoding rotation, translation, and scaling operations.
