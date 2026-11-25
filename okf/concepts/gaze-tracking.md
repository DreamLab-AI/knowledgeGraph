---
okf_version: "0.2"
type: Class
title: Gaze Tracking
resource: urn:ngm:class:gaze-tracking
domain: spatial-computing
description: Gaze tracking is the measurement of where a person is looking by estimating the direction and point of regard of the eyes, typically using cameras and infrared illumination to locate pupil and corneal reflections. In spatial computing it provides a hands-free input modality and a signal for attention, enabling interfaces that respond to where the user looks. Gaze tracking is foundational to foveat
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:eye-tracking
hasPart:
  - urn:ngm:class:perception-system
requires:
  - urn:ngm:class:perception-system
  - urn:ngm:class:computational-model
enables:
  - urn:ngm:class:foveated-rendering
  - urn:ngm:class:immersive-interface
implements:
  - urn:ngm:class:user-interface
bridgesTo:
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:machine-learning
supports:
  - urn:ngm:class:spatial-interaction
  - urn:ngm:class:accessibility
partOf:
  - urn:ngm:class:eye-tracking
  - urn:ngm:class:human-computer-interaction
relatedTo:
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:virtual-reality
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Gaze Tracking

Gaze tracking is the measurement of where a person is looking by estimating the direction and point of regard of the eyes, typically using cameras and infrared illumination to locate pupil and corneal reflections. In spatial computing it provides a hands-free input modality and a signal for attention, enabling interfaces that respond to where the user looks. Gaze tracking is foundational to foveated rendering, intent inference, and accessible interaction in head-mounted displays and immersive systems.
