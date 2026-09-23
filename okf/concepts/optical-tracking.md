---
okf_version: "0.2"
type: Class
title: Optical Tracking
resource: urn:ngm:class:optical-tracking
domain: spatial-computing
description: A sensing technology that uses camera-based systems and computer vision algorithms to determine the position and orientation of objects or users within physical space. Implementations range from marker-based infrared systems achieving sub-millimetre accuracy to markerless inside-out tracking using SLAM, enabling motion capture, hand tracking, and environmental mapping for XR applications.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:infra-computing-and-cloud
enables:
  - urn:ngm:class:motion-capture
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:xr-runtime-environment
dependsOn:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:structure-from-motion
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:slam
  - urn:ngm:class:pose-estimation
---

# Optical Tracking

A sensing technology that uses camera-based systems and computer vision algorithms to determine the position and orientation of objects or users within physical space. Implementations range from marker-based infrared systems achieving sub-millimetre accuracy to markerless inside-out tracking using SLAM, enabling motion capture, hand tracking, and environmental mapping for XR applications.
