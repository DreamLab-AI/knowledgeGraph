---
okf_version: "0.2"
type: Class
title: Structured Light
resource: urn:ngm:class:structured-light
domain: spatial-computing
description: Structured light is a 3D surface measurement technique that projects one or more known patterns — typically binary stripe sequences, sinusoidal fringes, or dot grids — onto a scene using a projector or laser, then captures the deformed pattern with one or more calibrated cameras. Because the geometry of the projection and capture system is precisely known, the per-pixel deformation of the projecte
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:depth-sensing
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:infrared-projector
  - urn:ngm:class:image-sensor
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:industrial-inspection
  - urn:ngm:class:face-recognition
  - urn:ngm:class:robotic-grasping
  - urn:ngm:class:reverse-engineering
contrastsWith:
  - urn:ngm:class:stereo-camera
  - urn:ngm:class:lidar
  - urn:ngm:class:photogrammetry
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:robotics
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:triangulation
relatedTo:
  - urn:ngm:class:stereo-camera
  - urn:ngm:class:lidar
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:time-of-flight-sensor
---

# Structured Light

Structured light is a 3D surface measurement technique that projects one or more known patterns — typically binary stripe sequences, sinusoidal fringes, or dot grids — onto a scene using a projector or laser, then captures the deformed pattern with one or more calibrated cameras. Because the geometry of the projection and capture system is precisely known, the per-pixel deformation of the projected pattern encodes depth, allowing a complete 3D point cloud or depth map of the object surface to be recovered through triangulation. Structured light systems achieve sub-millimetre to micrometre-scale depth accuracy and are widely deployed in industrial metrology, 3D scanning, face recognition, robotic guidance, and augmented reality depth sensing.
