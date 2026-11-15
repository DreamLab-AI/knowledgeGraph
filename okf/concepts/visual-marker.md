---
okf_version: "0.2"
type: Class
title: Visual Marker
resource: urn:ngm:class:visual-marker
domain: spatial-computing
description: A distinctive visual pattern or fiducial placed in physical environments to enable computer vision systems to determine position, orientation, and pose for augmented reality applications. Types include QR codes, AprilTags, ARTags, and custom image targets that serve as reference points for overlaying digital content; detection relies on camera capture, template matching, and pose estimation algori
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:sc-interaction
  - urn:ngm:class:ar-technology
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:spatial-mapping
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:sensor-fusion
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:object-detection
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Visual Marker

A distinctive visual pattern or fiducial placed in physical environments to enable computer vision systems to determine position, orientation, and pose for augmented reality applications. Types include QR codes, AprilTags, ARTags, and custom image targets that serve as reference points for overlaying digital content; detection relies on camera capture, template matching, and pose estimation algorithms, often combined with SLAM or IMU sensor fusion for robust tracking.
