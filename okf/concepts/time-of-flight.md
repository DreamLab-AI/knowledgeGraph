---
okf_version: "0.2"
type: Class
title: Time Of Flight
resource: urn:ngm:class:time-of-flight
domain: robotics
description: Time of Flight (ToF) is a sensing technique that determines the distance to an object by measuring the elapsed time between the emission of a signal — typically light, sound, or radio waves — and the detection of its reflection. In depth sensing, ToF cameras emit pulsed or modulated infrared light and record the per-pixel round-trip delay to construct a dense depth map. ToF sensors are widely depl
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:proximity-sensor
hasPart:
  - urn:ngm:class:depth-map
enables:
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:obstacle-detection
dependsOn:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:signal-processing
contrastsWith:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:structured-light
bridgesTo:
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:infrared-sensing
  - urn:ngm:class:lidar
supports:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:gesture-recognition
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:slam
---

# Time Of Flight

Time of Flight (ToF) is a sensing technique that determines the distance to an object by measuring the elapsed time between the emission of a signal — typically light, sound, or radio waves — and the detection of its reflection. In depth sensing, ToF cameras emit pulsed or modulated infrared light and record the per-pixel round-trip delay to construct a dense depth map. ToF sensors are widely deployed in robotics, autonomous vehicles, augmented reality, and gesture recognition due to their ability to produce real-time depth data without ambient light dependency.
