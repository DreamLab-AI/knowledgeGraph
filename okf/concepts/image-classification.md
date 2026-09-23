---
okf_version: "0.2"
type: Class
title: Image Classification
resource: urn:ngm:class:image-classification
domain: machine-learning
description: Image Classification is the computer vision task of assigning a categorical label to an entire image from a predefined set of classes, determining what is depicted in the image as a whole. Modern image classification employs deep convolutional neural networks (ResNet, EfficientNet, Vision Transformers) trained on large-scale datasets such as ImageNet to achieve human-level or super-human performan
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-application
hasPart:
  - urn:ngm:class:feature-map
requires:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:training-data
  - urn:ngm:class:image-preprocessing
enables:
  - urn:ngm:class:object-detection
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:medical-image-analysis
  - urn:ngm:class:autonomous-driving
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:backpropagation
  - urn:ngm:class:gpu-computing
contrastsWith:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:instance-segmentation
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics-perception
uses:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:softmax-function
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:feature-extraction
partOf:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:pattern-recognition
relatedTo:
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:benchmark-dataset
---

# Image Classification

Image Classification is the computer vision task of assigning a categorical label to an entire image from a predefined set of classes, determining what is depicted in the image as a whole. Modern image classification employs deep convolutional neural networks (ResNet, EfficientNet, Vision Transformers) trained on large-scale datasets such as ImageNet to achieve human-level or super-human performance on diverse visual recognition tasks.
