---
okf_version: "0.2"
type: Class
title: XR Runtime Environment
resource: urn:ngm:class:xr-runtime-environment
domain: spatial-computing
description: The software infrastructure layer that manages extended reality hardware and provides standardized APIs for XR applications, handling device abstraction, tracking systems, rendering pipelines, input processing, and compositor services to enable cross-platform XR development.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-platform-and-environment
  - urn:ngm:class:runtime-environment
hasPart:
  - urn:ngm:class:tracking-system
requires:
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:hardware-abstraction
  - urn:ngm:class:device-drivers
enables:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:mixed-reality
dependsOn:
  - urn:ngm:class:gpu-driver
  - urn:ngm:class:spatial-tracking
implements:
  - urn:ngm:class:open-xr
  - urn:ngm:class:w-3-c-web-xr-device-api
  - urn:ngm:class:open-standard
  - urn:ngm:class:runtime-environment
bridgesTo:
  - urn:ngm:class:game-engine
  - urn:ngm:class:metaverse
uses:
  - urn:ngm:class:optical-tracking
  - urn:ngm:class:middleware
supports:
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:eye-tracking
standardizedBy:
  - urn:ngm:class:khronos-group
  - urn:ngm:class:w3-c
---

# XR Runtime Environment

The software infrastructure layer that manages extended reality hardware and provides standardized APIs for XR applications, handling device abstraction, tracking systems, rendering pipelines, input processing, and compositor services to enable cross-platform XR development.
