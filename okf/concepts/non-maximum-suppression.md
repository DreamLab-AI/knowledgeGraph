---
okf_version: "0.2"
type: Class
title: Non Maximum Suppression
resource: urn:ngm:class:non-maximum-suppression
domain: machine-learning
description: Non-Maximum Suppression (NMS) is a post-processing algorithm used in object detection to eliminate redundant overlapping bounding box proposals by retaining only the highest-confidence detection and discarding lower-confidence boxes that exceed a predefined intersection-over-union (IoU) threshold. The procedure iteratively selects the detection with the highest class score, suppresses all remainin
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:object-detection
hasPart:
  - urn:ngm:class:bounding-box-regression
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:bounding-box-regression
enables:
  - urn:ngm:class:object-detection
  - urn:ngm:class:computer-vision-task
dependsOn:
  - urn:ngm:class:object-detection
contrastsWith:
  - urn:ngm:class:object-detection-and-tracking
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:machine-learning-discipline
supports:
  - urn:ngm:class:computer-vision-system
  - urn:ngm:class:real-time-ai-inference
relatedTo:
  - urn:ngm:class:heatmap-regression
  - urn:ngm:class:bounding-volume
  - urn:ngm:class:bounding-volume-hierarchy
  - urn:ngm:class:heatmap-regression
---

# Non Maximum Suppression

Non-Maximum Suppression (NMS) is a post-processing algorithm used in object detection to eliminate redundant overlapping bounding box proposals by retaining only the highest-confidence detection and discarding lower-confidence boxes that exceed a predefined intersection-over-union (IoU) threshold. The procedure iteratively selects the detection with the highest class score, suppresses all remaining boxes that sufficiently overlap with it, and repeats until no candidates remain. NMS is a critical component of single-stage and two-stage detectors including YOLO, SSD, and Faster R-CNN families. Soft-NMS and class-agnostic variants address edge cases where multiple legitimate objects are densely packed.
