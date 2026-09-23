---
okf_version: "0.2"
type: Class
title: rb 0077 depth camera
resource: urn:ngm:class:rb-0077-depth-camera
domain: robotics
description: A depth camera is a sensor that captures per-pixel distance information alongside a conventional intensity image, producing a registered RGB-D data stream or raw point cloud. In robotics, depth cameras are used for 3D scene reconstruction, obstacle avoidance, object recognition, and SLAM. Common operating principles include structured light projection (e.g. Intel RealSense), time-of-flight measure
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:point-cloud
  - urn:ngm:class:obstacle-avoidance
bridgesTo:
  - urn:ngm:class:camera
uses:
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:depth-estimation
supports:
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:simultaneous-localisation-and-mapping
partOf:
  - urn:ngm:class:rb-0066-robot-sensor
relatedTo:
  - urn:ngm:class:stereo-camera
  - urn:ngm:class:rb-0068-vision-system
  - urn:ngm:class:rb-0069-lidar
---

# rb 0077 depth camera

A depth camera is a sensor that captures per-pixel distance information alongside a conventional intensity image, producing a registered RGB-D data stream or raw point cloud. In robotics, depth cameras are used for 3D scene reconstruction, obstacle avoidance, object recognition, and SLAM. Common operating principles include structured light projection (e.g. Intel RealSense), time-of-flight measurement, and stereo triangulation; each involves different trade-offs in range, resolution, and outdoor usability.
