---
okf_version: "0.2"
type: Class
title: Image Recognition
resource: urn:ngm:class:image-recognition
domain: machine-learning
description: Image recognition is the computer-vision task of identifying and categorising the objects, scenes, people or attributes present in a digital image. It maps raw pixel data to semantic labels, ranging from whole-image classification through to localisation of multiple distinct entities within a single frame. Modern image recognition is dominated by deep convolutional and transformer-based neural net
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:supervised-learning
enables:
  - urn:ngm:class:object-detection
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:facial-recognition
contrastsWith:
  - urn:ngm:class:semantic-segmentation
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:transfer-learning
supports:
  - urn:ngm:class:image-processing
partOf:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:image-classification
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:object-recognition
---

# Image Recognition

Image recognition is the computer-vision task of identifying and categorising the objects, scenes, people or attributes present in a digital image. It maps raw pixel data to semantic labels, ranging from whole-image classification through to localisation of multiple distinct entities within a single frame. Modern image recognition is dominated by deep convolutional and transformer-based neural networks trained on large labelled datasets, which learn hierarchical visual features rather than relying on hand-engineered descriptors.
