---
okf_version: "0.2"
type: Class
title: RANSAC
resource: urn:ngm:class:ransac
domain: spatial-computing
description: RANSAC (Random Sample Consensus) is an iterative, robust estimation algorithm that fits a model to data containing a large fraction of outliers. It repeatedly draws a minimal random sample, fits a candidate model, and counts the inliers that agree within a tolerance, retaining the model with the largest consensus set. RANSAC is foundational in computer vision for estimating geometric relationships
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:feature-matching
requires:
  - urn:ngm:class:probability-theory
enables:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:structure-from-motion
dependsOn:
  - urn:ngm:class:feature-matching
  - urn:ngm:class:feature-detection
contrastsWith:
  - urn:ngm:class:bayesian-inference
uses:
  - urn:ngm:class:epipolar-geometry
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:camera-calibration
relatedTo:
  - urn:ngm:class:bundle-adjustment
  - urn:ngm:class:point-cloud
  - urn:ngm:class:spatial-computing
---

# RANSAC

RANSAC (Random Sample Consensus) is an iterative, robust estimation algorithm that fits a model to data containing a large fraction of outliers. It repeatedly draws a minimal random sample, fits a candidate model, and counts the inliers that agree within a tolerance, retaining the model with the largest consensus set. RANSAC is foundational in computer vision for estimating geometric relationships such as homographies, fundamental matrices, and camera poses from noisy feature correspondences.
