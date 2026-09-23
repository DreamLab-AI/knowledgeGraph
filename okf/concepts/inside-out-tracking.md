---
okf_version: "0.2"
type: Class
title: Inside Out Tracking
resource: urn:ngm:class:inside-out-tracking
domain: spatial-computing
description: Inside-out tracking is a positional-tracking method in which cameras and sensors mounted on a head-mounted display observe the surrounding environment to determine the device's own pose in space. It requires no external base stations, computing six-degrees-of-freedom position and orientation from features detected in the scene. The approach underpins standalone virtual and mixed reality headsets b
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:positional-tracking
hasPart:
  - urn:ngm:class:camera
  - urn:ngm:class:visual-inertial-odometry
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:six-degrees-of-freedom
enables:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:mixed-reality
dependsOn:
  - urn:ngm:class:head-mounted-display
implements:
  - urn:ngm:class:motion-tracking
bridgesTo:
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:slam
supports:
  - urn:ngm:class:spatial-mapping
partOf:
  - urn:ngm:class:tracking-system
relatedTo:
  - urn:ngm:class:augmented-reality
---

# Inside Out Tracking

Inside-out tracking is a positional-tracking method in which cameras and sensors mounted on a head-mounted display observe the surrounding environment to determine the device's own pose in space. It requires no external base stations, computing six-degrees-of-freedom position and orientation from features detected in the scene. The approach underpins standalone virtual and mixed reality headsets by enabling self-contained spatial tracking.
