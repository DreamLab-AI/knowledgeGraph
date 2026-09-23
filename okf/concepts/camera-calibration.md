---
okf_version: "0.2"
type: Class
title: Camera Calibration
resource: urn:ngm:class:camera-calibration
domain: spatial-computing
description: Camera calibration is the process of estimating a camera's intrinsic parameters — focal length, principal point, pixel skew, and radial and tangential distortion coefficients — and, when multiple sensors are involved, extrinsic parameters describing the rigid-body transformation (rotation and translation) between coordinate frames. Accurate calibration is a prerequisite for metrically correct 3D r
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:camera
  - urn:ngm:class:image-processing
  - urn:ngm:class:optimisation
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:visual-odometry
dependsOn:
  - urn:ngm:class:feature-detection
  - urn:ngm:class:corner-detection
contrastsWith:
  - urn:ngm:class:calibration
  - urn:ngm:class:calibration
  - urn:ngm:class:radiometric-calibration
bridgesTo:
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:lidar
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:lidar
uses:
  - urn:ngm:class:homography
  - urn:ngm:class:non-linear-least-squares
  - urn:ngm:class:chessboard-pattern
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:structure-from-motion
relatedTo:
  - urn:ngm:class:projective-geometry
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:open-cv
---

# Camera Calibration

Camera calibration is the process of estimating a camera's intrinsic parameters — focal length, principal point, pixel skew, and radial and tangential distortion coefficients — and, when multiple sensors are involved, extrinsic parameters describing the rigid-body transformation (rotation and translation) between coordinate frames. Accurate calibration is a prerequisite for metrically correct 3D reconstruction, stereo depth estimation, augmented-reality overlay registration, and robot visual servoing. The Zhang method, which solves for camera parameters from multiple images of a planar chessboard target via non-linear reprojection-error minimisation, is the dominant practical technique and is standardised in OpenCV and MATLAB's Computer Vision Toolbox. Calibration quality must be maintained over a device's operational lifetime, driving development of online self-calibration methods that exploit ego-motion and scene structure.
