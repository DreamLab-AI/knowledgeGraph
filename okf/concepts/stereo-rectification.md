---
okf_version: "0.2"
type: Class
title: Stereo Rectification
resource: urn:ngm:class:stereo-rectification
domain: spatial-computing
description: Stereo rectification is the process of transforming a pair of stereo camera images so that corresponding points lie on the same horizontal scan line, reducing the search for correspondences from a two-dimensional problem to a one-dimensional one along epipolar lines. It relies on the epipolar geometry of the camera pair, computed from calibration or estimated from matched features, to derive the r
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:computer-vision
---

# Stereo Rectification

Stereo rectification is the process of transforming a pair of stereo camera images so that corresponding points lie on the same horizontal scan line, reducing the search for correspondences from a two-dimensional problem to a one-dimensional one along epipolar lines. It relies on the epipolar geometry of the camera pair, computed from calibration or estimated from matched features, to derive the reprojection homographies applied to each image. Rectified image pairs are the standard input to dense stereo matching algorithms used for depth estimation.
