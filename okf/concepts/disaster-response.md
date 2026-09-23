---
okf_version: "0.2"
type: Class
title: Disaster Response
resource: urn:ngm:class:disaster-response
domain: spatial-computing
description: Disaster response is the coordinated use of sensing, mapping and robotic systems to assess damage, locate survivors and direct relief in the aftermath of natural or human-made catastrophes. Spatial-computing techniques fuse aerial imagery, LiDAR, satellite remote sensing and ground-robot telemetry into situational maps that guide responders. Speed, robustness under degraded conditions, and accurat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:remote-sensing
requires:
  - urn:ngm:class:sensor-calibration
  - urn:ngm:class:real-time-inference
enables:
  - urn:ngm:class:remote-sensing
  - urn:ngm:class:search-and-rescue-robotics
dependsOn:
  - urn:ngm:class:geospatial-data
implements:
  - urn:ngm:class:remote-sensing
bridgesTo:
  - urn:ngm:class:search-and-rescue-robotics
uses:
  - urn:ngm:class:remote-sensing
  - urn:ngm:class:geospatial-data
  - urn:ngm:class:multirotor-uav
supports:
  - urn:ngm:class:rescue-robot
  - urn:ngm:class:drone-navigation
partOf:
  - urn:ngm:class:spatial-computing
relatedTo:
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:ground-robot
---

# Disaster Response

Disaster response is the coordinated use of sensing, mapping and robotic systems to assess damage, locate survivors and direct relief in the aftermath of natural or human-made catastrophes. Spatial-computing techniques fuse aerial imagery, LiDAR, satellite remote sensing and ground-robot telemetry into situational maps that guide responders. Speed, robustness under degraded conditions, and accurate geospatial localisation are the defining requirements.
