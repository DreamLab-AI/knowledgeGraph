---
okf_version: "0.2"
type: Class
title: Homogeneous Transformation
resource: urn:ngm:class:homogeneous-transformation
domain: robotics
description: A homogeneous transformation is a 4x4 matrix that compactly represents both rotation and translation of a rigid body in three-dimensional space using homogeneous coordinates. By embedding rotation and translation into a single matrix, transformations can be composed through matrix multiplication, making them the standard tool for relating coordinate frames in robotics and graphics. Homogeneous tra
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:coordinate-transformation
hasPart:
  - urn:ngm:class:translation
requires:
  - urn:ngm:class:linear-algebra
enables:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:inverse-kinematics
dependsOn:
  - urn:ngm:class:coordinate-transformation
implements:
  - urn:ngm:class:coordinate-transformation
bridgesTo:
  - urn:ngm:class:pose-estimation
uses:
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:kinematics-model
  - urn:ngm:class:robot-control
partOf:
  - urn:ngm:class:kinematics
relatedTo:
  - urn:ngm:class:coordinate-transformation
  - urn:ngm:class:pose-estimation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Homogeneous Transformation

A homogeneous transformation is a 4x4 matrix that compactly represents both rotation and translation of a rigid body in three-dimensional space using homogeneous coordinates. By embedding rotation and translation into a single matrix, transformations can be composed through matrix multiplication, making them the standard tool for relating coordinate frames in robotics and graphics. Homogeneous transformations underpin forward and inverse kinematics, pose representation and frame chaining along kinematic links.
