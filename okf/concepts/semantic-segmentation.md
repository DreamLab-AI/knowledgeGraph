---
okf_version: "0.2"
type: Class
title: Semantic Segmentation
resource: urn:ngm:class:semantic-segmentation
domain: artificial-intelligence
description: Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Architectures such as FCN, U-Net, and DeepLab produce dense pixel-wise predictions enabling scene understanding in autonomous driving, medical imaging, and satellite analysis.
maturity: emerging
quality: 0.65
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:pixel-classification
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:encoder-decoder-architecture
requires:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:annotated-training-data
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:medical-image-analysis
  - urn:ngm:class:object-detection
  - urn:ngm:class:augmented-reality
contrastsWith:
  - urn:ngm:class:instance-segmentation
  - urn:ngm:class:panoptic-segmentation
  - urn:ngm:class:object-detection
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics-perception
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:attention-mechanism
partOf:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:point-cloud-segmentation
---

# Semantic Segmentation

Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Architectures such as FCN, U-Net, and DeepLab produce dense pixel-wise predictions enabling scene understanding in autonomous driving, medical imaging, and satellite analysis.
