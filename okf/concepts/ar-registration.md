---
okf_version: "0.2"
type: Class
title: AR Registration
resource: urn:ngm:class:ar-registration
domain: spatial-computing
description: AR Registration is the spatial alignment process that anchors virtual content to real-world coordinates through Computer Vision, Sensor Input, and tracking algorithms.
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:sc-interaction
  - urn:ngm:class:spatial-tracking
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feature-matching
  - urn:ngm:class:imu
  - urn:ngm:class:pose-estimation
enables:
  - urn:ngm:class:persistent-content-anchoring
  - urn:ngm:class:geometric-accuracy
  - urn:ngm:class:interaction-with-physical-objects
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:sensor-input
  - urn:ngm:class:spatial-anchoring
---

# AR Registration

AR Registration is the spatial alignment process that anchors virtual content to real-world coordinates through Computer Vision, Sensor Input, and tracking algorithms.
