---
okf_version: "0.2"
type: Class
title: Disparity Map
resource: urn:ngm:class:disparity-map
domain: robotics
description: A disparity map is an image in which each pixel encodes the horizontal displacement of corresponding points between the two views of a stereo pair. Because disparity is inversely proportional to scene depth, the map converts directly to a depth map given the camera baseline and focal length. It is the core intermediate product of passive stereo vision, computed by rectifying the images and searchi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:stereo-vision
enables:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:depth-map
  - urn:ngm:class:point-cloud
dependsOn:
  - urn:ngm:class:epipolar-geometry
  - urn:ngm:class:camera-calibration
contrastsWith:
  - urn:ngm:class:lidar
uses:
  - urn:ngm:class:feature-matching
  - urn:ngm:class:image-processing
supports:
  - urn:ngm:class:visual-perception
  - urn:ngm:class:perception
partOf:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:stereo-camera
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:slam
---

# Disparity Map

A disparity map is an image in which each pixel encodes the horizontal displacement of corresponding points between the two views of a stereo pair. Because disparity is inversely proportional to scene depth, the map converts directly to a depth map given the camera baseline and focal length. It is the core intermediate product of passive stereo vision, computed by rectifying the images and searching for correspondences along epipolar lines.
