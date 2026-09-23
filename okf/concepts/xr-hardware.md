---
okf_version: "0.2"
type: Class
title: XR Hardware
resource: urn:ngm:class:xr-hardware
domain: spatial-computing
description: "XR Hardware comprises the physical computing and sensing devices — including head-mounted displays, spatial computing headsets, hand-tracking controllers, haptic peripherals, and body-worn sensors — that enable augmented, mixed, and virtual reality experiences across the extended reality spectrum. These devices integrate high-resolution micro-display optics, inertial measurement units, inside-out "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:sc-display-and-rendering
hasPart:
  - urn:ngm:class:head-mounted-display
  - urn:ngm:class:eye-tracking
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:depth-sensing
requires:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:wireless-connectivity
  - urn:ngm:class:xr-software-platform
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:spatial-presence
  - urn:ngm:class:foveated-rendering
contrastsWith:
  - urn:ngm:class:flat-panel-display
  - urn:ngm:class:desktop-computing
bridgesTo:
  - urn:ngm:class:edge-inference
  - urn:ngm:class:digital-twin
  - urn:ngm:class:edge-inference
uses:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:inside-out-tracking
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:neural-processing-unit
  - urn:ngm:class:spatial-computing-paradigm
supports:
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:passthrough-video
standardizedBy:
  - urn:ngm:class:open-xr
  - urn:ngm:class:khronos-group
relatedTo:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:wearable-computing
  - urn:ngm:class:human-computer-interaction
---

# XR Hardware

XR Hardware comprises the physical computing and sensing devices — including head-mounted displays, spatial computing headsets, hand-tracking controllers, haptic peripherals, and body-worn sensors — that enable augmented, mixed, and virtual reality experiences across the extended reality spectrum. These devices integrate high-resolution micro-display optics, inertial measurement units, inside-out positional tracking cameras, and wireless connectivity stacks to deliver low-latency immersive spatial content. Modern XR hardware increasingly embeds dedicated neural processing units for on-device spatial AI inference, eye-tracking modules for foveated rendering, and environmental depth sensors for real-time world reconstruction. The category spans standalone untethered headsets, tethered PC-class systems, and lightweight optical see-through spectacles optimised for always-on wearability.
