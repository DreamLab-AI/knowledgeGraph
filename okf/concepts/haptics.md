---
okf_version: "0.2"
type: Class
title: Haptics
resource: urn:ngm:class:haptics
domain: spatial-computing
description: Physical hardware systems that simulate tactile sensations and force feedback within virtual environments through actuators and sensors.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-interaction
hasPart:
  - urn:ngm:class:force-feedback-actuators
  - urn:ngm:class:tactile-actuators
  - urn:ngm:class:vibration-motors
  - urn:ngm:class:piezoelectric-sensors
requires:
  - urn:ngm:class:signal-processing-unit
  - urn:ngm:class:driver-software
  - urn:ngm:class:power-supply
enables:
  - urn:ngm:class:force-feedback
  - urn:ngm:class:physical-presence
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:texture-simulation
dependsOn:
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:low-latency-communication
partOf:
  - urn:ngm:class:human-interface-device
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Haptics

Physical hardware systems that simulate tactile sensations and force feedback within virtual environments through actuators and sensors.
