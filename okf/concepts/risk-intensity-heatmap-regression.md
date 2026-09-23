---
okf_version: "0.2"
type: Class
title: Heatmap Regression
resource: urn:ngm:class:risk-intensity-heatmap-regression
domain: ai
description: Heatmap regression is a computer-vision technique for keypoint localisation in which a network predicts a 2D probability map per landmark rather than directly regressing coordinates. The peak of each predicted heatmap indicates the most likely location, and Gaussian-blurred ground-truth targets make training spatially smooth and robust. It is the dominant approach for human pose estimation and fac
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:pose-estimation
---

# Heatmap Regression

Heatmap regression is a computer-vision technique for keypoint localisation in which a network predicts a 2D probability map per landmark rather than directly regressing coordinates. The peak of each predicted heatmap indicates the most likely location, and Gaussian-blurred ground-truth targets make training spatially smooth and robust. It is the dominant approach for human pose estimation and facial landmark detection.
