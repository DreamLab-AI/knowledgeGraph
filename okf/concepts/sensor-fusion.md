---
okf_version: "0.2"
type: Class
title: Sensor Fusion
resource: urn:ngm:class:sensor-fusion
domain: robotics
description: Sensor Fusion is the process of combining data from multiple sensors (camera, lidar, radar, GPS, IMU) to produce more accurate, reliable, and complete information than could be obtained from any individual sensor. It employs algorithms including Kalman filtering, particle filtering, and deep learning-based fusion to integrate complementary sensor modalities whilst managing noise, uncertainties, an
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:particle-filter
  - urn:ngm:class:imu
requires:
  - urn:ngm:class:lidar
  - urn:ngm:class:radar
  - urn:ngm:class:camera-sensor
  - urn:ngm:class:gps
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:localisation
  - urn:ngm:class:obstacle-avoidance
dependsOn:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:bayesian-inference
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:object-detection
  - urn:ngm:class:computer-vision
supports:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
partOf:
  - urn:ngm:class:perception-system
  - urn:ngm:class:autonomous-vehicle
relatedTo:
  - urn:ngm:class:probabilistic-robotics
  - urn:ngm:class:point-cloud
  - urn:ngm:class:multi-constellation-gnss
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sensor Fusion

Sensor Fusion is the process of combining data from multiple sensors (camera, lidar, radar, GPS, IMU) to produce more accurate, reliable, and complete information than could be obtained from any individual sensor. It employs algorithms including Kalman filtering, particle filtering, and deep learning-based fusion to integrate complementary sensor modalities whilst managing noise, uncertainties, and hardware failures.
