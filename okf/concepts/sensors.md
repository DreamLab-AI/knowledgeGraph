---
okf_version: "0.2"
type: Class
title: Sensors
resource: urn:ngm:class:sensors
domain: robotics
description: Sensors are devices that transduce physical quantities—distance, force, temperature, orientation, light, electromagnetic fields—into electrical or digital signals that a robot or computational system can process, providing the perceptual input for state estimation, control, and decision making.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:sensor-technology
  - urn:ngm:class:robotics-domain
hasPart:
  - urn:ngm:class:lidar
  - urn:ngm:class:radar
  - urn:ngm:class:camera
  - urn:ngm:class:imu
requires:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:analog-to-digital-converter
enables:
  - urn:ngm:class:perception-system
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:state-estimation
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:real-time-control
dependsOn:
  - urn:ngm:class:embedded-systems
contrastsWith:
  - urn:ngm:class:actuators
bridgesTo:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:digital-twin
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:lidar
  - urn:ngm:class:radar
uses:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:point-cloud
supports:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:object-detection
standardizedBy:
  - urn:ngm:class:ros
  - urn:ngm:class:ieee-1451
partOf:
  - urn:ngm:class:perception-system
  - urn:ngm:class:robotic-system
relatedTo:
  - urn:ngm:class:machine-learning-discipline
---

# Sensors

Sensors are devices that transduce physical quantities—distance, force, temperature, orientation, light, electromagnetic fields—into electrical or digital signals that a robot or computational system can process, providing the perceptual input for state estimation, control, and decision making.
