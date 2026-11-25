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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Anchor-Based Detection

Anchor-based detection is an object detection approach that predicts bounding boxes and class scores relative to a fixed set of predefined reference boxes, called anchors, tiled densely across the image at multiple scales and aspect ratios. The network learns offsets that adjust each anchor to fit a nearby object rather than predicting box coordinates directly, which stabilises training and improves recall for objects of varying size. Faster R-CNN, SSD and the early YOLO versions are canonical anchor-based detectors, later contrasted with anchor-free alternatives.
