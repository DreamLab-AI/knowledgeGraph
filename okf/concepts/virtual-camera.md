---
okf_version: "0.2"
type: Class
title: Virtual Camera
resource: urn:ngm:class:virtual-camera
domain: spatial-computing
description: A simulated camera system in virtual production environments that captures real-time virtual scenes, enabling filmmakers to visualise and shoot CG environments as though using a physical camera with real-world lens characteristics — including focal length, aperture, and depth-of-field — and six-DoF movement tracking. It integrates with motion capture rigs, LED volume stages, and game engines to de
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:virtual-production
requires:
  - urn:ngm:class:motion-capture
  - urn:ngm:class:real-time-rendering
enables:
  - urn:ngm:class:virtual-scouting
  - urn:ngm:class:virtual-production-pipeline
uses:
  - urn:ngm:class:game-engine
  - urn:ngm:class:virtual-production-volume
partOf:
  - urn:ngm:class:virtual-stage
---

# Virtual Camera

A simulated camera system in virtual production environments that captures real-time virtual scenes, enabling filmmakers to visualise and shoot CG environments as though using a physical camera with real-world lens characteristics — including focal length, aperture, and depth-of-field — and six-DoF movement tracking. It integrates with motion capture rigs, LED volume stages, and game engines to deliver live compositing preview and Genlock-synchronised output.
