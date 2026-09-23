---
okf_version: "0.2"
type: Class
title: Homography
resource: urn:ngm:class:homography
domain: spatial-computing
description: A homography is a projective transformation, represented by a 3x3 matrix, that maps points from one plane to another in homogeneous coordinates, preserving straight lines but not parallelism or angles. In computer vision it relates two images of the same planar surface or two views taken from the same camera centre, enabling tasks such as image rectification, perspective correction, and mosaicking
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:projective-geometry
hasPart:
  - urn:ngm:class:feature-matching
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feature-matching
enables:
  - urn:ngm:class:augmented-reality
bridgesTo:
  - urn:ngm:class:epipolar-geometry
uses:
  - urn:ngm:class:feature-matching
  - urn:ngm:class:ransac
supports:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:structure-from-motion
partOf:
  - urn:ngm:class:projective-geometry
relatedTo:
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:computer-vision
  - urn:ngm:class:slam
---

# Homography

A homography is a projective transformation, represented by a 3x3 matrix, that maps points from one plane to another in homogeneous coordinates, preserving straight lines but not parallelism or angles. In computer vision it relates two images of the same planar surface or two views taken from the same camera centre, enabling tasks such as image rectification, perspective correction, and mosaicking. Homographies are estimated from corresponding feature points, often robustly via methods that reject outlier matches.
