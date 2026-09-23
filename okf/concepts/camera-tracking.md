---
okf_version: "0.2"
type: Class
title: Camera Tracking
resource: urn:ngm:class:camera-tracking
domain: spatial-computing
description: Camera Tracking is the process of continuously estimating the position and orientation (pose) of a camera in 3D space relative to a fixed reference frame or scene, typically using image feature analysis, optical flow, or fiducial marker detection. It underpins augmented reality, visual effects compositing, robotic navigation, and autonomous vehicle perception by enabling virtual or computed elemen
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:motion-tracking
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:slam
uses:
  - urn:ngm:class:feature-detection
  - urn:ngm:class:optical-flow
  - urn:ngm:class:marker-based-tracking
relatedTo:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:epipolar-geometry
---

# Camera Tracking

Camera Tracking is the process of continuously estimating the position and orientation (pose) of a camera in 3D space relative to a fixed reference frame or scene, typically using image feature analysis, optical flow, or fiducial marker detection. It underpins augmented reality, visual effects compositing, robotic navigation, and autonomous vehicle perception by enabling virtual or computed elements to be correctly registered to the physical world as the camera moves.
