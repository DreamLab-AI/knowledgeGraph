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
---

# Remote Sensing

Remote sensing is the acquisition of information about physical objects or phenomena from a distance, typically using sensors mounted on satellites, aircraft, drones, or ground-based platforms, without direct physical contact with the subject. It encompasses passive sensing (measuring reflected or emitted electromagnetic radiation across optical, infrared, and microwave bands) and active sensing (radar and LiDAR, which emit and measure return signals). Remote sensing data underpins earth observation, environmental monitoring, precision agriculture, disaster response, urban planning, and military reconnaissance.
