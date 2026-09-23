---
okf_version: "0.2"
type: Class
title: Depth Sensing
resource: urn:ngm:class:depth-sensing
domain: spatial-computing
description: Depth Sensing is the acquisition and processing of per-pixel or per-point distance information from a sensor to surfaces in a scene, yielding depth maps, range images, or 3D point clouds. Hardware modalities include structured light projection, time-of-flight (ToF) imaging, passive and active stereo vision, LiDAR scanning, and monocular depth estimation via machine learning. Depth sensing is a fou
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:sensor-fusion
requires:
  - urn:ngm:class:sensor-input
  - urn:ngm:class:signal-processing
  - urn:ngm:class:camera-calibration
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:point-cloud
  - urn:ngm:class:slam
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:object-detection
contrastsWith:
  - urn:ngm:class:monocular-depth-estimation
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:neural-radiance-field
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:stereo-camera
  - urn:ngm:class:time-of-flight-sensor
  - urn:ngm:class:structured-light
  - urn:ngm:class:infrared-sensor
  - urn:ngm:class:infrared-sensor
supports:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:computer-vision
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:semantic-segmentation
---

# Depth Sensing

Depth Sensing is the acquisition and processing of per-pixel or per-point distance information from a sensor to surfaces in a scene, yielding depth maps, range images, or 3D point clouds. Hardware modalities include structured light projection, time-of-flight (ToF) imaging, passive and active stereo vision, LiDAR scanning, and monocular depth estimation via machine learning. Depth sensing is a foundational enabling technology for spatial computing, robotic navigation, autonomous vehicles, augmented and mixed reality occlusion, gesture recognition, and 3D scene reconstruction, providing the geometric substrate upon which higher-level understanding is built.
