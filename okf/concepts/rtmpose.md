---
okf_version: "0.2"
type: Class
title: RTMPose
resource: urn:ngm:class:rtmpose
domain: machine-learning
description: "A family of real-time multi-person pose estimation models from OpenMMLab's MMPose project (Jiang et al., 2023) that pairs a lightweight CSPNeXt convolutional backbone with a SimCC coordinate-classification head, treating keypoint localisation as classification over discretised horizontal and vertical bins rather than heatmap regression. RTMPose achieves strong COCO accuracy at real-time speeds on "
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:pose-estimation
enables:
  - urn:ngm:class:dwpose
uses:
  - urn:ngm:class:convolutional-neural-network
relatedTo:
  - urn:ngm:class:computer-vision
---

# RTMPose

A family of real-time multi-person pose estimation models from OpenMMLab's MMPose project (Jiang et al., 2023) that pairs a lightweight CSPNeXt convolutional backbone with a SimCC coordinate-classification head, treating keypoint localisation as classification over discretised horizontal and vertical bins rather than heatmap regression. RTMPose achieves strong COCO accuracy at real-time speeds on CPU, GPU, and mobile targets, and serves as the teacher and architectural basis for distilled variants such as DWPose.
