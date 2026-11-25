---
okf_version: "0.2"
type: Class
title: Remote Sensing
resource: urn:ngm:class:remote-sensing
domain: spatial-computing
description: Remote sensing is the acquisition of information about physical objects or phenomena from a distance, typically using sensors mounted on satellites, aircraft, drones, or ground-based platforms, without direct physical contact with the subject. It encompasses passive sensing (measuring reflected or emitted electromagnetic radiation across optical, infrared, and microwave bands) and active sensing (
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:radar
  - urn:ngm:class:hyperspectral-imaging
  - urn:ngm:class:sensor
  - urn:ngm:class:infrared-sensor
requires:
  - urn:ngm:class:sensor-calibration
enables:
  - urn:ngm:class:object-recognition
  - urn:ngm:class:mapping
  - urn:ngm:class:environmental-assessment
  - urn:ngm:class:precision-agriculture
  - urn:ngm:class:disaster-response
  - urn:ngm:class:classification
dependsOn:
  - urn:ngm:class:geospatial-information
  - urn:ngm:class:sensor-fusion
bridgesTo:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:perception-system
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:image-processing
  - urn:ngm:class:deep-learning
  - urn:ngm:class:geospatial-technology
  - urn:ngm:class:point-cloud
partOf:
  - urn:ngm:class:earth-observation
  - urn:ngm:class:geospatial-technology
relatedTo:
  - urn:ngm:class:geographic-information-system
  - urn:ngm:class:photogrammetry
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Remote Sensing

Remote sensing is the acquisition of information about physical objects or phenomena from a distance, typically using sensors mounted on satellites, aircraft, drones, or ground-based platforms, without direct physical contact with the subject. It encompasses passive sensing (measuring reflected or emitted electromagnetic radiation across optical, infrared, and microwave bands) and active sensing (radar and LiDAR, which emit and measure return signals). Remote sensing data underpins earth observation, environmental monitoring, precision agriculture, disaster response, urban planning, and military reconnaissance.
