---
okf_version: "0.2"
type: Class
title: Monocular Depth Estimation
resource: urn:ngm:class:monocular-depth-estimation
domain: spatial-computing
description: "Monocular depth estimation is the task of inferring the distance of scene points from a single image, recovering a depth map without the explicit stereo disparity available from multiple cameras. Because depth from one view is inherently ambiguous, modern approaches learn statistical and contextual cues such as texture gradients, object size, and perspective, typically using deep convolutional or "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:depth-estimation
requires:
  - urn:ngm:class:convolutional-neural-network
enables:
  - urn:ngm:class:scene-understanding
contrastsWith:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:lidar
bridgesTo:
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:self-supervised-learning
supports:
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:augmented-reality
partOf:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:point-cloud
  - urn:ngm:class:slam
---

# Monocular Depth Estimation

Monocular depth estimation is the task of inferring the distance of scene points from a single image, recovering a depth map without the explicit stereo disparity available from multiple cameras. Because depth from one view is inherently ambiguous, modern approaches learn statistical and contextual cues such as texture gradients, object size, and perspective, typically using deep convolutional or transformer networks trained on labelled or self-supervised data. It contrasts with stereo and active depth sensing while offering a low-cost route to three-dimensional perception.
