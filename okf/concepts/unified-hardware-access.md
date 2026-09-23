---
okf_version: "0.2"
type: Class
title: Unified Hardware Access
resource: urn:ngm:class:unified-hardware-access
domain: spatial-computing
description: A standardised abstraction layer that provides consistent programmatic interfaces for accessing diverse XR hardware devices — including VR headsets, AR glasses, haptic controllers, eye-tracking modules, and six-DoF tracking systems — enabling cross-platform application development without device-specific code paths. The WebXR Device API (W3C) and OpenXR (Khronos Group) are the primary open standar
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-standards-and-interop
  - urn:ngm:class:hardware-abstraction
enables:
  - urn:ngm:class:cross-platform-interoperability
  - urn:ngm:class:immersive-experience
bridgesTo:
  - urn:ngm:class:hardware-abstraction
uses:
  - urn:ngm:class:xr-device
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:eye-tracking
standardizedBy:
  - urn:ngm:class:open-standard
  - urn:ngm:class:interoperability-standard
relatedTo:
  - urn:ngm:class:xr-runtime-environment
---

# Unified Hardware Access

A standardised abstraction layer that provides consistent programmatic interfaces for accessing diverse XR hardware devices — including VR headsets, AR glasses, haptic controllers, eye-tracking modules, and six-DoF tracking systems — enabling cross-platform application development without device-specific code paths. The WebXR Device API (W3C) and OpenXR (Khronos Group) are the primary open standards implementing this abstraction for web and native runtimes respectively.
