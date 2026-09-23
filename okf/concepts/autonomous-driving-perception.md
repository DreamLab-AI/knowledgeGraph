---
okf_version: "0.2"
type: Class
title: Autonomous Driving Perception
resource: urn:ngm:class:autonomous-driving-perception
domain: ai
description: "The subsystem of an autonomous vehicle responsible for interpreting sensor data to construct a structured understanding of the vehicle's immediate environment, including the detection, classification, and tracking of objects, lane geometry, road surfaces, traffic signage, and dynamic actors. Autonomous driving perception fuses inputs from cameras, LiDAR, radar, and ultrasonic sensors to produce a "
maturity: emerging
quality: 0.85
is-a:
  - urn:ngm:class:perception-system
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:object-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:object-tracking
  - urn:ngm:class:bird-eye-view
  - urn:ngm:class:bird-s-eye-view
  - urn:ngm:class:lane-detection
  - urn:ngm:class:occupancy-prediction
requires:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:training-data
  - urn:ngm:class:functional-safety
  - urn:ngm:class:camera-sensor
enables:
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:motion-planning
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:robotaxi
dependsOn:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:functional-safety
  - urn:ngm:class:deep-learning
  - urn:ngm:class:signal-processing
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:calibration
implements:
  - urn:ngm:class:bird-s-eye-view
  - urn:ngm:class:occupancy-prediction
  - urn:ngm:class:multi-sensor-fusion
contrastsWith:
  - urn:ngm:class:remote-sensing
  - urn:ngm:class:teleoperation
  - urn:ngm:class:rule-based-vision
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:computer-vision
  - urn:ngm:class:lidar
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:point-cloud
  - urn:ngm:class:hd-maps
  - urn:ngm:class:radar
supports:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:path-planning
  - urn:ngm:class:behaviour-prediction
standardizedBy:
  - urn:ngm:class:iso-26262
  - urn:ngm:class:iso-sae-pas-21448
relatedTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:digital-twin
  - urn:ngm:class:v2x-communication
  - urn:ngm:class:functional-safety
  - urn:ngm:class:iso-26262
  - urn:ngm:class:sotif
---

# Autonomous Driving Perception

The subsystem of an autonomous vehicle responsible for interpreting sensor data to construct a structured understanding of the vehicle's immediate environment, including the detection, classification, and tracking of objects, lane geometry, road surfaces, traffic signage, and dynamic actors. Autonomous driving perception fuses inputs from cameras, LiDAR, radar, and ultrasonic sensors to produce a real-time scene representation sufficient for safe navigation decisions.
