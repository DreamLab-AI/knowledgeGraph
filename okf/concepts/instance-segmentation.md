---
okf_version: "0.2"
type: Class
title: Instance Segmentation
resource: urn:ngm:class:instance-segmentation
domain: machine-learning
description: A computer vision task that extends object detection by predicting precise pixel-level masks for each individual object instance, jointly performing detection and segmentation to delineate the exact boundaries of distinct objects. Architectures such as Mask R-CNN, YOLACT, and SOLOv2 enable fine-grained object localisation essential for robotics manipulation, autonomous driving, and medical image a
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:object-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:convolutional-neural-network
enables:
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:medical-image-analysis
dependsOn:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:bounding-box-regression
implements:
  - urn:ngm:class:mask-r-cnn
contrastsWith:
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:panoptic-segmentation
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:feature-pyramid-network
  - urn:ngm:class:non-maximum-suppression
  - urn:ngm:class:anchor-based-detection
partOf:
  - urn:ngm:class:panoptic-segmentation
relatedTo:
  - urn:ngm:class:computer-vision-task
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:deep-learning
---

# Instance Segmentation

A computer vision task that extends object detection by predicting precise pixel-level masks for each individual object instance, jointly performing detection and segmentation to delineate the exact boundaries of distinct objects. Architectures such as Mask R-CNN, YOLACT, and SOLOv2 enable fine-grained object localisation essential for robotics manipulation, autonomous driving, and medical image analysis.
