---
okf_version: "0.2"
type: Class
title: OpenPose
resource: urn:ngm:class:open-pose
domain: ai
description: OpenPose is an open-source, real-time multi-person pose estimation library developed at Carnegie Mellon University that simultaneously detects body, hand, face, and foot keypoints from RGB images and video using convolutional neural networks. It employs Part Affinity Fields (PAFs) — a set of 2D vector fields encoding the location and orientation of limb connections — enabling association of detect
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:pose-estimation
enables:
  - urn:ngm:class:motion-capture
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:virtual-object-pose
---

# OpenPose

OpenPose is an open-source, real-time multi-person pose estimation library developed at Carnegie Mellon University that simultaneously detects body, hand, face, and foot keypoints from RGB images and video using convolutional neural networks. It employs Part Affinity Fields (PAFs) — a set of 2D vector fields encoding the location and orientation of limb connections — enabling association of detected keypoints into individual skeletons without prior person detection. OpenPose established the part-affinity-field paradigm that underpins many subsequent human pose estimation systems.
