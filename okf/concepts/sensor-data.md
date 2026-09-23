---
okf_version: "0.2"
type: Class
title: Sensor Data
resource: urn:ngm:class:sensor-data
domain: spatial-computing
description: Sensor data comprises the raw or pre-processed digital measurements produced by physical transducers—including cameras, LiDAR scanners, inertial measurement units (IMUs), ultrasonic rangers, and microphones—that encode observable properties of the environment such as geometry, colour, acceleration, and sound. In robotic, autonomous, and spatial computing systems, sensor data forms the primary inpu
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:lidar
  - urn:ngm:class:imu
  - urn:ngm:class:camera
  - urn:ngm:class:point-cloud
  - urn:ngm:class:depth-map
requires:
  - urn:ngm:class:data-acquisition
  - urn:ngm:class:sensor-calibration
  - urn:ngm:class:time-synchronisation
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
  - urn:ngm:class:object-detection
  - urn:ngm:class:state-estimation
  - urn:ngm:class:spatial-mapping
dependsOn:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:embedded-system
contrastsWith:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:annotated-training-data
  - urn:ngm:class:annotated-dataset
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:edge-computing
  - urn:ngm:class:io-t
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:perception-system
  - urn:ngm:class:ros
  - urn:ngm:class:data-pipeline
supports:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
standardizedBy:
  - urn:ngm:class:ieee-1588-ptp
  - urn:ngm:class:ros-message-types
relatedTo:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:data-compression
  - urn:ngm:class:multimodal-perception
---

# Sensor Data

Sensor data comprises the raw or pre-processed digital measurements produced by physical transducers—including cameras, LiDAR scanners, inertial measurement units (IMUs), ultrasonic rangers, and microphones—that encode observable properties of the environment such as geometry, colour, acceleration, and sound. In robotic, autonomous, and spatial computing systems, sensor data forms the primary input to perception pipelines responsible for state estimation, object detection, and scene understanding. Data quality characteristics—including frame rate, resolution, noise floor, and synchronisation latency—directly constrain the capabilities of downstream algorithms such as SLAM, sensor fusion, and learned perception models. Sensor data is collected, timestamped, and transmitted through data acquisition systems before being processed through calibration, fusion, and inference stages to produce actionable world representations.
