---
okf_version: "0.2"
type: Class
title: Augmented Reality Tracking
resource: urn:ngm:class:augmented-reality-tracking
domain: robotics
description: Augmented reality tracking is the continuous estimation of a device's position and orientation relative to the physical environment so that virtual content can be registered and rendered as if anchored in the real world. It fuses camera imagery, inertial measurements and depth or feature data to maintain a stable six-degree-of-freedom pose at interactive rates. Robust tracking is the foundation of
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:pose-estimation
requires:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:slam
enables:
  - urn:ngm:class:marker-based-tracking
  - urn:ngm:class:localisation
dependsOn:
  - urn:ngm:class:visual-slam
implements:
  - urn:ngm:class:marker-based-tracking
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:spatial-mapping
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:extended-kalman-filter
supports:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:spatial-computing
relatedTo:
  - urn:ngm:class:tracking
  - urn:ngm:class:localisation
---

# Augmented Reality Tracking

Augmented reality tracking is the continuous estimation of a device's position and orientation relative to the physical environment so that virtual content can be registered and rendered as if anchored in the real world. It fuses camera imagery, inertial measurements and depth or feature data to maintain a stable six-degree-of-freedom pose at interactive rates. Robust tracking is the foundation of believable spatial overlay, addressing drift, occlusion and relocalisation.
