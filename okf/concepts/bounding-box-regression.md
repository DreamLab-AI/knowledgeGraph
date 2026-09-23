---
okf_version: "0.2"
type: Class
title: Bounding Box Regression
resource: urn:ngm:class:bounding-box-regression
domain: machine-learning
description: Bounding Box Regression is the supervised learning task within object detection of predicting the precise coordinates of axis-aligned rectangular boxes that tightly enclose detected objects. A model outputs four continuous values — typically centre x, centre y, width, and height relative to an anchor — and is trained using smooth-L1 or IoU-based loss functions that penalise deviation from ground-t
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:object-detection
  - urn:ngm:class:regression
  - urn:ngm:class:computer-vision-task
  - urn:ngm:class:supervised-learning
hasPart:
  - urn:ngm:class:non-maximum-suppression
  - urn:ngm:class:heatmap-regression
  - urn:ngm:class:feature-pyramid-network
  - urn:ngm:class:anchor-box
  - urn:ngm:class:iou-loss
  - urn:ngm:class:heatmap-regression
  - urn:ngm:class:roi-pooling
  - urn:ngm:class:giou-loss
  - urn:ngm:class:ciou-loss
  - urn:ngm:class:regression-head
requires:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:regression
  - urn:ngm:class:loss-function
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:object-detection-and-tracking
  - urn:ngm:class:computer-vision-system
  - urn:ngm:class:instance-segmentation
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:panoptic-segmentation
  - urn:ngm:class:3d-object-detection
dependsOn:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:backpropagation
  - urn:ngm:class:training-data
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:anchor-assignment
implements:
  - urn:ngm:class:object-detection
  - urn:ngm:class:localisation
  - urn:ngm:class:spatial-localisation
  - urn:ngm:class:region-proposal-network
contrastsWith:
  - urn:ngm:class:regression-testing
  - urn:ngm:class:heatmap-regression
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:heatmap-regression
  - urn:ngm:class:image-classification
  - urn:ngm:class:panoptic-segmentation
uses:
  - urn:ngm:class:regression
  - urn:ngm:class:computer-vision-task
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:feature-pyramid-network
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:bipartite-matching
supports:
  - urn:ngm:class:real-time-ai-inference
  - urn:ngm:class:real-time-ai
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:medical-image-analysis
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:autonomous-driving-perception
  - urn:ngm:class:industrial-inspection
standardizedBy:
  - urn:ngm:class:coco-dataset
  - urn:ngm:class:pascal-voc
  - urn:ngm:class:open-images
  - urn:ngm:class:waymo-open-dataset
  - urn:ngm:class:nuscenes
relatedTo:
  - urn:ngm:class:bounding-volume
  - urn:ngm:class:bounding-volume-hierarchy
  - urn:ngm:class:gaussian-process-regression
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:image-classification
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:detr
  - urn:ngm:class:yolo
  - urn:ngm:class:faster-r-cnn
  - urn:ngm:class:ssd
  - urn:ngm:class:retinanet
  - urn:ngm:class:fcos
  - urn:ngm:class:centernet
---

# Bounding Box Regression

Bounding Box Regression is the supervised learning task within object detection of predicting the precise coordinates of axis-aligned rectangular boxes that tightly enclose detected objects. A model outputs four continuous values — typically centre x, centre y, width, and height relative to an anchor — and is trained using smooth-L1 or IoU-based loss functions that penalise deviation from ground-truth boxes. It is jointly trained with an object classification head and combined with [[Non Maximum Suppression]] to produce the final detections. Accurate regression is critical for downstream tasks such as instance segmentation and 3-D pose estimation that consume the predicted boxes.
