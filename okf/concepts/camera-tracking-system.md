---
okf_version: "0.2"
type: Class
title: Camera Tracking System
resource: urn:ngm:class:camera-tracking-system
domain: spatial-computing
description: A camera tracking system is a hardware and software assembly that continuously records the position, orientation, and lens parameters of a physical camera in three-dimensional space, transmitting this data in real time to rendering or compositing engines so that computer-generated imagery can be seamlessly integrated with live-action footage. Such systems underpin virtual production stages, augmen
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:camera-tracking
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:spatial-anchoring
uses:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:camera-intrinsics
  - urn:ngm:class:motion-capture
relatedTo:
  - urn:ngm:class:camera-parameters
---

# Camera Tracking System

A camera tracking system is a hardware and software assembly that continuously records the position, orientation, and lens parameters of a physical camera in three-dimensional space, transmitting this data in real time to rendering or compositing engines so that computer-generated imagery can be seamlessly integrated with live-action footage. Such systems underpin virtual production stages, augmented reality overlays, broadcast graphics, and visual effects pipelines. Tracking technologies include optical encoder arrays, inertial measurement units, infrared LED constellations, machine vision fiducial markers, and LiDAR-based spatial mapping.
