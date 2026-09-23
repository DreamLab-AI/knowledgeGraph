---
okf_version: "0.2"
type: Class
title: VR Rendering Engine
resource: urn:ngm:class:vr-rendering-engine
domain: spatial-computing
description: Specialised real-time graphics software that generates stereoscopic imagery for virtual reality headsets, optimising frame rates (minimum 90 fps), motion-to-photon latency (sub-20 ms), and visual fidelity while managing VR-specific pipeline requirements including foveated rendering, asynchronous reprojection, and lens distortion correction. Leading implementations include Unreal Engine 5 (Lumen, N
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:game-engine
hasPart:
  - urn:ngm:class:foveated-rendering
  - urn:ngm:class:real-time-rendering-pipeline
requires:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:xr-device
enables:
  - urn:ngm:class:virtual-production
  - urn:ngm:class:immersive-experience
uses:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:spatial-computing-paradigm
---

# VR Rendering Engine

Specialised real-time graphics software that generates stereoscopic imagery for virtual reality headsets, optimising frame rates (minimum 90 fps), motion-to-photon latency (sub-20 ms), and visual fidelity while managing VR-specific pipeline requirements including foveated rendering, asynchronous reprojection, and lens distortion correction. Leading implementations include Unreal Engine 5 (Lumen, Nanite) and Unity (URP/HDRP), both supporting major XR hardware via OpenXR and platform-specific SDKs.
