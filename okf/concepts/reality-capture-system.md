---
okf_version: "0.2"
type: Class
title: Reality Capture System
resource: urn:ngm:class:reality-capture-system
domain: spatial-computing
description: Physical hardware system comprising 3D scanners, LIDAR sensors, photogrammetry cameras, and associated equipment for acquiring spatial and visual data from real-world environments to create digital representations.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:lidar-sensor
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:tracking-system
  - urn:ngm:class:motion-capture-rig
  - urn:ngm:class:3d-scanner
  - urn:ngm:class:photogrammetry-camera
  - urn:ngm:class:point-cloud-processing
requires:
  - urn:ngm:class:data-processing-hardware
  - urn:ngm:class:spatial-calibration
  - urn:ngm:class:storage-infrastructure
enables:
  - urn:ngm:class:3-d-content-generation
  - urn:ngm:class:visual-representation
  - urn:ngm:class:digital-twin-creation
  - urn:ngm:class:3-d-generation
  - urn:ngm:class:environment-reconstruction
dependsOn:
  - urn:ngm:class:iso-iec-17820
  - urn:ngm:class:point-cloud-processing
partOf:
  - urn:ngm:class:digital-twin-creation-pipeline
  - urn:ngm:class:virtual-production-workflow
---

# Reality Capture System

Physical hardware system comprising 3D scanners, LIDAR sensors, photogrammetry cameras, and associated equipment for acquiring spatial and visual data from real-world environments to create digital representations.
