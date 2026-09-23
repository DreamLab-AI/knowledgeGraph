---
okf_version: "0.2"
type: Class
title: Depth Sensor
resource: urn:ngm:class:depth-sensor
domain: robotics
description: A Depth Sensor is a hardware device or sensor modality that measures the distance between the sensor and objects in a scene, producing per-pixel or per-point depth information as its primary output. Operating principles include structured light projection, time-of-flight measurement, stereo vision correlation, and LiDAR pulse ranging. Depth sensors are fundamental components in robotics, augmented
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:exteroceptive-sensor
hasPart:
  - urn:ngm:class:infrared-light-source
  - urn:ngm:class:image-sensor
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:object-detection
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:obstacle-avoidance
dependsOn:
  - urn:ngm:class:structured-light
  - urn:ngm:class:time-of-flight
contrastsWith:
  - urn:ngm:class:radar-sensor
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:camera
  - urn:ngm:class:stereo-vision
supports:
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:autonomous-vehicle
partOf:
  - urn:ngm:class:perception-system
  - urn:ngm:class:sensor-suite
relatedTo:
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:point-cloud
  - urn:ngm:class:depth-map
  - urn:ngm:class:scene-understanding
---

# Depth Sensor

A Depth Sensor is a hardware device or sensor modality that measures the distance between the sensor and objects in a scene, producing per-pixel or per-point depth information as its primary output. Operating principles include structured light projection, time-of-flight measurement, stereo vision correlation, and LiDAR pulse ranging. Depth sensors are fundamental components in robotics, augmented and mixed reality, autonomous vehicles, and industrial inspection, providing the three-dimensional scene understanding that colour cameras alone cannot supply. The output is typically represented as a depth map, disparity map, or three-dimensional [[Point Cloud]], forming the input to downstream perception and scene reconstruction pipelines.
