---
okf_version: "0.2"
type: Class
title: Projective Geometry
resource: urn:ngm:class:projective-geometry
domain: spatial-computing
description: Projective geometry is the branch of geometry concerned with properties of figures that are invariant under projective transformations, where points at infinity are treated on equal footing with ordinary points. Using homogeneous coordinates, it provides the mathematical foundation for modelling how three-dimensional scenes project onto image planes. It underpins camera models, multi-view geometry
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:camera-calibration
enables:
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:photogrammetry
implements:
  - urn:ngm:class:triangulation
bridgesTo:
  - urn:ngm:class:3d-mapping
uses:
  - urn:ngm:class:homography
supports:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:bundle-adjustment
relatedTo:
  - urn:ngm:class:feature-matching
  - urn:ngm:class:point-cloud
  - urn:ngm:class:slam
  - urn:ngm:class:spatial-computing
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Projective Geometry

Projective geometry is the branch of geometry concerned with properties of figures that are invariant under projective transformations, where points at infinity are treated on equal footing with ordinary points. Using homogeneous coordinates, it provides the mathematical foundation for modelling how three-dimensional scenes project onto image planes. It underpins camera models, multi-view geometry, and the reconstruction of structure from images in computer vision and spatial computing.
