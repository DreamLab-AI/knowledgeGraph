---
okf_version: "0.2"
type: Class
title: COCO Dataset
resource: urn:ngm:class:coco-dataset
domain: ai
description: The COCO Dataset (Common Objects in Context) is a large-scale benchmark dataset for computer vision research comprising over 330,000 images with dense per-instance annotations covering object detection, instance segmentation, panoptic segmentation, keypoint estimation, and image captioning across 80 object categories in natural everyday scenes. Released in 2014 by Microsoft Research, it became the
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:benchmarks
enables:
  - urn:ngm:class:object-detection
  - urn:ngm:class:instance-segmentation
  - urn:ngm:class:panoptic-segmentation
uses:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:object-recognition
  - urn:ngm:class:machine-learning-model
---

# COCO Dataset

The COCO Dataset (Common Objects in Context) is a large-scale benchmark dataset for computer vision research comprising over 330,000 images with dense per-instance annotations covering object detection, instance segmentation, panoptic segmentation, keypoint estimation, and image captioning across 80 object categories in natural everyday scenes. Released in 2014 by Microsoft Research, it became the de-facto standard evaluation corpus for detection and segmentation models because its annotations capture objects in realistic, cluttered contexts rather than artificially isolated settings. COCO metrics—specifically Average Precision (AP) averaged across IoU thresholds—are the primary performance currency for reporting state-of-the-art results in visual perception research.
