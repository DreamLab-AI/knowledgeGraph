---
okf_version: "0.2"
type: Class
title: Ultrasonic Sensor
resource: urn:ngm:class:ultrasonic-sensor
domain: robotics
description: An electronic sensor that emits ultrasonic sound waves (typically ~40 kHz) and measures the time-of-flight of reflected echoes to determine the distance to objects, widely used in robotics for obstacle detection, proximity sensing, and autonomous navigation.
maturity: draft
quality: 0.68
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:piezoelectric-transducer
requires:
  - urn:ngm:class:microcontroller
  - urn:ngm:class:embedded-systems
enables:
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:distance-measurement
dependsOn:
  - urn:ngm:class:time-of-flight-sensor
  - urn:ngm:class:signal-processing
contrastsWith:
  - urn:ngm:class:lidar
  - urn:ngm:class:infrared-sensor
  - urn:ngm:class:radar-sensor
bridgesTo:
  - urn:ngm:class:sensor
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:robotics
  - urn:ngm:class:echolocation
supports:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:industrial-automation
standardizedBy:
  - urn:ngm:class:iso-13482
  - urn:ngm:class:iec-61508
partOf:
  - urn:ngm:class:robot-perception
relatedTo:
  - urn:ngm:class:collaborative-systems-modality-robot
---

# Ultrasonic Sensor

An electronic sensor that emits ultrasonic sound waves (typically ~40 kHz) and measures the time-of-flight of reflected echoes to determine the distance to objects, widely used in robotics for obstacle detection, proximity sensing, and autonomous navigation.
