---
okf_version: "0.2"
type: Class
title: Eye Tracking
resource: urn:ngm:class:eye-tracking
domain: spatial-computing
description: Physical sensor hardware that measures gaze direction, pupil dilation, and eye movements to enable foveated rendering, attention analytics, and natural interaction in XR devices.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-interaction
  - urn:ngm:class:infrared-camera
hasPart:
  - urn:ngm:class:calibration-system
  - urn:ngm:class:image-sensor
  - urn:ngm:class:infrared-camera
  - urn:ngm:class:infrared-led-illuminator
  - urn:ngm:class:hot-mirror
  - urn:ngm:class:pupil-detection-algorithm
requires:
  - urn:ngm:class:infrared-light-source
  - urn:ngm:class:optical-calibration-target
  - urn:ngm:class:high-speed-camera
  - urn:ngm:class:real-time-processing-unit
  - urn:ngm:class:low-latency-data-bus
enables:
  - urn:ngm:class:foveated-rendering
  - urn:ngm:class:gaze-based-interaction
  - urn:ngm:class:attention-analytics
  - urn:ngm:class:vergence-accommodation-matching
  - urn:ngm:class:eye-gesture-control
dependsOn:
  - urn:ngm:class:xr-headset
  - urn:ngm:class:graphics-processing-unit
  - urn:ngm:class:head-mounted-display
  - urn:ngm:class:rendering-engine
partOf:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:perceptual-computing-system
  - urn:ngm:class:human-computer-interaction
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Eye Tracking

Physical sensor hardware that measures gaze direction, pupil dilation, and eye movements to enable foveated rendering, attention analytics, and natural interaction in XR devices.
