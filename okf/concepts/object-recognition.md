---
okf_version: "0.2"
type: Class
title: Object Recognition
resource: urn:ngm:class:object-recognition
domain: artificial-intelligence
description: Object recognition is a computer vision task that involves identifying and localising instances of predefined object categories within images or video streams, producing class labels, bounding boxes, segmentation masks, or pose estimates depending on the task variant. It subsumes tasks including image classification, object detection, semantic segmentation, and instance segmentation, and has becom
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:computer-vision-task
hasPart:
  - urn:ngm:class:bounding-box-regression
  - urn:ngm:class:non-maximum-suppression
requires:
  - urn:ngm:class:annotated-training-data
enables:
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:robotics
  - urn:ngm:class:visual-question-answering
  - urn:ngm:class:scene-understanding
contrastsWith:
  - urn:ngm:class:image-classification
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:neural-architecture-search
relatedTo:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:image-classification
  - urn:ngm:class:object-detection
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:remote-sensing
  - urn:ngm:class:foundation-model
---

# Object Recognition

Object recognition is a computer vision task that involves identifying and localising instances of predefined object categories within images or video streams, producing class labels, bounding boxes, segmentation masks, or pose estimates depending on the task variant. It subsumes tasks including image classification, object detection, semantic segmentation, and instance segmentation, and has become a core capability of autonomous systems, augmented reality, and content understanding pipelines. Modern approaches are dominated by deep convolutional and transformer-based architectures trained on large annotated datasets.
