---
okf_version: "0.2"
type: Class
title: Panoptic Segmentation
resource: urn:ngm:class:panoptic-segmentation
domain: machine-learning
description: A computer vision task that unifies semantic segmentation and instance segmentation by assigning every image pixel both a class label and an instance identifier, providing holistic scene parsing that distinguishes countable foreground objects ("things") from amorphous background regions ("stuff"). Architectures such as Panoptic FPN, Panoptic-DeepLab, and MaskFormer formalise this unified represent
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:sc-interaction
hasPart:
  - urn:ngm:class:instance-segmentation
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:panoptic-quality-metric
requires:
  - urn:ngm:class:object-detection
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:pixel-classification
enables:
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:robot-perception
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:feature-pyramid-network
  - urn:ngm:class:transformer-architecture
contrastsWith:
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:instance-segmentation
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:coco-dataset
  - urn:ngm:class:cityscapes-dataset
partOf:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:image-segmentation
relatedTo:
  - urn:ngm:class:computer-vision-task
  - urn:ngm:class:image-recognition
---

# Panoptic Segmentation

A computer vision task that unifies semantic segmentation and instance segmentation by assigning every image pixel both a class label and an instance identifier, providing holistic scene parsing that distinguishes countable foreground objects ("things") from amorphous background regions ("stuff"). Architectures such as Panoptic FPN, Panoptic-DeepLab, and MaskFormer formalise this unified representation.
