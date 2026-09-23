---
okf_version: "0.2"
type: Class
title: Reprojection Error
resource: urn:ngm:class:reprojection-error
domain: spatial-computing
description: Reprojection error is the geometric distance, in image pixels, between an observed feature point and the position predicted by projecting its estimated three-dimensional point back through the estimated camera model. It serves as the primary residual minimised in camera calibration, pose estimation and bundle adjustment, where the sum of squared reprojection errors quantifies how well the reconstr
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:camera-calibration
hasPart:
  - urn:ngm:class:camera-calibration
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feature-matching
enables:
  - urn:ngm:class:bundle-adjustment
  - urn:ngm:class:structure-from-motion
dependsOn:
  - urn:ngm:class:feature-matching
uses:
  - urn:ngm:class:optimisation
  - urn:ngm:class:pose-estimation
supports:
  - urn:ngm:class:pose-estimation
partOf:
  - urn:ngm:class:bundle-adjustment
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:sensor-calibration
---

# Reprojection Error

Reprojection error is the geometric distance, in image pixels, between an observed feature point and the position predicted by projecting its estimated three-dimensional point back through the estimated camera model. It serves as the primary residual minimised in camera calibration, pose estimation and bundle adjustment, where the sum of squared reprojection errors quantifies how well the reconstructed geometry explains the measurements. Low reprojection error indicates a consistent, well-calibrated reconstruction.
