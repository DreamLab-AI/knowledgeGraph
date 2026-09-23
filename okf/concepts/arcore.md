---
okf_version: "0.2"
type: Class
title: Arcore
resource: urn:ngm:class:arcore
domain: spatial-computing
description: ARCore is Google's software development kit for building augmented-reality applications on Android and, via web standards, the browser. It provides motion tracking, environmental understanding and light estimation by fusing camera frames with inertial sensors to anchor virtual content in the physical world. ARCore is the principal counterpart to Apple's ARKit in the mobile-AR ecosystem.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:ar-experiences
requires:
  - urn:ngm:class:camera-calibration
enables:
  - urn:ngm:class:scene-understanding
dependsOn:
  - urn:ngm:class:visual-slam
implements:
  - urn:ngm:class:slam
uses:
  - urn:ngm:class:visual-slam
  - urn:ngm:class:slam
  - urn:ngm:class:depth-estimation
supports:
  - urn:ngm:class:spatial-anchors
  - urn:ngm:class:spatial-anchor
standardizedBy:
  - urn:ngm:class:augmented-reality
partOf:
  - urn:ngm:class:augmented-reality
relatedTo:
  - urn:ngm:class:spatial-anchors
---

# Arcore

ARCore is Google's software development kit for building augmented-reality applications on Android and, via web standards, the browser. It provides motion tracking, environmental understanding and light estimation by fusing camera frames with inertial sensors to anchor virtual content in the physical world. ARCore is the principal counterpart to Apple's ARKit in the mobile-AR ecosystem.
