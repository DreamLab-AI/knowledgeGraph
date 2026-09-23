---
okf_version: "0.2"
type: Class
title: Camera Sensor
resource: urn:ngm:class:camera-sensor
domain: robotics
description: A camera sensor is the photosensitive component, typically a CMOS or CCD array, that converts incident light focused by the optics into an electrical signal forming an image. Its characteristics, including resolution, pixel size, dynamic range, noise and frame rate, determine the quality of the captured imagery and shutter behaviour. It is the primary exteroceptive vision input for robots, autonom
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:sensor
requires:
  - urn:ngm:class:image-sensor
  - urn:ngm:class:camera-calibration
enables:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:visual-perception
  - urn:ngm:class:perception
contrastsWith:
  - urn:ngm:class:lidar
bridgesTo:
  - urn:ngm:class:sensor-fusion
uses:
  - urn:ngm:class:image-processing
supports:
  - urn:ngm:class:object-detection
  - urn:ngm:class:hand-tracking
partOf:
  - urn:ngm:class:camera
relatedTo:
  - urn:ngm:class:sensor
  - urn:ngm:class:stereo-camera
---

# Camera Sensor

A camera sensor is the photosensitive component, typically a CMOS or CCD array, that converts incident light focused by the optics into an electrical signal forming an image. Its characteristics, including resolution, pixel size, dynamic range, noise and frame rate, determine the quality of the captured imagery and shutter behaviour. It is the primary exteroceptive vision input for robots, autonomous vehicles and immersive devices, and is frequently fused with complementary sensors such as lidar.
