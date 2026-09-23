---
okf_version: "0.2"
type: Class
title: Image Preprocessing
resource: urn:ngm:class:image-preprocessing
domain: ai
description: Image preprocessing is the set of operations applied to raw image data before it is fed into a computer vision or machine learning model. It standardises and conditions images through resizing, normalisation, colour-space conversion, denoising and contrast adjustment to improve downstream model accuracy and robustness. Preprocessing also includes augmentation transforms that synthetically expand t
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:image-processing
hasPart:
  - urn:ngm:class:noise-reduction
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:data-augmentation
requires:
  - urn:ngm:class:data-preprocessing
enables:
  - urn:ngm:class:image-classification
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:image-segmentation
dependsOn:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:feature-extraction
supports:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:pattern-recognition
partOf:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:image-processing
relatedTo:
  - urn:ngm:class:data-quality
---

# Image Preprocessing

Image preprocessing is the set of operations applied to raw image data before it is fed into a computer vision or machine learning model. It standardises and conditions images through resizing, normalisation, colour-space conversion, denoising and contrast adjustment to improve downstream model accuracy and robustness. Preprocessing also includes augmentation transforms that synthetically expand training data and feature-oriented steps that emphasise salient structures.
