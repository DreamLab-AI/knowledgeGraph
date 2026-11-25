---
okf_version: "0.2"
type: Class
title: Image Synchronisation
resource: urn:ngm:class:image-synchronisation
domain: robotics
description: Image synchronisation is the precise temporal alignment of frame capture across two or more cameras so that corresponding images represent the same instant in the scene. It is essential for stereo vision, where depth is computed by triangulating matched features between left and right images, since even small timing offsets introduce triangulation error for moving scenes or moving cameras. Hardwar
maturity: established
quality: 0
is-a:
  - urn:ngm:class:sensor-fusion
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Image Synchronisation

Image synchronisation is the precise temporal alignment of frame capture across two or more cameras so that corresponding images represent the same instant in the scene. It is essential for stereo vision, where depth is computed by triangulating matched features between left and right images, since even small timing offsets introduce triangulation error for moving scenes or moving cameras. Hardware synchronisation, typically a shared trigger signal, achieves tighter alignment than software timestamp matching, which is limited by operating system scheduling jitter. It is a prerequisite for reliable multi-camera sensor fusion in robotic perception systems operating on dynamic scenes.
