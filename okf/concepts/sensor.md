---
okf_version: "0.2"
type: Class
title: Sensor
resource: urn:ngm:class:sensor
domain: robotics
description: A sensor is a transducer or measurement device that detects, converts, and quantifies a physical, chemical, or environmental stimulus — such as light, pressure, temperature, motion, or electromagnetic fields — into an electrical signal suitable for processing, storage, or actuation. Sensors form the perceptual interface between computational systems and the physical world, enabling autonomous robo
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:hardware-component
hasPart:
  - urn:ngm:class:lidar
  - urn:ngm:class:camera
  - urn:ngm:class:imu
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:encoder
  - urn:ngm:class:ultrasonic-sensor
requires:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:analog-to-digital-converter
enables:
  - urn:ngm:class:perception
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:condition-monitoring
dependsOn:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:power-management
contrastsWith:
  - urn:ngm:class:actuator
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:edge-computing
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:real-time-operating-system
supports:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-vehicle
standardizedBy:
  - urn:ngm:class:ieee-1451
  - urn:ngm:class:ros
partOf:
  - urn:ngm:class:robotics-systems
  - urn:ngm:class:iot-device
relatedTo:
  - urn:ngm:class:telemetry
  - urn:ngm:class:data-acquisition
---

# Sensor

A sensor is a transducer or measurement device that detects, converts, and quantifies a physical, chemical, or environmental stimulus — such as light, pressure, temperature, motion, or electromagnetic fields — into an electrical signal suitable for processing, storage, or actuation. Sensors form the perceptual interface between computational systems and the physical world, enabling autonomous robots, IoT devices, spacecraft, and industrial machinery to react to real-world conditions. They are characterised by key metrology attributes including sensitivity, resolution, dynamic range, linearity, bandwidth, and noise floor. Modern sensor fusion architectures combine heterogeneous sensor streams — e.g. [[LiDAR]], [[Camera]], and [[IMU]] — using probabilistic filters to produce robust, high-fidelity world models.
