---
okf_version: "0.2"
type: Class
title: Camera Model
resource: urn:ngm:class:camera-model
domain: spatial-computing
description: A camera model is a mathematical description that maps three-dimensional scene points to two-dimensional image coordinates, capturing the geometry of how a camera projects the world. It encodes intrinsic parameters such as focal length and principal point alongside extrinsic parameters describing pose, and may model lens distortion. Camera models underpin calibration, reconstruction and pose estim
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:linear-algebra
enables:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:depth-estimation
dependsOn:
  - urn:ngm:class:linear-algebra
uses:
  - urn:ngm:class:photogrammetry
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:augmented-reality
partOf:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:computer-vision
  - urn:ngm:class:photogrammetry
---

# Camera Model

A camera model is a mathematical description that maps three-dimensional scene points to two-dimensional image coordinates, capturing the geometry of how a camera projects the world. It encodes intrinsic parameters such as focal length and principal point alongside extrinsic parameters describing pose, and may model lens distortion. Camera models underpin calibration, reconstruction and pose estimation in computer vision and spatial computing.
