---
okf_version: "0.2"
type: Class
title: Radar
resource: urn:ngm:class:radar
domain: robotics
description: Radar is a sensing technology that transmits radio waves and measures their reflections to determine the range, velocity, and angle of objects; it is used in robotics, autonomous vehicles, aviation, and defence for reliable perception under all weather and lighting conditions.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:sensor
hasPart:
  - urn:ngm:class:antenna-array
  - urn:ngm:class:transmitter
  - urn:ngm:class:receiver
requires:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:radio-frequency-spectrum
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:object-detection
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:perception-system
contrastsWith:
  - urn:ngm:class:lidar
  - urn:ngm:class:camera
  - urn:ngm:class:ultrasonic-sensor
bridgesTo:
  - urn:ngm:class:environmental-sensing
  - urn:ngm:class:lidar
  - urn:ngm:class:sensors
  - urn:ngm:class:air-traffic-control
  - urn:ngm:class:environmental-sensing
uses:
  - urn:ngm:class:doppler-effect
  - urn:ngm:class:time-of-flight
  - urn:ngm:class:beamforming
standardizedBy:
  - urn:ngm:class:ieee-802-11
partOf:
  - urn:ngm:class:perception-system
  - urn:ngm:class:autonomous-vehicle
relatedTo:
  - urn:ngm:class:electromagnetic-wave
  - urn:ngm:class:point-cloud
---

# Radar

Radar is a sensing technology that transmits radio waves and measures their reflections to determine the range, velocity, and angle of objects; it is used in robotics, autonomous vehicles, aviation, and defence for reliable perception under all weather and lighting conditions.
