---
okf_version: "0.2"
type: Class
title: Heatmap Regression (Keypoint Localisation)
resource: urn:ngm:class:heatmap-regression
domain: machine-learning
description: A dense prediction technique for keypoint localisation in which a neural network outputs a 2D likelihood map per landmark instead of regressing coordinates directly. Ground-truth targets are rendered as Gaussian peaks centred on each keypoint, giving a spatially smooth supervision signal that preserves the convolutional structure of the feature maps. The final location is decoded from the argmax (
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:regression
contrastsWith:
  - urn:ngm:class:bounding-box-regression
uses:
  - urn:ngm:class:convolutional-neural-network
partOf:
  - urn:ngm:class:keypoint-detection
  - urn:ngm:class:pose-estimation
relatedTo:
  - urn:ngm:class:non-maximum-suppression
---

# Heatmap Regression (Keypoint Localisation)

A dense prediction technique for keypoint localisation in which a neural network outputs a 2D likelihood map per landmark instead of regressing coordinates directly. Ground-truth targets are rendered as Gaussian peaks centred on each keypoint, giving a spatially smooth supervision signal that preserves the convolutional structure of the feature maps. The final location is decoded from the argmax (or a sub-pixel refinement) of each predicted heatmap. It is the dominant formulation for human pose estimation, facial landmark detection, and anatomical landmark localisation.
