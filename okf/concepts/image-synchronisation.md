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
---

# Image Synchronisation

Image synchronisation is the precise temporal alignment of frame capture across two or more cameras so that corresponding images represent the same instant in the scene. It is essential for stereo vision, where depth is computed by triangulating matched features between left and right images, since even small timing offsets introduce triangulation error for moving scenes or moving cameras. Hardware synchronisation, typically a shared trigger signal, achieves tighter alignment than software timestamp matching, which is limited by operating system scheduling jitter. It is a prerequisite for reliable multi-camera sensor fusion in robotic perception systems operating on dynamic scenes.
