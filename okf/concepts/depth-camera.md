---
okf_version: "0.2"
type: Class
title: Depth Camera
resource: urn:ngm:class:depth-camera
domain: spatial-computing
description: A depth camera is a sensor that captures, for each pixel, the distance from the camera to objects in the scene, producing a depth map or 3D point cloud rather than only colour intensity. Common operating principles include structured light, time-of-flight, and stereo disparity, often combined with a colour stream to yield RGB-D data. Depth cameras are foundational sensors for spatial perception, e
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:camera
requires:
  - urn:ngm:class:calibration
enables:
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:spatial-mapping
  - urn:ngm:class:point-cloud
implements:
  - urn:ngm:class:sensor
contrastsWith:
  - urn:ngm:class:lidar
bridgesTo:
  - urn:ngm:class:computer-vision
uses:
  - urn:ngm:class:structured-light
  - urn:ngm:class:stereo-vision
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:gesture-recognition
partOf:
  - urn:ngm:class:perception
relatedTo:
  - urn:ngm:class:mapping
  - urn:ngm:class:object-detection
  - urn:ngm:class:photogrammetry
---

# Depth Camera

A depth camera is a sensor that captures, for each pixel, the distance from the camera to objects in the scene, producing a depth map or 3D point cloud rather than only colour intensity. Common operating principles include structured light, time-of-flight, and stereo disparity, often combined with a colour stream to yield RGB-D data. Depth cameras are foundational sensors for spatial perception, enabling reconstruction, mapping, and interaction with three-dimensional environments.
