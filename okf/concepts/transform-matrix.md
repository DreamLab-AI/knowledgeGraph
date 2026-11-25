---
okf_version: "0.2"
type: Class
title: Transform Matrix
resource: urn:ngm:class:transform-matrix
domain: spatial-computing
description: A transform matrix is a matrix, typically 4x4 in homogeneous coordinates for 3D graphics, that encodes a composed translation, rotation and scale applied to geometry. Graphics pipelines multiply vertex positions by a chain of transform matrices to move objects from local model space through world, view and projection spaces to screen coordinates. Scene graphs attach a transform matrix to each node
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:linear-algebra
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Transform Matrix

A transform matrix is a matrix, typically 4x4 in homogeneous coordinates for 3D graphics, that encodes a composed translation, rotation and scale applied to geometry. Graphics pipelines multiply vertex positions by a chain of transform matrices to move objects from local model space through world, view and projection spaces to screen coordinates. Scene graphs attach a transform matrix to each node so that hierarchical transformations propagate correctly from parent nodes to their children.
