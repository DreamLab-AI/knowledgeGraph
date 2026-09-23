---
okf_version: "0.2"
type: Class
title: Raycast System
resource: urn:ngm:class:raycast-system
domain: spatial-computing
description: A Raycast System is the interaction subsystem in a spatial computing or XR engine that casts geometric rays from a controller, gaze direction, or cursor into the 3D scene to detect intersections with scene objects, enabling selection, pointing, UI interaction, and collision queries. It forms the primary input-resolution layer in VR/AR user interfaces, translating physical or tracked user intent in
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-interaction
requires:
  - urn:ngm:class:physics-engine
  - urn:ngm:class:collision-detection
  - urn:ngm:class:scene-graph
enables:
  - urn:ngm:class:user-interface
  - urn:ngm:class:gaze-control
uses:
  - urn:ngm:class:vr-controllers
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:eye-tracking
---

# Raycast System

A Raycast System is the interaction subsystem in a spatial computing or XR engine that casts geometric rays from a controller, gaze direction, or cursor into the 3D scene to detect intersections with scene objects, enabling selection, pointing, UI interaction, and collision queries. It forms the primary input-resolution layer in VR/AR user interfaces, translating physical or tracked user intent into object picks within the scene graph.
