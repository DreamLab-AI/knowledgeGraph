---
okf_version: "0.2"
type: Class
title: Virtual Production Volume
resource: urn:ngm:class:virtual-production-volume
domain: spatial-computing
description: Large-scale physical LED wall or projection stage environment that merges live-action footage with real-time rendered 3D backgrounds, including LED panels, tracking systems, camera infrastructure, and stage hardware.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:virtual-production-pipeline
hasPart:
  - urn:ngm:class:camera-tracking-system
  - urn:ngm:class:rendering-pipeline
  - urn:ngm:class:led-wall
  - urn:ngm:class:lighting-rig
  - urn:ngm:class:physical-stage
  - urn:ngm:class:display-processor
  - urn:ngm:class:rendering-pipeline
requires:
  - urn:ngm:class:camera-tracking
  - urn:ngm:class:real-time-rendering-engine
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:color-management-system
enables:
  - urn:ngm:class:in-camera-vfx
  - urn:ngm:class:interactive-filmmaking
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:virtual-location
  - urn:ngm:class:real-time-rendering
dependsOn:
  - urn:ngm:class:smpte-st-2117
  - urn:ngm:class:iso-iec-23090-3
partOf:
  - urn:ngm:class:film-production
  - urn:ngm:class:virtual-production-pipeline
  - urn:ngm:class:film-production
---

# Virtual Production Volume

Large-scale physical LED wall or projection stage environment that merges live-action footage with real-time rendered 3D backgrounds, including LED panels, tracking systems, camera infrastructure, and stage hardware.
