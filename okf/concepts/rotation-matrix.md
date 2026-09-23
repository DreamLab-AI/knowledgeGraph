---
okf_version: "0.2"
type: Class
title: Rotation Matrix
resource: urn:ngm:class:rotation-matrix
domain: robotics
description: A rotation matrix is a square orthogonal matrix with determinant one that represents a rigid rotation of vectors in Euclidean space about a fixed origin. In robotics and computer graphics it encodes the orientation of one coordinate frame relative to another, mapping direction vectors from one frame into another without altering their length. Rotation matrices compose by matrix multiplication, ena
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:linear-algebra
hasPart:
  - urn:ngm:class:coordinate-system
requires:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:matrix-multiplication
enables:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:photorealistic-rendering
contrastsWith:
  - urn:ngm:class:homogeneous-transformation
bridgesTo:
  - urn:ngm:class:computer-graphics
uses:
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:matrix-multiplication
supports:
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:motion-planning
partOf:
  - urn:ngm:class:homogeneous-transformation
  - urn:ngm:class:kinematics
relatedTo:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:computer-vision
---

# Rotation Matrix

A rotation matrix is a square orthogonal matrix with determinant one that represents a rigid rotation of vectors in Euclidean space about a fixed origin. In robotics and computer graphics it encodes the orientation of one coordinate frame relative to another, mapping direction vectors from one frame into another without altering their length. Rotation matrices compose by matrix multiplication, enabling chains of rotations to be combined into a single transformation.
