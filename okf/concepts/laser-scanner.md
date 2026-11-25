---
okf_version: "0.2"
type: Class
title: Laser Scanner
resource: urn:ngm:class:laser-scanner
domain: robotics
description: A Laser Scanner is a sensor that emits laser pulses and measures the time-of-flight or phase-shift of the returned signal to compute precise distance measurements across a scene, generating dense point clouds. In robotics and spatial computing, laser scanners serve as primary perception instruments for environment mapping, obstacle detection, and the construction of digital twins via LiDAR-based S
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:robo-perception
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:point-cloud
  - urn:ngm:class:spatial-mapping
uses:
  - urn:ngm:class:lidar
relatedTo:
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:sensor-fusion
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Laser Scanner

A Laser Scanner is a sensor that emits laser pulses and measures the time-of-flight or phase-shift of the returned signal to compute precise distance measurements across a scene, generating dense point clouds. In robotics and spatial computing, laser scanners serve as primary perception instruments for environment mapping, obstacle detection, and the construction of digital twins via LiDAR-based SLAM pipelines.
