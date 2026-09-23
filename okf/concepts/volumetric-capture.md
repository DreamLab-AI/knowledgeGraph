---
okf_version: "0.2"
type: Class
title: Volumetric Capture
resource: urn:ngm:class:volumetric-capture
domain: spatial-computing
description: Volumetric Capture is the acquisition process that records a subject or environment in three spatial dimensions over time, using arrays of cameras, depth sensors, structured-light projectors, or LiDAR to produce a fully navigable 4D (space + time) representation. The captured data — typically as dense point-cloud sequences, multi-view video, or neural radiance fields — can be rendered from any arb
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:photogrammetry
requires:
  - urn:ngm:class:multi-camera-rig
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:video-compression
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:digital-twin
  - urn:ngm:class:holographic-telepresence
  - urn:ngm:class:immersive-media
  - urn:ngm:class:extended-reality
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:mesh-reconstruction
contrastsWith:
  - urn:ngm:class:360-video
  - urn:ngm:class:360-video
  - urn:ngm:class:stereoscopic-3d
bridgesTo:
  - urn:ngm:class:gaussian-splatting
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:point-cloud
  - urn:ngm:class:structured-light
  - urn:ngm:class:lidar
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:camera-calibration
supports:
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:virtual-production
relatedTo:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:light-field-display
  - urn:ngm:class:motion-capture
---

# Volumetric Capture

Volumetric Capture is the acquisition process that records a subject or environment in three spatial dimensions over time, using arrays of cameras, depth sensors, structured-light projectors, or LiDAR to produce a fully navigable 4D (space + time) representation. The captured data — typically as dense point-cloud sequences, multi-view video, or neural radiance fields — can be rendered from any arbitrary viewpoint and replayed freely in time, enabling photorealistic holographic telepresence, immersive sports and entertainment broadcasting, and real-time digital-twin creation. It sits at the convergence of photogrammetry, computer vision, and real-time graphics pipelines, demanding tightly calibrated hardware rigs and specialised compression and streaming infrastructure.
