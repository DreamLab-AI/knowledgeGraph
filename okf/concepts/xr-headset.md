---
okf_version: "0.2"
type: Class
title: XR Headset
resource: urn:ngm:class:xr-headset
domain: spatial-computing
description: A head-mounted display device that delivers immersive visual and audio experiences for virtual reality, augmented reality, or mixed reality applications, featuring integrated displays, tracking sensors, audio systems, and processing capabilities for rendering digital content in the user's field of view.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:xr-hardware
hasPart:
  - urn:ngm:class:micro-oled-display
  - urn:ngm:class:tracking-system
  - urn:ngm:class:spatial-audio-system
requires:
  - urn:ngm:class:web-xr-api
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:six-degrees-of-freedom
  - urn:ngm:class:real-time-rendering
enables:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:immersive-collaboration
dependsOn:
  - urn:ngm:class:system-on-chip
  - urn:ngm:class:simultaneous-localisation-and-mapping
implements:
  - urn:ngm:class:openxr-standard
contrastsWith:
  - urn:ngm:class:holographic-display
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:distributed-collaboration
uses:
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:passthrough-camera
  - urn:ngm:class:foveated-rendering
standardizedBy:
  - urn:ngm:class:khronos-group
partOf:
  - urn:ngm:class:wearable-computing-platform
  - urn:ngm:class:metaverse
relatedTo:
  - urn:ngm:class:field-of-view
---

# XR Headset

A head-mounted display device that delivers immersive visual and audio experiences for virtual reality, augmented reality, or mixed reality applications, featuring integrated displays, tracking sensors, audio systems, and processing capabilities for rendering digital content in the user's field of view.
