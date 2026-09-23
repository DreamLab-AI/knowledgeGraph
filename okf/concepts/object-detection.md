---
okf_version: "0.2"
type: Class
title: Object Detection
resource: urn:ngm:class:object-detection
domain: machine-learning
description: Object Detection is the computer vision task of identifying and localising multiple objects within an image or video frame by predicting bounding boxes and class labels for each detected instance, combining spatial localisation with categorical classification in a single forward pass.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:training-data
  - urn:ngm:class:bounding-box-regression
enables:
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:object-detection-and-tracking
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:image-classification
  - urn:ngm:class:benchmark-dataset
implements:
  - urn:ngm:class:detr
contrastsWith:
  - urn:ngm:class:image-classification
  - urn:ngm:class:instance-segmentation
  - urn:ngm:class:panoptic-segmentation
bridgesTo:
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:anchor-based-detection
  - urn:ngm:class:non-maximum-suppression
  - urn:ngm:class:feature-pyramid-network
relatedTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:real-time-inference
---

# Object Detection

Object Detection is the computer vision task of identifying and localising multiple objects within an image or video frame by predicting bounding boxes and class labels for each detected instance, combining spatial localisation with categorical classification in a single forward pass.
