---
okf_version: "0.2"
type: Class
title: Anchor-Based Detection
resource: urn:ngm:class:anchor-based-detection
domain: machine-learning
description: Anchor-based detection is an object detection approach that predicts bounding boxes and class scores relative to a fixed set of predefined reference boxes, called anchors, tiled densely across the image at multiple scales and aspect ratios. The network learns offsets that adjust each anchor to fit a nearby object rather than predicting box coordinates directly, which stabilises training and improv
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:object-detection
---

# Anchor-Based Detection

Anchor-based detection is an object detection approach that predicts bounding boxes and class scores relative to a fixed set of predefined reference boxes, called anchors, tiled densely across the image at multiple scales and aspect ratios. The network learns offsets that adjust each anchor to fit a nearby object rather than predicting box coordinates directly, which stabilises training and improves recall for objects of varying size. Faster R-CNN, SSD and the early YOLO versions are canonical anchor-based detectors, later contrasted with anchor-free alternatives.
