---
okf_version: "0.2"
type: Class
title: Volumetric Video
resource: urn:ngm:class:volumetric-video
domain: spatial-computing
description: Volumetric video captures a subject from many viewpoints to reconstruct a moving three-dimensional representation that can be viewed from any angle, rather than a fixed two-dimensional image sequence.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:computer-graphics
hasPart:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:depth-map
  - urn:ngm:class:texture-atlas
requires:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:multi-camera-rig
  - urn:ngm:class:depth-sensor
enables:
  - urn:ngm:class:volume-rendering
  - urn:ngm:class:free-viewpoint-video
  - urn:ngm:class:holographic-display
  - urn:ngm:class:telepresence
dependsOn:
  - urn:ngm:class:performance-capture
  - urn:ngm:class:real-time-rendering
contrastsWith:
  - urn:ngm:class:2d-video
  - urn:ngm:class:360-video
bridgesTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:point-cloud
  - urn:ngm:class:performance-capture
uses:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:video-compression
supports:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:virtual-production
  - urn:ngm:class:digital-twin
relatedTo:
  - urn:ngm:class:light-field-display
  - urn:ngm:class:gaussian-splatting
---

# Volumetric Video

Volumetric video captures a subject from many viewpoints to reconstruct a moving three-dimensional representation that can be viewed from any angle, rather than a fixed two-dimensional image sequence.
