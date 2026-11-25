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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# RANSAC

RANSAC (Random Sample Consensus) is an iterative, robust estimation algorithm that fits a model to data containing a large fraction of outliers. It repeatedly draws a minimal random sample, fits a candidate model, and counts the inliers that agree within a tolerance, retaining the model with the largest consensus set. RANSAC is foundational in computer vision for estimating geometric relationships such as homographies, fundamental matrices, and camera poses from noisy feature correspondences.
