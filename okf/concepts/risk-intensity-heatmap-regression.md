---
okf_version: "0.2"
type: Class
title: Heatmap Regression
resource: urn:ngm:class:risk-intensity-heatmap-regression
domain: ai
description: A dense prediction technique for keypoint localisation in which a neural network outputs a 2D likelihood map per landmark instead of regressing coordinates directly. Ground-truth targets are rendered as Gaussian peaks centred on each keypoint, giving a spatially smooth supervision signal that preserves the convolutional structure of the feature maps. The final location is decoded from the argmax (
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:regression
contrastsWith:
  - urn:ngm:class:bounding-box-regression
uses:
  - urn:ngm:class:convolutional-neural-network
partOf:
  - urn:ngm:class:keypoint-detection
  - urn:ngm:class:pose-estimation
relatedTo:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:non-maximum-suppression
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Heatmap Regression

A dense prediction technique for keypoint localisation in which a neural network outputs a 2D likelihood map per landmark instead of regressing coordinates directly. Ground-truth targets are rendered as Gaussian peaks centred on each keypoint, giving a spatially smooth supervision signal that preserves the convolutional structure of the feature maps. The final location is decoded from the argmax (or a sub-pixel refinement) of each predicted heatmap. It is the dominant formulation for human pose estimation, facial landmark detection, and anatomical landmark localisation.
