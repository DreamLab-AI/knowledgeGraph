---
okf_version: "0.2"
type: Class
title: Lidar
resource: urn:ngm:class:lidar
domain: robotics
description: "Lidar (Light Detection and Ranging) is an active remote-sensing technology that emits pulsed laser light and measures the time-of-flight of returning reflections to compute precise three-dimensional point-cloud representations of the surrounding environment. Operating across wavelengths from near-infrared to ultraviolet, it achieves centimetre-scale spatial accuracy and is robust to many lighting "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:sensor
hasPart:
  - urn:ngm:class:time-of-flight-sensor
  - urn:ngm:class:laser-emitter
  - urn:ngm:class:photodetector
  - urn:ngm:class:rotating-mirror
requires:
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:signal-processing
enables:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:obstacle-detection
  - urn:ngm:class:3-d-scene-reconstruction
  - urn:ngm:class:autonomous-navigation
dependsOn:
  - urn:ngm:class:time-of-flight-sensor
  - urn:ngm:class:time-of-flight-sensor
contrastsWith:
  - urn:ngm:class:radar
  - urn:ngm:class:camera-sensor
  - urn:ngm:class:ultrasonic-sensor
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:3d-mapping
  - urn:ngm:class:geospatial-data
uses:
  - urn:ngm:class:infrared-light-source
  - urn:ngm:class:infrared-light-source
  - urn:ngm:class:avalanche-photodiode
supports:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:digital-twin
  - urn:ngm:class:environment-mapping
partOf:
  - urn:ngm:class:sensor-suite
  - urn:ngm:class:perception-system
  - urn:ngm:class:perception-system
  - urn:ngm:class:sensor-suite
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:gnss
  - urn:ngm:class:autonomous-driving
---

# Lidar

Lidar (Light Detection and Ranging) is an active remote-sensing technology that emits pulsed laser light and measures the time-of-flight of returning reflections to compute precise three-dimensional point-cloud representations of the surrounding environment. Operating across wavelengths from near-infrared to ultraviolet, it achieves centimetre-scale spatial accuracy and is robust to many lighting conditions where camera-based systems degrade. Lidar is a foundational sensor modality in autonomous vehicles, aerial surveying, robotics, and spatial-computing applications, commonly fused with IMU, camera, and GNSS data to enable localisation, mapping, and obstacle detection.
