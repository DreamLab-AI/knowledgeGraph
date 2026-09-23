---
okf_version: "0.2"
type: Class
title: Computer Vision System
resource: urn:ngm:class:computer-vision-system
domain: spatial-computing
description: An integrated assembly of hardware and software components—cameras, depth sensors, inference pipelines, and output interfaces—that acquires, processes, and interprets visual information from the physical world. Computer vision systems underpin spatial computing applications such as AR tracking, spatial mapping, and object detection, translating raw image data into actionable semantic understanding
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:sc-interaction
hasPart:
  - urn:ngm:class:image-sensor
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:camera-calibration
requires:
  - urn:ngm:class:gpu-accelerator
  - urn:ngm:class:image-preprocessing
  - urn:ngm:class:training-dataset
enables:
  - urn:ngm:class:spatial-mapping
  - urn:ngm:class:object-detection
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:pose-estimation
implements:
  - urn:ngm:class:image-classification
  - urn:ngm:class:semantic-segmentation
contrastsWith:
  - urn:ngm:class:lidar
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:robotics-perception
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:optical-flow
supports:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:industrial-robot
relatedTo:
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:real-time-processing
---

# Computer Vision System

An integrated assembly of hardware and software components—cameras, depth sensors, inference pipelines, and output interfaces—that acquires, processes, and interprets visual information from the physical world. Computer vision systems underpin spatial computing applications such as AR tracking, spatial mapping, and object detection, translating raw image data into actionable semantic understanding for downstream tasks.
